---
tags:
  - tutorial
  - vscode
  - claude
  - installation
  - configuration
---

# Claude Code 在 VS Code 中的安装与配置

## 学习目标

- 了解 Claude Code 的能力边界与适用场景。
- 掌握在 VS Code 中安装 Claude Code 官方扩展。
- 掌握三种鉴权方式：官方订阅登录、API Key、第三方网关。
- 理解 VS Code 设置与 Claude 通用设置（`~/.claude/`）两层配置的区别。
- 掌握 Claude 通用设置（用户级 / 项目级）的环境变量与代理配置。
- 学会验证安装并开始第一次 Agent 对话。

## 前置条件

- 已安装 VS Code（参考 [section1/02](../section1/02_vscode安装与配置.md)）。
- 已了解订阅方案（参考 [00_多模型agent总览与订阅说明](00_多模型agent总览与订阅说明.md)）。
- 已准备好以下**任一**凭据：
  - Claude Pro / Max 订阅账号；或
  - Anthropic 平台 API Key；或
  - 第三方网关的 Base URL + Key。

## Claude Code 是什么

Claude Code 是 Anthropic 推出的 **Agent 化编程工具**，可以在终端或 IDE 中自主完成：

- 阅读与搜索代码库
- 修改多个文件、执行重构
- 运行终端命令与测试
- 自动修复错误并迭代
- 通过 MCP 接入外部工具（数据库、浏览器等）

> 在 VS Code 中，推荐使用官方扩展获得图形界面体验；同时它也提供终端 CLI（`claude` 命令）。

## 第 1 步：安装 VS Code 扩展

1. 打开 VS Code，按 `Ctrl+Shift+X` 打开扩展面板。
2. 搜索 **Claude Code**（发行方为 `anthropic`，扩展 ID：`anthropic.claude-code`）。
3. 点击 **安装**。
4. 安装完成后，活动栏会出现 Claude Code 图标。

> 也可以使用 VS Code 内置终端 + 官方 CLI：`npm install -g @anthropic-ai/claude-code`（需 Node.js）。

## 第 2 步：配置 Claude 通用设置（推荐）

Claude 的配置分为两层：

| 配置层              | 配置文件                                            | 作用范围                                      | 适用场景                      |
| :------------------ | :-------------------------------------------------- | :-------------------------------------------- | :---------------------------- |
| **VS Code 设置**    | VS Code `settings.json` 的 `claudeCode.env`         | 仅 VS Code 内的 Claude Code                   | 只想在 VS Code 里用、快速验证 |
| **Claude 通用设置** | `~/.claude/` 与项目 `.claude/` 下的 `settings.json` | **Claude Code / CLI / 独立桌面程序** 全部生效 | 长期使用、跨工具复用          |

> 💡 **推荐优先用通用设置**：一次配置，到处复用。后续改用终端 CLI 或独立桌面程序时**无需重新设置**——这与 Codex 走 `~/.codex/` 通用设置的理念一致。

### 通用设置的文件层级

| 优先级    | 文件                                 | 作用范围           | 典型用途                              |
| :-------- | :----------------------------------- | :----------------- | :------------------------------------ |
| 1（最低） | `~/.claude/settings.json`            | 用户级，所有项目   | 个人默认值（网关、Key、代理）         |
| 2         | `<项目>/.claude/settings.json`       | 项目级，随仓库提交 | 团队共享配置（Base URL 等，不含 Key） |
| 3         | `<项目>/.claude/settings.local.json` | 项目级，不提交     | 个人在本项目的覆盖（如 API Key）      |
| 4         | CLI 参数 / `/config`                 | 单次会话           | 临时覆盖                              |
| 5（最高） | Managed（企业策略）                  | 组织级             | 策略下限，不可被下层放松              |

> 项目级会覆盖用户级同名配置；`settings.local.json` 含 Key 时**绝不能提交**，建议加入 `.gitignore`。

### 用户级通用设置示例（`~/.claude/settings.json`）

