---
tags:
  - tutorial
  - agent
  - api
  - interface
---

# Agent 基础与接口知识

## 学习目标

- 理解 Agent 化编程工具是什么，以及它与 Copilot 的区别与关系。
- 掌握 Agent 接入的三大接口要素：Base URL、API Key、模型名。
- 了解主流 API 协议（`chat/completions`、`responses`、`messages`）的基本区别。
- 为后续 [section10（Copilot）](../section10/) 与 [section11（Claude Code / Codex）](../section11/) 的学习打下基础。

## 前置条件

- 完成 [section1](../section1/) 环境安装（VS Code、Git）。
- 具备基本的 Markdown 阅读能力。

## Agent 是什么

**Agent 化编程工具**（如 Claude Code、OpenAI Codex、VS Code Copilot Agent 模式）是能够**自主执行多步骤任务**的 AI 工具：读取代码、搜索文件、运行终端命令、修改多个文件、执行测试、提交 PR 等。

与传统"逐行补全 + 对话问答"的 AI 助手不同，Agent 会：

1. **规划**：把大任务拆解为多个小步骤。
2. **调用工具**：读写文件、执行命令、搜索代码、访问网络。
3. **迭代**：运行测试、查看报错、自动修复并重试。

### Agent 与 Copilot 的关系

| 工具               | 定位                                                  | 章节                                                                 |
| :----------------- | :---------------------------------------------------- | :------------------------------------------------------------------- |
| **GitHub Copilot** | VS Code 内置 AI 助手，覆盖日常补全、对话与 Agent 模式 | [section10](../section10/)                                           |
| **Claude Code**    | 独立 Agent 工具，深度自主执行                         | [section11/01](../section11/01_claude_code在vscode中的安装与配置.md) |
| **OpenAI Codex**   | 独立 Agent 工具，深度自主执行                         | [section11/02](../section11/02_codex在vscode中的安装与配置.md)       |

三者可以共存：Copilot 负责日常写作与补全，Claude Code / Codex 负责大型自主任务。

## 接口知识：Agent 接入的三要素

无论使用哪种 Agent 或网关，接入一个**自定义 API 服务**时，几乎都离不开以下三个要素：

| 要素         | 说明                                                                 | 示例                                                  |
| :----------- | :------------------------------------------------------------------- | :---------------------------------------------------- |
| **Base URL** | API 服务的基地址，客户端会在此基础上拼接具体接口路径                 | `https://api.anthropic.com`、`https://api.openai.com` |
| **API Key**  | 用于鉴权的密钥，通常放在请求头（如 `Authorization: Bearer <key>`）   | `sk-...`、`sk-ant-...`                                |
| **模型名**   | 指定调用哪个模型，必须与服务端可用模型完全一致（含大小写与版本后缀） | `claude-sonnet-4-5`、`gpt-5.6`                        |

> [!warning] 模型名不匹配是"`model unavailable`"类报错的最常见原因
> 先确认接口协议，再核对模型全名（大小写、版本后缀），必要时对目标 endpoint 单独做一次最小请求测试。

## 主流 API 协议

不同厂商的接口协议在请求结构上有所差异，但核心思想一致。三种最常见协议：

| 协议                        | 核心字段                       | 典型厂商                    |
| :-------------------------- | :----------------------------- | :-------------------------- |
| `POST /v1/chat/completions` | `messages`                     | OpenAI 兼容系、国内多数厂商 |
| `POST /v1/responses`        | `input`                        | OpenAI（新一代）            |
| `POST /v1/messages`         | `messages`（Anthropic schema） | Anthropic                   |

选择口诀：**先客户端协议，后模型名；先 schema，后 endpoint。**

- 客户端配置要求哪个协议，就用哪个，不要只看厂商名。
- 协议与 endpoint 必须匹配：`chat/completions` 用 OpenAI Chat schema，`responses` 用 `input` 字段，`messages` 用 Anthropic 原生 schema。

> 三类协议的详细对比、选择算法与排错矩阵，见 [01_接口模式选择与排错](01_接口模式选择与排错.md)。

## 其他常见接口概念

- **鉴权方式**：除 `Bearer` 头外，部分服务还支持 `x-api-key` 头（Anthropic）。
- **流式输出（Streaming）**：`stream: true` 时逐 token 返回，响应更快，是 Agent 交互的默认方式。
- **工具调用（Tool Use）**：Agent 通过声明工具（如 `read_file`、`run_command`）并解析模型返回的工具调用参数来操作环境。
- **上下文窗口**：单次可携带的 token 上限，超出后需截断或压缩历史。

## 常见问题

### Q：接口知识对普通用户有什么用？

理解 Base URL / Key / 模型名三要素后，你才能正确配置第三方网关（把请求转发到国内可用的中转服务），或排查"连不上 / 模型不存在 / 401"等错误。

### Q：为什么本教程把接口知识放在 Agent 基础？

因为 **Copilot、Claude Code、Codex 乃至 MCP 服务器**都共享同一套接口思维。先建立基础概念，后续各章节只需套用即可，避免重复讲解。

### Q：我需要自己实现接口吗？

不需要。本教程只要求你**理解并会配置**。接口的调用细节由各工具（扩展 / CLI / 网关）封装，你只需填对三要素。

## 练习任务

1. 用自己的话解释 Base URL、API Key、模型名三要素。
2. 说出 `chat/completions`、`responses`、`messages` 三种协议各自的核心字段。
3. 浏览 [section11/00](../section11/00_多模型agent总览与订阅说明.md) 的接入模式表格，标记你打算使用哪种接入方式。

## 验收清单

- [ ] 能区分 Agent 工具与普通 AI 助手。
- [ ] 能说出 Agent 接入三要素。
- [ ] 能说出三种主流协议的核心字段差异。
- [ ] 知道接口排错时先看协议、再看模型名。
