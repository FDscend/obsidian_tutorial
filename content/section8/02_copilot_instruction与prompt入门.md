---
tags:
  - tutorial
  - vscode
  - copilot
  - prompt
  - instruction
---

# Copilot Instruction 与 Prompt 入门

## 学习目标

- 理解 Instructions（指令文件）与 Prompts（提示词文件）的区别。
- 掌握 `.github/copilot-instructions.md` 和 `.instructions.md` 的编写方法。
- 掌握 `.github/prompts/*.prompt.md` 提示词文件的创建与使用。
- 学会在 Chat 中通过斜杠命令 `/` 快速调用 Prompt 文件。
- 了解 Instructions 的自动应用机制与 `applyTo` 匹配规则。

## 前置条件

- 已掌握 Copilot 基础对话操作（参考 [00_copilot基础与订阅说明](00_copilot基础与订阅说明.md)）。
- 具备 Markdown 基础语法知识。
- 了解 YAML frontmatter 的基本格式。

## 概述：Instructions vs Prompts

VS Code Copilot 提供两类自定义文件，用途不同但相互补充：

| 对比维度             | Instructions（指令文件）                            | Prompts（提示词文件）                     |
| :------------------- | :-------------------------------------------------- | :---------------------------------------- |
| **触发方式**         | 自动加载到对话上下文                                | 手动通过 `/` 斜杠命令调用                 |
| **适用场景**         | 长期稳定的项目规范、编码约定                        | 一次性封装的可复用任务模板                |
| **文件格式**         | `copilot-instructions.md` / `*.instructions.md`     | `*.prompt.md`                             |
| **存放位置**         | `.github/` / `.github/instructions/` / 用户 profile | `.github/prompts/` / 用户 profile         |
| **YAML frontmatter** | 可选（`applyTo`、`description`）                    | 必需（`description`、`name`、`agent` 等） |
| **上下文注入**       | 自动生效，无需手动操作                              | 通过 `/prompt名` 在对话中按需调用         |

---

## 第一部分：Instructions（指令文件）

## 什么是 Instruction 文件

Instruction 文件是用于**向 Copilot 提供上下文和行为指南**的 Markdown 文档。当你与 Copilot 对话时，这些文件的内容会自动附加到对话上下文中，让 AI 了解你的项目规范、编码风格、偏好设置等。

> 简单来说，指令文件就是 **"写给 AI 看的项目说明书"**，且它会**自动生效**，无需每次手动提及。

### 为什么需要指令文件

| 场景         | 没有指令文件                                | 有指令文件                              |
| :----------- | :------------------------------------------ | :-------------------------------------- |
| **代码风格** | AI 随机选择一种风格，可能与项目不一致       | AI 严格按照项目的命名规范和风格生成代码 |
| **框架版本** | AI 可能使用过时的 API 或错误的框架版本      | AI 知道项目使用的具体版本和对应 API     |
| **项目结构** | AI 不知道文件放在哪里，建议的路径不准确     | AI 了解项目结构，给出正确的文件路径建议 |
| **团队约定** | AI 可能违反团队的 commit 信息格式或命名约定 | AI 遵循团队的约定，输出一致的代码和文档 |
| **语言偏好** | AI 可能用英文回答问题，即使团队使用中文     | AI 根据指令使用指定语言响应             |

## Instruction 文件的类型

### 类型 1：始终生效指令（Always-on Instructions）

这类指令**自动应用于所有对话请求**，无需手动引用。

#### `.github/copilot-instructions.md`

仓库级的全局指令文件，放在根目录的 `.github/` 文件夹下：

```markdown
# 项目说明

- 本仓库使用 JavaScript + Node.js 18。
- 使用 CommonJS 模块系统（require / module.exports）。
- 使用 Jest 作为测试框架。
- 命名风格：函数使用 camelCase，类使用 PascalCase。
- 缩进：2 空格。
- 所有函数必须有 JSDoc 注释。
- 提交信息格式：`type(scope): message`
```

