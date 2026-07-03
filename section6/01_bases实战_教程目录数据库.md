---
tags:
  - tutorial
  - obsidian
  - bases
  - project
---

# Bases 实战：教程目录数据库

## 学习目标

- 综合运用 Bases 的各项功能，构建一个实用的教程目录数据库。
- 掌握为笔记添加统一 Frontmatter 属性的方法。
- 掌握通过筛选定义 Base 数据范围的方法。
- 掌握多视图配置（表格/卡片）以适应不同使用场景。
- 学会使用公式计算派生字段（如状态图标、已创建天数）。
- 学会使用汇总功能统计整体进度。

## 前置条件

- 已掌握 Bases 基础操作（参考 [00_obsidian_bases基础](00_obsidian_bases基础.md)）。
- 已了解本教程的全部章节结构。
- Obsidian 核心插件 **Bases** 已开启。

## 项目概述

在本实战项目中，你将创建一个 **教程目录数据库** Base，将本仓库的全部教程章节以结构化方式管理，包括：

- 各章节的编号、主题、状态、编写进度、负责人员。
- 通过筛选快速定位特定章节。
- 通过公式自动计算状态图标、创建天数。
- 通过汇总查看整体完成进度。

> 🎯 **最终效果**：打开 Base 即可一目了然地看到整个教程的章节结构、进度状态和关键数据，无需翻阅多个分散的笔记文件。

## 步骤

### 第 1 步：为章节笔记添加统一 Frontmatter

Base 的数据来源于笔记的 Frontmatter。为了让 Base 能够管理章节信息，我们需要为每个章节的入口笔记添加统一的属性字段。

**需要添加的属性：**

| 属性            | 类型 | 说明                 | 示例值                       |
| :-------------- | :--- | :------------------- | :--------------------------- |
| `section`       | 文本 | 章节编号             | `section0`                   |
| `topic`         | 文本 | 章节主题             | `课程导读与协作规范`         |
| `status`        | 文本 | 编写状态             | `完成` / `进行中` / `待编写` |
| `difficulty`    | 数值 | 难度等级（1-5）      | `2`                          |
| `owner`         | 文本 | 负责人               | `团队名或人名`               |
| `prerequisites` | 列表 | 前置章节             | `["section1"]`               |
| `order`         | 数值 | 章节顺序（用于排序） | `0`                          |

**操作步骤：**

1. 打开 `section0/00_课程导读与协作规范.md`。
2. 在文件顶部的 Frontmatter 中添加以下属性：

```yaml
---
tags:
  - tutorial
  - overview
section: section0
topic: 课程导读与协作规范
status: 完成
difficulty: 1
owner: tutorial-team
prerequisites: []
order: 0
---
```

3. 保存文件。
4. 对其他章节的入口文档重复此操作：

| 文件路径                                    | section  | topic                         | status | difficulty | prerequisites     | order |
| :------------------------------------------ | :------- | :---------------------------- | :----- | :--------- | :---------------- | :---- |
| `section0/00_课程导读与协作规范.md`         | section0 | 课程导读与协作规范            | 完成   | 1          | `[]`              | 0     |
| `section0/01_学习路径与先修要求.md`         | section0 | 学习路径与先修要求            | 完成   | 1          | `[]`              | 1     |
| `section1/00_环境安装总览.md`               | section1 | 环境安装总览                  | 完成   | 2          | `["section0"]`    | 0     |
| `section1/01_obsidian安装与配置.md`         | section1 | Obsidian 安装与配置           | 完成   | 2          | `["section0"]`    | 1     |
| `section1/02_vscode安装与配置.md`           | section1 | VS Code 安装与配置            | 完成   | 2          | `["section0"]`    | 2     |
| `section1/03_git和github安装与登录.md`      | section1 | Git 和 GitHub 安装与登录      | 完成   | 2          | `["section0"]`    | 3     |
| `section2/00_markdown基础语法.md`           | section2 | Markdown 基础语法             | 完成   | 2          | `["section1"]`    | 0     |
| `section2/01_markdown基础练习.md`           | section2 | Markdown 基础练习             | 完成   | 3          | `["section2/00"]` | 1     |
| `section3/00_markdown扩展与obsidian语法.md` | section3 | Markdown 扩展与 Obsidian 语法 | 完成   | 3          | `["section2"]`    | 0     |
| `section3/01_mermaid公式脚注任务清单.md`    | section3 | Mermaid/公式/脚注/任务清单    | 完成   | 3          | `["section3/00"]` | 1     |
| `section4/00_vscode可视化git工作流.md`      | section4 | VS Code 可视化 Git 工作流     | 完成   | 3          | `["section1"]`    | 0     |
| `section4/01_分支与PR协作流程.md`           | section4 | 分支与 PR 协作流程            | 完成   | 4          | `["section4/00"]` | 1     |
| `section4/02_冲突处理演练.md`               | section4 | 冲突处理演练                  | 完成   | 4          | `["section4/01"]` | 2     |
| `section5/00_obsidian_canvas基础.md`        | section5 | Obsidian Canvas 基础          | 完成   | 3          | `["section1"]`    | 0     |
| `section5/01_canvas实战_课程地图.md`        | section5 | Canvas 实战：课程地图         | 完成   | 3          | `["section5/00"]` | 1     |
| `section6/00_obsidian_bases基础.md`         | section6 | Obsidian Bases 基础           | 进行中 | 3          | `["section1"]`    | 0     |
| `section6/01_bases实战_教程目录数据库.md`   | section6 | Bases 实战：教程目录数据库    | 进行中 | 4          | `["section6/00"]` | 1     |

