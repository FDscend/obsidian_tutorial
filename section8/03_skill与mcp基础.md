---
tags:
  - tutorial
  - vscode
  - copilot
  - skill
  - mcp
---

# Skill 与 MCP 基础

## 学习目标

- 了解 VS Code Copilot 的 Skill（技能）机制。
- 掌握 `.github/skills/<name>/SKILL.md` 的结构与编写方法。
- 了解 MCP（Model Context Protocol）的概念与作用。
- 掌握 MCP 服务器的配置方法。
- 了解 Skill、Prompt、Instructions、MCP 之间的区别与协作关系。

## 前置条件

- 已掌握 Copilot 基础操作（参考 [00_copilot基础与订阅说明](00_copilot基础与订阅说明.md)）。
- 已了解指令文件和 Prompt 文件的概念（参考 [02_copilot_instruction与prompt入门](02_copilot_instruction与prompt入门.md)）。
- 具备基本 JSON/YAML 配置文件编辑能力。

## 概述：Copilot 自定义机制一览

在深入 Skill 之前，先了解 VS Code Copilot 提供的所有自定义机制，以及它们之间的关系：

| 机制             | 文件格式                                              | 触发方式               | 用途                      |
| :--------------- | :---------------------------------------------------- | :--------------------- | :------------------------ |
| **始终生效指令** | `copilot-instructions.md` / `AGENTS.md` / `CLAUDE.md` | 自动加载               | 项目级长期规范            |
| **文件级指令**   | `*.instructions.md`                                   | 按 `applyTo` 模式匹配  | 语言/框架特定约定         |
| **Prompt 文件**  | `.github/prompts/*.prompt.md`                         | `/` 斜杠命令           | 单次可复用任务            |
| **Skill**        | `.github/skills/<name>/SKILL.md`                      | `/` 斜杠命令 或 自动   | 多步骤工作流 + 附属资源   |
| **Custom Agent** | `.github/agents/*.agent.md`                           | `/` 或 对话中提及      | 特定角色的子代理          |
| **MCP 服务器**   | `settings.json` 中的 `mcp` 字段                       | 工具调用（Chat 自动）  | 外部工具和数据源          |
| **Hooks**        | `.github/hooks/*.json`                                | Agent 生命周期事件触发 | 确定性脚本（格式化/拦截） |

> 本教程的 [02_copilot_instruction与prompt入门](02_copilot_instruction与prompt入门.md) 已覆盖 Instructions 和 Prompts，本文聚焦 **Skill** 和 **MCP**。

---

## 第一部分：Skill（技能）

## 什么是 Skill

Skill（技能）是 Copilot 中最强大的自定义单元——它是一个**包含说明、脚本和资源的文件夹**，Agent 在需要时可以按需加载，执行多步骤的复杂工作流。

> 简单来说，Skill 是"带资源的可复用工作流包"。它比 Prompt 文件更重，因为 Skill 可以附带脚本、模板和参考文档。

### Skill vs Prompt vs Instructions

| 对比维度     | Instructions | Prompt 文件       | Skill                           |
| :----------- | :----------- | :---------------- | :------------------------------ |
| **文件**     | 单个 `.md`   | 单个 `.prompt.md` | 整个文件夹（`SKILL.md` + 资源） |
| **附带资源** | 无           | 无                | 可带脚本、模板、参考文档        |
| **自动加载** | ✅ 是        | ❌ 否             | ❌ 否（按需加载）               |
| **斜杠命令** | ❌           | ✅                | ✅                              |
| **适用场景** | 长期规范     | 单次可复用任务    | 需要脚本/模板的多步骤工作流     |

## Skill 的目录结构

一个 Skill 是一个文件夹，放在 `.github/skills/` 下：

```
.github/skills/<skill-name>/
├── SKILL.md           # 必需：技能定义文件（文件名必须与文件夹名一致）
├── scripts/           # 可执行脚本
├── references/        # 按需加载的参考文档
└── assets/            # 模板、样板代码等资源
```

### 存放位置

| 路径                        | 作用域 |
| :-------------------------- | :----- |
| `.github/skills/<name>/`    | 项目级 |
| `.agents/skills/<name>/`    | 项目级 |
| `.claude/skills/<name>/`    | 项目级 |
| `~/.copilot/skills/<name>/` | 用户级 |
| `~/.agents/skills/<name>/`  | 用户级 |
| `~/.claude/skills/<name>/`  | 用户级 |

## SKILL.md 文件格式

### Frontmatter