> 此文件适合存放**影响整个项目**的规范：技术栈、编码风格、架构约定。

#### AGENTS.md 和 CLAUDE.md

- **`AGENTS.md`** — 与 `copilot-instructions.md` 类似，适用于多 AI Agent 协作的场景。
- **`CLAUDE.md`** — 兼容 Claude Code 等第三方工具的指令格式，放在仓库根目录或 `.claude/` 文件夹下。
- VS Code 会自动检测这些文件并加载到上下文。

### 类型 2：文件级指令（File-based Instructions）

这类指令通过 `*.instructions.md` 文件定义，根据**文件名模式**或**描述匹配**条件性生效。

#### 存放位置

| 作用域     | 路径                                      |
| :--------- | :---------------------------------------- |
| **工作区** | `.github/instructions/`                   |
| **用户级** | `~/.copilot/instructions/` 或用户 profile |

#### 文件格式

```markdown
---
name: "Python 规范"
description: "Python 文件的编码约定"
applyTo: "**/*.py"
---

# Python 编码规范

- 遵循 PEP 8 风格指南。
- 所有函数签名使用类型注解。
- 公开函数编写 docstring。
- 缩进使用 4 空格。
```

> `applyTo` 属性指定 glob 模式，只有匹配的文件被操作时该指令才会自动加载。如果不指定 `applyTo`，指令不会自动生效，但可以在对话中手动附加。

#### 在 monorepo 中组织指令

```
.github/instructions/
  frontend/
    react.instructions.md
    accessibility.instructions.md
  backend/
    api-design.instructions.md
  testing/
    unit-tests.instructions.md
```

### 类型 3：用户级全局指令

放在用户数据目录下的指令文件对所有项目生效：

```
%APPDATA%\Code\User\prompts\*.instructions.md
```

> ⚠️ 注意：用户级目录 `prompts/` 下**同时**支持 `.instructions.md` 和 `.prompt.md` 两种文件，但用途不同。后缀决定行为——`.instructions.md` 自动加载，`.prompt.md` 需斜杠命令调用。

### 指令优先级

当多条指令存在冲突时，优先级如下（高 → 低）：

1. **用户级**（profile 中的指令）
2. **仓库级**（`.github/copilot-instructions.md`、`AGENTS.md`、`CLAUDE.md`）
3. **组织级**（GitHub 组织级别的共享指令）

## 如何编写有效的 Instruction

### 核心原则

| 原则         | 说明                         | 示例                                       |
| :----------- | :--------------------------- | :----------------------------------------- |
| **具体**     | 避免模糊描述，给出明确要求   | ❌ "代码质量要好" → ✅ "函数不超过 50 行"  |
| **可验证**   | 指令应能被 AI 明确执行的     | ❌ "写好看的界面" → ✅ "使用 Tailwind CSS" |
| **结构化**   | 使用列表、标题、表格组织内容 | 便于 AI 快速检索和理解                     |
| **优先规则** | 把最重要的规则放在前面       | AI 更关注前面的内容                        |
| **负面示例** | 同时说明"不要做什么"         | "不要使用 var，使用 const/let"             |

### 指令模板

```markdown
# 项目指令

## 技术栈

- 语言：TypeScript 5.x
- 框架：React 18 + Next.js 14
- 样式：Tailwind CSS
- 测试：Vitest

## 编码规范

- 缩进：2 空格
- 引号：单引号
- 分号：必须
- 命名：组件 PascalCase，函数 camelCase，常量 UPPER_SNAKE_CASE
- 组件定义：使用函数组件 + hooks
- 类型定义：优先使用 interface，联合类型使用 type

## 文件结构

- 页面文件放在 `app/` 目录
- 组件放在 `components/` 目录
- 工具函数放在 `lib/` 目录

## Git 规范

- 分支命名：`feat/` / `fix/` / `docs/` 前缀
- 提交信息：`type(scope): description`
```

