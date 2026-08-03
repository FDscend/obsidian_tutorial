---
tags:
  - tutorial
  - vscode
  - codex
  - openai
  - installation
  - configuration
---

# Codex 在 VS Code 中的安装与配置

## 学习目标

- 了解 OpenAI Codex 的能力边界与适用场景。
- 掌握在 VS Code 中安装 Codex 官方扩展与 CLI。
- 掌握两种鉴权方式：ChatGPT 订阅登录与 API Key（`auth.json` + `config.toml`）。
- 掌握 `config.toml` 自定义模型 Provider 的写法。
- 学会验证安装并开始第一次 Agent 对话。

## 前置条件

- 已安装 VS Code（参考 [section1/02](../section1/02_vscode安装与配置.md)）。
- 已了解订阅方案（参考 [00_多模型agent总览与订阅说明](00_多模型agent总览与订阅说明.md)）。
- 已准备好**任一**凭据：
  - ChatGPT 订阅账号（Plus / Pro 等）；或
  - OpenAI 平台 API Key（`sk-...`）。

## Codex 是什么

OpenAI Codex 是 OpenAI 推出的 **Agent 化编程工具**，覆盖 CLI、IDE 扩展、Codex Cloud（云端后台运行）与网页端：

- 自主规划并执行多步骤编码任务
- 在沙箱中运行代码与命令
- 支持并行多 Agent、后台长任务
- IDE 扩展深度集成 VS Code 编辑器

> 与 Claude Code 不同，Codex **没有独立订阅**，用量包含在 ChatGPT 套餐中（见订阅章节）。

## 第 1 步：安装 VS Code 扩展

1. 打开 VS Code，按 `Ctrl+Shift+X` 打开扩展面板。
2. 搜索 **Codex**（发行方为 `OpenAI`，扩展 ID：`openai.chatgpt`）。
3. 点击 **安装**。
4. 安装完成后，活动栏会出现 Codex 图标。

> 也可以使用终端 CLI：`npm install -g @openai/codex`（需 Node.js，安装见 [section9/02](../section9/02_运行环境_python与nodejs安装.md)），或直接使用官方安装脚本。

## 第 2 步：选择鉴权方式

> Codex 的配置（`~/.codex/` 下的 `config.toml`、`auth.json`、`.env`）属于**通用设置层**，对 CLI、VS Code 扩展、Codex Cloud / 桌面端**全部生效**——这与 Claude 的 `~/.claude/` 通用设置（见 [01_claude_code在vscode中的安装与配置](01_claude_code在vscode中的安装与配置.md) 第 2 步）一一对应，换工具无需重新配置。

| 方式             | 适合场景         | 关键配置                                          |
| :--------------- | :--------------- | :------------------------------------------------ |
| **ChatGPT 登录** | 日常个人使用     | 扩展内登录 ChatGPT 账号（Plus / Pro 套餐）        |
| **API Key**      | 按量计费、自动化 | `~/.codex/auth.json` + `config.toml` 的 `env_key` |

### 方式 A：ChatGPT 订阅登录（推荐入门）

1. 点击 VS Code 活动栏的 **Codex** 图标。
2. 首次使用会提示登录，选择 **Sign in with ChatGPT**。
3. 浏览器打开授权页面，登录你的 ChatGPT 账号并授权。
4. 登录成功后即可开始对话，用量计入你的 ChatGPT 套餐。

### 方式 B：API Key（免网页登录）

Codex CLI（以及复用同一套 Codex 凭据的 VS Code 场景）可以通过 API Key 避免每次走网页登录流程。

**第 1 步：创建 `auth.json`**

文件路径：`~/.codex/auth.json`（Windows 为 `%USERPROFILE%\.codex\auth.json`）：

```json
{
  "OPENAI_API_KEY": "sk-xxx"
}
```

建议：

- 避免提交到仓库（加入 `.gitignore`）。
- 本机权限尽量收紧（仅当前用户可读）。

**第 2 步：配置 `config.toml`**

Codex 的全局配置位于 `~/.codex/config.toml`。如果你的配置里使用了 `env_key`，仅写 `auth.json` 可能仍会报"找不到环境变量"——因为 `env_key` 读取的是**进程环境变量**，还需要在 `~/.codex/.env` 或系统环境变量中提供同名变量。

