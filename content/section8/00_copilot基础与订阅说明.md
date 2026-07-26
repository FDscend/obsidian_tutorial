---
tags:
  - tutorial
  - vscode
  - copilot
---

# VS Code Copilot 基础与订阅说明

## 学习目标

- 了解 GitHub Copilot 是什么及其核心能力。
- 掌握 Copilot 的订阅方案与价格。
- 掌握在 VS Code 中安装与配置 Copilot 扩展。
- 掌握 Copilot Chat 的基本对话交互。
- 了解 Copilot 的代码补全与内联建议。
- 了解 Copilot 的隐私与安全策略。

## 前置条件

- 已安装 VS Code（参考 [section1/02](../section1/02_vscode安装与配置.md)）。
- 已注册 GitHub 账号（参考 [section1/03](../section1/03_git和github安装与登录.md)）。
- 具备基本的文件操作与 Markdown 编辑能力。

## Copilot 是什么

GitHub Copilot 是微软与 OpenAI 合作开发的 **AI 编程助手**，它基于大语言模型（LLM），能够在编辑器中提供实时代码补全、对话交互、代码解释、重构建议等能力。

> Copilot 目前支持 VS Code、Visual Studio、JetBrains、Neovim 等多种编辑器。本教程聚焦 **VS Code 环境**。

### 核心能力

| 能力          | 说明                                                       |
| :------------ | :--------------------------------------------------------- |
| **代码补全**  | 根据上下文自动建议下一行或下一段代码，按 `Tab` 接受        |
| **内联对话**  | 在编辑器中直接与 AI 对话，提问、修改、重构代码             |
| **Chat 面板** | 专门对话窗口，支持追问、上下文引用、图片理解（部分模型）   |
| **代码解释**  | 选中代码后让 AI 解释其功能                                 |
| **代码重构**  | 让 AI 优化、重构、翻译代码到其他语言                       |
| **测试生成**  | 自动为选中函数或类生成单元测试                             |
| **终端辅助**  | 在终端中解释错误、建议修复命令                             |
| **内联建议**  | 在代码中插入 `//` 或 `#` 注释描述意图，AI 自动生成对应代码 |

### 适用场景

- 快速生成样板代码和重复性代码。
- 学习新语言或框架时的实时参考。
- 调试时快速定位和修复错误。
- 编写测试用例和文档注释。
- 代码重构和优化建议。

## 订阅方案

GitHub Copilot 目前（2026 年）提供多个档位，从免费到高端专业版，满足不同使用需求（价格可能随时间调整，以下为官网参考）：

### 个人方案

| 方案     | 价格    | 适用对象     | 主要特性                                                                                               |
| :------- | :------ | :----------- | :----------------------------------------------------------------------------------------------------- |
| **Free** | $0/月   | 所有用户     | 每月 2,000 次补全，Haiku 4.5 / GPT-5 mini 等模型，Copilot CLI                                          |
| **Pro**  | $10/月  | 个人开发者   | 无限制补全，Cloud agent、代码审查、模型选择、第三方 agent（Claude Code / Codex），每月 $15 AI 信用额度 |
| **Pro+** | $39/月  | 高级开发者   | Pro 全部能力 + 高级模型（Opus 等）、审计日志、4 倍+ 于 Pro 的使用量，每月 $70 AI 信用额度              |
| **Max**  | $100/月 | 重度专业用户 | Pro+ 全部能力 + 优先获取新模型与功能、2.9 倍+ 于 Pro+ 的使用量，每月 $200 AI 信用额度                  |

### 企业方案

| 方案           | 价格     | 适用对象 | 说明                                       |
| :------------- | :------- | :------- | :----------------------------------------- |
| **Business**   | 联系销售 | 组织团队 | 组织级管理、安全策略、审计日志             |
| **Enterprise** | 联系销售 | 大型企业 | 企业级管理、数据驻留、自定义策略、专属支持 |

### 免费/折扣资格

| 身份           | 可获方案 | 说明                       |
| :------------- | :------- | :------------------------- |
| **学生**       | Pro 免费 | 通过 GitHub Education 验证 |
| **教师**       | Pro 免费 | 通过 GitHub Education 验证 |
| **开源维护者** | Pro 免费 | 需通过 GitHub 认证         |

> 💡 **选择建议**：轻度使用选 **Free** 即可；日常开发推荐 **Pro**（$10/月）；需要高级模型（如 Opus）选 **Pro+**；重度 agent 工作流选 **Max**。

### 如何查看当前 Copilot 状态

1. 在 VS Code 右下角状态栏查看 Copilot 图标（✨ 或 Copilot 图标）。
2. 点击图标可查看当前登录账号和订阅状态。
3. 如果显示 "Sign in"，表示尚未登录 GitHub 账号。

## 安装与配置

### 第 1 步：确认 Copilot 已内置

从 VS Code 1.94（2024 年 10 月）起，**GitHub Copilot 已成为 VS Code 的内置扩展**，随编辑器一起分发：

- 打开 VS Code → 扩展面板（`Ctrl+Shift+X`）。
- 在搜索框输入 `@builtin copilot`。
- 如果看到 **GitHub Copilot**（扩展 ID: `GitHub.copilot`）且状态为"已启用"，说明已内置，无需手动安装。
- **GitHub Copilot Chat** 也已合并到同一内置扩展中，不再需要单独安装。

> 如果你是 VS Code 旧版本（1.94 以下），仍然可以在扩展面板中搜索 `GitHub Copilot` 手动安装。

