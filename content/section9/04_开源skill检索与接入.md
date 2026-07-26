---
tags:
  - tutorial
  - vscode
  - copilot
  - skill
  - community
---

# 开源 Skill 检索与接入

## 学习目标

- 了解社区 Copilot Skill 的主要来源。
- 掌握检索和筛选社区 Skill 的方法。
- 学会将社区 Skill 安装到自己的项目中。
- 了解如何评估 Skill 的质量和安全性。

## 前置条件

- 已了解 Skill 的结构与安装方式（参考 [03_copilot案例\_skill制作与安装](03_copilot案例_skill制作与安装.md)）。
- 具备基本的 Git 操作能力。

## 社区资源概览

目前社区中有多种方式获取和分享 Copilot Skill：

| 资源                 | 类型        | 说明                                              |
| :------------------- | :---------- | :------------------------------------------------ |
| **Awesome Copilot**  | GitHub 仓库 | 社区贡献的 Instructions、Prompts、Skills 精选列表 |
| **VS Code 扩展市场** | 扩展        | 部分扩展内置了 Skill 或提供了相关能力             |
| **GitHub 搜索**      | 代码搜索    | 直接搜索 `SKILL.md` 文件发现社区实践              |
| **MCP 服务器目录**   | 网站/仓库   | MCP 协议相关的工具服务器                          |
| **团队内部共享**     | 内部仓库    | 团队自建的 Skill 库                               |

## 检索社区 Skill

### 方式一：Awesome Copilot（推荐）

[Awesome Copilot](https://github.com/github/awesome-copilot) 是 GitHub 官方维护的 Copilot 资源精选列表，包含：

- **Instructions**：各种语言和框架的指令文件示例。
- **Prompts**：可复用的提示词文件。
- **Custom Agents**：自定义 Agent 示例。
- **Skills**：完整的 Skill 示例。

访问方式：

```
https://github.com/github/awesome-copilot
```

### 方式二：在 GitHub 中搜索 SKILL.md

直接搜索社区中公开的 Skill 文件，了解不同项目的实践：

```
搜索条件：path:.github/skills/ filename:SKILL.md
搜索链接：https://github.com/search?q=path%3A.github%2Fskills%2F+filename%3ASKILL.md&type=code
```

你也可以按语言或框架过滤：

```
language:python path:.github/skills/ filename:SKILL.md
```

### 方式三：搜索 .prompt.md 文件

社区中的 Prompt 文件同样值得参考：

```
搜索条件：path:.github/prompts/ filename:.prompt.md
搜索链接：https://github.com/search?q=path%3A.github%2Fprompts%2F+extension%3Aprompt.md&type=code
```

### 方式四：Awesome MCP Servers

如果你需要 MCP 工具服务器，可以访问社区维护的精选列表：

```
https://github.com/punkpeye/awesome-mcp-servers
```

## 接入社区 Skill 的步骤

### 第 1 步：评估 Skill

在安装之前，评估 Skill 的质量：

| 评估维度       | 检查项                                          |
| :------------- | :---------------------------------------------- |
| **描述清晰度** | `description` 是否明确说明了用途？              |
| **结构完整性** | 是否有 `SKILL.md`？是否引用了资源文件？         |
| **步骤可复现** | 步骤是否具体、可操作？                          |
| **资源链接**   | 引用的 `./scripts/`、`./assets/` 资源是否存在？ |
| **许可证**     | 是否有明确的许可证（MIT、Apache 等）？          |

### 第 2 步：安装到项目

1. 将 Skill 文件夹复制到项目的 `.github/skills/` 目录下。
2. 确保文件夹名与 `SKILL.md` 中的 `name` 字段一致。
3. 如果 Skill 有依赖（如 Node.js 脚本），确保运行环境中已安装。
4. 重启 VS Code。

### 第 3 步：测试

1. 在 Chat 中输入 `/`，确认 Skill 出现在菜单中。
2. 执行 Skill，观察是否符合预期。
3. 如果异常，查看 Chat 面板右键 → Diagnostics 中的错误信息。

### 第 4 步：自定义社区 Skill

社区 Skill 通常需要根据你的项目做调整：

```yaml
---
name: my-customized-skill
description: "基于社区 xxx Skill 定制，适用于本仓库的特定需求"
---
```

常见的自定义项：

- **修改路径**：社区 Skill 中的路径是基于其原始项目的，需要改为你的项目路径。
- **调整步骤**：根据你的工作流增删步骤。
- **替换模板**：使用你自己项目的模板替换 `assets/` 中的模板文件。
- **补充指令引用**：添加对本项目指令文件的引用。

## 探索 VS Code 扩展市场中的 MCP 服务器

除了 Skill，扩展市场也提供 MCP 服务器扩展。在扩展面板中搜索 `@mcp` 即可浏览所有可用的 MCP 服务器。

目前市场中的 MCP 服务器类型包括：

| 类型         | 用途                       | 搜索关键词        |
| :----------- | :------------------------- | :---------------- |
| **网络搜索** | 让 AI 搜索互联网           | `@mcp search`     |
| **数据库**   | 查询 PostgreSQL、SQLite 等 | `@mcp database`   |
| **文件系统** | 读写文件                   | `@mcp filesystem` |
| **版本控制** | Git 操作                   | `@mcp git`        |
| **浏览器**   | 网页抓取和自动化           | `@mcp browser`    |
| **API 集成** | 调用第三方 API             | `@mcp api`        |

> 安装 MCP 服务器扩展后，在 Copilot Chat 中输入"列出可用工具"即可查看该服务器提供的具体功能。

## 分享你自己的 Skill

如果你创建了有用的 Skill，欢迎分享给社区：

1. **提交到 Awesome Copilot**：在 [Awesome Copilot](https://github.com/github/awesome-copilot) 仓库提交 PR。
2. **发布到 GitHub**：创建一个单独仓库存放你的 Skill，附上 README 说明。
3. **在团队内共享**：将 Skill 文件夹提交到团队仓库的 `.github/skills/` 目录。

> 分享时确保包含清晰的 `description` 和完整的资源文件，让其他人能直接使用。

## 扩展阅读

- [Awesome Copilot](https://github.com/github/awesome-copilot)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)
- [VS Code Agent Skills 官方文档](https://code.visualstudio.com/docs/copilot/customization/agent-skills)

## 常见问题

**Q：社区 Skill 安全吗？**
A：Skill 本质是 Markdown 文件 + 脚本，不直接访问系统。但 Skill 中的脚本可能会执行文件操作或网络请求。安装前请检查 `scripts/` 目录中的代码，确保没有恶意操作。

**Q：如何更新已安装的社区 Skill？**
A：重新从来源拉取最新版本，覆盖本地文件即可。建议保留一份自己的修改记录，方便合并上游变更。

**Q：社区 Skill 太多了，如何选择？**
A：优先选择：① 有明确许可证的；② 最近有更新的；③ `description` 清晰具体的；④ 有实际使用案例的。

**Q：可以同时安装多个同类型 Skill 吗？**
A：可以。不同 Skill 之间不会冲突，在斜杠菜单中会分别显示。你可以安装多个用于测试和比较。
