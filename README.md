---
tags:
  - tutorial
  - obsidian
  - vscode
  - git
  - markdown
  - copilot
---

# Obsidian 教程仓库

<center>📘 从零开始，掌握 Obsidian + VS Code + Git 的协作工作流</center>

> 🌐 **在线访问**：[**fdscend.github.io/obsidian_tutorial**](https://fdscend.github.io/obsidian_tutorial/)

---

## 📖 项目简介

本仓库是一套**可协作维护的教程**，目标是从零开始引导学员完成以下学习路径：

1. 🛠 **环境搭建** — 安装 Obsidian、VS Code、Git，并完成扩展/插件配置。
2. ✍️ **Markdown 写作** — 系统掌握基础语法、扩展语法与 Obsidian 特色语法。
3. 🤝 **团队协作** — 使用 VS Code 的可视化 Git 工作流进行分支开发、PR 与冲突处理。
4. 🗺 **知识组织** — 掌握 Obsidian Canvas（画布）、Advanced Canvas 增强（含 frontmatter）与 Bases（数据库）功能。
5. 📡 **多端同步** — 使用 Syncthing 实现局域网仓库同步。
6. 🌐 **静态网站部署** — 使用 Quartz 将教程发布为 GitHub Pages 站点。
7. 🤖 **Agent 基础** — 掌握 Agent 的接口知识（Base URL / API Key / 协议）与常用运行环境（Python、Node.js、Git Bash、PowerShell 7、ripgrep）。
8. 🤖 **AI 辅助** — 学会 VS Code Copilot 的基础使用与进阶案例（prompt、skill、mcp）。
9. 🔌 **多模型接入** — 在 VS Code 中接入 Claude Code 与 OpenAI Codex，掌握订阅、代理与网关配置。

> 📌 课程章节顺序：**先环境，后内容**。确保工具渲染正常再进入写作与进阶章节。

---

## 🚀 快速开始

### 前置条件

- 一台可上网的电脑（Windows / macOS / Linux 均可）
- 基本的文件操作能力

### 第 1 步：克隆仓库

```bash
git clone https://github.com/FDscend/obsidian_tutorial.git
```

或使用 VS Code 的 **源代码管理** → **克隆仓库**。

### 第 2 步：按顺序完成环境安装

| 顺序 | 任务                   | 文档                                                  | 预计用时  |
| :--- | :--------------------- | :---------------------------------------------------- | :-------- |
| 1    | 安装 Git 与注册 GitHub | [→ section1/03](section1/03_git和github安装与登录.md) | 10–15 min |
| 2    | 安装 VS Code 与扩展    | [→ section1/02](section1/02_vscode安装与配置.md)      | 10–15 min |
| 3    | 安装 Obsidian 与配置   | [→ section1/01](section1/01_obsidian安装与配置.md)    | 5–10 min  |
| 4    | 验证渲染效果           | [→ section1/00](section1/00_环境安装总览.md)          | 5 min     |

> 💡 全部完成后，打开 `section1/00_环境安装总览.md`，用渲染验收清单确认环境正常。

### 第 3 步：开始学习

根据你的需求选择入口：

- **Markdown 零基础** → 从 [section2](section2/) 开始
- **想学 Git 协作** → 跳至 [section4](section4/)
- **对 Obsidian 进阶功能感兴趣** → 查看 [section5](section5/)（Canvas + Web Clipper + frontmatter）和 [section6](section6/)（Bases）
- **需要多设备同步** → 查看 [section7](section7/)（Syncthing 局域网同步）
- **想部署为在线站点** → 查看 [section8](section8/)（Quartz + GitHub Pages）
- **想了解 Agent 接口知识与运行环境** → 查看 [section9](section9/)（Agent 基础）
- **想用 AI 辅助写作/编码** → 查看 [section10](section10/)（Copilot 基础 + 实战案例）
- **想接入 Claude Code / Codex 多模型 Agent** → 查看 [section11](section11/)（订阅、代理、网关、接口模式）

---

## 📚 课程目录

| 章节            | 主题                                     | 状态        |
| :-------------- | :--------------------------------------- | :---------- |
| **→ section0**  | **课程导读与协作规范**                   | **✅ 完成** |
| **→ section1**  | **环境安装（Obsidian / VS Code / Git）** | **✅ 完成** |
| **→ section2**  | **Markdown 基础语法**                    | **✅ 完成** |
| **→ section3**  | **Markdown 扩展与 Obsidian 语法**        | **✅ 完成** |
| **→ section4**  | **Git/GitHub 可视化协作**                | **✅ 完成** |
| **→ section5**  | **Obsidian Canvas / Web Clipper**        | **✅ 完成** |
| **→ section6**  | **Obsidian Bases 基础**                  | **✅ 完成** |
| **→ section7**  | **Syncthing 局域网同步**                 | **✅ 完成** |
| **→ section8**  | **Quartz 静态网站部署**                  | **✅ 完成** |
| **→ section9**  | **Agent 基础（接口知识 + 运行环境）**    | **✅ 完成** |
| **→ section10** | **VS Code Copilot（基础 + 实战案例）**   | **✅ 完成** |
| **→ section11** | **Claude Code 与 Codex 多模型接入**      | **✅ 完成** |
| **→ 附录**      | **术语表 / FAQ / 快捷键 / 更新日志**     | **✅ 完成** |

---

## 🛠 技术栈

| 工具       | 用途                             |
| :--------- | :------------------------------- |
| Obsidian   | 知识管理、Markdown 预览          |
| VS Code    | 代码编辑、Git 可视化、Copilot    |
| Git/GitHub | 版本控制与远程协作               |
| Markdown   | 文档编写语言                     |
| Quartz     | 静态网站生成与 GitHub Pages 部署 |

---

## 🤝 如何参与协作

本教程采用 VS Code 可视化 Git 工作流进行协作：

1. **Fork 本仓库** 或创建功能分支。
2. 按 [编写规范](.doc/教程项目总规划.md#5-编写规范适配-obsidian--vscode) 撰写/修改文档。
3. 提交 PR，等待审核合并。

> 详细的协作流程请参考后续的 **section4** 教程。

---

## 📄 许可

本项目仅供学习交流使用。