Windows 路径：`%USERPROFILE%\.claude\settings.json`。

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "env": {
    "ANTHROPIC_BASE_URL": "https://direct-api.example.com",
    "ANTHROPIC_API_KEY": "sk-xxx",
    "HTTP_PROXY": "http://127.0.0.1:1081",
    "HTTPS_PROXY": "http://127.0.0.1:1081",
    "ALL_PROXY": "socks5://127.0.0.1:1080"
  }
}
```

> `env` 中的变量在 Claude 进程启动时读取并注入，**修改后需重启进程**（新开会话 / 重启扩展）才生效。

### 项目级配置（团队协作）

不带 Key 的公共配置放 `<项目>/.claude/settings.json`（可提交）：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://direct-api.example.com"
  }
}
```

带 Key 的私有配置放 `<项目>/.claude/settings.local.json`（不提交）：

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-xxx"
  }
}
```

## 第 3 步：选择鉴权方式

Claude Code 支持三种鉴权方式，按你的场景选择其一。下面以 **VS Code 设置**（`claudeCode.env`）为例；如果已在**通用设置**中配好，可跳过 VS Code 侧，避免重复设置造成混淆：

| 方式             | 适合场景             | 关键配置                                                          |
| :--------------- | :------------------- | :---------------------------------------------------------------- |
| **官方订阅登录** | 日常个人使用         | 首次打开扩展，按提示登录 Claude 账号（Pro/Max 套餐）              |
| **API Key**      | 按量计费、自动化     | 环境变量 `ANTHROPIC_API_KEY`                                      |
| **第三方网关**   | 国内直连、多模型切换 | `ANTHROPIC_BASE_URL` + `ANTHROPIC_API_KEY`/`ANTHROPIC_AUTH_TOKEN` |

### 方式 A：官方订阅登录（推荐入门）

1. 点击 VS Code 活动栏的 **Claude Code** 图标。
2. 首次使用会提示登录，选择 **Sign in with Claude**。
3. 浏览器打开授权页面，登录你的 Claude 账号并授权。
4. 登录成功后即可开始对话。

> 如果你已经通过 API 网关 / 环境变量完成鉴权，不希望每次被引导登录官网账号，可在 VS Code 用户设置中添加：
>
> ```json
> {
>   "claudeCode.disableLoginPrompt": true
> }
> ```

### 方式 B：API Key

1. 到 [console.anthropic.com](https://console.anthropic.com) 创建 API Key（`sk-ant-...`）。
2. 配置环境变量。推荐在 VS Code 用户设置中通过 `env` 注入，避免污染全局 shell：

```json
{
  "claudeCode.env": {
    "ANTHROPIC_API_KEY": "sk-ant-xxx"
  }
}
```

> ⚠️ Key 属于敏感信息，不要提交到仓库（加入 `.gitignore`），并尽量限制权限。

### 方式 C：第三方网关

在 `settings.json`（用户或工作区）中配置网关：

```json
{
  "claudeCode.env": {
    "ANTHROPIC_BASE_URL": "https://your-gateway.example.com",
    "ANTHROPIC_API_KEY": "sk-xxx"
  }
}
```

注意三点：

- **`ANTHROPIC_AUTH_TOKEN` 只在网关明确要求时使用**；通用兼容场景更常见的是 `ANTHROPIC_API_KEY`，两者不要同时混用。
- 如果文档说明"会自动补 `/v1/messages`"，则 `ANTHROPIC_BASE_URL` 填**域名根**（如 `https://api.example.com`）；否则按网关文档为准。建议用抓包或日志确认最终请求 URL，避免路径重复。
- 网关接入的完整检查清单见 [03_网络代理与第三方网关接入](03_网络代理与第三方网关接入.md)。

## 第 4 步：配置代理（受限网络）

如果你的网络需要代理（内网 / 校园网 / 企业网），**推荐写入通用设置**（`~/.claude/settings.json` 的 `env`），让 CLI / 桌面端一并生效：

