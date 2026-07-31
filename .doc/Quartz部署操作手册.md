# Quartz 部署操作手册

> 本文档说明如何将 Obsidian 笔记发布为静态网站。

---

## 架构概述

```
main 分支 (你的 Obsidian 仓库：笔记 + 网页 CSS 片段)
  │  编辑笔记、CSS
  ▼
GitHub Actions: sync-main-to-v5.yml  (推送 main 时自动触发，单条流水线)
  │  1. checkout v5（Quartz 引擎）→ v5-branch/
  │  2. 复制 main 笔记 → v5-branch/content/
  │  3. 按 .web-snippets 复制 CSS → v5-branch/quartz/styles/snippets/
  │  4. 尝试推送 v5 分支（受 PR 保护；配置 SYNC_PAT 后自动同步）
  │  5. npm ci → npx quartz build
  │  6. 部署 public/ → gh-pages 分支
  ▼
gh-pages 分支 (纯静态文件)
  │
  ▼
GitHub Pages → https://FDscend.github.io/obsidian_tutorial/

说明：v5 分支本身只作为「Quartz 构建引擎 + 站点配置」的宿主，
内容与 CSS 由工作流在 CI 中临时注入，不再把同步结果提交回 v5（除非配置 SYNC_PAT）。
```

---

## 日常操作

### 1. 编辑笔记

在 `main` 分支上正常编辑、添加笔记。支持：

- Markdown 文件（`.md`）
- Obsidian 语法（wikilink、callout、标签等）
- LaTeX 公式（`$...$` 或 `$$...$$`）
- Mermaid 图表
- Canvas 文件（`.canvas`）— 会被 Quartz 渲染为页面
- Base 文件（`.base`）— 会被 Quartz 渲染为数据库视图
- 图片（放到 `image/` 目录）

### 2. 发布更新

```bash
git add .
git commit -m "更新笔记"
git push origin main
```

推送后，`sync-main-to-v5` 一个工作流自动完成：同步内容与 CSS → 构建 → 部署到 Pages。

约 2-3 分钟后网站更新。

> 该工作流会尝试把同步结果推送到 v5 分支，但 v5 有 PR 保护规则，
> CI 的 GITHUB_TOKEN 无法绕过（仅打印警告，不影响部署）。
> 若希望 v5 分支也自动同步，请在仓库 Settings → Secrets and variables → Actions
> 配置名为 `SYNC_PAT` 的 secret（需有仓库写权限的 Personal Access Token）。

### 3. 本地预览（可选）

需要在本地安装 Node.js v22+。

```bash
# 切换到 v5 分支
git checkout v5
git pull origin v5

# 同步最新的笔记与 CSS（因为 origin/v5 分支内容默认不自动更新）
#   - 笔记：把 main 的 section*/appendix/markdown格式总结.md 等复制到 v5/content/
#   - CSS：把 main 的 .obsidian.default/snippets/ 中 .web-snippets 列出的文件
#     复制到 v5/quartz/styles/snippets/ 并重新生成 _index.scss（逻辑同 CI 步骤）
#   - 若配置了 SYNC_PAT，v5 会自动同步，可跳过此步

# 安装依赖（首次或依赖更新时）
npm ci

# 安装 Quartz 插件
npx quartz plugin install

# 启动本地预览
npx quartz build --serve
```

浏览器打开 `http://localhost:8080` 即可预览。

> 注意：v5 分支上的 `content/` 可能落后于 main（除非配置了 `SYNC_PAT`）。
> 预览前请先同步，否则看到的不是最新内容。

---

## 目录说明

| 目录/文件                 | 所在分支           | 说明               |
| ------------------------- | ------------------ | ------------------ |
| `section0/` ~ `section9/` | main → v5/content/ | 教程章节           |
| `appendix/`               | main → v5/content/ | 附录               |
| `image/`                  | main → v5/content/ | 图片资源           |
| `Clippings/`              | main（不同步）     | 网页剪藏，不发布   |
| `template/`               | main（不同步）     | 模板，不发布       |
| `.doc/`                   | main（不同步）     | 内部文档，不发布   |
| `quartz.config.yaml`      | v5                 | 站点配置           |
| `quartz/`                 | v5                 | Quartz 源码        |
| `content/`                | v5                 | 构建用的笔记源文件（默认不自动更新，见「本地预览」） |

---

## 配置说明

### 站点配置（`quartz.config.yaml`）

位于 `v5` 分支根目录。主要可调项：

```yaml
configuration:
  pageTitle: "Obsidian 教程" # 站点标题
  baseUrl: FDscend.github.io/obsidian_tutorial # 部署域名
  locale: zh-CN # 语言
  ignorePatterns: # 不发布的目录
    - .obsidian
    - .vscode
    - .doc
    - Clippings
    - template
    - private
  theme: # 主题配色
    typography:
      header: Noto Sans SC
      body: Noto Sans SC
      code: JetBrains Mono
```

### 页面布局

布局由 `quartz.config.yaml` 中的 `plugins` 控制，每个插件可指定显示位置（`left`、`right`、`beforeBody`、`afterBody`）。

已启用的主要功能：

- **Explorer**（左侧文件树）
- **Search**（搜索）
- **Graph**（关系图谱）
- **Backlinks**（反向链接）
- **Table of Contents**（目录）
- **Darkmode**（暗色模式）
- **LaTeX**（公式渲染）

