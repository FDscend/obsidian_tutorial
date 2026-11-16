---
tags:
  - tutorial
  - vscode
  - copilot
  - mcp
  - case
---

# Copilot 案例：Tavily MCP 搜索

## 学习目标

- 掌握从 VS Code 扩展市场安装 MCP 服务器的方法。
- 掌握 Tavily Search MCP 的配置与使用。
- 学会让 Copilot 通过 MCP 搜索互联网获取最新信息。
- 了解 MCP 搜索的最佳实践与注意事项。

## 前置条件

- 已了解 MCP 的概念（参考 [section11/03](../section11/03_skill与mcp基础.md)）。
- 拥有一个 Tavily API Key（免费注册即可获得每月 1000 次搜索额度）。
- VS Code 已登录 GitHub Copilot。

## 项目概述

在本实战中，你将安装并配置 Tavily Search MCP 服务器，让 Copilot 能够搜索互联网获取最新信息——这是 Copilot 本身不具备的能力。

> 安装前，请先访问 [Tavily 官网](https://tavily.com) 注册账号，在 Dashboard 中创建一个 API Key（免费）。

## 步骤

### 第 1 步：从扩展市场安装（推荐）

1. 在 VS Code 中按 `Ctrl+Shift+X` 打开扩展面板。
2. 在搜索框中输入 `@mcp Tavily`。
3. 从结果中找到 **Tavily Search MCP** 扩展，点击安装。
4. 安装完成后，按照扩展提示输入你的 Tavily API Key。
5. 重启 VS Code。

### 第 2 步：验证安装

安装完成后，在 Copilot Chat 中尝试搜索：

```
请帮我搜索 "2026年 VS Code 最新功能"。
```

如果配置正确，Copilot 会调用 Tavily MCP 搜索网络并返回带有来源链接的结果。

### 第 3 步：手动配置（备选）

如果扩展市场中没有找到，也可以写配置文件。**文件位置取决于 harness**：

| 会话目标        | 文件                                   | 顶层字段     |
| :-------------- | :------------------------------------- | :----------- |
| Copilot（推荐） | 仓库根 `.mcp.json`                     | `mcpServers` |
| Copilot（个人） | `~/.copilot/mcp-config.json`           | `mcpServers` |
| 本地            | `.vscode/mcp.json`                     | `servers`    |

Copilot harness 版（`.mcp.json`）：

```json
{
  "mcpServers": {
    "tavily-search": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "${TAVILY_API_KEY}"
      },
      "tools": ["*"]
    }
  }
}
```

本地 harness 版（`.vscode/mcp.json`，注意 `servers` 与 `type: "stdio"`）：

```json
{
  "servers": {
    "tavily-search": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "${env:TAVILY_API_KEY}"
      }
    }
  }
}
```

> - 包名是 `tavily-mcp`（不是 `@tavily/mcp`），API Key 通过 `TAVILY_API_KEY` 环境变量传入。
> - 需要系统已安装 Node.js 20+（`npx` 随 Node.js 一起安装）。
> - 共享 `.mcp.json` 时用 `${TAVILY_API_KEY}` 引用环境变量，==不要把真实 Key 提交到仓库==；个人 `~/.copilot/mcp-config.json` 不纳入版本控制。
> - 也可以执行 **Chat: Open Customizations → MCP Servers → Add Server** 用表单添加，避免写错格式。

### 第 4 步：搜索实战

以下是一些可用于测试的搜索 Prompt：

**搜索最新技术资讯：**

```
请搜索 "2026年 AI 编程助手" 的最新趋势，用中文总结。
```

**搜索 VS Code 技巧：**

```
搜索 VS Code 2026 年 6 月的新功能，列出最实用的 5 个。
```

**对比性搜索：**

```
请搜索 DeepSeek V4 和 GPT-4o 的对比评测，用表格列出优缺点。
```

**带上下文的研究：**

```
我们的教程仓库使用 Obsidian + VS Code + Git。请搜索这三款工具在 2026 年的最佳协作实践。
```

### 第 5 步：查看 MCP 调试日志

如果搜索没有返回预期结果，可以查看调试日志：

1. 按 `Ctrl+Shift+U` 打开输出面板。
2. 在右上角的下拉菜单中选择 **Copilot**。
3. 观察 MCP 相关的日志输出，确认服务器是否成功启动和调用。

### 第 6 步：创建一个使用 MCP 搜索的 Prompt 文件

> [!warning] 该步骤需要本地（Local）harness
> Prompt 文件只在**本地**会话中生效，Copilot harness 不会加载。切换方法见 [section11/00](../section11/00_copilot基础与订阅说明.md#第-0-步确认会话目标harness)。若你使用 Copilot harness，请改写为 `.github/skills/ai资讯搜索/SKILL.md`：正文不变，frontmatter 用 `name` + `description`，`tools` 字段在 Skill 中不生效。

将 MCP 搜索能力封装成可复用的 Prompt 文件：

创建 `.github/prompts/ai资讯搜索.prompt.md`：

```markdown
---
description: "搜索 AI 编程领域的最新资讯并总结"
name: "AI 资讯搜索"
argument-hint: "搜索关键词..."
agent: "agent"
tools: ["tavily-search/*"]
---

请搜索 "{input}" 的最新信息，用中文总结：

## 要求

1. 优先搜索 2026 年的最新资料。
2. 用列表列出核心要点。
3. 如果搜索结果中包含数据或对比，使用表格展示。
4. 在末尾列出信息来源的链接。
5. 如果某个信息在多个来源中出现，标注为"多方确认"。
```

> `tools: ["tavily-search/*"]` 指定此 Prompt 执行时自动启用 Tavily MCP 工具。

### 搜索最佳实践

| 建议               | 说明                                            |
| :----------------- | :---------------------------------------------- |
| **指定时间范围**   | 在搜索词中加入年份（如 "2026年"），获取最新结果 |
| **使用中文关键词** | Tavily 对中文搜索支持良好，直接使用中文即可     |
| **要求列出来源**   | 在 Prompt 中要求 AI 列出来源链接，便于验证      |
| **结合本地知识**   | 先让 AI 搜索，再结合本地文件进行分析            |
| **注意额度**       | 免费版每月 1000 次搜索，合理规划使用            |

## 扩展阅读

- [Tavily 官方网站](https://tavily.com)
- [Tavily MCP 扩展市场页](https://marketplace.visualstudio.com/search?term=@mcp%20Tavily)
- [MCP 协议规范](https://modelcontextprotocol.io)
- [VS Code MCP 服务器配置](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)

## 常见问题

**Q：Tavily 搜索和普通搜索引擎有什么区别？**
A：Tavily 专为 AI 优化，返回结构化结果（摘要+来源），比直接调用 Google/Bing API 更简洁，且对 LLM 更友好。

**Q：搜索中文内容效果如何？**
A：Tavily 对中文搜索支持良好，但英文内容的覆盖更全面。建议中英文关键词都尝试。

**Q：免费额度用完了怎么办？**
A：可以升级 Tavily 付费计划，或使用其他 MCP 搜索服务（如 Bing Search MCP、Google Custom Search MCP）。

**Q：MCP 搜索返回的内容太旧怎么办？**
A：在搜索词中明确指定时间范围，例如 "2026 年 6 月以来"、"最近三个月"。