```json
{
  "env": {
    "HTTP_PROXY": "http://127.0.0.1:1081",
    "HTTPS_PROXY": "http://127.0.0.1:1081",
    "ALL_PROXY": "socks5://127.0.0.1:1080"
  }
}
```

也可以只在 VS Code 侧用 `claudeCode.env` 注入进程级变量（不污染全局 shell）：

```json
{
  "claudeCode.env": {
    "HTTP_PROXY": "http://127.0.0.1:1081",
    "HTTPS_PROXY": "http://127.0.0.1:1081",
    "ALL_PROXY": "socks5://127.0.0.1:1080"
  }
}
```

> `HTTPS_PROXY` 通常仍写 `http://proxy-host:port`（HTTP CONNECT 代理）；只有代理服务本身是 HTTPS 入口时才写 `https://...`。

## 第 5 步：验证安装

1. 打开任意一个文件（如 `section11/00_多模型agent总览与订阅说明.md`）。
2. 打开 Claude Code 面板，输入 `你好，请介绍你自己`。
3. 如果正确应答，说明安装成功。
4. 输入 `/status` 可查看当前订阅档位与用量额度。

## 常用操作

| 操作           | 说明                                    |
| :------------- | :-------------------------------------- |
| **对话**       | 在输入框提问，支持追问与上下文          |
| **文件修改**   | 让 Claude 修改当前文件或整个代码库      |
| **终端执行**   | 授权后 Claude 可运行命令并读取输出      |
| **Agent 模式** | 自主规划多步骤任务，边执行边汇报        |
| **MCP 工具**   | 通过 MCP 接入外部服务（如 Tavily 搜索） |
| **`/usage`**   | 查看会话与周限额使用情况                |
| **`/config`**  | 查看当前生效的配置                      |

## 常见问题

**Q：登录后提示"当前订阅不含 Claude Code"？**
A：确认你的套餐是 Pro / Max / Team Premium / Enterprise（Free 与 Team Standard 不含 Claude Code）。如果是新注册的 Pro 账号而遇到问题，可参考订阅章节的 2026 年动态说明。

**Q：`ANTHROPIC_API_KEY` 与 `ANTHROPIC_AUTH_TOKEN` 该用哪个？**
A：以网关文档为准。默认用 `ANTHROPIC_API_KEY`；只有网关明确要求 `ANTHROPIC_AUTH_TOKEN` 时才替换，两者不要混用。

**Q：报错 `404 / unknown route`？**
A：多半是 `ANTHROPIC_BASE_URL` 层级填错或路径重复。先确认网关文档要求的层级（域名根或 `/v1`），再核对是否会自动拼接 `/v1/messages`。

**Q：代理配置了还是不生效？**
A：按"网络连通性 → 鉴权 → Endpoint → Schema → 模型名"顺序排查。先 `curl` 代理地址，再 `curl` API 健康接口，最后看请求日志。

**Q：VS Code 设置与 Claude 通用设置该用哪个？**
A：长期使用推荐**通用设置**（`~/.claude/settings.json`），一次配置即可在 CLI、桌面端、VS Code 复用；只想在 VS Code 内快速验证时用 `claudeCode.env`。两者不要对同一变量重复设置，以免优先级混淆（项目级覆盖用户级）。

## 练习任务

1. 用官方订阅登录方式完成一次 Claude Code 对话。
2. 在 `~/.claude/settings.json` 中配置网关与代理，然后在 CLI 与 VS Code 两个入口验证同一配置均生效。
3. 在项目中配置 `.claude/settings.json` 与 `.claude/settings.local.json`，并把后者加入 `.gitignore`。
4. 尝试通过第三方网关接入一个非官方模型，并记录报错与解决过程。

## 验收清单

- [ ] 已安装 Claude Code VS Code 扩展并成功登录/鉴权。
- [ ] 能说出 VS Code 设置与 Claude 通用设置（`~/.claude/`）的区别与优先级。
- [ ] 能正确配置用户级与项目级通用设置文件。
- [ ] 能正确配置 `ANTHROPIC_BASE_URL` 的层级。
- [ ] 能在受限网络下通过代理正常使用。