```yaml
---
name: skill-name # 必需：1-64 字符，小写字母+连字符，必须与文件夹名一致
description: "什么场景下使用。最长 1024 字符。"
argument-hint: "斜杠调用时的占位提示"
user-invocable: true # 可选：是否显示在斜杠命令菜单（默认 true）
disable-model-invocation: false # 可选：是否禁止 AI 自动加载（默认 false）
---
```

### 正文

正文使用 Markdown 编写，需要说明：

- **技能完成什么任务**
- **何时使用**（触发条件和用例）
- **步骤流程**
- **对资源的引用**（使用相对路径 `./scripts/xxx`）

### 完整示例

```markdown
---
name: webapp-testing
description: "使用 Playwright 测试 Web 应用。适用于验证前端功能、调试 UI、截图。"
argument-hint: "测试场景..."
---

# Web 应用测试

## 何时使用

- 验证前端功能
- 调试 UI 行为
- 捕获截图用于文档

## 步骤

1. 启动 Web 服务器
2. 运行 [测试脚本](./scripts/test.js)
3. 查看 `./screenshots/` 目录下的截图
```

## Skill 的加载机制（渐进式加载）

Skill 采用**渐进式加载**策略，以节省 Tokens：

| 阶段     | Token 消耗 | 触发时机                           |
| :------- | :--------- | :--------------------------------- |
| **发现** | ~100       | Agent 读取 `name` 和 `description` |
| **指令** | <5000      | 当任务相关时，加载 `SKILL.md` 正文 |
| **资源** | 不定       | 仅当正文中引用时才加载             |

> 这意味着 `description` 字段至关重要——Agent 靠它来判断是否需要加载你的 Skill。

## 创建自己的 Skill

### 第 1 步：新建文件夹

在仓库中创建 `.github/skills/` 目录（如果不存在），然后为 Skill 创建一个子文件夹：

```
.github/skills/create-tutorial-section/
```

### 第 2 步：编写 SKILL.md

```markdown
---
name: create-tutorial-section
description: "为本教程仓库创建新的章节。包含统一的 frontmatter、章节结构模板和标准段落。"
argument-hint: "章节名称..."
---

# 创建教程章节

## 何时使用

- 需要为本教程添加一个新章节（section）
- 需要为新章节创建标准的 Markdown 文件

## 步骤

1. 在仓库根目录下创建 `section<编号>/` 文件夹
2. 参考 [章节模板](./assets/section-template.md) 创建文件
3. 确保包含：学习目标、前置条件、步骤、常见问题、扩展阅读
4. 更新 `README.md` 中的目录表
5. 更新 `appendix/C_更新日志.md`

## 注意事项

- 章节编号从当前最大编号 +1 开始
- 文件名使用 `00_`, `01_` 前缀
```

### 第 3 步：添加附属资源（可选）

Skill 可以附带 `scripts/`、`references/`、`assets/` 等子目录：

```
.github/skills/create-tutorial-section/
├── SKILL.md
└── assets/
    └── section-template.md
```

`section-template.md`：

```markdown
---
tags:
  - tutorial
  - <章节标签>
---

# <标题>

## 学习目标

- ...

## 前置条件

- ...

## 步骤

### 第 1 步：...

## 扩展阅读

- ...

## 常见问题

**Q：...？**
A：...
```

### 第 4 步：使用 Skill

1. 在 Chat 输入框中键入 `/`。
2. 从菜单中选择你的 Skill（如 `/create-tutorial-section`）。
3. Agent 会自动加载 `SKILL.md` 和引用的资源文件。
4. 按照 Skill 定义的步骤执行任务。

## Skill 的可见性控制

通过 frontmatter 中的两个字段控制 Skill 的出现方式：

| `user-invocable` | `disable-model-invocation` | 斜杠菜单 | AI 自动调用 |
| :--------------- | :------------------------- | :------- | :---------- |
| 默认（true）     | 默认（false）              | ✅ 显示  | ✅ 可调用   |
| `false`          | 默认（false）              | ❌ 隐藏  | ✅ 可调用   |
| 默认（true）     | `true`                     | ✅ 显示  | ❌ 不可用   |
| `false`          | `true`                     | ❌ 隐藏  | ❌ 不可用   |

---

## 第二部分：MCP（Model Context Protocol）

## MCP 概念

MCP（Model Context Protocol，模型上下文协议）是由 Anthropic 提出、被 VS Code Copilot 采纳的**开放协议**，它定义了 AI 模型与外部工具/数据源之间的标准通信方式。

