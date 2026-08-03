---
tags:
  - changelog
  - appendix
---

# 更新日志

## 2026-08-03 (第 11 次)

### 变更

- 将原 `section10/`（Copilot 知识 + 案例混合）拆分为两个章节：**section10（Copilot 知识基础，00–03）** 与 **section11（Copilot 实战案例，00–04）**。
- 原 `section11/`（Claude Code 与 Codex）顺延为 **section12/**。
- 同步更新 `README.md`、学习路径、FAQ、课程地图、同步工作流与各章节交叉链接。

---

## 2026-08-03 (第 10 次)

### 新增

- **section9/04_运行环境_powershell7安装.md**：PowerShell 7（pwsh）安装与配置，涵盖 Windows PowerShell 5.1 与 7 的区别、winget / MSI 安装、验证，以及把 VS Code 默认终端切换为 pwsh 的配置。

### 变更

- `section9` 运行环境补齐 PowerShell 7；`README.md`、学习路径、总规划与交叉链接同步补充。

---

## 2026-08-03 (第 9 次)

### 变更

- 章节重排：将原 `section10/`（Quartz 静态网站部署）调整到 `section8/`，紧随 Syncthing 之后。
- 新增 `section9/`（Agent 基础：接口知识 + 运行环境），涵盖接口三要素（Base URL / API Key / 模型名）与协议知识，以及 Python / Node.js / Git Bash / ripgrep 的安装配置。
- 原 `section8/`（Copilot 基础）与 `section9/`（Copilot 实战案例）合并为 `section10/`（VS Code Copilot），文件编号顺延为 00–08。
- `section11/04`（接口模式选择与排错）移至 `section9/01`，作为 Agent 公共接口知识；`section9` 运行环境文件顺延为 02/03。
- 同步更新 `README.md`、学习路径、FAQ、同步工作流与各章节交叉链接。

---

## 2026-08-02 (第 8 次)

### 新增

- **section11/**：新增"Claude Code 与 Codex 多模型接入"章节，共 5 个文档：
  - **section11/00\_多模型agent总览与订阅说明.md**：Claude Code 与 Codex 总览 + 官方订阅方案（Claude Free/Pro/Max 5x/Max 20x/Team/Enterprise；ChatGPT Free/Go/Plus/Pro 5x/Pro 20x/Business/Enterprise），含三种接入模式（订阅 / API Key / 第三方网关）选择。
  - **section11/01\_claude_code在vscode中的安装与配置.md**：Claude Code VS Code 扩展安装、三种鉴权方式、`settings.json` 代理配置。
  - **section11/02\_codex在vscode中的安装与配置.md**：Codex VS Code 扩展 / CLI 安装、`auth.json` + `config.toml` 配置、自定义 Provider。
  - **section11/03\_网络代理与第三方网关接入.md**：代理配置、网关三要素（Base URL / Key / 模型名）、接入检查表。
  - **section11/04\_接口模式选择与排错.md**：`chat/completions`、`responses`、`messages` 三类协议对比、选择算法、错误矩阵、分层排查。

### 变更

- 新增 section11 章节，将"AI 辅助"模块从 Copilot 扩展到多模型 Agent（Claude Code + Codex）。
- `section11/01` 补充 **Claude 通用设置**（`~/.claude/settings.json`、项目 `.claude/settings.json` / `.claude/settings.local.json`）及优先级说明，与 VS Code 设置形成"两层配置"；`section11/03` 代理配置同步补充通用设置方式；`section11/02` 补充 `~/.codex/` 通用设置层对照说明。
- `README.md` 课程目录与快速开始入口同步更新。
- `.github/workflows/sync-main-to-v5.yml` 同步目录列表加入 section11。

---

## 2026-07-03 (第 7 次)

### 新增

- **section5/02_obsidian_web_clipper使用.md**：Obsidian Web Clipper 教程，涵盖浏览器扩展安装（Chrome/Edge/Firefox/Safari）、Vault 连接、基本剪藏操作、高亮功能、自定义模板（含变量参考）、解释器（Interpreter）配置、管理与设置。

### 变更

- section5 新增 Web Clipper 教学内容，扩展 Obsidian 工具链：**Canvas → Web Clipper**。
- `README.md` 快速开始入口同步更新。

---

## 2026-07-03 (第 6 次)

### 新增

- **appendix/B\_常见问题FAQ.md**：全教程常见问题汇总，按主题分类（通用问题、环境安装、Markdown 语法、Git 协作、Canvas、Bases、Syncthing、Copilot、仓库与协作），涵盖从各章节收集的 60+ 问答。

### 变更

- 附录（A 术语表 + B FAQ + D 快捷键总结）已全部完成。
- `README.md` 附录状态更新为 ✅ 完成。

---

## 2026-07-03 (第 5 次)

### 新增

- **appendix/A\_术语表.md**：全教程术语表，按主题分类（Markdown、Git/GitHub、Obsidian、Syncthing、Copilot、项目协作），涵盖 60+ 术语的定义与说明。
- **appendix/D\_快捷键总结.md**：常用快捷键速查手册，涵盖 VS Code 通用、Git 操作、Obsidian、Canvas、Bases、Copilot、Markdown 语法速查、常用终端命令。

### 变更

- 首次建立附录术语表和快捷键总结。

---

## 2026-07-03 (第 4 次)

### 新增

- **section7/00_syncthing安装与概念.md**：Syncthing 基础教程，涵盖安装方法（Windows/macOS/Linux）、核心概念（设备 ID、文件夹共享、中继与发现）、Web UI 界面说明、单机初始配置与文件夹添加。
- **section7/01\_局域网同步仓库实战.md**：实战项目——两台设备配对、仓库文件夹共享、同步验证、版本控制配置、冲突处理与恢复、进阶配置（仅发送/接收模式、速率限制、.stignore）。
- **section7/02\_常见问题与排障.md**：常见问题排查清单，涵盖安装启动问题、网络连接问题、同步问题、配置权限问题，含日志诊断工具、故障排查流程图与获取帮助渠道。

### 变更

- 首次建立 section7 目录结构，完成 Syncthing 局域网同步模块。
- 里程碑 M2（Obsidian 进阶）达成：section5 + section6 + section7 全部完成。

---

## 2026-07-03 (第 3 次)

### 新增

- **section9/00*copilot案例*指令文件示例.md**：实战创建 `.github/copilot-instructions.md` 和文件级 `.instructions.md`（含 `applyTo` 模式匹配），以及验证与迭代指令文件的方法。
- **section9/01_copilot案例\_prompt设计与复用.md**：实战创建 `.github/prompts/` 下的 Prompt 文件（新建章节/翻译文档/生成更新日志/优化文档），含参数化技巧和指令文件引用。
- **section9/02_copilot案例\_tavily_mcp搜索.md**：实战安装 Tavily Search MCP（扩展市场和手动两种方式），搜索最新资讯，封装为可复用的 Prompt 文件。
- **section9/03_copilot案例\_skill制作与安装.md**：实战创建完整的 Skill 文件夹（SKILL.md + 模板 + 参考文档），含不同安装路径和渐进式加载机制。
- **section9/04\_开源skill检索与接入.md**：社区 Skill 检索方法（Awesome Copilot / GitHub 搜索 / MCP 目录）、评估标准、安装与自定义指南。

### 变更

- 首次建立 section9 目录结构，完成 Copilot 实战案例模块。
- 里程碑 M3（Copilot 体系）达成：section8 + section9 全部完成。

---

## 2026-07-03 (第 2 次)

### 新增

- **section8/00_copilot基础与订阅说明.md**：Copilot 基础教程，涵盖 Copilot 概念与核心能力、订阅方案对比、扩展安装与登录、三种交互方式（Chat 面板/内联对话/代码补全）、隐私与安全策略。
- **section8/01\_扩展接入自定义api.md**：自定义 API 接入教程，重点介绍 Continue 扩展的配置方法，涵盖 OpenAI、Anthropic、Azure、Ollama、DeepSeek 等多种提供商配置，含 API Key 安全管理和模型选择策略。
- **section8/02_copilot_instruction与prompt入门.md**：指令文件与 Prompt 设计教程，涵盖仓库级/工作区级/用户级三级指令文件机制、编写有效指令的核心原则、Prompt 基本结构与优化方法、本仓库的指令实践参考。
- **section8/03_skill与mcp基础.md**：Skill 与 MCP 基础教程，涵盖 Skill 的三种形态（指令文件/Agent/MCP 服务器）、MCP 协议概念与工作方式、常用 MCP 服务器配置（Tavily Search / Filesystem / Git）、Skill 与 MCP 的协作关系、社区资源指引。

### 变更

- 首次建立 section8 目录结构，完成 VS Code Copilot 基础模块。

---

## 2026-07-03

### 新增

- **section6/00_obsidian_bases基础.md**：Obsidian Bases 基础教程，涵盖核心概念、创建 Base、管理字段、四种视图类型（表格/卡片/列表/地图）、筛选与排序、公式与汇总、直接编辑 YAML 的高级用法。
- **section6/01*bases实战*教程目录数据库.md**：实战项目——以本教程章节为数据源，创建教程目录数据库 Base，含统一 Frontmatter 配置、多视图设置、公式计算（状态图标/难度星级）、汇总统计、按章节分组。

### 变更

- 首次建立 section6 目录结构，完成 Obsidian Bases 模块。

---

## 2026-07-02

### 新增

- **section1/00\_环境安装总览.md**：环境安装总览文档，含工具依赖关系、安装清单、渲染验收清单（Callout / Mermaid / 数学公式 / 自定义样式）。
- **section1/01_obsidian安装与配置.md**：Obsidian 安装、Vault 打开、配置复制、核心/社区插件配置指南。
- **section1/02_vscode安装与配置.md**：VS Code 安装、扩展安装、配置复制、Markdown 预览验证指南。
- **section1/03_git和github安装与登录.md**：Git 安装、GitHub 账号注册、用户配置、仓库克隆指南。

### 变更

- 首次建立 section1 目录结构，覆盖环境安装完整流程。

---

## 2026-07-02 (第 2 次)

### 新增

- **section0/00\_课程导读与协作规范.md**：课程全景、仓库结构、分支策略、提交信息格式、PR 流程、编写规范。
- **section0/01\_学习路径与先修要求.md**：目标学员画像、先修要求、四条学习路径（完整/写作/协作/AI）、章节依赖关系图、学习建议。

### 变更

- 首次建立 section0 目录结构，完成课程导读模块。

---

## 2026-07-02 (第 3 次)

### 新增

- **section2/00_markdown基础语法.md**：Markdown 基础语法教程，涵盖标题、段落、换行、粗体、斜体、引用、有序/无序列表、列表嵌套、代码、分隔线、链接、图片。
- **section2/01_markdown基础练习.md**：10 道由浅入深的练习题（含综合运用短文），覆盖基础语法全部知识点。

---

## 2026-07-02 (第 4 次)

### 新增

- **section3/00_markdown扩展与obsidian语法.md**：涵盖表格、围栏代码块、脚注、删除线、任务列表、Emoji、自动网址链接、Mermaid 图表、数学公式、Obsidian 高亮、Callout（含全部类型与可折叠变体）、WikiLink、链接嵌入、转义字符。
- **section3/01_mermaid公式脚注任务清单.md**：9 组专项练习题（含综合运用），聚焦表格对齐、Mermaid 流程图/时序图/甘特图、行内/块级公式、Callout 类型、WikiLink。

### 变更

- 首次建立 section3 目录结构，完成扩展语法与 Obsidian 语法模块。

---

## 2026-07-02 (第 5 次)

### 新增

- **section4/00_vscode可视化git工作流.md**：VS Code 图形界面 Git 工作流教程，涵盖克隆、暂存、提交、推送、拉取、查看历史，含核心概念 Mermaid 图与暂存区最佳实践。
- **section4/01\_分支与PR协作流程.md**：分支创建/切换/合并、PR 创建与 Code Review、合并方式选择（merge commit / squash / rebase），含分支工作流 Mermaid 图。
- **section4/02\_冲突处理演练.md**：冲突产生原因、冲突标记识别、VS Code 合并编辑器使用、三种接受方式、单人/双人演练场景设置、冲突预防策略。

### 变更

- 首次建立 section4 目录结构，完成 Git/GitHub 可视化协作模块。

---

## 2026-07-02 (第 6 次)

### 新增

- **section5/00_obsidian_canvas基础.md**：Canvas 画布教程，涵盖创建画布、界面介绍、添加卡片（文本/笔记/网页）、连接线（样式/颜色/箭头）、卡片分组与对齐、标签与嵌入、导出分享。
- **section5/01_canvas实战\_课程地图.md**：实战项目——以本教程章节结构为素材，设计课程地图 Canvas，含布局规划、卡片创建（状态色标）、依赖连线、里程碑分组、图例。同时生成了可直接在 Obsidian 中打开的 **`教程课程地图.canvas`** 示例文件。
- **section5/教程课程地图.canvas**：实际可用的 Canvas 课程地图文件，包含 11 个章节卡片、3 个里程碑分组、10 条依赖连线、图例卡片。

### 变更

- 首次建立 section5 目录结构，完成 Obsidian Canvas 模块。
