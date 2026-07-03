---
tags:
  - changelog
  - appendix
---

# 更新日志

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