> 你可以把 MCP 理解为 **"AI 世界的 USB 接口"**——任何遵循 MCP 协议的工具都可以即插即用地接入任何支持 MCP 的 AI 模型。

### MCP 的工作方式

```
┌──────────────────┐         MCP 协议          ┌──────────────────┐
│  VS Code Copilot  │ ◄──────────────────────► │  MCP 服务器       │
│  (MCP 客户端)      │                          │  (外部工具/服务)   │
└──────────────────┘                          └──────────────────┘
       │                                              │
       │ ① 用户提问 "搜索最新的 AI 新闻"               │
       │ ② Copilot 列出可用工具                       │
       │ ③ Copilot 调用 MCP 服务器的搜索工具           │
       │ ④ MCP 服务器返回搜索结果                      │
       │ ⑤ Copilot 整合结果并回复用户                  │
       ▼                                              ▼
```

### MCP 的典型用途

| 用途           | 说明                                 | 示例 MCP 服务器               |
| :------------- | :----------------------------------- | :---------------------------- |
| **网络搜索**   | 让 AI 能够搜索互联网获取最新信息     | Tavily Search MCP             |
| **文件操作**   | 让 AI 能够读写文件、操作文件系统     | Filesystem MCP                |
| **数据库查询** | 让 AI 能够查询数据库并返回结构化数据 | PostgreSQL / SQLite MCP       |
| **API 调用**   | 让 AI 能够调用外部 REST API          | Fetch / HTTP MCP              |
| **代码执行**   | 让 AI 能够在沙箱环境中执行代码       | Code Execution MCP            |
| **版本控制**   | 让 AI 能够操作 Git 仓库              | Git MCP                       |
| **知识库检索** | 让 AI 能够搜索内部知识库             | Vector Search / Embedding MCP |

## 配置 MCP 服务器

配置 MCP 服务器有两种方式：通过**扩展市场安装**（推荐，一键完成）或通过 **`settings.json` 手动配置**（更灵活）。

### 方式一：从扩展市场安装（推荐）

VS Code 支持从扩展市场直接安装 MCP 服务器，无需手动编辑配置文件。

1. 按 `Ctrl+Shift+X` 打开扩展面板。
2. 在搜索框中输入 `@mcp`，即可浏览所有可用的 MCP 服务器扩展。
3. 如需搜索特定服务，如 Tavily 搜索 MCP，输入 `@mcp Tavily`。
4. 找到目标扩展后，点击 **安装**。
5. 安装完成后，按照扩展的提示配置 API Key 等参数（通常在扩展的设置页面中完成）。
6. 重启 VS Code 后，MCP 服务器自动生效。

> 💡 使用 `@mcp` 搜索是 VS Code 内置的过滤机制，只会显示 MCP 服务器类型的扩展，不会混入普通扩展。

### 方式二：通过 settings.json 手动配置

如果你需要更精细的控制（如自定义端点、环境变量等），可以直接编辑 `settings.json`：

```json
{
  "mcp": {
    "servers": {
      "server-name": {
        "type": "command",
        "command": "命令路径",
        "args": ["参数1", "参数2"],
        "env": {
          "环境变量": "值"
        }
      }
    }
  }
}
```

#### 常用 MCP 服务器配置示例

**Tavily Search MCP（网络搜索）：**

Tavily 是一个专为 AI 优化的搜索引擎，适合让 Copilot 搜索最新信息。

```json
{
  "mcp": {
    "servers": {
      "tavily-search": {
        "type": "command",
        "command": "npx",
        "args": ["-y", "@tavily/mcp", "--apiKey=YOUR_TAVILY_API_KEY"]
      }
    }
  }
}
```