```bash
# ~/.codex/.env
OPENAI_API_KEY="sk-xxx"
```

**第 3 步：校验**

在终端运行 `codex` 或打开 VS Code 扩展，确认不再弹出登录引导。

## 第 3 步：自定义模型 Provider（`config.toml`）

Codex 的 `config.toml` 支持两种自定义方式：

1. 使用内置 OpenAI Provider + 自定义 `openai_base_url`。
2. 定义自有 `model_provider`（**推荐**，便于多网关切换）。

示例（抽象写法）：

```toml
model = "gpt-5.4"
model_provider = "myproxy"

[model_providers.myproxy]
name = "My Proxy"
base_url = "https://gateway.example.com/v1"
wire_api = "responses"
env_key = "MY_PROXY_API_KEY"
```

要点：

- `base_url` 通常填到 `/v1` 层级，不是完整接口路径。
- `wire_api` 必须与网关支持的能力匹配：`chat`（chat/completions）、`responses` 或 `anthropic`（见 [section9/01](../section9/01_接口模式选择与排错.md)）。
- `env_key` 表示 Codex 运行时读取同名环境变量，建议在 `~/.codex/.env` 中添加：

  ```env
  MY_PROXY_API_KEY="sk-xxx"
  ```

- 如果目标是"免登录 + 走 API Key"，**不要使用** `requires_openai_auth = true`（它更偏向要求 OpenAI 账号认证链路）。

### 完整参考配置

```toml
model_provider = "OpenAI"
model = "gpt-5.6-terra"
review_model = "gpt-5.6-terra"
model_reasoning_effort = "high"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://api.openai.com/v1"
wire_api = "responses"
env_key = "OPENAI_API_KEY"

[features]
goals = true

[windows]
sandbox = "elevated"
```

> 以上为示意配置，字段请以你所用 Codex 版本的官方文档为准。

## 第 4 步：配置代理（受限网络）

在 `~/.codex/.env` 中配置代理变量：

```env
https_proxy="http://127.0.0.1:1081"
http_proxy="http://127.0.0.1:1081"
all_proxy="socks5://127.0.0.1:1080"
```

## 第 5 步：验证安装

1. 打开任意一个文件（如 `section12/00_多模型agent总览与订阅说明.md`）。
2. 打开 Codex 面板，输入 `你好，请介绍你自己`。
3. 如果正确应答，说明安装成功。
4. 尝试让它创建一个小脚本，观察其自主执行过程。

## 常见问题

**Q：报错"找不到环境变量 OPENAI_API_KEY"？**
A：`env_key` 读取的是进程环境变量。请在 `~/.codex/.env` 或系统环境变量中提供同名 Key，而不仅是写入 `auth.json`。

**Q：`wire_api` 应该选什么？**
A：取决于你的网关/端点支持的协议。通用 OpenAI 兼容网关一般支持 `chat` 或 `responses`；不确定时先用 `chat`（chat/completions）兜底，再验证网关文档。

**Q：Codex 用量很快耗尽？**
A：Codex 用量按 5 小时滚动窗口 + 每周上限计量（2026-04 起为 token 对齐信用额度）。重度使用建议升级到 Pro 5x / 20x，或使用 API Key 按量计费。

**Q：扩展里能看到模型但调用失败？**
A：网关列出模型不代表该 endpoint 可用。用目标 endpoint 单独做最小请求测试（见 [section9/01](../section9/01_接口模式选择与排错.md)）。

## 练习任务

1. 用 ChatGPT 订阅登录完成一次 Codex 对话。
2. 配置一个自定义 `model_provider` 并切换到网关模型。
3. 在受限网络下配置代理并验证连通。

## 验收清单

- [ ] 已安装 Codex VS Code 扩展并成功登录/鉴权。
- [ ] 能说清 `auth.json` 与 `config.toml` 中 `env_key` 的分工。
- [ ] 能编写自定义 `model_provider` 并正确设置 `wire_api`。
- [ ] 能在受限网络下通过代理正常使用。
