---
tags:
  - appendix
  - faq
---

# 常见问题 FAQ

## 通用问题

### Q：我是初学者，应该按什么顺序学习？

建议按 **section0 → section1 → section2 → section3 → …** 的顺序依次进行。如果时间紧张，至少先完成 section1（环境安装），确保工具可用。

### Q：预估耗时包含练习时间吗？

包含。每节的估算已计入阅读文档 + 完成练习的时间。

### Q：如果某个章节卡住了怎么办？

1. 先查看该节的 **"常见问题"** 段落。
2. 搜索本 FAQ 文档是否有相关问题。
3. 仍未能解决，可提交 [Issue](https://github.com/FDscend/obsidian_tutorial/issues) 或在团队内讨论。

### Q：如何报告文档错误或提出改进建议？

请提交 [Issue](https://github.com/FDscend/obsidian_tutorial/issues) 或直接发起 PR，我们会尽快处理。

---

## 环境安装（section1）

### Q：安装顺序错了怎么办？

没有严格要求，但建议按 **Git → VS Code → Obsidian** 的顺序，可以减少重复操作。

### Q：能否只安装其中一部分？

可以。但至少需要 **Git + 一个编辑器**（VS Code 或 Obsidian）才能正常参与协作。

### Q：安装后看不到效果？

请先检查是否已打开本仓库文档；部分扩展需要**重启编辑器**才能生效。

### Q：打开 Vault 后看不到任何笔记？

请确认克隆仓库时选择了正确的文件夹路径；也可以使用 Obsidian 的"打开其他 Vault"重新选择。

### Q：`.obsidian.default` 和 `.obsidian` 有什么区别？

- `.obsidian.default` — 仓库提供的配置模板，供参考和恢复使用。
- `.obsidian` — 你个人实际生效的配置文件夹，已被 `.gitignore` 忽略，不会影响他人。

### Q：为什么安装了扩展但预览还是没变化？

大部分 Markdown 扩展需要**新开预览标签页**才能生效。如果是在已有的预览页中，请关闭预览后重新打开。

### Q：`git --version` 提示找不到命令？

安装后需要**重新打开终端**才会加载 PATH。如果还是找不到，请检查安装时是否选择了"Add to PATH"。

### Q：克隆时提示 SSL 错误？

可能是代理或防火墙问题。可临时尝试：

```bash
git config --global http.sslVerify false
```

> ⚠️ 不推荐长期关闭，仅用于临时排障。排障完成后建议重新开启。

### Q：提交后 GitHub 上看不到贡献记录？

检查 `git config --global user.email` 是否与 GitHub 注册邮箱一致。

### Q：如何切换 Markdown 预览主题？

VS Code 的 Markdown 预览主题跟随整体主题（`Ctrl+K Ctrl+T`）。额外的样式可修改 `.vscode/mdStyle.css`。

---

## Markdown 语法（section2 / section3）

### Q：为什么我的标题不生效？

检查 `#` 和文字之间是否有**空格**；检查 `#` 是否在**行首**。

### Q：为什么我的列表编号总是从 1 开始？

Markdown 的有序列表会自动编号，不必手动维护数字顺序。

### Q：为什么预览中图片显示不出来？

检查图片路径是否正确。本地路径需**相对于当前文件位置**；网络图片需可访问。

### Q：Mermaid 图表在 VS Code 预览中不显示？

请确认已安装 **Markdown Preview Mermaid Support** 扩展。

### Q：数学公式渲染为 LaTeX 源码？

检查公式的 `$` 包裹是否正确；Obsidian 中行内公式 `$` 内侧**不能有空格**。

### Q：Callout 在 VS Code 中显示为普通引用？

需要安装 `vscode-markdown-obsidian-alert` 扩展。

### Q：WikiLink 在 VS Code 中不生效？

VS Code 默认不支持 Obsidian WikiLink 格式，建议在 Obsidian 中查看或安装相关扩展。

### Q：Obsidian 预览时 Callout 显示不正常？

请确认在打开 Vault 时选择了**"信任作者"**。也可在设置 → 外观 → CSS 片段中检查是否有冲突。

---

## Git 协作（section4）

### Q：VS Code 提示"没有 Git 源控件"？

检查是否已安装 Git，以及是否在 VS Code 中打开了 Git 仓库（应包含 `.git` 文件夹）。

### Q：提交后想修改提交信息怎么办？

在源代码管理面板的 `…` 菜单中选择 **提交 → 撤消上次提交**，重新提交。

### Q：如何撤销对某个文件的修改？

在"更改"区域中，右键点击文件 → **放弃更改**，文件将回退到上次提交的状态。

### Q：我不小心接受了错误的更改，可以撤销吗？

- 如果**尚未提交**：使用 `…` → **中止合并** 回到合并前的状态。
- 如果**已提交**：使用 `…` → **撤消上次提交**。

### Q：创建分支后，VS Code 没有自动切换？

创建分支后需要**手动切换**。创建时如果勾选"从当前分支创建"，默认不会自动切换。

### Q：推送到远程时提示"没有上游分支"？

首次推送本地分支到远程时，VS Code 会询问是否发布。点击**发布分支**即可。

### Q：分支太多，如何清理？

合并后及时删除远程和本地分支。在 VS Code 中可通过 `…` → **分支 → 删除分支** 清理本地已合并的分支。

### Q：如果 PR 有冲突怎么办？

GitHub 会提示"合并冲突"。切回本地分支，拉取 main 到分支，在本地解决冲突后再推送。具体操作见 [section4/02\_冲突处理演练.md](../section4/02_冲突处理演练.md)。

### Q：冲突标记太多，手动删除很麻烦？

使用 VS Code 的**合并编辑器**可以避免手动删除标记。也可使用"接受当前更改"或"接受传入更改"按钮一键解决。

### Q：如何知道哪些文件有冲突？

在源代码管理面板中，冲突的文件前面会显示 `!` 标记，VS Code 也会在状态栏提示冲突数量。

### Q：合并提交信息很重要吗？

是的。包含冲突解决说明的提交信息可以帮助团队成员理解为什么某些更改被保留或放弃。

---

## Obsidian Canvas（section5）

### Q：Canvas 文件存在哪里？

`.canvas` 文件保存在你创建时所在的文件夹，与其他 Markdown 文件一样，受 Git 管理。

### Q：为什么我的工具栏没有某些按钮？

请确认 Canvas 核心插件已开启。如仍未显示，检查是否有其他插件冲突。

### Q：卡片中的 Markdown 预览不完全？

Canvas 中的卡片渲染与笔记预览略有不同，部分复杂 Markdown 可能显示为纯文本。建议在笔记中编辑，然后嵌入到 Canvas 中。

### Q：不小心删除了卡片，可以撤销吗？

可以。按 `Ctrl+Z` 撤销删除，Canvas 支持多步撤销。

### Q：如何将外部图片添加到 Canvas？

直接拖拽图片文件到画布上，或使用工具栏的"媒体"按钮选择文件。

### Q：卡片太多，画布变得很乱怎么办？

使用**分组（Groups）** 来归类卡片，并利用缩放和平移聚焦到特定区域。也可以将不同主题放在不同的 Canvas 中。

### Q：课程地图嵌入 README.md 后不显示？

在 GitHub 等平台上，`.canvas` 文件无法直接渲染。建议在 README 中使用**截图 + 链接**的方式。

### Q：命令面板里找不到 Advanced Canvas 相关命令？

通常是插件未启用或加载失败。请在设置 → 社区插件中确认已启用 Advanced Canvas，然后**重启 Obsidian** 再试。

### Q：Canvas 的 frontmatter 应该写哪些字段？

最低建议写 `tags` 和 `status`。如果是团队协作，再增加 `owner` 与 `review_cycle`。字段名尽量在团队内保持一致。

---

## Obsidian Bases（section6）

### Q：为什么我的 Base 中没有显示任何数据？

最常见的原因是筛选条件过于严格，导致没有匹配的笔记。请检查筛选条件，尝试**先移除所有筛选条件**，确保至少有一个笔记被匹配。

### Q：Bases 和传统的 Dataview 插件有什么区别？

| 方面     | Bases                      | Dataview           |
| :------- | :------------------------- | :----------------- |
| 插件类型 | 官方核心插件               | 社区插件           |
| 查询方式 | 图形化界面（筛选 / 排序）  | 类 SQL 查询语法    |
| 学习难度 | 低（直观易用）             | 中高               |
| 功能上限 | 基础筛选、排序、公式、汇总 | 更复杂的查询和计算 |
| 适用人群 | 非技术用户                 | 熟悉查询语法的用户 |

### Q：修改 Base 会删除原始笔记吗？

**不会**。Base 只是笔记库的一个视图。即使删除整个 `.base` 文件，所有原始 `.md` 笔记文件依然完整保留。

### Q：如何删除一个 Base？

直接在文件管理器中删除 `.base` 文件即可。这不会影响任何笔记文件。

### Q：Base 中修改了值，但笔记文件没有更新？

请检查笔记文件的 Frontmatter 是否正确**闭合**（`---`）。格式错误的 Frontmatter 会导致属性无法写入。

### Q：为什么我的 Base 中某些笔记没有显示某个字段的值？

这是因为这些笔记的 Frontmatter 中缺少对应的属性。在 Base 中双击对应单元格，填写值后会自动添加到笔记的 Frontmatter 中。

### Q：添加了新的章节笔记，为什么 Base 中没有出现？

检查新笔记是否在 Base 筛选条件所包含的文件夹中，以及笔记的 Frontmatter 格式是否正确。如果使用标签筛选，确保笔记包含对应的标签。

### Q：如何为不同的负责人创建独立的视图？

可以创建多个视图，每个视图添加不同的筛选条件。例如，视图 A 筛选 `owner = "张三"`，视图 B 筛选 `owner = "李四"`。

### Q：Base 中修改了数据，其他协作者能看到吗？

可以。因为 Base 修改的是笔记的 Frontmatter，这些变更会通过 Git 提交同步给所有协作者。确保修改后及时提交推送。

### Q：公式中的条件判断写错了，Base 会报错吗？

公式语法错误通常不会导致 Base 崩溃，但公式字段会显示为**空或错误值**。可以在 `.base` 文件中检查公式语法，确保引号、括号匹配。

### Q：可以同时使用多个 Base 文件吗？

可以。你可以在不同目录下创建多个 `.base` 文件，每个 Base 独立管理不同的数据范围。它们之间互不影响。

### Q：Base 支持多人协作吗？

`.base` 文件是纯文本 YAML，可以纳入 Git 版本控制。但多人同时编辑可能会有冲突，建议**由一人负责 Base 配置的维护**。

---

## Syncthing 同步（section7）

### Q：Web UI 打不开？

确保 Syncthing 正在运行，并确认访问地址正确（默认 `http://127.0.0.1:8384`）。如果修改过端口，使用修改后的端口访问。

### Q：防火墙弹窗警告？

Windows Defender 或第三方防火墙可能会拦截 Syncthing。首次运行时请允许 **Syncthing** 和 **SyncTrayzor** 在**专用网络**（局域网）上通信。

### Q：我可以在多台设备上同时读写同步的笔记吗？

可以。但如果同一文件在不同设备上同时修改，Syncthing 会产生**冲突副本**（文件名包含 `.sync-conflict-` 标记）。建议在不同设备上错开编辑时间，或在编辑前确认同步已完成。

### Q：配对成功后文件夹状态一直是"未同步"？

可能的原因：

- 两设备网络不通（尝试在设备 A 上 `ping` 设备 B 的 IP）。
- 防火墙阻止了 Syncthing 端口（`22000/tcp`）。
- 文件夹 ID 不匹配（检查两台设备上文件夹 ID 是否完全一致）。

### Q：同步速度很慢？

- 确认设备处于同一局域网，直连速度最快。
- 检查设置中是否启用了**中继**（局域网内应关闭中继以启用直连）。
- 确认没有启用速率限制。
- 如果有大量小文件需要同步，初始同步会慢一些，耐心等待即可。

### Q：如何确认两台设备是直连还是通过中继？

在 Web UI 右侧**远程设备**区域，点击已连接的设备。查看 **地址** 列：如果显示 `tcp://192.168.x.x:22000`，说明是直连；如果显示 `relay://`，说明通过中继。

### Q：Git 仓库能用 Syncthing 同步吗？

**可以**，但需要注意：

- Syncthing 同步和 Git 版本控制是**互补**的，不是替代关系。
- Git 仓库中的 `.git` 文件夹会被同步——这通常没问题，但如果两台设备同时执行 Git 操作（如 `git commit`），可能导致 `.git` 目录冲突。
- **推荐策略**：日常编辑用 Syncthing 实时同步，在正式提交到 GitHub 时**选择一台设备**执行 `git add / commit / push` 操作，避免多设备同时操作 Git。

---

## VS Code Copilot（section8 / section9）

### Q：Copilot 有哪些订阅方案？

GitHub Copilot 提供以下方案：

- **个人版（Individual）**：$10/月 或 $100/年
- **企业版（Enterprise）**：$19/月（含组织级策略管理）
- **免费版（Free）**：每月有限次数补全和对话，适合试用

> 详情见 [section8/00_copilot基础与订阅说明.md](../section8/00_copilot基础与订阅说明.md)。

### Q：Copilot 在中国大陆能用吗？

可以。Copilot 在中国大陆正常可用，无需特殊网络配置。如果是自定义 API 接入，可选用国内服务商（如 DeepSeek、阿里云等）。

### Q：提示"Copilot 未登录"怎么办？

1. 点击 VS Code 底部状态栏的 Copilot 图标。
2. 选择"登录以使用 Copilot"。
3. 浏览器弹出 GitHub 登录页面，完成授权。
4. 如果遇到 401 错误，VSCode 设置中搜索 `github.copilot.advanced`，找到 `Debug override overrideCoproduct` 节点，把 `name` 设为 `vsc` 即可恢复。

### Q：如何配置自定义 API（如 DeepSeek）？

Copilot 本身不支持自定义 API。如需接入其他 AI 服务，有两种方式：

- **方式一**：使用 **Continue 扩展**（推荐），可同时接入多个提供商。
- **方式二**：使用 VS Code 的 `github.copilot.chat.codeGeneration.instructions` 等设置调整行为。

> 详细配置见 [section8/01\_扩展接入自定义api.md](../section8/01_扩展接入自定义api.md)。

### Q：指令文件（Instruction）不生效？

排查步骤：

1. 检查文件命名：仓库级指令必须命名为 `copilot-instructions.md`。
2. 检查文件位置：仓库级指令在 `.github/copilot-instructions.md`，工作区级在工作区根目录。
3. 检查 `applyTo` 配置：文件级指令通过 `applyTo` 的 glob 模式匹配目标文件。
4. 确认 VS Code 版本 ≥ 1.99（指令文件需要较新版本支持）。
5. 重启 VS Code 后重试。

### Q：怎样调试 Copilot 的行为？

打开 `Ctrl+Shift+U`（输出面板），在下拉菜单中选择 **GitHub Copilot** 或 **GitHub Copilot Chat**，可以查看 AI 的思考过程和错误信息。

### Q：如何查找可用的 MCP 服务器？

- **VS Code 扩展市场**：搜索 `@mcp`，筛选 MCP 相关扩展。
- **Smithery 目录**：https://smithery.ai/，按分类浏览。
- **Awesome MCP 列表**：GitHub 上的社区维护列表。
- **Tavily Search MCP**：专为 AI 优化的搜索服务，见 [section9/02](../section9/02_copilot案例_tavily_mcp搜索.md)。

### Q：Skill 的三种形态是什么？

1. **指令文件（Instructions）** — 静态规则，自动加载，适合全局约束。
2. **Custom Agent（自定义 Agent）** — 动态对话角色，解决特定领域问题。
3. **MCP 服务器** — 外部工具集成，为 AI 提供数据读写和操作能力。

> 详见 [section8/03_skill与mcp基础.md](../section8/03_skill与mcp基础.md)。

### Q：如何安装社区 Skill？

**方法一（推荐）**：将 Skill 文件夹放入 `.github/skills/<name>/`，重启 VS Code，在 Chat 中搜索 `/name` 即可使用。

**方法二**：在 VS Code 设置中添加 Skill 文件的绝对路径。

**方法三**：通过 MCP 服务器动态加载。

> 详见 [section9/03_copilot案例\_skill制作与安装.md](../section9/03_copilot案例_skill制作与安装.md) 和 [section9/04\_开源skill检索与接入.md](../section9/04_开源skill检索与接入.md)。

---

## 仓库与协作

### Q：如何克隆本仓库？

```bash
git clone https://github.com/FDscend/obsidian_tutorial.git
```

或使用 VS Code 的 **源代码管理 → 克隆仓库**，输入仓库 URL。

### Q：Fork 和 Clone 有什么区别？

- **Clone**：将远程仓库复制到本地，仍与原仓库关联。
- **Fork**：在 GitHub 上将他人仓库复制到自己的账号下，可独立修改并通过 PR 贡献回原仓库。

### Q：提交信息有什么格式要求？

推荐使用以下格式：

```
<type>(<scope>): <简短描述>
```

常用类型：

- `docs` — 文档变更
- `feat` — 新功能
- `fix` — 修复
- `style` — 格式调整
- `refine` — 优化改进

示例：`docs(section7): 新增 Syncthing 安装教程`

### Q：PR 的基本流程是什么？

1. 从 `main` 创建功能分支（如 `docs/section7-syncthing`）。
2. 在分支上编写文档或代码。
3. 推送分支到远程仓库。
4. 在 GitHub 上创建 Pull Request。
5. 等待 Code Review 和讨论。
6. 审核通过后合并到 `main`。
7. 删除已合并的分支。

### Q：如何编写符合规范的教程文档？

每节文档建议包含以下段落：

1. **Frontmatter**：`tags`、`title`、`status` 等元数据。
2. **学习目标**：本节结束后学到的知识点。
3. **前置条件**：开始前需要完成的内容。
4. **步骤**：分步操作说明。
5. **常见问题**：可能遇到的问题及解答。
6. **练习任务**：巩固练习。
7. **验收清单**：确认已掌握的技能。