### 第 2 步：登录 GitHub 账号

1. 点击 VS Code 右侧活动栏的 **Copilot 图标**（对话气泡），首次使用会弹出登录提示。
2. 点击 **Sign in to GitHub**，浏览器会自动打开 GitHub 授权页面。
3. 点击 **Authorize Visual Studio Code** 完成授权。
4. 授权成功后，状态栏右下角的 Copilot 图标会变为活动状态（✨ 或 Copilot 标识）。

### 第 3 步：验证安装

1. 打开任意一个文件（如 `section8/00_copilot基础与订阅说明.md`）。
2. 按 `Ctrl+I` 打开内联对话。
3. 输入 `/explain 什么是 Copilot`，按回车。
4. 如果 AI 正确应答，说明安装成功。

## Copilot 基础交互

### 方式一：Chat 面板对话

Chat 面板是 Copilot 的主要对话入口，适合长时间的深入交互。

**打开方式：**

- 点击 VS Code 左侧活动栏的 **Copilot 图标**（对话气泡）。
- 或按 `Ctrl+Alt+I`（Windows）。

**基本操作：**

1. 在输入框中输入问题，按回车发送。
2. AI 会返回回答，并可能包含代码示例。
3. 可以继续追问，对话保持上下文连贯。
4. 点击回答中的代码块右上角的 **插入** 按钮，可将代码插入到当前文件。

**常用命令（Slash Commands）：**

在 Chat 输入框中输入 `/` 可看到可用命令列表：

| 命令       | 用途                     |
| :--------- | :----------------------- |
| `/help`    | 查看 Copilot 帮助信息    |
| `/explain` | 解释选中的代码           |
| `/fix`     | 修复选中的代码中的问题   |
| `/tests`   | 为选中的代码生成测试     |
| `/doc`     | 为选中的代码生成文档注释 |
| `/clear`   | 清空当前对话             |

### 方式二：内联对话（Inline Chat）

内联对话让你在不离开编辑器的情况下与 AI 交互。

**打开方式：**

- 在编辑器中按 `Ctrl+I`。
- 或选中代码后右键 → **Copilot** → **内联对话**。

**使用场景：**

1. **文本生成与编辑**：在 Markdown 中，可以让 AI 帮你写段落、改措辞、翻译。
2. **代码修改**：选中一段代码，让 AI 重构、优化或修复。
3. **代码生成**：在注释中描述意图，AI 自动生成对应的代码。

> 本教程仓库中的大部分 Markdown 文档均通过 Copilot 辅助生成。你可以在对话中要求 AI "按已有的文档风格续写"，AI 会自动学习你的格式。

### 方式三：代码自动补全

Copilot 会在你输入代码时自动给出建议，按 `Tab` 接受。

- 灰色文字表示建议的代码。
- 按 `Tab` 接受当前建议。
- 按 `Ctrl+→` 接受单个词。
- 按 `Alt+[` 或 `Alt+]` 切换不同建议。
- 按 `Esc` 拒绝当前建议。

> 在 Markdown 文件中，Copilot 同样可以补全文本内容。例如输入一个列表项的开头，Copilot 可能会建议后续的列表项。

## 隐私与安全

### 数据处理

- **代码补全**：Copilot 会将你正在编辑的代码上下文发送到服务器以生成建议。建议不匹配的代码不会被保留。
- **对话内容**：Chat 对话会被发送到服务器进行处理。
- **企业版**：企业版提供更严格的数据处理策略，代码不会用于模型训练。

### 建议配置（企业/团队）

如果你所在的团队有代码隐私要求，可以在 VS Code 设置中禁用 Copilot 的数据收集：

```json
{
  "github.copilot.advanced": {
    "debug.overrideProxyUrl": "",
    "debug.chat.useGitHubEnterprise": false
  }
}
```

也可以在 [GitHub 设置页面](https://github.com/settings/copilot) 控制是否允许 Copilot 使用你的代码进行模型改进。

### 在公共仓库中使用

- Copilot 在开源仓库中默认免费（需验证身份）。
- 公共仓库中的代码补全建议质量更高，因为模型在公开代码上有更好的训练。

## 扩展阅读

- [GitHub Copilot 官方文档](https://docs.github.com/copilot)
- [VS Code Copilot 使用指南](https://code.visualstudio.com/docs/copilot/overview)
- [GitHub Copilot 定价](https://github.com/features/copilot/plans)
- [Copilot 隐私声明](https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals#about-data-privacy-for-github-copilot)

## 常见问题

**Q：Copilot 支持中文对话吗？**
A：支持。你可以在 Chat 面板中用中文提问，AI 会用中文回答。代码建议不受语言影响。

**Q：为什么 Copilot 没有给出代码建议？**
A：常见原因包括：未登录 GitHub 账号、订阅已过期、文件类型不受支持。请检查状态栏的 Copilot 图标状态。

**Q：Copilot 和 ChatGPT 有什么区别？**
A：Copilot 深度集成在 VS Code 中，能直接读取你的代码上下文和文件结构，更适合编程任务。ChatGPT 是通用对话模型，更适合泛化问答。

**Q：免费版和个人版有什么主要区别？**
A：免费版每月有使用次数限制，个人版无限制使用。功能上两者基本相同，都包含代码补全和 Chat。

**Q：如何关闭 Copilot 的自动补全？**
A：在 VS Code 设置中搜索 `github.copilot.enable`，设为 `false` 即可。Chat 功能不受影响。
