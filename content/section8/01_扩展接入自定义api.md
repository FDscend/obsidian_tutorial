---
tags:
  - tutorial
  - vscode
  - copilot
  - api
---

# 扩展接入自定义 API

## 学习目标

- 了解通过 VS Code 扩展为 Copilot 接入第三方模型的基本原理。
- 掌握使用单模型扩展（如 DeepSeek V4 for Copilot Chat）在 Copilot 中切换模型。
- 掌握使用多模型聚合扩展（如 GCMP）接入多家国内模型提供商。
- 掌握通用的 OpenAI / Anthropic 兼容协议配置方法。
- 了解 API Key 的安全管理策略。

## 前置条件

- 已完成 Copilot 内置扩展激活与登录（参考 [00_copilot基础与订阅说明](00_copilot基础与订阅说明.md)）。
- 拥有至少一个第三方 API Key（如 DeepSeek、OpenAI、 Anthropic 或国内厂商）。
- 了解基本的 VS Code 设置（settings.json）编辑。

## 为什么需要自定义 API

GitHub Copilot 自带的模型（GPT 系列）能满足大部分场景，但在以下情况下你可能需要接入其他模型：

| 场景             | 说明                                                        |
| :--------------- | :---------------------------------------------------------- |
| **使用其他模型** | 想用 DeepSeek V4、Claude、Gemini 或国产模型（GLM、Qwen 等） |
| **成本控制**     | DeepSeek 等模型价格更低，适合高频使用                       |
| **私有化部署**   | 企业数据不出网，接入内部部署的模型                          |
| **模型自由切换** | 在同一 Copilot 界面中快速切换不同模型以对比效果             |
| **国内直连**     | 直接使用国内厂商的 API，延迟更低、网络更稳定                |

## 核心思路：扩展直接嵌入 Copilot

与安装一套全新的 AI 编程助手（如 Continue）不同，本教程介绍的扩展采用另一种架构：**直接在 Copilot Chat 的模型选择器中添加新的模型选项**。

```
┌─────────────────────────────────────┐
│         VS Code Copilot Chat         │
│  ┌─────────────────────────────────┐ │
│  │  模型选择器 ▼                    │ │
│  │  ├─ GPT-4o          (内置)       │ │
│  │  ├─ Claude Sonnet   (内置)       │ │
│  │  ├─ DeepSeek V4 Pro (扩展注入)   │ │  ← 扩展添加的
│  │  └─ GLM-5.2         (扩展注入)   │ │  ← 扩展添加的
│  └─────────────────────────────────┘ │
│     Agent 模式 / 工具调用 / 指令       │
│     全部保留，仅更换底层模型           │
└─────────────────────────────────────┘
```

这样做的好处是：

- **无需学习新界面** — 仍然使用 Copilot Chat 的同一套 UI。
- **完整保留 Copilot 能力** — Agent 模式、工具调用（文件编辑、终端命令）、MCP、Skill、指令文件，全部正常工作。
- **切换零成本** — 在模型选择器中点一下即可切换，对话历史不丢失。

## 方案一：单模型扩展（以 DeepSeek V4 for Copilot Chat 为例）