---

## 第二部分：Prompts（提示词文件）

## 什么是 Prompt 文件

Prompt 文件（`.prompt.md`）是 VS Code Copilot 中**可复用的任务模板**。它被放在 `.github/prompts/` 目录下，在 Chat 输入框中键入 `/` 即可看到并选用。

> 简单来说，Prompt 文件就是 **"预打包的斜杠命令"** 。你可以把一个常用任务（如"创建测试"、"生成变更日志"）写成 Prompt 文件，下次只需在 Chat 里输入 `/任务名` 即可一键执行。

### 与普通 Chat 输入的区别

- **普通输入**：每次手打，内容不一致，无法复用。
- **Prompt 文件**：写一次，团队共享，通过 `/` 快速调用，内容精准可控。

## 创建 Prompt 文件

### 第 1 步：确定存放位置

| 位置                           | 作用域 | 说明                     |
| :----------------------------- | :----- | :----------------------- |
| `.github/prompts/`             | 工作区 | 随仓库共享，团队可用     |
| `%APPDATA%\Code\User\prompts\` | 用户级 | 对所有项目生效，个人可用 |

### 第 2 步：编写文件内容

Prompt 文件使用 `.prompt.md` 后缀，由 **YAML frontmatter** 和 **Markdown 正文**组成。

**基本结构：**

```markdown
---
description: "为选中代码生成单元测试"
agent: "agent"
---

为以下代码生成全面的单元测试：