> [!tip] 批量添加 Frontmatter 的技巧
>
> 如果笔记较多，可以使用 VS Code 的**搜索替换**功能或编写简单的脚本批量添加 Frontmatter 属性。也可以先设置好一个模板，后续新章节直接复制模板。

### 第 2 步：创建教程目录 Base

1. 在 `section6/` 文件夹下新建 Base，命名为 `教程目录数据库.base`。
2. 或者右键 `section6/` → **新建 Base** → 输入 `教程目录数据库`。

### 第 3 步：配置筛选（定义数据范围）

我们的 Base 要包含所有教程章节。有两种策略：

**策略 A：按文件夹筛选（推荐）**

我们所有的章节笔记都在 `section0/` 到 `section9/` 文件夹下。可以添加多个筛选条件：

1. 点击工具栏的 **筛选** 按钮。
2. 依次添加以下条件（使用 OR 组合）：

| 条件   | 运算符 | 值         |
| :----- | :----- | :--------- |
| Folder | is     | `section0` |
| Folder | is     | `section1` |
| Folder | is     | `section2` |
| ...    | ...    | ...        |

**策略 B：按标签筛选（需要统一标签）**

如果你已经为所有章节笔记添加了 `tutorial` 标签：

1. 添加一个筛选条件：`Tags` → `contains` → `tutorial`。
2. 所有带该标签的笔记都会出现在 Base 中。

**策略 C：在 .base 文件中直接编辑（精确控制）**

如果你熟悉 YAML，可以直接编辑 `.base` 文件：

```yaml
filters:
  or:
    - 'file.folder == "section0"'
    - 'file.folder == "section1"'
    - 'file.folder == "section2"'
    - 'file.folder == "section3"'
    - 'file.folder == "section4"'
    - 'file.folder == "section5"'
    - 'file.folder == "section6"'
```

### 第 4 步：添加并配置字段

现在添加我们在 Frontmatter 中定义的字段。

**添加字段：**

点击工具栏的 **字段** 或 **+** 按钮，添加以下字段：

| 显示名称 | 字段 ID         | 类型 | 说明             |
| :------- | :-------------- | :--- | :--------------- |
| 文件名   | `file.name`     | 文本 | 笔记文件名       |
| 章节     | `section`       | 文本 | 章节编号         |
| 主题     | `topic`         | 文本 | 章节主题         |
| 状态     | `status`        | 文本 | 编写状态         |
| 难度     | `difficulty`    | 数值 | 难度等级         |
| 负责人   | `owner`         | 文本 | 负责人           |
| 前置章节 | `prerequisites` | 列表 | 前置依赖         |
| 顺序     | `order`         | 数值 | 章节内排序用     |
| 创建时间 | `file.ctime`    | 日期 | 文件创建时间     |
| 修改时间 | `file.mtime`    | 日期 | 文件最后修改时间 |

**调整列顺序：**

拖拽列头，建议顺序：`文件名` → `章节` → `主题` → `状态` → `难度` → `负责人` → `前置章节` → `创建时间` → `修改时间`。

### 第 5 步：创建视图

Base 支持多个视图。我们创建两个视图用于不同场景。

#### 表格视图：完整数据总览

1. 在视图切换栏，确保当前是 **表格（Table）** 视图。
2. 点击视图名称（默认 "Table"），重命名为 `📋 数据总览`。
3. 在字段管理中调整显示的字段顺序（如上一步所示）。

#### 卡片视图：状态速览看板

1. 点击视图切换栏的 **+** 新建视图。
2. 选择 **卡片（Cards）** 类型。
3. 命名为 `📊 状态看板`。
4. 配置卡片显示的字段（建议只显示关键信息）：
   - `file.name` — 标题
   - `status` — 状态
   - `difficulty` — 难度
   - `owner` — 负责人

### 第 6 步：添加排序

在表格视图中，配置多级排序：