---

## 发布策略说明

### 同步范围

`sync-main-to-v5.yml` 会自动同步以下内容：

**同步的目录：**

- `section0/` ~ `section9/`
- `appendix/`
- `image/`

**同步的文件：**

- `markdown格式总结.md`
- `README.md`
- `教程课程地图.canvas`（如存在）

**不同步的内容：**

- `Clippings/`
- `template/`
- `.doc/`
- `.obsidian/`
- `.vscode/`

### 为什么用三个分支

| 分支       | 用途                       | 谁修改                            |
| ---------- | -------------------------- | --------------------------------- |
| `main`     | 原始 Obsidian 仓库（笔记 + 网页 CSS 片段） | 你手动编辑            |
| `v5`       | Quartz 构建引擎 + 站点配置宿主 | 你手动维护（引擎/配置升级）；内容默认不自动同步 |
| `gh-pages` | 构建产物（纯 HTML/CSS/JS） | Actions 自动生成，不要手动改      |

这样 `main` 保持纯笔记仓库，不混入 Quartz 的文件；
`v5` 只作为引擎宿主（几乎不改动，除非升级 Quartz 或改站点配置）。

---

## 常见问题

### Q: 新增了章节目录怎么办？

如果新建了 `section10/` 等目录，需要更新 `sync-main-to-v5.yml` 中的同步列表。编辑 `.github/workflows/sync-main-to-v5.yml`，在 `for dir` 行中添加新目录名。

### Q: 网站没更新？

1. 检查 Actions 运行状态：https://github.com/FDscend/obsidian_tutorial/actions
2. 确认 `main` 的推送已触发 `sync-main-to-v5`
3. 等待该工作流完成（绿色勾号），它会同步、构建并直接部署
4. 硬刷新浏览器（Ctrl+F5）

### Q: 想更新 Quartz 版本？

```bash
git checkout v5
npx quartz upgrade
# 如果有冲突，解决后提交
git push
```

### Q: 本地构建报错？

- Node.js 版本需 v22+：`node -v`
- 尝试重新安装插件：`npx quartz plugin install --latest`
- 查看错误日志中提示的具体文件

### Q: 如何完全重新部署？

```bash
# 删除 gh-pages 分支
git push origin --delete gh-pages
# 重新推送 main 触发 sync-main-to-v5 重新构建部署
git push origin main
# （或手动切到 v5 推送，触发 v5 上的 deploy.yml）
```

然后在 GitHub Pages 设置中重新选择 `gh-pages` 分支。

---

## 排查渲染问题（如何与 Agent 协作）

网页由「本地笔记 + CSS → CI 构建 → gh-pages」产生，排查前先明确每类文件住在哪个分支：

| 想改什么                     | 去哪个分支/文件 |
| ---------------------------- | --------------- |
| 笔记内容 / Markdown 语法      | `main` 的 `section*/appendix/*.md`、`markdown格式总结.md` |
| 网页 CSS 样式（callout、图片、代码等） | `main` 的 `.obsidian.default/snippets/`（须在 `.web-snippets` 中列出才生效） |
| 是否同步某个 CSS 片段          | `main` 的 `.obsidian.default/snippets/.web-snippets` |
| 站点标题/主题/插件/域名        | `v5` 的 `quartz.config.yaml` |
| Quartz 引擎本身（渲染逻辑）    | `v5` 的 `quartz/`（一般不动） |
| 流水线逻辑（同步哪些目录等）   | `main` 的 `.github/workflows/sync-main-to-v5.yml` |

### 从「本地到网页」的完整链路

1. **main** 上编辑笔记与 CSS 片段 → 推送 main
2. **sync-main-to-v5.yml** 被触发：
   - checkout `v5`（引擎）到 `v5-branch/`
   - 复制 main 的笔记 → `v5-branch/content/`
   - 按 `.web-snippets` 复制 CSS → `v5-branch/quartz/styles/snippets/`，生成 `_index.scss`
   - （尝试推送 v5，受 PR 保护时跳过）
   - `npm ci` → `npx quartz build`
   - 部署 `public/` 到 `gh-pages`
3. **GitHub Pages** 展示 gh-pages 分支内容

### 排查步骤建议

1. **本地复现**：`git checkout v5` → 同步最新 content/CSS（见「本地预览」）→ `npm ci` → `npx quartz build --serve` → `localhost:8080`
2. 判断问题归属：
   - 样式不对 → 看 `main/.obsidian.default/snippets/` 对应的 CSS，确认它在 `.web-snippets` 里
   - 内容不对 → 看 main 的笔记
   - 布局/渲染引擎问题 → 看 v5 的 `quartz/` 与 `quartz.config.yaml`
3. 修改后推 main，等待 CI 完成，硬刷新页面验证

> 给 Agent 的一句话模板：
> 「网页是从 main 的笔记 + `.obsidian.default/snippets`（按 `.web-snippets` 列表）→
> CI 注入到 v5 引擎构建 → gh-pages 发布的。请先本地 v5 分支 `npx quartz build --serve`
> 复现，再定位问题在 CSS 还是笔记还是引擎。」

---

## 参考链接

- Quartz 官方文档：https://quartz.jzhao.xyz/
- GitHub Pages 文档：https://docs.github.com/en/pages
- 本仓库：https://github.com/FDscend/obsidian_tutorial
