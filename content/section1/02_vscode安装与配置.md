---
tags:
  - tutorial
  - vscode
  - setup
---

# VS Code 安装与配置

## 学习目标

- 下载并安装 Visual Studio Code。
- 安装推荐的 Markdown 扩展，实现扩展语法（Callout、Mermaid、数学公式）预览。
- 配置仓库级设置与代码片段。

## 前置条件

- 已克隆本仓库到本地（参考 [03_git和github安装与登录](03_git和github安装与登录.md)）。
- 已安装 Git（同上）。

## 步骤

### 第 1 步：下载与安装 VS Code

1. 访问 [Visual Studio Code 官网](https://code.visualstudio.com/)。
2. 点击 **Download for Windows**（或其他对应版本）。
3. 运行安装程序。
   - 建议勾选 **"添加到 PATH"**（Add to PATH），方便在终端中使用 `code` 命令。
   - 建议勾选 **"通过 Code 打开"操作添加到文件资源管理器上下文菜单**。

### 第 2 步：使用 VS Code 打开仓库

**方法一：文件管理器**

1. 打开克隆好的仓库文件夹（例如 `D:\WorkSpace\obsidian_tutorial`）。
2. 右键点击空白区域，选择 **通过 Code 打开**（Open with Code）。

**方法二：终端**

```bash
cd D:\WorkSpace\obsidian_tutorial
code .
```

### 第 3 步：复制配置文件夹

仓库中提供了预设的 VS Code 配置模板 `.vscode.default`。需要将其复制为 `.vscode` 才能生效。

1. 在文件管理器中找到仓库根目录的 `.vscode.default` 文件夹。
2. 将其**复制一份**，重命名为 `.vscode`。

> [!note] `.vscode` 文件夹包含的内容
>
> - `mdStyle.css`：Markdown 预览的自定义样式（主题跟随 VS Code 主题）。
> - `template.code-snippets`：Markdown 代码片段，键入缩写前缀即可快速插入模板。

### 第 4 步：将 `.vscode` 加入 `.gitignore`

1. 打开仓库根目录下的 `.gitignore` 文件。
2. 确认包含以下内容：

```
.vscode/
```

### 第 5 步：安装推荐扩展

在 VS Code 中按 `Ctrl+Shift+X` 打开扩展面板，搜索并安装以下扩展：

| 扩展                                                                                                                         | 用途                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                                       | 代码/文档格式化           |
| [Markdown Checkboxes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox)                         | 任务列表复选框渲染        |
| [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)                                 | Emoji 短代码渲染          |
| [Markdown Footnotes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes)                         | 脚注渲染                  |
| [vscode-markdown-obsidian-alert](https://marketplace.visualstudio.com/items?itemName=FDscend.vscode-markdown-obsidian-alert) | Obsidian Callout 语法预览 |
| [markdown-highlight-mark](https://marketplace.visualstudio.com/items?itemName=FDscend.markdown-highlight-mark)               | `==高亮==` 语法高亮       |
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)（可选）                 | 文件图标主题              |

> [!tip] 批量安装
>
> 可以通过在终端中运行以下命令批量安装（以 Windows 为例）：
>
> ```bash
> code --install-extension esbenp.prettier-vscode
> code --install-extension bierner.markdown-checkbox
> code --install-extension bierner.markdown-emoji
> code --install-extension bierner.markdown-footnotes
> code --install-extension FDscend.vscode-markdown-obsidian-alert
> code --install-extension FDscend.markdown-highlight-mark
> code --install-extension PKief.material-icon-theme
> ```

### 第 6 步：验证 Markdown 预览

1. 在 VS Code 中打开 `00_环境安装总览.md`。
2. 点击右上角的 **预览按钮**打开侧边预览，或按 `Ctrl+K V`；点击 **打开预览标签页**则使用 `Ctrl+Shift+V`。
3. 确认验收清单中的各项扩展语法渲染正常。

> [!note] 如果预览异常
>
> - 检查扩展是否已正确安装（扩展面板中搜索确认）。
> - 重新加载 VS Code 窗口（`Ctrl+Shift+P` → "Developer: Reload Window"）。
> - 确认 `.vscode/mdStyle.css` 已加载（设置中搜索 "Markdown › Styles"）。

### 第 7 步：使用代码片段（可选）

`.vscode/template.code-snippets` 中预设了 Markdown 模板。在编辑器中输入缩写前缀即可快速插入：

- **Note Callout**：键入 `\note`，自动插入 Obsidian 风格的 Callout 代码块。

## 扩展阅读

- [VS Code Markdown 官方文档](https://code.visualstudio.com/docs/languages/markdown)
- [VS Code 扩展市场](https://marketplace.visualstudio.com/)

## 常见问题

**Q：为什么安装了扩展但预览还是没变化？**
A：大部分 Markdown 扩展需要**新开预览标签页**才能生效。如果是在已有的预览页中，请关闭预览后重新打开。

**Q：`.vscode.default` 和 `.vscode` 有什么区别？**
A：`.vscode.default` 是仓库提供的配置模板，供参考和恢复使用。`.vscode` 是你个人实际生效的配置文件夹，已被 `.gitignore` 忽略，不会影响他人。

**Q：如何切换 Markdown 预览主题？**
A：VS Code 的 Markdown 预览主题跟随整体主题（`Ctrl+K Ctrl+T`）。额外的样式可修改 `.vscode/mdStyle.css`。

## 练习任务

1. 完成 VS Code 安装并以本仓库为工作区打开。
2. 复制配置文件夹，确保 `.vscode` 生效。
3. 安装本页列出的所有推荐扩展。
4. 打开 `00_环境安装总览.md`，在预览中验证全部渲染项。

## 验收清单

- [ ] 已安装 VS Code 并成功打开仓库
- [ ] 已从 `.vscode.default` 复制配置到 `.vscode`
- [ ] `.vscode` 已加入 `.gitignore`
- [ ] 已安装所有推荐扩展
- [ ] 在 VS Code 预览中，Callout、Mermaid、数学公式渲染正常