1. 点击工具栏的排序图标。
2. 添加以下排序规则：

| 排序层级 | 字段      | 方向 | 效果             |
| :------- | :-------- | :--- | :--------------- |
| 第 1 级  | `section` | 升序 | 按章节编号分组   |
| 第 2 级  | `order`   | 升序 | 章节内按顺序排列 |

这样，所有笔记会先按 `section` 分组（section0, section1, section2...），再按 `order` 排序，与课程的实际学习顺序一致。

### 第 7 步：添加公式

公式可以自动计算派生数据，让 Base 更智能。

**添加公式字段：**

在 `.base` 文件的 `formulas` 部分添加：

```yaml
formulas:
  # 状态图标：将文本状态转为可视化图标
  status_icon: |-
    if(status == "完成", "✅",
      if(status == "进行中", "🔄",
        if(status == "待编写", "⬜", "❓")))

  # 难度星级：将数值转为星标
  difficulty_stars: |-
    if(difficulty == 1, "⭐",
      if(difficulty == 2, "⭐⭐",
        if(difficulty == 3, "⭐⭐⭐",
          if(difficulty == 4, "⭐⭐⭐⭐",
            if(difficulty == 5, "⭐⭐⭐⭐⭐", "")))))

  # 已创建天数
  days_old: "(now() - file.ctime).days"

  # 综合标题：章节编号 + 主题
  full_title: 'section + "： " + topic
```

**在视图中使用公式：**

在字段列表中会出现 `formula.status_icon`、`formula.difficulty_stars` 等，可以像普通字段一样添加到视图中。

建议在表格视图中添加 `formula.status_icon` 和 `formula.difficulty_stars`，让状态和难度一目了然。

### 第 8 步：添加汇总

在表格视图底部添加汇总行，快速了解整体数据。

1. 点击字段列头的下拉菜单 → **汇总**。
2. 为以下字段添加汇总：

| 字段               | 汇总类型 | 效果             |
| :----------------- | :------- | :--------------- |
| `status`           | 计数     | 统计有多少条记录 |
| `difficulty`       | 平均值   | 查看整体难度水平 |
| `formula.days_old` | 平均值   | 查看平均创建天数 |

### 第 9 步：使用筛选快速定位

Base 建好后，你可以随时添加临时筛选来快速定位数据。

**常用筛选场景：**

**场景 1：只看未完成的章节**

| 字段     | 运算符 | 值     |
| :------- | :----- | :----- |
| `status` | is not | `完成` |

**场景 2：只看某个负责人的章节**

| 字段    | 运算符 | 值               |
| :------ | :----- | :--------------- |
| `owner` | is     | `你的名字或团队` |

**场景 3：找高难度章节**

| 字段         | 运算符       | 值  |
| :----------- | :----------- | :-- |
| `difficulty` | greater than | `3` |

**场景 4：查找特定章节下的所有笔记**

| 字段      | 运算符 | 值         |
| :-------- | :----- | :--------- |
| `section` | is     | `section5` |

**组合筛选示例：**

```yaml
filters:
  and:
    - 'status != "完成"'
    - "difficulty > 3"
```

这个筛选会找出所有**未完成**且**难度大于 3** 的章节，适合优先攻克硬骨头。

### 第 10 步：保存并查看 Base

完成以上配置后，你的教程目录数据库应该可以正常工作了。

**完整 .base 文件示例（供参考）：**

以下是 `教程目录数据库.base` 的完整 YAML 内容，你可以直接复制到文件中使用：

```yaml
---
filters:
  or:
    - 'file.folder == "section0"'
    - 'file.folder == "section1"'
    - 'file.folder == "section2"'
    - 'file.folder == "section3"'
    - 'file.folder == "section4"'
    - 'file.folder == "section5"'
    - 'file.folder == "section6"'
    - 'file.folder == "section7"'
    - 'file.folder == "section8"'
    - 'file.folder == "section9"'

formulas:
  status_icon: |-
    if(status == "完成", "✅",
      if(status == "进行中", "🔄",
        if(status == "待编写", "⬜", "❓")))
  difficulty_stars: |-
    if(difficulty == 1, "⭐",
      if(difficulty == 2, "⭐⭐",
        if(difficulty == 3, "⭐⭐⭐",
          if(difficulty == 4, "⭐⭐⭐⭐",
            if(difficulty == 5, "⭐⭐⭐⭐⭐", "")))))
  days_old: "(now() - file.ctime).days"
  full_title: 'section + "： " + topic

properties:
  file.name:
    displayName: "文件名"
  section:
    displayName: "章节"
  topic:
    displayName: "主题"
  status:
    displayName: "状态"
  difficulty:
    displayName: "难度"
  owner:
    displayName: "负责人"
  prerequisites:
    displayName: "前置章节"
  order:
    displayName: "顺序"
  file.ctime:
    displayName: "创建时间"
  formula.status_icon:
    displayName: "状态图标"
  formula.difficulty_stars:
    displayName: "难度星级"
  formula.days_old:
    displayName: "已创建天数"
  formula.full_title:
    displayName: "完整标题"

views:
  - type: table
    name: "📋 数据总览"
    order:
      - file.name
      - section
      - topic
      - formula.status_icon
      - status
      - formula.difficulty_stars
      - difficulty
      - owner
      - prerequisites
      - formula.days_old
    groupBy:
      property: section
      direction: ASC
    summaries:
      status: Count
      difficulty: Average

  - type: cards
    name: "📊 状态看板"
    order:
      - file.name
      - formula.status_icon
      - status
      - difficulty
      - owner
```

