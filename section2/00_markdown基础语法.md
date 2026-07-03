---
tags:
  - tutorial
  - markdown
  - basic
---

# Markdown 基础语法

## 学习目标

- 了解 Markdown 的起源与设计哲学。
- 掌握标题、段落、换行、粗体、斜体语法。
- 掌握引用、有序列表、无序列表及嵌套。
- 掌握代码标记、分隔线、链接与图片。

## 前置条件

- 已安装 VS Code 或 Obsidian（参考 [section1](../section1/)）。
- 能在编辑器中创建 `.md` 文件并预览渲染效果。

## Markdown 是什么

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。它由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

- **专注于文字内容**：无需纠结排版，把精力放在写作上。
- **纯文本，易读易写**：可以方便地纳入版本控制（Git）。
- **语法简单**：没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

> Markdown 与 Word 不同。在 Word 中你通过按钮设置格式，修改立即可见；而在 Markdown 中，你在文本中**添加标记符号**来指示哪些内容应该呈现不同的样式。

## 步骤

### 1. 标题

要创建标题，请在单词或短语前面添加井号 `#`。`#` 的数量代表了标题的级别。

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

> [!tip] 兼容性
>
> - `#` 和标题文字之间**务必加一个空格**：`# 标题` ✅，`#标题` ❌。
> - 标题中避免使用空格，如需链接到该标题，可用 `-` 代替空格（如 `# 我的标题` → 链接为 `#我的标题`）。

### 2. 段落

要创建段落，请使用空白行将一行或多行文本进行分隔。

```markdown
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

> [!tip] 不要缩进段落
>
> 不要用空格或制表符缩进段落，否则可能导致意外的格式化问题。

### 3. 换行

在一行的末尾添加**两个或多个空格**，然后按回车键，即可创建一个换行。

```markdown
这是第一行。  
这是第二行。
```

> [!tip] 兼容性
>
> - **推荐方式**：行尾加两个空格，或使用 HTML 的 `<br>` 标签。
> - Obsidian 中开启「设置 → 编辑器 → 严格换行」后，单个换行符在预览模式下不再生效。

### 4. 粗体

要加粗文本，请在单词或短语的前后各添加两个星号 `**` 或下划线 `__`。

| 语法             | 效果           |
| :--------------- | :------------- |
| `**bold text**`  | **bold text**  |
| `__bold text__`  | **bold text**  |
| `Love**is**bold` | Love**is**bold |

> [!tip] 兼容性
>
> - 单词中间加粗用 `**` 而不是 `__`（下划线在单词中间可能不被识别）。
> - 中文加粗时，如果内容包含括号，建议在星号两侧留空格：`对于 **中文（包含括号）** 的情况`。

### 5. 斜体

要用斜体显示文本，请在单词或短语前后添加一个星号 `*` 或下划线 `_`。

| 语法                | 效果              |
| :------------------ | :---------------- |
| `*italicized text*` | _italicized text_ |
| `_italicized text_` | _italicized text_ |
| `A*cat*meow`        | A*cat*meow        |

### 6. 粗体和斜体

要同时用粗体和斜体，请添加三个星号 `***` 或下划线 `___`。

| 语法                                      | 效果                                    |
| :---------------------------------------- | :-------------------------------------- |
| `***really important***`                  | **_really important_**                  |
| `___really important___`                  | **_really important_**                  |
| `This is really***very***important text.` | This is really***very***important text. |

### 7. 引用（Blockquote）

要创建块引用，请在段落前添加一个 `>` 符号。

```markdown
> 这是一个引用。
```

引用可以包含多个段落：

```markdown
> 第一段内容。
>
> 第二段内容（中间空行加 `>`）。
```

引用可以嵌套：

```markdown
> 外层引用。
>
> > 内层引用。
```

> [!tip] VS Code 技巧
>
> 在 VS Code 中，如果要将多行内容放进引用块，可以先按 `Alt + Z` **关闭自动换行**，确保每行在视觉上就是逻辑行。然后按住 `Alt + Shift` 鼠标点击每一行的行首，一次性给所有选中行添加 `> ` 前缀。
>
> 操作完成后可再次按 `Alt + Z` 恢复自动换行。

### 8. 有序列表

在列表项前添加数字并紧跟一个英文句点。

```markdown
1. First item
2. Second item
3. Third item
```

数字不必按顺序，但列表应当以 `1` 起始：

```markdown
1. First item
1. Second item (也会显示为 1. 2.)
1. Third item (也会显示为 3.)
```

嵌套有序列表：缩进 3 个空格。

```markdown
1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item
```

### 9. 无序列表

在列表项前添加 `-`、`*` 或 `+`。

```markdown
- First item
- Second item
- Third item
```

嵌套无序列表：缩进 2 个空格。

```markdown
- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item
```

> [!tip] 兼容性
>
> 请勿在同一列表中混合使用 `-`、`*`、`+`，选择一种并保持一致。

### 在列表中嵌套其他元素

要在列表中嵌套段落或引用，请将该元素缩进（无序列表缩进 2 空格，有序列表缩进 3 空格）：

```markdown
- First list item.
- Second list item.

  I need to add another paragraph below the second list item.

  > A blockquote would look great below the second list item.

