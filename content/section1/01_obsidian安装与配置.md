---
tags:
  - tutorial
  - obsidian
  - setup
---

# Obsidian 安装与配置

## 学习目标

- 下载并安装 Obsidian。
- 以本仓库文件夹为 Vault 打开。
- 通过预设的 `.obsidian.default` 一键应用配置（主题、插件、样式、字体设置）。
- 验证 Markdown 扩展语法渲染正常。

## 前置条件

- 已克隆本仓库到本地（参考 [03_git和github安装与登录](03_git和github安装与登录.md)）。
- 已安装 Git（同上）。

## 步骤

### 第 1 步：下载与安装 Obsidian

1. 访问 [Obsidian 官网](https://obsidian.md/)。
2. 点击 **Download**，选择对应操作系统版本（Windows / macOS / Linux）。
3. 运行安装程序，按默认设置完成安装。

### 第 2 步：以本仓库为 Vault 打开

1. 启动 Obsidian。
2. 首次启动会弹出 **Vault 选择** 界面，点击 **打开本地文件夹**（Open folder as vault）。
3. 选择克隆到本地的仓库文件夹（例如 `D:\WorkSpace\obsidian_tutorial`）。
4. 点击 **打开**。

> [!warning]
>
> Obsidian 会询问是否信任此 vault 的作者。在确认仓库内容安全后，点击 **信任并打开**（Trust author and enable plugins），否则插件不会生效。

### 第 3 步：复制配置文件夹

仓库中提供了预设的 Obsidian 配置模板 `.obsidian.default`，其中已包含主题、插件、自定义样式、字体设置等。只需将其复制为 `.obsidian` 即可一键应用所有配置。

**在文件管理器中操作：**

1. 关闭 Obsidian。
2. 在仓库文件夹中找到 `.obsidian.default` 文件夹。
3. 将其**复制一份**，重命名为 `.obsidian`。

> [!tip]
>
> 以 `.` 开头的文件夹在 Windows 文件管理器中默认隐藏。需要在查看选项中勾选 **隐藏的项目** 才能看到。

### 第 4 步：将 `.obsidian` 加入 `.gitignore`

为防止个人配置被提交到远程仓库，应将 `.obsidian` 加入 `.gitignore`：

1. 打开仓库根目录下的 `.gitignore` 文件。
2. 确认包含以下内容：

```
.obsidian/
```

> [!note] `.obsidian.default` 已预设的内容
>
> - **核心插件**：Canvas、大纲、斜线命令、模板（模板文件夹指向 `template/`）、页面预览等已开启。
> - **主题**：已配置默认主题，开箱即用；如需更换可在设置→外观→主题中浏览社区主题。
> - **社区插件**：已配置需要的社区插件。按个人需求在设置→社区插件中自行安装。
> - **字体设置**：已指定霞鹜文楷为界面/正文字体，但需要**手动安装字体文件**（见下一步）。

### 第 5 步：安装字体

[霞鹜文楷](https://github.com/lxgw/LxgwWenKai) 是一款优美的开源中文字体，可提升阅读体验。`.obsidian.default` 中已预设了字体设置，只需将字体文件安装到系统中即可自动生效。

1. 访问 [霞鹜文楷 Releases](https://github.com/lxgw/LxgwWenKai/releases/latest)。
2. 下载最新版本的 ZIP 压缩包。
3. 解压缩后，选中所有字体文件，右键 → **安装**。
4. 重启 Obsidian，字体即自动应用。

## 扩展阅读

- [Obsidian 官方帮助文档（中文）](https://publish.obsidian.md/help-zh/)
- [Obsidian 社区](https://forum.obsidian.md/)

## 常见问题

**Q：打开 Vault 后看不到任何笔记？**
A：请确认克隆仓库时选择了正确的文件夹路径；也可以使用 Obsidian 的"打开其他 Vault"重新选择。

**Q：`.obsidian.default` 和 `.obsidian` 有什么区别？**
A：`.obsidian.default` 是仓库提供的**配置模板**，供参考和恢复使用。`.obsidian` 是你个人实际生效的配置文件夹，已被 `.gitignore` 忽略，不会影响他人。

**Q：Obsidian 预览时 Callout 显示不正常？**
A：请确认在打开 Vault 时选择了"信任作者"。也可在设置 → 外观 → CSS 片段中检查是否有冲突。

## 练习任务

1. 完成 Obsidian 安装并以本仓库为 Vault 打开。
2. 复制 `.obsidian.default` 为 `.obsidian`，一键应用全部配置。
3. 打开 `00_环境安装总览.md`，在 Obsidian 中验证渲染效果。
4. （可选）安装霞鹜文楷字体到系统。

## 验收清单

- [ ] 已安装 Obsidian 并成功以本仓库为 Vault 打开
- [ ] 已从 `.obsidian.default` 复制配置到 `.obsidian`，无需额外配置即可预览
- [ ] `.obsidian` 已加入 `.gitignore`
- [ ] 在 Obsidian 预览中，Callout、Mermaid、数学公式渲染正常
- [ ] （可选）已安装霞鹜文楷字体，Obsidian 自动应用
