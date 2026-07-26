---
tags:
  - tutorial
  - vscode
  - copilot
  - prompt
  - case
---

# Copilot 案例：Prompt 设计与复用

## 学习目标

- 通过实战创建可复用的 `.prompt.md` 文件。
- 掌握 Prompt 文件的 YAML frontmatter 配置。
- 学会通过斜杠命令 `/` 快速调用 Prompt。
- 了解参数化 Prompt 的实现方式。

## 前置条件

- 已掌握 Prompt 文件的概念（参考 [section8/02](../section8/02_copilot_instruction与prompt入门.md)）。
- 本教程的 [00*copilot案例*指令文件示例](00_copilot案例_指令文件示例.md) 已完成。
- 拥有本仓库的写权限。

## 项目概述

在本实战中，你将为本教程仓库创建一组实用的 Prompt 文件，放在 `.github/prompts/` 目录下。之后在 Chat 中输入 `/` 即可一键执行常见任务。

## 步骤

### 第 1 步：创建 Prompt 目录

在仓库根目录下创建：

```
.github/prompts/
```

### 第 2 步：创建"新建章节" Prompt

创建 `.github/prompts/新建章节.prompt.md`：

```markdown
---
description: "为本教程仓库创建新的标准章节，含 frontmatter、学习目标、步骤等"
name: "新建章节"
argument-hint: "章节编号和主题..."
agent: "agent"
---

请为本教程仓库创建新的章节 `section{input}`。

## 要求

1. 在仓库根目录创建 `section{input}/` 文件夹。
2. 在文件夹内创建 `00_主题概述.md` 文件。
3. 文件格式必须符合本仓库的写作规范（参考 copilot-instructions.md）。
4. 内容必须包含以下段落：
   - 学习目标（2-4 条）
   - 前置条件
   - 步骤（不少于 3 步，每步有具体操作说明）
   - 扩展阅读
   - 常见问题（不少于 3 条）
5. 完成后更新 README.md 的课程目录。
6. 更新 appendix/C\_更新日志.md。
```

### 第 3 步：创建"翻译文档" Prompt

创建 `.github/prompts/翻译文档.prompt.md`：

```markdown
---
description: "将选中的 Markdown 文档翻译为中文，保持格式不变"
name: "翻译文档"
agent: "ask"
---

请将以下内容翻译为中文，遵循以下规则：

1. 保持 Markdown 格式完全不变（标题、列表、代码块、表格等）。
2. 图片的替代文本 `![...]` 也需要翻译。
3. 链接和图片路径保持不变。
4. 代码块中的内容保持不变（代码、注释可翻译）。
5. 专有名词（Copilot、VS Code、GitHub 等）保留原文。
6. 使用中文标点符号。
```

### 第 4 步：创建"生成更新日志" Prompt

创建 `.github/prompts/生成更新日志.prompt.md`：

````markdown
---
description: "根据本次改动自动生成更新日志条目"
name: "生成更新日志"
agent: "agent"
---

请分析本次所有改动，然后在 `appendix/C_更新日志.md` 中添加一条新的更新日志条目。

## 格式要求

1. 在文件顶部插入新条目，日期为今天。
2. 如果今天已有条目，在日期后加序号（如 "2026-07-03 (第 2 次)"）。
3. 格式：

   ```markdown
   ## YYYY-MM-DD

   ### 新增

   - **文件路径**：说明文字。

   ### 变更

   - 说明文字。
   ```
````

4. 不要修改已有内容。

````

### 第 5 步：创建"优化文档" Prompt

创建 `.github/prompts/优化文档.prompt.md`：

```markdown
---
description: "分析当前文档并提出改进建议"
name: "优化文档"
agent: "ask"
---

分析当前文件的结构和内容，找出以下问题：

1. **重复内容**：是否有与其他章节重复的说明？
2. **步骤清晰度**：步骤是否可复现？是否有遗漏的操作？
3. **链接可用性**：相对路径是否正确？
4. **术语一致性**：专有名词是否与全仓库保持一致？
5. **格式规范**：是否符合本仓库的写作规范？

请为每个问题给出具体的修改建议，不要直接修改文件。
````

### 第 6 步：测试 Prompt 文件

1. 在 Copilot Chat 输入框中键入 `/`。
2. 在弹出的菜单中应该能看到你刚刚创建的 Prompt 文件：

```
/新建章节   /翻译文档   /生成更新日志   /优化文档
```

3. 选择 `/新建章节`，输入参数如 `9-测试`。
4. 观察 AI 是否按 Prompt 中的要求生成内容。

### 第 7 步：进阶——引用指令文件

Prompt 文件中可以引用已有的 `.instructions.md`，避免重复定义规则：

```markdown
---
description: "生成新的教程章节，遵循仓库已有规范"
name: "新建章节（进阶版）"
agent: "agent"
---

请参考 [写作规范](../instructions/markdown.instructions.md) 和 [全局指令](../../copilot-instructions.md)，创建一个新的教程章节。
```

> 这样当规范更新时，所有引用它的 Prompt 文件自动受益，无需逐一修改。

## 参数化技巧

| 语法      | 说明                         | 示例                         |
| :-------- | :--------------------------- | :--------------------------- |
| `{input}` | 单参数，用户在斜杠命令后输入 | `/新建章节 7-Syncthing`      |
| `{名称}`  | 具名参数，AI 会询问用户      | `请搜索 {关键词} 的最新信息` |

对于复杂任务，推荐在 Prompt 正文中使用 `{input}`，让用户一次输入所有信息。

## 扩展阅读

- [VS Code Prompt Files 官方文档](https://code.visualstudio.com/docs/copilot/customization/prompt-files)
- [Awesome Copilot - Prompts 示例](https://github.com/github/awesome-copilot)

## 常见问题

**Q：Prompt 文件支持中文文件名吗？**
A：支持。但考虑到跨平台兼容性，建议使用英文或拼音命名，通过 `name` 字段设置中文显示名。

**Q：Prompt 文件可以互相调用吗？**
A：不能直接调用。但你可以在一个 Prompt 中引用另一个 Prompt 文件的内容，或在对话中先执行一个 Prompt，再执行另一个。

**Q：如何删除一个 Prompt？**
A：直接删除对应的 `.prompt.md` 文件即可。重启 VS Code 后它就会从斜杠菜单中消失。