- Third list item.
```

### 10. 代码

将单词或短语表示为代码，请将其包裹在反引号 `` ` `` 中。

| 语法                                    | 效果                                |
| :-------------------------------------- | :---------------------------------- |
| ``At the command prompt, type `nano`.`` | At the command prompt, type `nano`. |

如果代码中包含反引号，请用双反引号包裹：

| 语法                                                     | 效果                                  |
| :------------------------------------------------------- | :------------------------------------ |
| <code>\`\`Use \`code\` in your Markdown file.\`\`</code> | ``Use `code` in your Markdown file.`` |

要创建代码块，请将每一行缩进四个空格，或使用围栏代码块（三个反引号）：

````markdown
```
这是一个代码块。
```
````

### 11. 分隔线

在单独一行上使用三个或多个 `***`、`---` 或 `___`。

```markdown
---

---

---
```

> [!tip] 兼容性
>
> 在分隔线前后均添加空白行，避免被误识别为标题。

### 12. 链接

链接文本放在中括号内，链接地址放在后面的括号中。

```markdown
[Markdown 语法](https://markdown.com.cn)
```

带 title（鼠标悬停时显示）：

```markdown
[Markdown 语法](https://markdown.com.cn "最好的 markdown 教程")
```

链接到本文的其他章节：

```markdown
[跳转到标题](#标题)
```

> [!caution] 标题链接兼容性
>
> VS Code 和 Obsidian 对标题中空格的处理不同（VS Code 转 `-`，Obsidian 转 `%20`），建议链接的目标标题避免使用空格。

### 13. 图片

要添加图像，请使用感叹号 `!`，方括号内放替代文本，圆括号内放图片路径。

```markdown
![替代文本](https://markdown.com.cn/assets/img/philly-magic-garden.jpg "图片标题")
```

图片路径可以是网络 URL 或本地相对路径：

```markdown
![本地图片](../image/example.png)
```

## 扩展阅读

- [Markdown 官方教程 (markdown.com.cn)](https://markdown.com.cn/)
- [Markdown Guide](https://www.markdownguide.org/)

## 常见问题

**Q：为什么我的标题不生效？**
A：检查 `#` 和文字之间是否有空格；检查 `#` 是否在行首。

**Q：为什么我的列表编号总是从 1 开始？**
A：Markdown 的有序列表会自动编号，不必手动维护数字顺序。

**Q：为什么预览中图片显示不出来？**
A：检查图片路径是否正确。本地路径需相对于当前文件位置；网络图片需可访问。

## 练习任务

完成本章学习后，请前往 [01_markdown基础练习](01_markdown基础练习.md) 完成配套练习。

## 验收清单

- [ ] 能正确使用 `#` 创建 1–6 级标题
- [ ] 能使用 `**` 和 `*` 设置粗体和斜体
- [ ] 能使用 `>` 创建引用（含多段和嵌套）
- [ ] 能创建有序列表和无序列表（含嵌套）
- [ ] 能使用 `` ` `` 标记代码
- [ ] 能使用 `---` 创建分隔线
- [ ] 能使用 `[text](url)` 创建链接
- [ ] 能使用 `![alt](src)` 插入图片