### 第 11 步：进阶优化（可选）

#### 按章节分组

在表格视图中，可以按 `section` 字段分组，让同一章节的笔记折叠在一起：

1. 点击字段列头的下拉菜单 → **分组**。
2. 选择 `section` 字段。
3. 每组的标题栏会折叠该组的所有行，点击可展开/收起。

#### 自定义汇总公式

如果你想要更精确的进度统计，可以添加自定义汇总：

```yaml
summaries:
  completion_rate: |-
    values.filter(v => v == "完成").length / values.length * 100
```

然后添加到视图的汇总配置中：

```yaml
views:
  - type: table
    name: "📋 数据总览"
    summaries:
      status: completion_rate
```

#### 导出与分享

Base 本身是一个 YAML 文件，你可以：

1. **纳入 Git 版本控制**：`.base` 文件是纯文本，直接提交即可。
2. **分享配置**：将 `.base` 文件的内容分享给协作者，他们创建同名的 Base 即可复用。
3. **嵌入笔记**：在笔记中通过 `![[教程目录数据库.base]]` 嵌入 Base 视图（部分 Obsidian 版本支持）。

> [!tip] Base 的维护建议
>
> - 每次新增章节时，记得更新 Frontmatter 和 Base 的筛选范围。
> - 定期在 `.base` 文件中添加新的 `formulas` 或 `summaries`，让数据展示更丰富。
> - 如果协作者较多，建议由一人维护 Base 配置，避免 YAML 冲突。

## 扩展阅读

- [Obsidian 官方帮助 - Bases](https://help.obsidian.md/Plugins/Bases)
- [Obsidian 官方帮助 - 属性（Frontmatter）](https://help.obsidian.md/Editing+and+formatting/Properties)
- [Obsidian 官方帮助 - 公式参考](https://help.obsidian.md/Plugins/Formulas)

## 常见问题

**Q：为什么我的 Base 中某些笔记没有显示某个字段的值？**
A：这是因为这些笔记的 Frontmatter 中缺少对应的属性。在 Base 中双击对应单元格，填写值后会自动添加到笔记的 Frontmatter 中。

**Q：添加了新的章节笔记，为什么 Base 中没有出现？**
A：检查新笔记是否在 Base 筛选条件所包含的文件夹中，以及笔记的 Frontmatter 格式是否正确。如果使用标签筛选，确保笔记包含对应的标签。

**Q：如何为不同的负责人创建独立的视图？**
A：可以创建多个视图，每个视图添加不同的筛选条件。例如，视图 A 筛选 `owner = "张三"`，视图 B 筛选 `owner = "李四"`。

**Q：Base 中修改了数据，其他协作者能看到吗？**
A：可以。因为 Base 修改的是笔记的 Frontmatter，这些变更会通过 Git 提交同步给所有协作者。确保修改后及时提交推送。

**Q：公式中的条件判断写错了，Base 会报错吗？**
A：公式语法错误通常不会导致 Base 崩溃，但公式字段会显示为空或错误值。可以在 `.base` 文件中检查公式语法，确保引号、括号匹配。

**Q：可以同时使用多个 Base 文件吗？**
A：可以。你可以在不同目录下创建多个 `.base` 文件，每个 Base 独立管理不同的数据范围。它们之间互不影响。

## 验收清单

完成本实战后，请逐项检查：

- [ ] 所有章节入口笔记已添加统一 Frontmatter（section / topic / status / difficulty / owner / prerequisites / order）。
- [ ] `教程目录数据库.base` 已创建并配置了正确的筛选条件。
- [ ] 表格视图能正确显示所有章节笔记。
- [ ] 排序设置正确（按 section 分组，按 order 排序）。
- [ ] 已配置至少一个公式字段（如 `status_icon`）。
- [ ] 已添加至少一个汇总（如 status 的计数）。
- [ ] 能通过筛选快速定位特定章节（如未完成的章节）。
- [ ] 卡片视图已创建并能正常展示。