- 包含边界情况和异常场景
- 遵循项目中已有的测试模式
- 使用描述性测试名称
```

### Frontmatter 字段说明

| 字段            | 是否必需 | 说明                                                                |
| :-------------- | :------- | :------------------------------------------------------------------ |
| `description`   | ✅ 推荐  | 提示词的简短描述，在 `/` 菜单中显示，帮助用户理解用途               |
| `name`          | 可选     | 显示名称，默认使用文件名                                            |
| `argument-hint` | 可选     | 在 Chat 输入框中显示的占位提示，如 `"任务..."`                      |
| `agent`         | 可选     | 指定 Agent 模式：`ask`（问答）、`agent`（自动执行）、`plan`（规划） |
| `model`         | 可选     | 指定使用的模型，如 `"GPT-5 (copilot)"`。支持数组做 fallback         |
| `tools`         | 可选     | 限制可用工具，如 `[search, web]`、MCP 服务器 `<server>/*`           |

### 完整示例

```markdown
---
description: "根据技术规格生成 README 文档"
name: "生成 README"
argument-hint: "项目名称..."
agent: "agent"
---

你是一名技术文档写手。请根据以下信息生成 README.md 文件：

## 项目名称

{input}

## 要求

1. 包含项目简介、快速开始、技术架构、目录结构、许可证
2. 使用中文撰写
3. 参考本仓库已有 README 的风格和格式
4. 代码块标注语言类型
```

## 使用 Prompt 文件

### 方式一：通过斜杠命令（最常用）

1. 在 Chat 输入框中键入 `/`。
2. 弹出菜单中会列出所有可用的 Prompt 文件和 Skill。
3. 选择目标 Prompt（如 `/生成 README`）。
4. Prompt 的内容会自动填充到输入框，部分 Prompt 会要求输入参数。
5. 按回车发送。

### 方式二：通过命令面板

1. 按 `Ctrl+Shift+P` 打开命令面板。
2. 执行 **Chat: Run Prompt...**。
3. 从列表中选择要执行的 Prompt 文件。

### 方式三：在编辑器中直接运行

打开 `.prompt.md` 文件，点击编辑器右上角的 ▶ 播放按钮。

## 编写高质量 Prompt 文件的技巧

### 1. 单任务原则

一个 Prompt 文件只做一件事：

```markdown
---
description: "为选中函数生成测试用例"
---

✅ 好的：为选中代码生成测试
❌ 不好的：创建项目、写代码、部署一条龙
```

### 2. 清晰的 description

description 是用户在 `/` 菜单中看到的唯一信息，应当能让人一眼明白用途：

```
✅ "为当前选中代码生成 Jest 单元测试"
✅ "根据 RFC 标题生成技术设计方案"
❌ "工具"
❌ "一些有用的东西"
```

### 3. 参数化输入

使用 `{input}` 或 `{参数名}` 在 Prompt 中定义占位符，调用时会提示用户输入：

```markdown
---
description: "搜索并总结技术资料"
---

请搜索关于 "{input}" 的最新资料，并用中文总结：

1. 核心概念
2. 优缺点
3. 适用场景
```

### 4. 引用指令文件

Prompt 文件中可以通过 Markdown 链接引用已有的 `.instructions.md` 文件，避免重复：

```markdown
---
description: "生成新的 React 组件"
---

请参考 [组件规范](../instructions/frontend/react.instructions.md) 生成一个新的 React 组件。
```

### 5. 指定 Agent 模式

根据任务类型选择合适的 `agent`：

```markdown
---
description: "分析代码复杂度，给出优化建议"
agent: "ask"
---

分析选中代码，输出：

- 圈复杂度
- 可优化的性能瓶颈
- 重构建议（仅分析，不修改代码）
```

```markdown
---
description: "自动修复 ESLint 错误"
agent: "agent"
---

修复当前文件中的所有 ESLint 错误。自动修改，无需确认。
```

### 6. 限制可用工具

```markdown
---
description: "搜索网页并总结结果"
agent: "agent"
tools: [web]
---

搜索 "{input}" 的最新信息并总结关键要点。
```

---

## 本仓库中的实践参考

本教程仓库使用以下自定义文件：

- **指令文件**（如有）：`.github/copilot-instructions.md` — 定义本教程的写作规范。
- **提示词文件**（可参考创建）：可新建 `.github/prompts/` 目录，添加如 `新建章节.prompt.md` 等 Prompt 文件，实现一键生成标准化教程章节。

当你在本仓库中使用 Copilot 时，指令文件会自动加载，确保输出一致。而 Prompt 文件则需要通过 `/` 手动调用，适合特定任务。

## 扩展阅读

- [VS Code Instructions 官方文档](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [VS Code Prompt Files 官方文档](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
- [GitHub Copilot 自定义说明](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-repository)
- [Awesome Copilot - 社区贡献的指令和 Prompt 示例](https://github.com/github/awesome-copilot)

## 常见问题

**Q：指令文件和 Prompt 文件可以放在同一个目录吗？**
A：可以。用户级 `prompts/` 文件夹同时支持两种文件，后缀决定行为：`.instructions.md` 自动加载，`.prompt.md` 需斜杠命令调用。工作区中 `.github/instructions/` 只能放指令文件，`.github/prompts/` 只能放 Prompt 文件。

**Q：指令文件修改后需要重启 VS Code 吗？**
A：不需要。保存文件后，下一次对话会自动加载最新内容。

**Q：为什么我的 `.instructions.md` 文件没有自动生效？**
A：检查是否设置了 `applyTo` 属性。如果没有设置，指令不会自动加载——你需要在对话中手动引用（例如通过 Markdown 链接）。另外确认文件放在正确的目录下。

**Q：如何让 Prompt 文件在团队中共享？**
A：将 `.prompt.md` 文件放在仓库的 `.github/prompts/` 目录下并提交到 Git。所有克隆该仓库的成员都能在 Chat 的 `/` 菜单中看到并使用。

**Q：指令文件和 Prompt 文件有大小限制吗？**
A：建议控制在 10KB 以内。过长的文件可能会被截断，导致 AI 无法完整读取。

**Q：如何在对话中临时覆盖指令？**
A：在 Chat 输入中明确说明即可。例如："忽略之前的项目规范，这次使用 Python 风格。" AI 会优先遵循当前 Prompt 中的要求。
