---
tags:
  - tutorial
  - vscode
  - copilot
  - instruction
  - case
---

# Copilot 案例：指令文件示例

## 学习目标

- 通过实战为本教程仓库创建有效的指令文件。
- 掌握 `.github/copilot-instructions.md` 的编写与迭代。
- 掌握文件级指令 `.instructions.md` 的创建与 `applyTo` 匹配。
- 学会验证指令文件是否正确加载。

## 前置条件

- 已掌握指令文件的概念（参考 [section8/02](../section8/02_copilot_instruction与prompt入门.md)）。
- 拥有本仓库的写权限（或 Fork）。
- 具备 Markdown 基础语法。

## 项目概述

在本实战中，你将为本教程仓库创建一套完整的指令文件体系，让 Copilot 在协助维护教程时，自动遵循仓库的写作规范。

## 步骤

### 第 1 步：创建仓库级全局指令

在仓库根目录下创建 `.github/copilot-instructions.md`：

```markdown
# 本教程仓库写作规范

## 技术栈

- 文档语言：Markdown（UTF-8 编码）
- 主要工具：Obsidian + VS Code
- 版本控制：Git + GitHub

## Markdown 格式

- 标题从 `#` 开始，最多 `####`。
- 代码块必须标注语言类型。
- 表格前后保持空行。
- 链接使用相对路径，不包含域名。

## 文档结构

- 每个章节首部使用统一 Frontmatter（tags）。
- 每节包含固定段落：学习目标、前置条件、步骤、常见问题、扩展阅读。
- 步骤使用 ### 三级标题，编号从"第 1 步"开始。

## 语言与术语

- 正文使用中文撰写。
- 代码注释和关键词使用英文。
- 术语保持全文一致（如 Copilot、VS Code、GitHub）。

## 文件命名

- 文件使用 `00_`, `01_` 数字前缀表示顺序。
- 文件名使用小写字母和下划线，不使用空格。
- 同一章节下的文件按数字前缀排序。
```

### 第 2 步：创建文件级指令

为不同类型的任务创建针对性的指令文件。

**Python 脚本相关指令：**

创建 `.github/instructions/python.instructions.md`：

```markdown
---
name: "Python 脚本规范"
description: "本仓库中 Python 工具脚本的编码约定"
applyTo: "**/*.py"
---

# Python 脚本规范

- 使用 Python 3.10+ 语法。
- 函数添加类型注解。
- 使用 `argparse` 处理命令行参数。
- 错误处理使用 try/except，不要忽略异常。
```

**Markdown 文档指令：**

创建 `.github/instructions/markdown.instructions.md`：

```markdown
---
name: "Markdown 文档规范"
description: "本仓库中所有教程 Markdown 文件的写作约定"
applyTo: "**/*.md"
---

# Markdown 文档规范

- 使用中文撰写正文。
- 图片的替代文本也需翻译为中文。
- 外部链接在新标签页打开。
- 不使用 HTML 标签（除非必需）。
- 每个 Markdown 文件不超过 500 行。
```

### 第 3 步：验证指令文件是否生效

**方法一：通过对话确认**

在 Copilot Chat 中提问：

```
本仓库有哪些写作规范？
```

如果指令文件正确加载，Copilot 会引用 `copilot-instructions.md` 中的内容回答。

**方法二：通过生成测试确认**

让 Copilot 生成一段新的章节草稿：

```
请为本教程创建一个新的章节，主题为"测试章节"。
```

观察输出的格式是否符合指令中定义的规范（Frontmatter、标题层级、段落结构等）。

**方法三：查看诊断信息**

1. 在 Chat 面板中右键 → **Diagnostics**（诊断）。
2. 查看 "Custom Instructions" 部分，确认所有指令文件已加载。
3. 如果文件未出现，检查文件路径和文件名是否正确。

### 第 4 步：迭代优化指令

指令文件不是一次写好的，需要根据实际使用情况持续优化：

| 现象                     | 解决方案                                    |
| :----------------------- | :------------------------------------------ |
| AI 仍使用不规范的格式    | 在指令中添加具体的正面/反面示例             |
| AI 忽略了某些规则        | 将该规则移到文件顶部（AI 更关注前面内容）   |
| 某些规则不适用于所有文件 | 拆分为文件级指令，使用 `applyTo` 做模式匹配 |
| 指令过多导致 Token 超限  | 精简内容，拆分到多个文件中                  |

### 第 5 步：团队共享

1. 将 `.github/copilot-instructions.md` 和 `.github/instructions/` 提交到 Git。
2. 所有克隆此仓库的成员都会自动继承这些指令。
3. 在 PR 描述中说明指令文件变更，方便团队 review。

## 扩展阅读

- [VS Code Custom Instructions 官方文档](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Awesome Copilot - Instructions 示例](https://github.com/github/awesome-copilot)

## 常见问题

**Q：指令文件修改后需要多久生效？**
A：保存文件后，下一次对话会自动加载最新内容。无需重启 VS Code。

**Q：如何调试指令文件没有生效？**
A：在 Chat 面板右键 → Diagnostics，查看 "Custom Instructions" 列表。没有出现的文件说明未被加载。

**Q：可以将指令文件放在子目录中吗？**
A：可以。`.github/instructions/` 支持子目录组织，VS Code 会递归搜索。
