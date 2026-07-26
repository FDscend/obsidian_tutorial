---
tags:
  - tutorial
  - quartz
  - deployment
  - github-pages
---

# Quartz 静态网站部署

## 学习目标

- 理解 Quartz v5 的基本概念和架构
- 掌握将 Obsidian 笔记发布为 GitHub Pages 的方法
- 学会配置自动化部署流水线
- 能够独立完成日常内容同步与维护

## 前置条件

- 完成 [section1](../section1/) 环境安装
- 完成 [section2](../section2/) Markdown 基础
- 拥有 GitHub 账号，并了解 [section4](../section4/) 的基础 Git 操作

## 章节结构

| 文件 | 内容                   | 说明                                |
| ---- | ---------------------- | ----------------------------------- |
| 00   | 本节导读               | 概述与架构总览                      |
| 01   | 环境准备与 Quartz 安装 | Node.js、npm、获取 Quartz v5        |
| 02   | 配置与本地构建         | `quartz.config.yaml` 配置、本地预览 |
| 03   | 自动化部署流水线       | GitHub Actions 设置、三分支策略     |
| 04   | 日常同步与维护         | 内容更新、版本升级、故障排查        |

## 什么是 Quartz？

Quartz 是一个快速、功能丰富的静态站点生成器，专门为发布 Obsidian 笔记而设计。它支持：

- **Obsidian 语法**：wikilink、callout、嵌入、标签等全部支持
- **LaTeX 公式**：通过 KaTeX 引擎渲染数学公式
- **Mermaid 图表**：流程图、时序图、甘特图等
- **全文搜索**：内置搜索功能，无需第三方服务
- **关系图谱**：笔记间的链接可视化
- **SPA 路由**：页面切换无刷新，体验流畅
- **暗色模式**：自动跟随系统或手动切换

## 整体架构

本教程采用 **三分支策略** 实现单仓库发布：

```
main 分支（你的 Obsidian 仓库）
  │  编辑笔记、添加图片
  │
  ▼
sync-main-to-v5.yml（GitHub Actions）
  │  自动同步内容
  │
v5 分支（Quartz 构建环境）
  │  content/ → 笔记源文件
  │  quartz.config.yaml → 站点配置
  │
  ▼
deploy.yml（GitHub Actions）
  │  npm ci → npx quartz build
  │
gh-pages 分支（构建产物）
  │
  ▼
GitHub Pages → 网站上线
```

### 为什么用三个分支？

| 分支       | 作用                         | 谁维护                         |
| ---------- | ---------------------------- | ------------------------------ |
| `main`     | 纯 Obsidian 笔记仓库         | 你手动编辑                     |
| `v5`       | Quartz 构建环境 + `content/` | Actions 自动同步 + 你维护配置  |
| `gh-pages` | 构建产物（HTML/CSS/JS）      | Actions 自动生成，不要手动修改 |

这样 `main` 保持干净整洁，不混入任何构建工具的文件。

## 扩展阅读

- [Quartz 官方文档](https://quartz.jzhao.xyz/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

## 常见问题

### Q: 必须用三个分支吗？一个分支行不行？

也可以，但会面临 Obsidian 中看到大量非笔记文件（`node_modules/`、`quartz/` 等）的问题。三分支实现了关注点分离。

### Q: Quartz 和 Hugo、Jekyll 有什么区别？

Quartz 专为 Obsidian 设计，原生支持 wikilink、callout、嵌入等语法，无需额外插件。Hugo 和 Jekyll 是通用 SSG，需要额外配置才能支持 Obsidian 语法。

## 练习任务

1. 浏览 [Quartz 官方文档](https://quartz.jzhao.xyz/) 的 Getting Started 部分
2. 了解三分支策略中各分支的职责
3. 思考自己的笔记仓库适合哪种发布方案

## 验收清单

- [ ] 理解了 Quartz v5 的基本概念
- [ ] 理解了三分支架构的原理
- [ ] 清楚各分支的职责和维护方式