[DeepSeek V4 for Copilot Chat](https://marketplace.visualstudio.com/items?itemName=Vizards.deepseek-v4-for-copilot) 是一个典型的单模型扩展，它将 DeepSeek V4 Pro 和 Flash 两个模型注入到 Copilot Chat 的选择器中。

### 第 1 步：安装扩展

1. 在 VS Code 中按 `Ctrl+Shift+X` 打开扩展面板。
2. 搜索 `DeepSeek V4 for Copilot Chat`（扩展 ID: `Vizards.deepseek-v4-for-copilot`）。
3. 点击 **安装**。

### 第 2 步：配置 API Key

1. 按 `Ctrl+Shift+P` 打开命令面板。
2. 执行 **DeepSeek: Set API Key**。
3. 粘贴你的 DeepSeek API Key（在 [platform.deepseek.com](https://platform.deepseek.com) 获取）。
4. Key 会安全存储在操作系统的密钥链（Keychain / Credential Manager）中，不会写入 `settings.json` 或磁盘文件。

### 第 3 步：在 Copilot 中使用

1. 打开 Copilot Chat 面板。
2. 点击输入框上方的模型选择器下拉菜单。
3. 你会看到新增的 **DeepSeek V4 Pro** 和 **DeepSeek V4 Flash** 两个选项。
4. 选中即可开始对话，Agent 模式、工具调用等功能全部保留。

### 高级设置

该扩展支持通过 `settings.json` 自定义配置：

```json
{
  // 自定义 API 端点（用于自托管或代理部署）
  "deepseek-copilot.baseUrl": "https://api.deepseek.com",

  // 最大输出 Token（0 表示不限制）
  "deepseek-copilot.maxTokens": 4096,

  // 模型 ID 映射（用于兼容第三方 API 的不同模型名）
  "deepseek-copilot.modelIdOverrides": {
    "deepseek-v4-flash": "your-flash-model-id",
    "deepseek-v4-pro": "your-pro-model-id"
  },

  // 视觉代理：用于给 DeepSeek（纯文本模型）描述图片
  "deepseek-copilot.visionModel": "gpt-4o"
}
```

> 思考力度（Thinking Effort）可直接在 Copilot Chat 的模型选择器菜单中调整，支持 `none` / `high`（默认） / `max` 三档。

## 方案二：多模型聚合扩展（以 GCMP 为例）

[AI Chat Models (GCMP)](https://marketplace.visualstudio.com/items?itemName=vicanent.gcmp) 是一个聚合多模型提供商的扩展，内置了数十家国内外模型厂商的支持，只需输入对应的 API Key 即可使用。

### 第 1 步：安装扩展

1. 在扩展面板中搜索 `GCMP`（扩展 ID: `vicanent.gcmp`）。
2. 点击 **安装**。

### 第 2 步：添加模型提供商

1. 打开 Copilot Chat 面板。
2. 在模型选择器底部点击 **管理模型**。
3. 从弹出的提供商列表中选择一家：

| 提供商         | 需要配置          | 特点                         |
| :------------- | :---------------- | :--------------------------- |
| **DeepSeek**   | DeepSeek API Key  | DeepSeek V4 Flash / Pro      |
| **智谱AI**     | 智谱 API Key      | GLM-5.2 / GLM-4.7 等         |
| **阿里云百炼** | 阿里云 API Key    | Qwen3.7-Max / Qwen3-Coder 等 |
| **火山方舟**   | 火山引擎 API Key  | 豆包系列 / DeepSeek / GLM 等 |
| **MoonshotAI** | Moonshot API Key  | Kimi K2.5 / K2.6 / K2.7      |
| **腾讯云**     | 腾讯云 API Key    | 混元 / GLM / DeepSeek 等     |
| **MiniMax**    | MiniMax API Key   | MiniMax M3 等                |
| **OpenAI**     | OpenAI API Key    | GPT-4o / GPT-4 等            |
| **Anthropic**  | Anthropic API Key | Claude Sonnet / Opus 等      |

4. 如果是首次使用该提供商，按提示输入 API Key。
5. 返回模型选择器，勾选要启用的模型。

### 第 3 步：开始对话

选中模型后即可在 Copilot Chat 中正常使用。所有 Copilot 功能（Agent 模式、工具调用等）均可正常工作。

### 高级设置

GCMP 支持通过 `settings.json` 进行更精细的控制：

```json
{
  // 自定义兼容模型（OpenAI 协议）
  "gcmp.compatibleModels": [
    {
      "name": "我的自定义模型",
      "provider": "openai",
      "model": "custom-model-id",
      "apiKey": "${MY_API_KEY}",
      "baseUrl": "https://custom-api.example.com/v1",
      "parameters": {
        "temperature": 0.7,
        "maxTokens": 4096
      }
    }
  ],

  // 代理设置（如需）
  "gcmp.proxy": "http://127.0.0.1:10808"
}
```

> GCMP 还提供 Token 消耗统计、Commit 消息生成、视觉分析、API Key 跨设备同步等附加功能，可在扩展详情页了解。

## 方案三：通用 OpenAI / Anthropic 兼容协议

如果你使用的模型服务商不在上述扩展的预置列表中，只要它提供 OpenAI 或 Anthropic 兼容的 API，就可以通过通用兼容模式接入。

### 使用 GCMP 的 Compatible Provider

GCMP 内置了 Compatible Provider，支持完全自定义：

1. 执行命令面板中的 **GCMP: Compatible Provider 设置**。
2. 按向导输入：
   - **名称**：任意标识（如 "我的本地模型"）
   - **协议类型**：OpenAI Compatible 或 Anthropic Compatible
   - **Base URL**：API 端点地址（如 `http://localhost:11434/v1`）
   - **模型 ID**：模型名称（如 `llama3`）
   - **API Key**：认证密钥（如不需要可留空）
   - **额外参数**：Temperature、Max Tokens 等

配置示例（接入 Ollama 本地模型）：

```json
{
  "gcmp.compatibleModels": [
    {
      "name": "Ollama Llama 3",
      "provider": "openai",
      "model": "llama3",
      "apiKey": "",
      "baseUrl": "http://localhost:11434/v1",
      "parameters": {
        "temperature": 0.7
      }
    }
  ]
}
```

配置示例（接入自定义 OpenAI 兼容服务）：

```json
{
  "gcmp.compatibleModels": [
    {
      "name": "私有部署模型",
      "provider": "openai",
      "model": "my-model-v1",
      "apiKey": "sk-xxx",
      "baseUrl": "https://internal.company.com/v1",
      "parameters": {
        "temperature": 0.3,
        "maxTokens": 2048,
        "topP": 0.9
      }
    }
  ]
}
```

## 方案对比

| 对比维度         | DeepSeek V4 for Copilot Chat  | GCMP (AI Chat Models)                       | Compatible Provider |
| :--------------- | :---------------------------- | :------------------------------------------ | :------------------ |
| **定位**         | 单模型深度集成                | 多模型聚合平台                              | 通用兼容接入        |
| **预置提供商**   | DeepSeek 一家                 | 15+ 家国内厂商 + OpenAI/Anthropic           | 无，需手动配置      |
| **自定义模型**   | 支持（修改 modelIdOverrides） | 支持（Compatible Provider）                 | 完全自定义          |
| **API Key 存储** | OS 密钥链                     | VS Code 设置 / Gist 同步                    | 配置文件            |
| **额外功能**     | 视觉代理、思考力度控制        | Token 统计、Commit 生成、视觉分析、API 同步 | 无                  |

## API Key 安全管理

> [!warning] API Key 安全提示
>
> API Key 等同于密码，切勿硬编码到公开仓库或分享给他人。

### 推荐做法

1. **使用扩展原生的安全存储**：DeepSeek V4 for Copilot Chat 将 Key 存在 OS 密钥链中，不落盘。
2. **使用环境变量引用**：GCMP 支持 `${VAR_NAME}` 语法引用环境变量：

```json
{
  "gcmp.compatibleModels": [
    {
      "name": "GPT-4o",
      "provider": "openai",
      "model": "gpt-4o",
      "apiKey": "${OPENAI_API_KEY}",
      "baseUrl": "https://api.openai.com/v1"
    }
  ]
}
```

3. **不要将 Key 提交到 Git**：建议将 VS Code 工作区设置文件（`.vscode/settings.json`）列入 `.gitignore`，或仅将不含 Key 的通用配置加入版本控制。

## 模型选择策略

| 需求              | 推荐方案                          | 理由               |
| :---------------- | :-------------------------------- | :----------------- |
| 日常编码辅助      | DeepSeek V4 Flash                 | 速度快、成本低     |
| 复杂重构 / Agent  | DeepSeek V4 Pro / GLM-5.2         | 推理能力强         |
| 需要多模型切换    | GCMP（同时配置多家）              | 一个扩展、多个选择 |
| 国内低延迟访问    | GCMP + 国内厂商（智谱/阿里/火山） | 国内节点，延迟低   |
| 私有化 / 离线部署 | Compatible Provider + Ollama      | 完全本地，无需联网 |
| 预算敏感          | DeepSeek / 开源模型               | 性价比极高         |

## 扩展阅读

- [DeepSeek V4 for Copilot Chat - Marketplace](https://marketplace.visualstudio.com/items?itemName=Vizards.deepseek-v4-for-copilot)
- [AI Chat Models (GCMP) - Marketplace](https://marketplace.visualstudio.com/items?itemName=vicanent.gcmp)
- [DeepSeek API 文档](https://platform.deepseek.com/docs)
- [VS Code 扩展市场 - AI 分类](https://marketplace.visualstudio.com/search?term=copilot%20model&target=VSCode)

## 常见问题

**Q：安装这些扩展后，原来的 Copilot 模型（GPT 系列）还在吗？**
A：在。扩展只是在模型选择器中**新增**选项，不会覆盖或移除原有的模型。你随时可以切回 GPT-4o 等内置模型。

**Q：这些扩展是否影响 Copilot 的代码自动补全（Tab 补全）？**
A：不影响。自动补全仍然由 Copilot 内置服务处理。扩展只影响 Chat 对话和 Agent 模式。

**Q：API Key 配置后如何更换？**
A：DeepSeek V4 扩展可通过命令面板重新执行 Set API Key；GCMP 可在模型管理界面重新输入 Key。

**Q：免费用户可以使用这些扩展吗？**
A：可以。Copilot Free 用户同样可以在模型选择器中看到并使用扩展添加的模型。但需要注意，第三方模型的 API 调用费用由你自己承担（直接支付给模型提供商）。

**Q：扩展是否支持 VS Code Remote SSH / Dev Containers？**
A：支持。在远程环境中安装对应扩展即可。API Key 需要在远程环境中重新配置。

**Q：GCMP 支持哪些协议的自定义模型？**
A：支持 OpenAI Compatible 和 Anthropic Compatible 两种协议。基本上所有主流模型服务商都至少兼容其中一种。