获取 API Key：访问 [Tavily 官网](https://tavily.com) 注册账号并创建 API Key。

**Filesystem MCP（文件系统操作）：**

```json
{
  "mcp": {
    "servers": {
      "filesystem": {
        "type": "command",
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem",
          "允许访问的目录路径"
        ]
      }
    }
  }
}
```

**Git MCP（版本控制）：**

```json
{
  "mcp": {
    "servers": {
      "git": {
        "type": "command",
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-git", "仓库路径"]
      }
    }
  }
}
```

### 验证 MCP 服务器

无论采用哪种安装方式，安装完成后均可用以下方法验证：

1. 重启 VS Code。
2. 在 Copilot Chat 中尝试：

```
请帮我搜索 "2026年 AI 编程趋势"。
```

3. 如果配置正确，Copilot 会调用 Tavily MCP 服务器搜索网络并返回结果。
4. 在 VS Code 的输出面板（`Ctrl+Shift+U`）中选择 "Copilot" 通道，可查看 MCP 的调试日志。

### 查看可用工具

在 Copilot Chat 中输入：

```
列出当前可用的所有工具。
```

Copilot 会返回所有已配置的 MCP 服务器及其提供的工具清单。

---

## Skill 与 MCP 的协作关系

Skill 和 MCP 是互补关系——Skill 提供**知识和流程**，MCP 提供**工具和数据**：

```
Skill                       MCP
  │                           │
  │  封装工作流步骤            │  提供外部能力（搜索、读写文件）
  │  提供领域知识              │  访问实时数据
  │  引用本地脚本/模板        │  操作外部系统
  │                           │
  └───────────┬───────────────┘
              │
              ▼
    Copilot 执行复杂任务
```

| 对比维度     | Skill                        | MCP                         |
| :----------- | :--------------------------- | :-------------------------- |
| **本质**     | 工作流定义 + 附属资源        | 外部工具和服务              |
| **形式**     | `SKILL.md` + 脚本/模板/文档  | 独立进程（JSON-RPC 通信）   |
| **调用方式** | `/` 斜杠命令 或 AI 自动加载  | Chat 中自动调用（工具调用） |
| **依赖**     | 无需额外服务                 | 需要安装运行时 + 启动进程   |
| **典型用途** | "创建新组件"、"运行测试套件" | "搜索网络"、"查询数据库"    |

**协作示例：**

1. **Skill** 定义"发布新版本"的工作流步骤。
2. Skill 引用 **MCP** 工具来执行具体操作：`git` MCP 创建 Tag、`filesystem` MCP 更新文件。
3. 用户只需在 Chat 中输入 `/发布新版本`，Agent 自动完成全部流程。

## 社区 Skill 与 MCP 资源

| 资源                    | 说明                                     | 地址                                                                                       |
| :---------------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------- |
| **Awesome Copilot**     | 社区贡献的 Instructions、Prompts、Skills | [github.com/github/awesome-copilot](https://github.com/github/awesome-copilot)             |
| **Awesome MCP Servers** | MCP 服务器精选列表                       | [github.com/punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) |
| **MCP 官方文档**        | MCP 协议规范与服务器开发指南             | [modelcontextprotocol.io](https://modelcontextprotocol.io)                                 |
| **GitHub MCP 注册表**   | GitHub 官方的 MCP 服务器目录             | [github.com/mcp](https://github.com/mcp)                                                   |

> 后续的 **section9** 将提供完整的 Skill 制作、安装以及 MCP 搜索实战案例。

## 扩展阅读

- [VS Code Agent Skills 官方文档](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [VS Code MCP 服务器配置](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [MCP 协议规范](https://modelcontextprotocol.io)
- [VS Code Copilot 自定义总览](https://code.visualstudio.com/docs/copilot/copilot-customization)

## 常见问题

**Q：Skill 和 Prompt 文件有什么区别？**
A：Prompt 文件是单个 `.prompt.md`，适合单次任务；Skill 是一个文件夹（`SKILL.md` + 脚本/模板/参考文档），适合需要附属资源的多步骤工作流。两者在斜杠菜单中都显示为 `/` 命令。

**Q：Skill 和普通的 VS Code 扩展有什么区别？**
A：Skill 是 Agent 在运行时按需加载的知识和工作流，不占用 VS Code 进程。VS Code 扩展是永久运行的编辑器增强。两者可互补：扩展提供 UI 功能，Skill 提供 AI 工作流。

**Q：MCP 服务器需要一直运行吗？**
A：MCP 服务器由 VS Code 按需启动。当 Copilot 需要调用对应工具时，VS Code 会自动启动 MCP 服务器进程，使用完毕后按配置决定是否保持运行。

**Q：配置 MCP 服务器是否安全？**
A：MCP 服务器拥有你授予的权限（如文件系统访问）。建议：① 仅安装来自可信来源的 MCP 服务器；② 限制文件系统 MCP 的访问目录范围；③ 定期审查已配置的 MCP 服务器列表。

**Q：Skill 中可以引用 MCP 工具吗？**
A：可以。SKILL.md 的 `tools` 字段可以指定 MCP 服务器（如 `tools: [filesystem/*, git/*]`），在 Skill 执行时自动启用对应的外部工具。

**Q：MCP 服务器可以在远程开发环境（Remote SSH / Dev Containers）中使用吗？**
A：可以。MCP 服务器配置在远程环境的 VS Code 中同样生效。注意确保远程环境中已安装所需的运行时（如 Node.js）和依赖。
