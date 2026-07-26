---
tags:
  - tutorial
  - obsidian
  - web-clipper
---

# Obsidian Web Clipper 使用

## 学习目标

- 了解 Obsidian Web Clipper 的功能与适用场景。
- 掌握 Web Clipper 浏览器扩展的安装方法（Chrome / Edge / Firefox / Safari）。
- 掌握将网页内容剪藏到 Obsidian Vault 的基本操作。
- 了解模板、变量、高亮、解释器等进阶功能。
- 掌握 Web Clipper 的配置与管理方法。

## 前置条件

- 已安装 Obsidian 并打开本仓库为 Vault（参考 [section1/01](../section1/01_obsidian安装与配置.md)）。
- Obsidian 版本 ≥ **1.7.2**（Web Clipper 依赖新版 Obsidian URI 功能）。
- 安装任一主流浏览器：Chrome / Edge / Firefox / Safari。

> [!tip] 查看 Obsidian 版本
>
> 在 Obsidian 中打开 **设置 → 关于**，即可查看当前版本号。如果版本低于 1.7.2，请先更新 Obsidian。

## Obsidian Web Clipper 是什么

[Obsidian Web Clipper](https://obsidian.md/clipper) 是 Obsidian 官方推出的**免费浏览器扩展**，让你可以从浏览器中直接保存网页内容到 Obsidian Vault。

### 核心功能

- **剪藏网页**：一键将网页正文保存为 Markdown 笔记。
- **高亮标注**：在网页上高亮重要段落，剪藏时自动保留。
- **智能解释器**：使用自然语言提示词，让 AI 帮你提取网页关键信息。
- **自定义模板**：通过模板自动提取标题、日期、域名、元数据等。
- **多种保存方式**：支持添加到 Obsidian、保存为文件、复制到剪贴板。

### 适用场景

- **研究收集**：将在线文章、论文、文档保存到 Obsidian 以便后续阅读。
- **知识管理**：将网页中的有用信息转化为永久笔记。
- **灵感采集**：收藏设计灵感、代码片段、教程等。
- **学习笔记**：在阅读在线课程或文档时，标注并保存重要内容。

> Web Clipper 与前文介绍的 [Canvas](00_obsidian_canvas基础.md) 和 [Bases](../section6/00_obsidian_bases基础.md) 配合使用，可以形成完整的"**收集 → 整理 → 管理**"工作流。

## 步骤

### 第 1 步：安装浏览器扩展

Web Clipper 提供多个浏览器版本，请根据你的浏览器选择安装方式：

#### Chrome / Brave / Arc 等 Chromium 浏览器

1. 打开 Chrome 网上应用店：[Obsidian Web Clipper](https://chromewebstore.google.com/detail/obsidian-web-clipper/cnjifjpddelmedmihgijeibhnjfabmlf)。
2. 点击 **添加到 Chrome**。
3. 在弹出的权限对话框中点击 **添加扩展程序**。
4. 安装完成后，浏览器工具栏右上角会出现 Obsidian 图标。

#### Microsoft Edge

1. 打开 Edge 加载项页面：[Obsidian Web Clipper](https://microsoftedge.microsoft.com/addons/detail/obsidian-web-clipper/eigdjhmgnaaeaonimdklocfekkaanfme)。
2. 点击 **获取** → **添加扩展**。

#### Firefox / Firefox Mobile

1. 打开 Firefox 附加组件页面：[Obsidian Web Clipper](https://addons.mozilla.org/en-US/firefox/addon/web-clipper-obsidian/)。
2. 点击 **添加到 Firefox**。
3. 确认权限后点击 **添加**。

#### Safari（macOS / iOS / iPadOS）

1. 打开 Mac App Store：[Obsidian Web Clipper](https://apps.apple.com/us/app/obsidian-web-clipper/id6720708363)。
2. 下载安装后，在 Safari → **设置 → 扩展** 中启用 Web Clipper。

> [!tip] 安装后固定扩展
>
> 建议在浏览器工具栏中**固定** Obsidian Web Clipper 图标（Chrome/Edge 中点击拼图图标 → 找到 Web Clipper → 点击图钉按钮），方便日常使用。

### 第 2 步：连接 Obsidian Vault

安装扩展后，需要将其连接到你的 Obsidian Vault：

1. 点击浏览器工具栏中的 Obsidian 图标，打开 Web Clipper 弹窗。
2. 首次使用时，点击 **连接 Obsidian** 或 **设置**。
3. **自动检测**：如果 Obsidian 正在运行，扩展会自动检测到本地 Vault。
4. 选择本教程仓库对应的 Vault 名称。
5. 点击 **连接**。Obsidian 会收到连接请求，确认后即可。

> 如果自动检测失败，可以手动配置：
>
> - 复制 Obsidian URI 并粘贴到扩展设置中。
> - 确保 Obsidian 处于运行状态。

### 第 3 步：基本剪藏操作

连接成功后，就可以开始剪藏网页了。

#### 剪藏整个页面

1. 浏览到你想要保存的网页。
2. 点击浏览器工具栏的 Obsidian 图标。
3. 扩展弹窗会显示网页标题和预览内容。
4. 选择保存位置（Vault 中的目标文件夹）。
5. 点击 **添加到 Obsidian**。

几秒后，网页内容就会以 Markdown 格式保存到你的 Obsidian Vault 中。

#### 剪藏选中内容

1. 在网页上选中你想要保存的文本段落。
2. 右键 → 选择 **剪藏到 Obsidian**（或点击 Obsidian 图标）。
3. 扩展会自动提取选中内容作为笔记。
4. 选择目标文件夹，点击保存。

#### 剪藏结果示例

保存后的笔记会自动包含以下 Frontmatter：

```yaml
---
title: "网页标题"
source: "https://example.com/article"
domain: "example.com"
published: "2026-01-15"
description: "页面描述或摘要"
tags:
  - web-clipper
---
```

> 笔记内容为网页正文的 Markdown 转换，保留了标题层级、链接、图片等格式。

### 第 4 步：使用高亮功能

Web Clipper 支持在网页上直接标注高亮，剪藏时自动保留：

1. 打开任意网页。
2. 再次点击 Obsidian 图标，进入 **阅读器模式**（Reader View）。
3. 在阅读器模式中选中文字，会出现**高亮**按钮。
4. 点击高亮按钮，选中段落会被标记为高亮。
5. 剪藏时，高亮内容会包含在笔记中，并保留原文引用。

> 高亮功能的快捷键：
>
> - 选择文本后按 `H` 键快速高亮。
> - 在阅读器模式中，高亮段落会显示在侧边栏。

### 第 5 步：使用模板

模板是 Web Clipper 最强大的功能之一，可以自动提取网页元数据并格式化输出。

#### 选择预设模板

1. 点击 Obsidian 图标 → 打开模板选择器。
2. Web Clipper 内置了多个预设模板，如：
   - **默认模板**：基本文章格式。
   - **文章模板**：含标题、作者、日期、摘要的完整格式。
   - **简洁模板**：仅保留正文，无额外元数据。
   - **食谱模板**：专门用于保存烹饪食谱。
3. 选择一个模板，预览效果，点击保存。

#### 创建自定义模板

1. 点击 Obsidian 图标 → **设置** → **模板**。
2. 点击 **新建模板**。
3. 编辑模板内容，可使用变量自动填充网页数据。

**模板示例：**

```markdown
---
title: "{{title}}"
source: "{{url}}"
domain: "{{domain}}"
published: "{{published}}"
tags:
  - web-clipper
  - { { domain } }
---

# {{title}}

> **来源**：{{site}} · {{published}}
> **原文链接**：[{{url}}]({{url}})

## 摘要

{{description}}

---

{{content}}
```

#### 可用变量

| 变量                | 说明                   |
| :------------------ | :--------------------- |
| `{{title}}`         | 网页标题               |
| `{{url}}`           | 当前网页 URL           |
| `{{domain}}`        | 域名                   |
| `{{site}}`          | 站点名称               |
| `{{published}}`     | 发布日期               |
| `{{description}}`   | 页面描述/摘要          |
| `{{content}}`       | 网页正文（Markdown）   |
| `{{selection}}`     | 选中的文本（Markdown） |
| `{{selectionHtml}}` | 选中的文本（HTML）     |
| `{{image}}`         | 页面社交分享图 URL     |
| `{{favicon}}`       | 站点图标 URL           |
| `{{words}}`         | 字数统计               |
| `{{time}}`          | 当前时间               |
| `{{highlights}}`    | 高亮内容               |

> 更多模板示例可参考 [clipper-templates 仓库](https://github.com/kepano/clipper-templates)。

### 第 6 步：使用解释器（Interpreter）

解释器利用 AI 模型，根据你设定的提示词智能提取网页信息。

#### 启用解释器

1. 点击 Obsidian 图标 → **设置** → **解释器**。
2. 开启 **启用解释器**。
3. 配置 AI 模型提供商（支持 OpenAI、Anthropic、DeepSeek、Ollama 等）。
4. 添加 API Key 并选择模型。

#### 使用解释器

1. 在模板中添加提示词变量：
   ```markdown
   ## 关键要点

   {{prompt:提取这篇文章的 3 个关键要点}}
   ```
2. 剪藏网页时，扩展会调用 AI 分析页面内容。
3. AI 根据提示词生成结果并填充到笔记中。

> 解释器为**可选功能**，如果不配置 AI 模型，模板中的 `{{prompt:...}}` 变量会被忽略。

### 第 7 步：管理与设置

#### 查看剪藏历史

1. 点击 Obsidian 图标 → **设置** → **历史**。
2. 可以查看所有剪藏记录，包括时间、页面标题、目标 Vault。

#### 导出高亮

1. 设置 → **导出高亮** → 将高亮数据导出为 JSON 文件。
2. 可用于备份或迁移到其他工具。

#### 重要设置项

| 设置           | 说明                                                    |
| :------------- | :------------------------------------------------------ |
| **保存行为**   | 选择"添加到 Obsidian"、"保存为文件"或"复制到剪贴板"     |
| **静态打开**   | 剪藏后不自动切换到 Obsidian 窗口                        |
| **默认模板**   | 设置默认使用的模板                                      |
| **Beta 功能**  | 开启实验性功能（需 Obsidian 最新版本）                  |
| **阅读器主题** | 选择阅读器模式的外观主题（Flexoki、Ayu、Catppuccin 等） |

## 常见问题

### Q：Web Clipper 无法连接到 Obsidian？

1. 确认 Obsidian 正在运行且版本 ≥ 1.7.2。
2. 在扩展设置中点击"重新连接"。
3. 如果使用 Flatpak 或 Snap 安装的 Obsidian，URI 协议可能需要额外配置。
4. 重启浏览器和 Obsidian 后重试。

### Q：剪藏的内容格式混乱？

- 尝试在扩展设置中开启**阅读器模式**，以获得更干净的正文提取。
- 部分动态网页（如单页应用）可能无法正常提取，可以尝试选中内容后剪藏。
- 如果某些网站始终格式异常，可以为该网站创建自定义模板。

### Q：剪藏时某些内容缺失？

- 网页中的动态加载内容（如无限滚动）可能无法被完整捕获。
- 评论区域通常不会被提取。
- 可以尝试在页面完全加载后再进行剪藏。

### Q：Web Clipper 支持手机端吗？

- **Android**：Firefox Mobile 支持安装 Web Clipper 扩展。
- **iOS/iPadOS**：Safari 版本可从 App Store 下载。
- 手机端剪藏的内容会通过 Obsidian URI 发送到手机上的 Obsidian 应用。

### Q：如何分享或导入模板？

- 在模板设置中，可以**导出**模板为 JSON 文件。
- 导入时点击"导入模板"，选择 JSON 文件即可。
- 社区模板仓库：[github.com/kepano/clipper-templates](https://github.com/kepano/clipper-templates)。

## 练习任务

1. 在浏览器中安装 Obsidian Web Clipper 扩展。
2. 将扩展连接到本教程 Vault。
3. 找一篇你感兴趣的在线文章，使用默认模板剪藏到 Obsidian。
4. 创建一个自定义模板，添加 `{{domain}}` 和 `{{published}}` 变量。
5. （选做）在阅读器模式中高亮一段文字，保存后检查高亮是否保留。

## 验收清单

- [ ] Web Clipper 扩展已安装并在浏览器工具栏显示图标。
- [ ] 扩展已成功连接到 Obsidian Vault。
- [ ] 能使用默认模板剪藏网页内容。
- [ ] 理解模板变量的作用并能创建简单的自定义模板。
- [ ] 了解高亮功能和解释器（Interpreter）的用法。
- [ ] 知道如何配置 Web Clipper 的设置项。
