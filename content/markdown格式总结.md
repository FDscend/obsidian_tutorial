---
tags:
  - markdown
  - obsidian
cssclasses:
  - cloze
---

# Markdown 是什么

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。[^intro]

1. 专注于文字内容；
1. 纯文本，易读易写，可以方便地纳入版本控制；
1. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

使用 Markdown 与使用 Word 类编辑器不同。在 Word 之类的应用程序中，单击按钮以设置单词和短语的格式，并且，更改立即可见。而 Markdown 与此不同，当你创建 Markdown 格式的文件时，可以在文本中添加 Markdown 语法，以指示哪些单词和短语看起来应该有所不同。

[^intro]: [Markdown 是什么？ (markdown.com.cn)](https://markdown.com.cn/intro.html#markdown-%E6%98%AF%E4%BB%80%E4%B9%88)

# 语法速查

## 速查[基本语法](#基本语法)

> [!multi-column|col2]
>
> > [!done] [标题（Heading）](#标题)
> >
> > ```markdown
> > # H1
> >
> > ## H2
> >
> > ### H3
> > ```
>
> > [!done] [段落](#段落)
> >
> > ```markdown
> > paragraph 1
> >
> > paragraph 2
> > ```
>
> > [!done] [换行](#换行)
> >
> > ```markdown
> > First line with the HTML tag after.<br>
> > And the next line.
> > ```
>
> > [!done] [粗体（Bold）](#粗体)
> >
> > ```markdown
> > **bold text**
> > ```
>
> > [!done] [斜体（Italic）](#斜体)
> >
> > ```markdown
> > _italicized text_
> > ```
>
> > [!done] [引用块（Blockquote）](#引用)
> >
> > ```markdown
> > > blockquote
> > ```
>
> > [!done] [有序列表（Ordered List）](#有序列表)
> >
> > ```markdown
> > 1. First item
> > 2. Second item
> > 3. Third item
> > ```
>
> > [!done] [无序列表（Unordered List）](#无序列表)
> >
> > ```markdown
> > - First item
> > - Second item
> > - Third item
> > ```
>
> > [!done] [代码（Code）](#代码)
> >
> > ```markdown
> > `code`
> > ```
>
> > [!done] [分隔线（Horizontal Rule）](#分隔线)
> >
> > ```markdown
> > ---
> > ```
>
> > [!done] [链接（Link）](#链接)
> >
> > ```markdown
> > [title](https://www.example.com)
> > ```
>
> > [!done] [图片（Image）](#图片)
> >
> > ```markdown
> > ![alt text](image.jpg)
> > ```

## 速查[扩展语法](#扩展语法)

> [!multi-column|col2]
>
> > [!todo] [表格（Table）](#表格)
> >
> > ```markdown
> > | Syntax    | Description |
> > | --------- | ----------- |
> > | Header    | Title       |
> > | Paragraph | Text        |
> > ```
>
> > [!todo] [代码块（Fenced Code Block）](#围栏代码块)
> >
> > ````
> > ```json
> > {
> >   "firstName": "John",
> >   "lastName": "Smith",
> >   "age": 25
> > }
> > ```
> > ````
>
> > [!todo] [脚注（Footnote）](#脚注)
> >
> > ```markdown
> > Here's a sentence with a footnote. [^1]
> >
> > [^1]: This is the footnote.
> > ```
>
> > [!todo] [删除线（Strikethrough）](#删除线)
> >
> > ```markdown
> > ~~The world is flat.~~
> > ```
>
> > [!todo] [任务列表（Task List）](#任务列表)
> >
> > ```markdown
> > - [x] Write the press release
> > - [ ] Update the website
> > - [ ] Contact the media
> > ```
>
> > [!todo] [Emoji 表情](#Emoji-表情)
> >
> > ```markdown
> > 去露营了！ :tent: 很快回来。
> >
> > 真好笑！ :joy:
> > ```
>
> > [!todo] [Mermaid 图](#图表和流程图)
> >
> > ````
> > ```mermaid
> > graph TD;
> >     A-->B;
> >     A-->C;
> >     B-->D;
> >     C-->D;
> > ```
> > ````
>
> > [!todo] [数学公式](#数学公式)
> >
> > ```markdown
> > 这是一个行内公式：$E = mc^2$，它是爱因斯坦的质能方程。
> >
> > 这是块级公式：
> >
> > $$
> > \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
> > $$
> > ```

## 速查[Obsidian 扩展语法](#Obsidian-扩展语法)

> [!multi-column|col2]
>
> > [!tip] [高亮](#高亮)
> >
> > ```markdown
> > I just love ==highlighted text==.
> > ```
>
> > [!tip] [警告框](#警告框)
> >
> > ```
> > > [!note]+ title
> > >
> > > content
> > ```
> >
> > 扩展的语法：[[#^mathcallout|数学定理]]，[[#^sidenote|旁注]]，[[#^multical|多栏]]，[[#^caption|图片标题]]
>
> > [!tip] [wikilink](#wiki-链接)
> >
> > ```
> > [[https://www.example.com|title]]
> > ```
>
> > [!tip] [更多任务列表](#更多任务列表)
> >
> > ```
> > - [/] In Progress
> > - [-] Cancelled
> > - [>] Rescheduled
> > ```
>
> > [!tip] [填空](#填空)
> >
> > ```
> > question: _~~answer~~_
> >
> > question: ==~~answer~~==
> > ```
>
> > [!tip] [图片（调整尺寸）](#wikilink-链接嵌入)
> >
> > ```
> > ![[Engelbart.jpg|100]]
> > ```

## 速查[变通方案](#变通)

> [!multi-column|col2]
>
> > [!example] [下划线](#下划线)
> >
> > ```markdown
> > 一些文字 <ins>将被加下划线</ins>。
> > ```
>
> > [!example] [段落缩进](#某段缩进)
> >
> > ```markdown
> > &nbsp;&nbsp;&nbsp;&nbsp;这是一个缩进的段落。
> > ```
>
> > [!example] [段落文字居中](#段落文字居中)
> >
> > ```markdown
> > <p style="text-align:center">这段文字居中显示。</p>
> > ```
>
> > [!example] [文字颜色](#文字颜色)
> >
> > ```markdown
> > 这段文字是<font color="red">红色的！</font>
> >
> > <p style="color:blue">这段文字是蓝色的。</p>
> > ```
>
> > [!example] [注释](#注释)
> >
> > ```html
> > <!-- 这段文字不显示 -->
> > ```
>
> > [!example] [调整图片大小](#调整图片大小)
> >
> > ```markdown
> > <img src="https://markdown.com.cn/images/rocks.jpg" width="200" height="100" />
> > ```
>
> > [!example] [图片标题](#图片标题)
> >
> > ```html
> > <figure>
> >   <img src="https://markdown.com.cn/images/rocks.jpg" alt="描述文本" />
> >   <figcaption>这是图片描述</figcaption>
> > </figure>
> > ```

# Markdown 语法

## 基本语法

这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。[^basic]

[^basic]: [基本语法 (markdown.com.cn)](https://markdown.com.cn/cheat-sheet.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)

### 标题

要创建标题，请在单词或短语前面添加井号 (`#`) 。`#` 的数量代表了标题的级别。

```markdown
# H1

## H2

### H3
```

> [!tip] 兼容性
>
> 不同的 Markdown 应用程序处理 `#` 和标题之间的空格方式并不一致。为了兼容考虑，请用一个空格在 `#` 和标题之间进行分隔。
>
> |  :heavy_check_mark:  |         :x:         |
> | :------------------: | :-----------------: |
> | `# Here's a Heading` | `#Here's a Heading` |

更多兼容性要求: [[#^head-link|链接含有空格的标题]]

### 段落

要创建段落，请使用空白行将一行或多行文本进行分隔。

```markdown
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

> [!tip] 兼容性
>
> 在同一级，不要用空格（spaces）或制表符（ tabs）缩进段落。
>
> | :heavy_check_mark:                                                                                           | :x:                                                                                                                                                         |
> | :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | <code>Don't put tabs or spaces in front of your paragraphs.<br><br>Keep lines left-aligned like this.</code> | <code>&nbsp;&nbsp;&nbsp;&nbsp;This can result in unexpected formatting problems.<br><br>&nbsp;&nbsp;Don't add tabs or spaces in front of paragraphs.</code> |

### 换行

在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行

```markdown
This is the first line.  
And this is the second line.
```

> [!tip] 兼容性
>
> 几乎每个 Markdown 应用程序都支持两个或多个空格进行换行，称为 `结尾空格(trailing whitespace)` 的方式，但这是有争议的，因为**很难在编辑器中直接看到空格**，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的 `<br>` 标签。
>
> 为了**兼容性**，请在行尾添加“结尾空格”或 HTML 的 `<br>` 标签来实现换行。
>
> 还有两种其他方式我并**不推荐**使用。
>
> 1. CommonMark 和其它几种轻量级标记语言支持在行尾添加反斜杠 (`\`) 的方式实现换行，但是并非所有 Markdown 应用程序都支持此种方式，因此从兼容性的角度来看，不推荐使用。
> 2. 并且至少有两种轻量级标记语言（**如 obsidian**）支持无须在行尾添加任何内容，只须键入回车键即可实现换行。
>    - 开启 `obsidian -> 设置 -> 编辑器 -> 显示 -> 严格换行` 后，根据 Markdown 标准，单个换行符在预览模式下不再生效。
>
> | :heavy_check_mark:                                                                                                                                     | :x:                                                                                                                                 |
> | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
> | <code>First line with two spaces after. &nbsp;<br>And the next line.<br><br>First line with the HTML tag after.&lt;br&gt;<br>And the next line.</code> | <code>First line with a backslash after.\\<br>And the next line.<br><br>First line with nothing after.<br>And the next line.</code> |

### 粗体

要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

| Markdown 语法                | 预览效果                   |
| :--------------------------- | :------------------------- |
| `I just love **bold text**.` | I just love **bold text**. |
| `I just love __bold text__`  | I just love **bold text**  |
| `Love**is**bold`             | Love**is**bold             |

> [!tip] 兼容性
>
> Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语中间部分加粗的话，请使用星号（asterisks）。
>
> | :heavy_check_mark: | :x:              |
> | :----------------- | :--------------- |
> | `Love**is**bold`   | `Love__is__bold` |
>
> 对于中文加粗，由于中文标点会影响解析，应该在星号两侧留有空格。
>
> | :heavy_check_mark:                 | :x:                              |
> | :--------------------------------- | :------------------------------- |
> | `对于 **中文（包含括号）** 的情况` | `对于**中文（包含括号）**的情况` |

### 斜体

要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。

| Markdown 语法                          | 预览效果                             |
| :------------------------------------- | :----------------------------------- |
| `Italicized text is the *cat's meow*.` | Italicized text is the _cat's meow_. |
| `Italicized text is the _cat's meow_.` | Italicized text is the _cat's meow_. |
| `A*cat*meow`                           | A*cat*meow                           |

> [!tip] 兼容性
>
> 要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。
>
> | :heavy_check_mark: | :x:          |
> | :----------------- | :----------- |
> | `A*cat*meow`       | `A_cat_meow` |

### 粗体和斜体

要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

| Markdown 语法                             | 预览效果                                |
| :---------------------------------------- | :-------------------------------------- |
| `This text is ***really important***.`    | This text is **_really important_**.    |
| `This text is ___really important___.`    | This text is **_really important_**.    |
| `This text is __*really important*__.`    | This text is **_really important_**.    |
| `This text is **_really important_**.`    | This text is **_really important_**.    |
| `This is really***very***important text.` | This is really***very***important text. |

> [!tip] 兼容性
>
> Markdown 应用程序在处理单词或短语中间添加的下划线上并不一致。为了实现兼容性，请使用星号将单词或短语的中间部分加粗并以斜体显示，以示重要。
>
> | :heavy_check_mark:                        | :x:                                       |
> | :---------------------------------------- | :---------------------------------------- |
> | `This is really***very***important text.` | `This is really___very___important text.` |

### 引用

要创建块引用，请在段落前添加一个 `>` 符号。

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```

块引用可以包含多个段落。为段落之间的空白行添加一个 `>` 符号。

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

块引用可以嵌套。在要嵌套的段落前添加一个 `> >` 符号。

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

> [!tip] 兼容性
>
> 嵌套块引用可以使用 `>>`，但更建议使用加入空格的 `> >`

> [!tip] 技巧
>
> 在 vscode 中，如果要将多行内容放进引用块中，可以先在正文环境输入完内容，如
>
> ```markdown
> line 1.
>
> line 2.
>
> 公式块或者其他多行的块环境
> ```
>
> 再按住 `Alt + Shift` 可以鼠标同时点击每一行的同一列，此时可以给选中的所有行的开头同时输入 `> `，直接变成
>
> ```markdown
> > line 1.
> >
> > line 2.
> >
> > 公式块或者其他多行的块环境
> ```
>
> **注意**：如果编辑视图自动换行，可以通过快捷键 `Alt + z` 切换自动换行/不换行

^quotetip

### 有序列表

要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

<table><thead><tr><th>Markdown 语法</th> <th>HTML</th> <th>预览效果</th></tr></thead> <tbody>
<tr>
    <td align="left"><code>1. First item<br>2. Second item<br>3. Third item<br>4. Fourth item</code></td>
    <td align="left"><code>&lt;ol&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ol&gt;</code></td>
    <td align="left"><ol><li>First item</li> <li>Second item</li> <li>Third item</li> <li>Fourth item</li></ol></td>
</tr>
<tr>
    <td align="left"><code>1. First item<br>1. Second item<br>1. Third item<br>1. Fourth item</code></td>
    <td align="left"><code>&lt;ol&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ol&gt;</code></td>
    <td align="left"><ol><li>First item</li> <li>Second item</li> <li>Third item</li> <li>Fourth item</li></ol></td>
</tr>
<tr>
    <td align="left"><code>1. First item<br>8. Second item<br>3. Third item<br>5. Fourth item</code></td>
    <td align="left"><code>lt;ol&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ol&gt;</code></td>
    <td align="left"><ol><li>First item</li> <li>Second item</li> <li>Third item</li> <li>Fourth item</li></ol></td></tr>
<tr>
    <td align="left"><code>1. First item<br>2. Second item<br>3. Third item<br>&nbsp;&nbsp;&nbsp;&nbsp;1. Indented item<br>&nbsp;&nbsp;&nbsp;&nbsp;2. Indented item<br>4. Fourth item</code></td>
    <td align="left"><code>&lt;ol&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item<br>&lt;ol&gt;<br>&lt;li&gt;Indented item&lt;/li&gt;<br>&lt;li&gt;Indented item&lt;/li&gt;<br>&lt;/ol&gt;<br>&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ol&gt;</code></td>
    <td align="left"><ol><li>First item</li> <li>Second item</li> <li>Third item<ol><li>Indented item</li> <li>Indented item</li></ol></li> <li>Fourth item</li></ol></td>
</tr></tbody></table>

### 无序列表

要创建无序列表，请在每个列表项前面添加破折号 (`-`)、星号 (`*`) 或加号 (`+`) 。缩进一个或多个列表项可创建嵌套列表。

<table><thead><tr><th>Markdown 语法</th> <th>HTML</th> <th>预览效果</th></tr></thead> <tbody>
<tr>
    <td><code>- First item<br>- Second item<br>- Third item<br>- Fourth item</code></td>
    <td><code>&lt;ul&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ul&gt;</code></td>
    <td><ul><li>First item</li> <li>Second item</li> <li>Third item</li> <li>Fourth item</li></ul></td>
</tr>
<tr>
    <td><code>* First item<br>* Second item<br>* Third item<br>* Fourth item</code></td>
    <td><code>&lt;ul&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ul&gt;</code></td>
    <td><ul><li>First item</li> <li>Second item</li> <li>Third item</li> <li>Fourth item</li></ul></td>
</tr>
<tr>
    <td><code>+ First item<br>+ Second item<br>+ Third item<br>+ Fourth item</code></td>
    <td><code>&lt;ul&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ul&gt;</code></td>
    <td><ul><li>First item</li> <li>Second item</li> <li>Third item</li> <li>Fourth item</li></ul></td>
</tr>
<tr>
    <td><code>- First item<br>- Second item<br>- Third item<br>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br>&nbsp;&nbsp;&nbsp;&nbsp;- Indented item<br>- Fourth item</code></td>
    <td><code>&lt;ul&gt;<br>&lt;li&gt;First item&lt;/li&gt;<br>&lt;li&gt;Second item&lt;/li&gt;<br>&lt;li&gt;Third item<br>&lt;ul&gt;<br>&lt;li&gt;Indented item&lt;/li&gt;<br>&lt;li&gt;Indented item&lt;/li&gt;<br>&lt;/ul&gt;<br>&lt;/li&gt;<br>&lt;li&gt;Fourth item&lt;/li&gt;<br>&lt;/ul&gt;</code></td>
    <td><ul><li>First item</li> <li>Second item</li> <li>Third item<ul><li>Indented item</li> <li>Indented item</li></ul></li> <li>Fourth item</li></ul></td>
</tr></tbody></table>

> [!tip] 兼容性
>
> Markdown 应用程序对于如何处理同一列表中的不同分隔符存在分歧。为了兼容性，请勿在同一列表中混合使用不同的分隔符 —— 请**选择一种并保持不变**。
>
> | :heavy_check_mark:                                                          | :x:                                                                          |
> | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
> | <code>- First item<br>- Second item<br>- Third item<br>- Fourth item</code> | <code>+ First item<br>\* Second item<br>- Third item<br>+ Fourth item</code> |

### 在列表中嵌套其他元素

要在保留列表连续性的同时在列表中添加另一种元素，请将该元素**缩进** (2 或 3) 个空格或一个制表符，如下例所示：

<p style="border: 1px solid black; text-align: center; border-radius: 5px;">无序列表标识 <code>- </code> 占 2 格，所以缩进 2 个空格</p>

> [!multi-column]
>
> > [!quote-blank]
> >
> > ```markdown
> > - This is the first list item.
> > - Here's the second list item.
> >
> >   I need to add another paragraph below the second list item.
> >
> >   > A blockquote would look great below the second list item.
> >
> > - And here's the third list item.
> > ```
>
> > [!note-blank]
> >
> > - This is the first list item.
> > - Here's the second list item.
> >
> >   I need to add another paragraph below the second list item.
> >
> >   > A blockquote would look great below the second list item.
> >
> > - And here's the third list item.

<p style="border: 1px solid black; text-align: center; border-radius: 5px;">有序列表标识 <code>1. </code> 占 3 格，所以缩进 3 个空格</p>

> [!multi-column]
>
> > [!quote-blank]
> >
> > ```markdown
> > 1. First item
> > 2. Second item
> > 3. Third item
> >    - Indented item
> >    - Indented item
> > 4. Fourth item
> > ```
>
> > [!note-blank]
> >
> > 1. First item
> > 2. Second item
> > 3. Third item
> >    - Indented item
> >    - Indented item
> > 4. Fourth item

### 代码

要将单词或短语表示为代码，请将其包裹在反引号 (<code>`</code>) 中

| Markdown 语法                           | 预览效果                            |
| :-------------------------------------- | :---------------------------------- |
| ``At the command prompt, type `nano`.`` | At the command prompt, type `nano`. |

如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(<code>``</code>)中。

| Markdown 语法                                            | 预览效果                              |
| :------------------------------------------------------- | :------------------------------------ |
| <code>\`\`Use \`code\` in your Markdown file.\`\`</code> | ``Use `code` in your Markdown file.`` |

要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。

> [!multi-column]
>
> > [!quote] Markdown 语法
> >
> > ```
> >     &lt;html>
> >       &lt;head>
> >       &lt;/head>
> >     &lt;/html>
> > ```
>
> > [!check] 预览效果
> >
> >     &lt;html>
> >       &lt;head>
> >       &lt;/head>
> >     &lt;/html>

> [!tip] 围栏式代码块
>
> 要创建不用缩进、支持语法高亮的代码块，请使用 [围栏式代码块](#围栏代码块)（fenced code blocks）.

### 分隔线

要创建分隔线，请在单独一行上使用三个或多个星号 (`***`)、破折号 (`---`) 或下划线 (`___`) ，并且不能包含其他内容。

```
***

---

___
```

> [!tip] 兼容性
>
> 为了兼容性，请在分隔线的前后均添加空白行。
>
> | :heavy_check_mark:                                                                               | :x:                                                                                 |
> | :----------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
> | <code>Try to put a blank line before...<br><br>---<br><br>...and after a horizontal rule.</code> | <code>Without blank lines, this would be a heading.<br>---<br>Don't do this!</code> |

### 链接

链接文本放在中括号内，链接地址放在后面的括号中

```markdown
这是一个链接 [Markdown 语法](https://markdown.com.cn)。
```

链接 title 是当鼠标悬停在链接上时会出现的文字，这个 title 是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

```markdown
这是一个链接 [Markdown 语法](https://markdown.com.cn "最好的markdown教程")。
```

带格式化的链接

```markdown
I love supporting the **[EFF](https://eff.org)**.
This is the _[Markdown Guide](https://www.markdownguide.org)_.
See the section on [`code`](#code).
```

链接到本文章节

```markdown
# s1

content

# s2

这是一个链接 [section 1](#s1)
```

链接到其他 Markdown 文件的章节

> [!multi-column]
>
> > [!quote] `note1.md`
> >
> > ```markdown
> > # ch1
> >
> > content
> > ```
>
> > [!quote] `note2.md`
> >
> > ```markdown
> > # s1
> >
> > content
> >
> > # s2
> >
> > 链接到 note1 的 [ch1](note1.md#ch1)
> > ```

> [!caution] 注意
>
> 链接到标题 `#head` 不能区分同一个文件中同名小标题，并且不论标题等级多少都是**一个**井号

> [!tip] 兼容性
>
> 不同的 Markdown 应用程序处理 URL 中间的空格方式不一样。为了兼容性，请尽量使用 `%20` [^encode] 代替空格。
>
> > 可以在 vscode 编辑时按 Tab 键选择本地文件，vscode 会自动编码
>
> | :heavy_check_mark:                                   | :x:                                             |
> | :--------------------------------------------------- | :---------------------------------------------- |
> | `[link](https://www.example.com/my%20great%20page) ` | `[link](https://www.example.com/my great page)` |

> [!tip] 兼容性
>
> 不同的 Markdown 应用程序处理小标题中间的空格方式不一样，如链接同一个标题 `# head 1`，vscode 会将空格转换成 `-`，而 Obsidian 会将空格转换成 `%20`，这会导致链接失效
>
> > [!multi-column]
> >
> > > [!cite] vscode
> > >
> > > ```markdown
> > > # head-1
> > >
> > > content
> > >
> > > 这是一个链接 [head](#head-1)
> > > ```
> >
> > > [!cite] Obsidian
> > >
> > > ```markdown
> > > # head%201
> > >
> > > content
> > >
> > > 这是一个链接 [section 1](#head%201)
> > > ```
>
> 为了兼容性，请需要链接的**小标题避免空格**，可以用 `-` 代替。
>
> > [!multi-column]
> >
> > > [!note-blank]
> > >
> > > :heavy_check_mark:
> > >
> > > ```markdown
> > > # head-1
> > >
> > > content
> > >
> > > # head-2
> > >
> > > 这是一个链接 [section 1](#head-1)
> > > ```
> >
> > > [!note-blank]
> > >
> > > :x:
> > >
> > > ```markdown
> > > # head 1
> > >
> > > content
> > >
> > > # head 2
> > >
> > > 这是一个链接 [section 1](#head 1)
> > > ```

^head-link

### 图片

> [!multi-column]
>
> > [!note-blank|wide-3]
> >
> > 要添加图像，请使用感叹号 (`!`), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。
> >
> > ```markdown
> > ![这是图片](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg "Magic Gardens")
> > ```
>
> > [!note-blank]
> >
> > <br>![这是图片](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg "Magic Gardens")

> [!multi-column]
>
> > [!note-blank|wide-3]
> >
> > 给图片增加链接，请将图像的 Markdown 括在方括号中，然后将链接添加在圆括号中。
> >
> > ```markdown
> > [![沙漠中的岩石图片](https://markdown.com.cn/assets/img/shiprock.c3b9a023.jpg "Shiprock")](https://markdown.com.cn)
> > ```
>
> > [!note-blank]
> >
> > <br>[![沙漠中的岩石图片](https://markdown.com.cn/assets/img/shiprock.c3b9a023.jpg "Shiprock")](https://markdown.com.cn)

> [!summary] 图片路径
>
> 对于在线图片，只需输入图片地址，一般是 `https://` 开头
>
> 本地图片需要输入相对路径，比如在名为 `note1.md` 的笔记中链接本地图片
>
> ```markdown
> ![](img/note1/example.png)
> ```
>
> 工作区目录为
>
> ```
> project/
> │
> ├── img/
> │ └── note1/
> │  │
> │  └── example.png
> │
> └── note1.md
> ```
>
> `img` 文件夹用于统一储存图片，再根据 Markdown 文件名创建同名文件夹用于单独管理笔记中链接的图片

### 内嵌-HTML-标签

对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可

<p style="border: 1px solid black; text-align: center; border-radius: 5px;">行级內联标签</p>

HTML 的行级內联标签如 `<span>`、`<cite>`、`<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

HTML 行级內联标签和区块标签不同，在內联标签的范围内， Markdown 的语法是可以解析的。

```markdown
This **word** is bold. This <em>word</em> is italic.
```

This **word** is bold. This <em>word</em> is italic.

其他例子：

1. `<strong>粗体</strong>`: <strong>粗体</strong>（另外见 Markdown [粗体](#粗体)）
2. `<em>斜体</em>`: <em>斜体</em>（另外见 Markdown [斜体](#斜体)）
3. `<mark>高亮</mark>`: <mark>高亮</mark>（另外见 Markdown [高亮](#高亮)）
4. `<del>删除</del>`: <del>删除</del>（另外见 Markdown [删除](#删除线)）
5. `<ins>插入</ins>`: <ins>插入</ins>

<p style="border: 1px solid black; text-align: center; border-radius: 5px;">区块标签</p>

区块元素 ── 比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。

例如，在 Markdown 文件里加上一段 HTML 表格：

```markdown
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

插入**音频**

```html
<audio
  controls=""
  controlslist="nodownload"
  src="https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/audio/Excerpt%20from%20Mother%20of%20All%20Demos%20(1968).ogg"
></audio>
```

插入**视频**

```html
<video
  controls=""
  preload="metadata"
  src="https://ryotaushio.github.io/obsidian-pdf-plus/attachments/screen-recording-2024-02-27-at-9.23.54.mov#t=0.001"
  target="_self"
></video>
```

> [!warning] 注意
>
> 在 HTML 块级标签内不能使用 Markdown 语法。例如 `<p>italic and **bold**</p>` 将不会加粗。

### 转义字符

要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 `\`。

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > \* Without the backslash, this would be a bullet in an unordered list.
> > ```
>
> > [!note-blank]
> >
> > <br>\* Without the backslash, this would be a bullet in an unordered list.

以下列出的字符都可以通过使用反斜杠字符从而达到转义目的。

| Character | Name                |
| :-------- | :------------------ |
| \\        | backslash           |
| `         | backtick            |
| \*        | asterisk            |
| \_        | underscore          |
| { }       | curly braces        |
| [ ]       | brackets            |
| ( )       | parentheses         |
| #         | pound sign          |
| +         | plus sign           |
| -         | minus sign (hyphen) |
| .         | dot                 |
| !         | exclamation mark    |
| &#124;    | pipe                |

> [!summary] 特殊字符自动转义
>
> 在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&` 。 `<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。
>
> 在**內联标签**的范围内，如果你要打「AT&T」 ，你必须要写成「`AT&amp;T`」 ，还得转换网址内的 `&` 符号，如果你要链接到：
>
> ```markdown
> http://images.google.com/images?num=30&q=larry+bird
> ```
>
> 你必须要把网址转成：
>
> ```markdown
> http://images.google.com/images?num=30&amp;q=larry+bird
> ```
>
> 才能放到链接标签的 `href` 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

Markdown 允许你直接使用这些符号，它帮你自动转义字符。如果你使用 `&` 符号的作为 HTML 实体的一部分，那么它不会被转换，而在其它情况下，它则会被转换成 `&amp;`。所以你如果要在文件中插入一个著作权的符号，你可以这样写：

```markdown
&copy;
```

Markdown 将不会对这段文字做修改，但是如果你这样写：

```markdown
AT&T
```

Markdown 就会将它转为：

```markdown
AT&amp;T
```

类似的状况也会发生在 `<` 符号上，因为 Markdown 支持行内 HTML ，如果你使用 `<` 符号作为 HTML 标签的分隔符，那 Markdown 也不会对它做任何转换，但是如果你是写：

```markdown
4 < 5
```

Markdown 将会把它转换为：

```markdown
4 &lt; 5
```

需要特别注意的是，在 Markdown 的块级元素和内联元素中， `<` 和 `&` 两个符号都会被自动转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 `<` 和 `&` 都转换为 HTML 实体。）

其他特殊符号

> [!multi-column]
>
> > [!note-blank]
> >
> > - `&amp;`: 和 &amp;
> > - `&lt;`: 小于号 &lt;
> > - `&copy;`: 版权 &copy;
> > - `&reg;`: 注册商标 &reg;
> > - `&trade;`: 商标 &trade;
> > - `&euro;` 欧元 &euro;
>
> > [!note-blank]
> >
> > - `&larr;`: 左箭头 &larr;
> > - `&uarr;`: 上箭头 &uarr;
> > - `&rarr;`: 右箭头 &rarr;
> > - `&darr;`: 下箭头 &darr;
> > - `&#176;`: 度数 &#176;
> > - `&#960;`: 圆周率 &#960;

## 扩展语法

John Gruber 的原始设计文档中概述的基本语法主要是为了应付大多数情况下的日常所需元素，但对于某些人来说还不够，这就是扩展语法的用武之地。

一些个人和组织开始通过添加其他元素（例如表，代码块，语法突出显示，URL 自动链接和脚注）来扩展基本语法。可以通过使用基于基本 Markdown 语法的轻量级标记语言，或通过向兼容的 Markdown 处理器添加扩展来启用这些元素。[^extend]

[^extend]: [扩展语法 (markdown.com.cn)](https://markdown.com.cn/extended-syntax/)

> [!warning] 注意
>
> 并非所有 Markdown 应用程序都支持扩展语法元素。

### 表格

要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > | Syntax    | Description |
> > | --------- | ----------- |
> > | Header    | Title       |
> > | Paragraph | Text        |
> > ```
>
> > [!note-blank]
> >
> > | Syntax    | Description |
> > | --------- | ----------- |
> > | Header    | Title       |
> > | Paragraph | Text        |

您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > | h1  | h2  |  h3 |
> > | :-- | :-: | --: |
> > | 11  | 12  |  13 |
> > | 21  | 22  |  23 |
> > ```
>
> > [!note-blank]
> >
> > | h1  | h2  |  h2 |
> > | :-- | :-: | --: |
> > | 11  | 12  |  13 |
> > | 21  | 22  |  23 |

> [!warning] 注意
>
> 单元格中不要出现竖线。必须出现竖线的话，使用 HTML 字符代码（`&#124;`）在表中显示竖线（`|`）字符，[转义字符](#转义字符) `\|` 在表格中可能失效。

### 围栏代码块

在代码块之前和之后的行上使用三个反引号（<code>```</code>）

要添加语法突出显示，请在受防护的代码块之前的反引号旁边指定一种语言。

````
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### 脚注

脚注使您可以添加注释和参考，而不会使文档正文混乱。当您创建脚注时，带有脚注的上标数字会出现在您添加脚注参考的位置。读者可以单击链接以跳至页面底部的脚注内容。

要创建脚注参考，请在方括号（`[^1]`）内添加插入符号和标识符。**标识符可以是数字或单词，但不能包含空格或制表符**。标识符仅将脚注参考与脚注本身相关联-在输出中，脚注按顺序编号。

在括号内使用另一个插入符号和数字添加脚注，并用冒号和文本（`[^1]: My footnote.`）。您**不必在文档末尾添加脚注**。您可以将它们放在除列表，块引号和表之类的其他元素之外的任何位置。

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

### 删除线

您可以通过在单词中心放置一条水平线来删除单词。结果看起来~~像这样~~。此功能使您可以指示某些单词是一个错误，要从文档中删除。若要删除单词，请在单词前后使用两个波浪号`~~`。

```markdown
~~世界是平坦的。~~ 我们现在知道世界是圆的。
```

~~世界是平坦的。~~ 我们现在知道世界是圆的。

### 任务列表

任务列表使您可以创建带有复选框的项目列表。在支持任务列表的 Markdown 应用程序中，复选框将显示在内容旁边。要创建任务列表，请在任务列表项之前添加破折号`-`和方括号`[ ]`，并在`[ ]`前面加上空格。要选择一个复选框，请在方括号`[x]`之间添加 x 。

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > - [x] Write the press release
> > - [ ] Update the website
> > - [ ] Contact the media
> > ```
>
> > [!note-blank]
> >
> > - [x] Write the press release
> > - [ ] Update the website
> > - [ ] Contact the media

### Emoji-表情

一些 Markdown 应用程序允许您通过键入表情符号短代码来插入表情符号。这些以冒号开头和结尾，并包含表情符号的名称。

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > 去露营了！ :tent: 很快回来。
> >
> > 真好笑！ :joy:
> > ```
>
> > [!note-blank]
> >
> > 去露营了！ :tent: 很快回来。
> >
> > 真好笑！ :joy:

> [!tip]
>
> 您可以使用此[表情符号简码列表](https://gist.github.com/rxaviers/7360908)，但请记住，表情符号简码因应用程序而异。有关更多信息，请参阅 Markdown 应用程序的文档。

### 自动网址链接

许多 Markdown 处理器会自动将 URL 转换为链接。这意味着如果您输入 `http://www.example.com`，即使您未[使用方括号](#链接)，您的 Markdown 处理器也会自动将其转换为链接。

如果您不希望自动链接 URL，则可以通过将 URL 表示为带反引号的代码来删除该链接。

```markdown
`http://www.example.com`
```

### 图表和流程图

> [!summary] Mermaid 让你可以使用文本和代码创建图表和可视化
>
> Mermaid 是一个基于 JavaScript 的图表和制图工具，使用 Markdown 风格的文本定义和渲染器来创建和修改复杂的图表。Mermaid 的主要目的是帮助文档跟上开发进度。[^Mermaid]

> [!multi-column]
>
> > [!note-blank]
> >
> > ````
> > ```mermaid
> > graph TD;
> >     A-->B;
> >     A-->C;
> >     B-->D;
> >     C-->D;
> > ```
> > ````
>
> > [!note-blank]
> >
> > ```mermaid
> > graph TD;
> >     A-->B;
> >     A-->C;
> >     B-->D;
> >     C-->D;
> > ```

更多例子见 [Mermaid 中文文档](https://docs.min2k.com/zh/mermaid/intro/)

[^Mermaid]: [Mermaid 中文文档](https://docs.min2k.com/zh/mermaid/intro/)

### 数学公式

Markdown 支持通过 LaTeX 语法嵌入数学公式，为技术文档、学术论文和教学材料提供专业的数学表达能力。[^math]

[^math]: [Markdown 教程 (markdownlang.com)](https://www.markdownlang.com/zh/advanced/math.html)

<p style="border: 1px solid black; text-align: center; border-radius: 5px;">行内公式</p>

使用单个美元符号 `$` 包围公式：

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > 这是一个行内公式：$E = mc^2$，它是爱因斯坦的质能方程。
> >
> > 圆的面积公式是 $A = \pi r^2$，其中 $r$ 是半径。
> >
> > 二次方程的解为：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
> > ```
>
> > [!note-blank]
> >
> > 这是一个行内公式：$E = mc^2$，它是爱因斯坦的质能方程。
> >
> > 圆的面积公式是 $A = \pi r^2$，其中 $r$ 是半径。
> >
> > 二次方程的解为：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

<p style="border: 1px solid black; text-align: center; border-radius: 5px;">块级公式</p>

使用双美元符号 `$$` 包围公式，公式会单独成行并居中显示：

> [!multi-column]
>
> > [!note-blank]
> >
> > ```markdown
> > $$
> > \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
> > $$
> > ```
>
> > [!note-blank]
> >
> > <br>
> >
> > $$
> > \int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
> > $$

> [!tip] 兼容性
>
> 数学公式通常由 Katex 或者 Mathjax 渲染，具体实现根据不同 Markdown 处理器有所差异。如 Obsidian 对于行内公式要求 `$` 内侧不能空格，并且通常要求外侧有空格：
>
> | :heavy_check_mark:       | :x:                      |
> | :----------------------- | :----------------------- |
> | `inline $E = mc^2$ math` | `inline$ E = mc^2 $math` |
>
> vscode 使用 Katex 渲染公式，Obsidian 使用 Mathjax 渲染公式。二者对 LaTeX 标记**支持程度不一致**，比如 Katex 支持 `\oiint` 但 Mathjax 不支持。
>
> > 此问题已在 Mathjax v4.0 解决[^mathjax4]，但 Obsidian 还没更新到这个版本
>
> 各自支持的标识具体可见 [Katex 文档](https://katex.org/docs/supported.html) 和 [Mathjax 文档](https://www.osgeo.cn/mathjax/input/tex/macros/index.html)

[^mathjax4]: [Mathjax v4.0 new-and-updated-macros (docs.mathjax.org)](https://docs.mathjax.org/en/latest/upgrading/whats-new-4.0/input.html#new-and-updated-macros)

# Obsidian-扩展语法

> [!warning] 注意
>
> 以下语法受 Obsidian 支持，但很可能其他 Markdown 处理器不支持

## 高亮

要加高亮文本，请在单词或短语的前后各添加两个等号 `==`

| Markdown 语法                       | 预览效果                          |
| :---------------------------------- | :-------------------------------- |
| `I just love ==highlighted text==.` | I just love ==highlighted text==. |
| `Love==is==bold`                    | Love==is==bold                    |

## 警告框

> [!summary]
>
> 警告框，对应的是 Admonition 或者 Alert 语法，Obsidian 称之为 Callout 语法。
>
> 警告框有多种语法标准，相互**不一定兼容**。

### Github 语法

Github 支持的格式[^github-alert] 在 [引用](#引用) 语法的开头加上一行 `> [!keyword]`，如

```markdown
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

[^github-alert]: [An option to highlight a "Note" and "Warning" using blockquote (github.com)](https://github.com/orgs/community/discussions/16925)

> [!tip] 兼容性
>
> 对于不支持任何警告块语法，或不支持这种警告块语法的 Markdown 处理器，会按照标准 [引用](#引用) 解析。此时由于 Markdown 空行才能换行的标准，建议在 keyword 和内容之间**空一行**，如
>
> | :heavy_check_mark:                       | :x:                                 |
> | :--------------------------------------- | :---------------------------------- |
> | <code>> [!NOTE]<br>><br>> content</code> | <code>> [!NOTE]<br>> content</code> |

多行内容可以使用[[#^quotetip|快捷输入技巧]]。

### Obsidian 默认语法

Obsidian 在此基础上进一步扩展语法格式为 `> [!keyword]` 和自定义标题的 `> [!keyword] title`，具体格式见[^obsidian-callout]。

支持的 keywords（不区分大小写）: `NOTE, ABSTRACT, SUMMARY, INFO, TODO, TIP, HINT, IMPORTANT, SUCCESS, CHECK, DONE, QUESTION, HELP, FAQ, WARNING, CAUTION, ATTENTION, FAILURE, FAIL, MISSING, DANGER, ERROR, BUG, EXAMPLE, QUOTE, CITE`

> [!multi-column]
>
> > [!note] note
>
> > [!abstract] abstract, summary, tldr
>
> > [!info] info
>
> > [!todo] todo
>
> > [!tip] tip, hint, important
>
> > [!success] success, check, done
>
> > [!question] question, help, faq
>
> > [!warning] warning, caution, attention
>
> > [!failure] failure, fail, missing
>
> > [!danger] danger, error
>
> > [!bug] bug
>
> > [!example] example
>
> > [!quote] quote, cite

[^obsidian-callout]: [Callouts (help.obsidian.md)](https://help.obsidian.md/callouts)

可以使用警告块变体 `> [!keyword]+ (title)` 和 `> [!keyword]- (title)` 获得可折叠/展开的警告块

> [!multi-column]
>
> > [!cite-blank]
> >
> > ```
> > [!done]+
> >
> > content
> > ```
>
> > [!cite-blank]
> >
> > <br>
> >
> > > [!done]+
> > >
> > > content

> [!multi-column]
>
> > [!cite-blank]
> >
> > ```
> > [!done]-
> >
> > content
> > ```
>
> > [!cite-blank]
> >
> > <br>
> >
> > > [!done]-
> > >
> > > content

使用不支持的 keyword 会按照 NOTE 处理

> [!multi-column]
>
> > [!cite-blank]
> >
> > ```
> > [!example-keyword]
> >
> > content
> > ```
>
> > [!cite-blank]
> >
> > <br>
> >
> > > [!example-keyword]
> > >
> > > content

> [!tip] 兼容性
>
> 虽然 `[!example-keyword]` 效果上等价 `[!note] example-keyword`，但仍然强烈建议使用 `[!note] example-keyword` 而不是 `[!example-keyword]`
>
> 因为 Obsidian Callout 可以通过 css 自定义，也许某个插件或者 snippets 正好定义了名为 `example-keyword` 类型的 Callout，那么渲染结果不再是 Note
>
> ---
>
> 此外，虽然 Obsidian 默认语法的 Callout 的自定义标题内容支持 markdown 语法，但存在某些插件提供的 Callout 样式的标题渲染 markdown 失效，建议**自定义标题用普通文本，不要附加 markdown 语法**
>
> ---
>
> 对于不支持任何警告块语法，或不支持这种警告块语法的 Markdown 处理器，会按照标准 [引用](#引用) 解析。此时由于 Markdown 空行才能换行的标准，建议在 keyword 和内容之间**空一行**，如
>
> | :heavy_check_mark:                              | :x:                                        |
> | :---------------------------------------------- | :----------------------------------------- |
> | <code>> [!NOTE]+ title<br>><br>> content</code> | <code>> [!NOTE]+ title<br>> content</code> |

多行内容可以使用[[#^quotetip|快捷输入技巧]]。

### Obsidian 插件扩展的语法

<p style="border: 1px solid black; text-align: center; border-radius: 5px;"><a href='obsidian://show-plugin?id=math-booster' title='obsidian://show-plugin?id=math-booster'>LaTeX-Iike Theorem &amp; Equation Referencer</a></p>

插件增加了数学定理变体 keywords（不区分大小写）:

| Environment name | keyword |
| :--------------: | :-----: |
|     Theorem      |  `THM`  |
|    Definition    |  `DEF`  |
|      Lemma       |  `LEM`  |
|   Proposition    |  `PRP`  |
|    Corollary     |  `COR`  |
|      Claim       |  `CLM`  |
|    Assumption    |  `ASM`  |
|     Example      |  `EXM`  |
|     Exercise     |  `EXR`  |
|    Hypothesis    |  `HYP`  |
|      Remark      |  `RMK`  |
|      Axiom       |  `AXM`  |
|    Conjecture    |  `CNJ`  |

有如下 3 中使用方式：

> [!multi-column|col2-flex-h]
>
> > [!note-blank]
> >
> > **自动编号**（默认）：使用 `> [!thm]` 创建具有自动连续编号的定理环境。
>
> > [!note-blank]
> >
> > > [!thm] Theorem name
> > >
> > > Theorem content
>
> > [!note-blank]
> >
> > **未编号**的条目：在标识符后附加 `*` 以创建重要但未编号的条目。
>
> > [!note-blank]
> >
> > > [!thm|*] Theorem name
> > >
> > > Theorem content
>
> > [!note-blank]
> >
> > **手动编号**：通过在 `|` 符号后添加特定标签（例如字母或自定义标识符）来手动分配特定标签。
>
> > [!note-blank]
> >
> > > [!thm|A] Theorem name
> > >
> > > Theorem content

^mathcallout

> [!warning] 注意
>
> 插件提供的 Callout 的标题位置的内容渲染 markdown 可能失效，比如 `> [!thm|*] Theorem **name**` 不会加粗

<p style="border: 1px solid black; text-align: center; border-radius: 5px;"><a href='obsidian://show-plugin?id=pdf-plus' title='obsidian://show-plugin?id=pdf-plus'>PDF++</a></p>

插件增加了 PDF 变体 keywords（不区分大小写）如下，同样支持自定义标题和可折叠/展开

> [!multi-column]
>
> > [!pdf]+
> >
> > ```
> > > [!pdf]+
> > ```
>
> > [!pdf|yellow]
> >
> > ```
> > > [!pdf|yellow]
> > ```
>
> > [!pdf|red]
> >
> > ```
> > > [!pdf|red]
> > ```
>
> > [!pdf|important]+ title
> >
> > ```
> > > [!pdf|important]+ title
> > ```
>
> > [!pdf|note]
> >
> > ```
> > > [!pdf|note]
> > ```

### Obsidian snippets 扩展的语法

<p style="border: 1px solid black; text-align: center; border-radius: 5px;"><a href='https://github.com/Akifyss/obsidian-border' title='https://github.com/Akifyss/obsidian-border'>border</a></p>

主题扩展了 4 种样式：

> [!multi-column|col2]
>
> > [!note|style-1]
> >
> > ```
> > > [!note|style-1]
> > ```
>
> > [!note|style-2]
> >
> > ```
> > > [!note|style-2]
> > ```
>
> > [!note|style-3]
> >
> > ```
> > > [!note|style-3]
> > ```
>
> > [!note|style-4]
> >
> > ```
> > > [!note|style-4]
> > ```

<p style="border: 1px solid black; text-align: center; border-radius: 5px;"><a href='https://github.com/crnkv/obsidian-sidenote-auto-adjust-module' title='https://github.com/crnkv/obsidian-sidenote-auto-adjust-module'>sidenote</a></p>

仓库提供了四个 css 文件，在 Obsidian 中除了 template 文件都启用，提供了 Callout 变体

> [!warning] 注意
>
> 使用的不是原始 css，有自定义修改

| Markdown 语法                          | 预览效果                           |
| :------------------------------------- | :--------------------------------- |
| `> [!sidenote]`                        | 旁注（无标题，无边框），默认在右侧 |
| `> [!sidenote-l]`                      | 旁注（无标题，无边框），左侧       |
| `> [!sidenote-r]`                      | 旁注（无标题，无边框），右侧       |
| `> [!stickynote]`                      | 旁注（无标题，有边框），默认在右侧 |
| `> [!stickynote-l]`                    | 旁注（无标题，有边框），左侧       |
| `> [!stickynote-r]`                    | 旁注（无标题，有边框），右侧       |
| <code>> [!keyword&#124;aside]</code>   | 旁注（有标题，有边框），默认在右侧 |
| <code>> [!keyword&#124;aside-l]</code> | 旁注（有标题，有边框），左侧       |
| <code>> [!keyword&#124;aside-r]</code> | 旁注（有标题，有边框），右侧       |

^sidenote

![](https://forum-zh.obsidian.md/uploads/default/original/3X/5/5/550728c8e17c45a5c880bfd8144b4c95cac8a2e6.png)

> [!warning] 注意
>
> 原始 css 导出 PDF 会不显示旁注，需要自定义打印样式 :heavy_check_mark:

<p style="border: 1px solid black; text-align: center; border-radius: 5px;"><a href='https://github.com/efemkay/obsidian-modular-css-layout' title='https://github.com/efemkay/obsidian-modular-css-layout'>multi-column</a></p>

仓库提供了多个 css 文件，只使用其中的 `MCL Multi Column.css`，[详细使用说明](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/02-multi-column-callout/)

> [!warning] 注意
>
> 使用的不是原始 css，有自定义修改

将双栏内容分别放进两个 Callout（可以是任意类型），整体放到 `multi-column` 类型的 Callout 中，即可实现双栏，如：

```markdown
> [!multi-column]
>
> > [!warning]+ Resources
> >
> > - Lorem ipsum dolor sit amet
> > - Vitae nunc sed velit dignissim sodales.
> > - In cursus turpis massa tincidunt dui ut ornare lectus.
>
> > [!todo]+
> >
> > - [x] Define Use Case
> > - [ ] Craft User Story
> > - [ ] Develop draft sketches
```

^multical

如果 `multi-column` 中有多个 Callout，会尝试多栏布局，如果一行放不下，会自动换行

默认多栏宽度是平分的，可以设置 meta 控制每一栏的宽度占比

- `wide-2` - give callout twice the size
- `wide-3` - three times the size
- `wide-4` - four times the size
- `wide-5` - five times the size

```markdown
> [!multi-column]
>
> > [!note|wide-3]+ Work
> > your notes or lists here. using markdown formatting
>
> > [!warning|wide-2]+ Personal
> > your notes or lists here. using markdown formatting
```

![](https://raw.githubusercontent.com/efemkay/obsidian-modular-css-layout/main/docs/assets/mc-callout-width-control.png)

另外可以设置 meta `col2`, `col3`, `col4`, `col5` 控制列数分别为 2, 3, 4, 5

```markdown
> [!multi-column|col2]
>
> > [!note] Work
> > your notes or lists here. using markdown formatting
>
> > [!warning] Personal
> > your notes or lists here. using markdown formatting
>
> > [!tip] Personal
> > your notes or lists here. using markdown formatting
```

如果只需要多栏，不需要渲染 Callout 样式，可以添加 `blank` 如

```markdown
> [!multi-column]
>
> > [!warning-blank]
> >
> > - Lorem ipsum dolor sit amet
> > - Vitae nunc sed velit dignissim sodales.
> > - In cursus turpis massa tincidunt dui ut ornare lectus.
>
> > [!todo-blank]
> >
> > - [x] Define Use Case
> > - [ ] Craft User Story
> > - [ ] Develop draft sketches
```

> [!warning] 注意
>
> 原始 css 导出 PDF 有格式错位，需要自定义打印样式 :heavy_check_mark:

在 `blank` 样式基础上，可以使用 `caption` 给图片增加标题，如

```
> [!note-blank|caption]
>
> <img src="https://markdown.com.cn/images/rocks.jpg" alt="描述文本">
>
> 这是图片描述
```

^caption

> [!note-blank|caption]
>
> <img src="https://markdown.com.cn/images/rocks.jpg" alt="描述文本">
>
> 这是图片描述

Markdown 可以使用 [变通方案](#图片标题)

## wiki-链接

Obsidian 支持

- Wikilink：`[[Three laws of motion]]`
- Markdown 格式的[链接](#链接)：`[Three laws of motion](Three%20laws%20of%20motion.md)`

上面的例子是等价的——它们在编辑器中显示的方式相同，并链接到相同的笔记。

> [!warning] 无效字符
>
> 使用 Markdown 格式时，链接需要编码[^encode]，如空格改为 `%20`
>
> > 可以在 vscode 编辑时按 Tab 键选择本地文件，vscode 会自动编码
>
> 使用 Wikilink 格式时，链接不能包含以下字符：`# | ^ : %% [[ ]]`

[^encode]: [Percent-encoding (wikipedia.org)](https://en.wikipedia.org/wiki/Percent-encoding)

- 指向除 Markdown 以外的文件格式的链接需要包含文件扩展名, 例如 `[[Figure 1.png]]`
- 自定义显示文字：`[[Figure 1.png|显示的文字]]`

### Wikilink-链接到标题

链接到本文章节，并更改显示文字

```markdown
# s1

content

# s2

这是一个链接 [[#s1]]

这是一个自定义显示文字的链接 [[#s1|section 1]]
```

链接到其他 Markdown 文件的章节

> [!multi-column]
>
> > [!quote] `note1.md`
> >
> > ```markdown
> > # ch1
> >
> > content
> > ```
>
> > [!quote] `note2.md`
> >
> > ```markdown
> > # s1
> >
> > content
> >
> > # s2
> >
> > 链接到 note1 的 [[note1#ch1|ch1]]
> > ```

### Wikilink-链接到一个块

块是笔记中文本的单位，例如段落、块引用或列表项。[^link2block]

[^link2block]: [在笔记中链接到一个块 (help.obsidian.md)](https://help.obsidian.md/links#Link%20to%20a%20heading%20in%20a%20note)

您可以通过添加链接来链接 `#^` 在链接目的地的末尾，然后是唯一的块标识符。例如: `[[2023-01-01#^37066d]]`。幸运的是，你无需手动查找标识符——当你输入 carette 时 (`^`) 将显示一个建议列表，允许您选择正确的模块。

对于**简单段落**，先空格，然后输入 `^` 以及行末尾的块标识符:

```markdown
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

对于**结构化模块** (列表、引号、调用、表)，块标识符应位于另一行，并且前后为空白行:

```markdown
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.
```

对于**列表中的特定行**，可将块标识符直接放置在一个圆点上:

```markdown
- Gemmy
  $$Paperclip / Pen$$
  ^37006f
- Unhelpful assistant
```

> [!warning] 注意
>
> 不支持链接到 [quotations](#引用), [callouts](#警告框), 和 [tables](#表格) 的具体部分，只能是整体链接

有了标识符后，可以使用 `#^` 进行引用，如

```markdown
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

可以用 `[[2023-01-01#^quote-of-the-day]]` 引用这一段

### Wikilink-链接嵌入

- 用感叹号预设内部链接 (!) 允许您嵌入链接内容, 例如
  - 嵌入图片：`![[Figure 1.png]]`
  - 嵌入笔记：`![[note]]`
  - 嵌入章节：`![[#heading]]` 或 `![[note#heading]]`
  - 嵌入一个块：`![[#^b15695]]` 或 `![[note#^b15695]]`

- 可以自定义嵌入图片大小，如
  - `![[Engelbart.jpg|100x145]]` 会将图片宽度为 100、高度为 145
  - `![[Engelbart.jpg|100]]` 会将图片宽度为 100，并保持原始图片的长宽比

Markdown 可以用 [变通方案](#调整图片大小)

### Wikilink-链接嵌入音频

> Markdown 可以使用 [audio 标签](#内嵌-html-标签)

```markdown
![[Excerpt from Mother of All Demos (1968).ogg]]
```

<audio controls="" controlslist="nodownload" src="https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/audio/Excerpt%20from%20Mother%20of%20All%20Demos%20(1968).ogg"></audio>

### Wikilink-链接嵌入-PDF

嵌入 PDF:

```
![[Document.pdf]]
```

嵌入 PDF 的第 3 页:

```
![[Document.pdf#page=3]]
```

嵌入 PDF 并设置高度为 500 像素:

```
![[Document.pdf#height=400]]
```

### Wikilink-链接到-PDF

Obsidian 链接 PDF 最多精确到某一页，进一步精确需要 [PDF++](obsidian://show-plugin?id=pdf-plus) ，详细使用方法见[仓库 readme](https://github.com/RyotaUshio/obsidian-pdf-plus)

> [!multi-column]
>
> > [!summary|wide-3] 链接到文字
> >
> > - 基础语法：`[[Lorem Ipsum.pdf#page=1&selection=4,0,4,11|Lorem Ipsum, page 1]]`
> > - 自定义文字高亮颜色：`[[Lorem Ipsum.pdf#page=1&selection=4,0,4,11&color=red|Lorem Ipsum, page 1]]`
> >
> > > toolbar 对应的颜色代码分别是 `yellow`, `red`, `note`, `important`；需要修改段代码对应的颜色可以参考[^colors]
>
> > [!caution] 注意
> >
> > 先在 PDF 视图中划取文字，粘贴链接到笔记，再修改链接实现高亮位置、颜色、内容的微调

[^colors]: [PDF++ Customizing colors (ryotaushio.github.io)](https://ryotaushio.github.io/obsidian-pdf-plus/settings/backlink-highlighting.html#Colors)

<video controls="" preload="metadata" src="https://ryotaushio.github.io/obsidian-pdf-plus/attachments/screen-recording-2024-02-24-at-16.23.02.mov#t=0.001" target="_self"></video>

> [!multi-column]
>
> > [!summary|wide-3] 链接到矩形截图
> >
> > - 基础语法：`![[file.pdf#page=1&rect=300,200,700,600]]`
> > - 自定义矩形颜色：`![[file.pdf#page=1&rect=300,200,700,600&color=red]]`
> >
> > > toolbar 对应的颜色代码分别是 `yellow`, `red`, `note`, `important`；需要修改段代码对应的颜色可以参考[^colors]
>
> > [!caution] 注意
> >
> > 先在 PDF 视图中划取矩形，粘贴链接到笔记，再修改链接实现矩形位置、颜色的微调
> >
> > 默认复制的是嵌入链接 `![[...]]`，也可以使用普通链接 `[[...]]`

<br>

> [!multi-column]
>
> > [!note] 矩形位置参数
> >
> > 要嵌入的矩形区域由链接文本中的参数给出。该值是四个数字的逗号分隔列表，其中 `rect=x1,y1,x2,y2`
> >
> > - `(x1, y1)` 是矩形的左下角
> > - `(x2, y2)` 是矩形的右上角
> >
> > 可以通过修改坐标微调截图范围
>
> > [!note|wide-2] 图像缩放
> >
> > 可以使用 [Wikilink 链接嵌入](#Wikilink-链接嵌入) 的格式缩放
> >
> > ```
> > ![[file.pdf#page=1&rect=300,200,700,600&color=red|200]]
> > ```
> >
> > 或者使用插件独有格式缩放
> >
> > ```
> > ![[file.pdf#page=1&rect=300,200,700,600&color=red&width=200]]
> > ```

<video controls="" preload="metadata" src="https://ryotaushio.github.io/obsidian-pdf-plus/attachments/screen-recording-2024-02-27-at-9.23.54.mov#t=0.001" target="_self"></video>

## 更多任务列表

在 [任务列表](#任务列表) 的基础上扩展了语法，需要安装 [border](https://github.com/Akifyss/obsidian-border) 主题

> [!multi-column]
>
> > [!note-blank]
> >
> > ```
> > - [ ] To Do
> > - [x] Done
> > - [/] In Progress
> > - [-] Cancelled
> > - [>] Rescheduled
> > - [<] Scheduled
> > - [!] Important
> > - [?] Question
> > - [i] lnfomation
> > - [S] Amount
> > - [*] Star
> > - [b] Bookmark
> > - ["] Quote
> > - [n] NOte
> > - [l] Location
> > - [I] Idea
> > - [p] Pro
> > - [c] Con
> > - [u] Up
> > - [d] Down
> > ```
>
> > [!note-blank]
> >
> > - [ ] To Do
> > - [x] Done
> > - [/] In Progress
> > - [-] Cancelled
> > - [>] Rescheduled
> > - [<] Scheduled
> > - [!] Important
> > - [?] Question
> > - [i] lnfomation
> > - [S] Amount
> > - [*] Star
> > - [b] Bookmark
> > - ["] Quote
> > - [n] NOte
> > - [l] Location
> > - [I] Idea
> > - [p] Pro
> > - [c] Con
> > - [u] Up
> > - [d] Down

## 填空

在 [删除线](#删除线)、[斜体](#斜体)、[高亮](#高亮) 的基础上扩展了语法，需要使用自定义的 snippets

首先需要在前言区的 `cssclasses` 添加 `cloze`

```yaml
---
cssclasses:
  - cloze
---
```

然后可以使用如下两种语法

> [!multi-column]
>
> > [!summary] 鼠标悬浮展示答案
> >
> > ```
> > question: _~~answer~~_
> > ```
> >
> > question: _~~answer~~_
>
> > [!summary] 鼠标点击展示答案
> >
> > ```
> > question: ==~~answer~~==
> > ```
> >
> > question: ==~~answer~~==

如果需要展示全部答案，只需要将前言区的 `cloze` 替换成 `cloze-ans`

```yaml
---
cssclasses:
  - cloze-ans
---
```

# 变通

大多数使用 Markdown 的人会发现，基础语法和扩展语法已能满足需求。但如果您长期使用 Markdown，可能会发现某些必要功能确实缺失。本节在 [内嵌 HTML 标签](#内嵌-html-标签) 的基础上提供了一些绕过 Markdown 限制的技巧。针对 Markdown 官方不支持的某些功能的替代解决方案。

## 下划线

Markdown 原生不支持下划线，可能是因为网页文本中的下划线通常表示超链接。然而，在写论文或报告时，可能需要使用下划线。

```markdown
一些文字 <ins>将被加下划线</ins>。
```

一些文字 <ins>将被加下划线</ins>。

## 某段缩进

Markdown 里的空格和制表符有特殊用途，比如创建换行或代码块。如果你想用 Tab 缩进段落，可以尝试以下方法：

```markdown
&nbsp;&nbsp;&nbsp;&nbsp;这是一个缩进的段落。
```

&nbsp;&nbsp;&nbsp;&nbsp;这是一个缩进的段落。

## 段落文字居中

Markdown 没有文本对齐的语法，但可以使用

```markdown
<p style="text-align:center">这段文字居中显示。</p>
```

<p style="text-align:center">这段文字居中显示。</p>

## 文字颜色

Markdown 不支持更改文字颜色，但 HTML 可以

```markdown
这段文字是<font color="red">红色的！</font>

<p style="color:blue">这段文字是蓝色的。</p>
```

这段文字是<font color="red">红色的！</font>

<p style="color:blue">这段文字是蓝色的。</p>

## 注释

Markdown 没有内置的注释功能，但可以使用 HTML 注释

```html
<!-- 这段文字不显示 -->
```

> [!tip]
>
> 在 vscode 中只需要选中内容，按快捷键 `ctrl + /` 可以注释选中的部分

## 调整图片大小

Markdown 不能指定图片尺寸，但可以用 HTML 设定宽高

```html
<img src="https://markdown.com.cn/images/rocks.jpg" width="200" height="100" />
```

<img src="https://markdown.com.cn/images/rocks.jpg" width="200" height="100">

Obsidian 可以用 [wikilink 嵌入](#wikilink-链接嵌入)

## 图片标题

Markdown 没有图片标题（Caption），可以使用 HTML 的 `<figure>` 和 `<figcaption>`

```html
<figure>
  <img src="https://markdown.com.cn/images/rocks.jpg" alt="描述文本" />
  <figcaption>这是图片描述</figcaption>
</figure>
```

<figure>
  <img src="https://markdown.com.cn/images/rocks.jpg" alt="描述文本">
  <figcaption>这是图片描述</figcaption>
</figure>

Obsidian 可以用 [[#^caption|Callout 样式]]
