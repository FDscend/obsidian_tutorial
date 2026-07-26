---
tags:
  - tutorial
  - git
  - github
  - setup
---

# Git 和 GitHub 安装与登录

## 学习目标

- 下载并安装 Git。
- 注册/登录 GitHub 账号。
- 配置 Git 用户信息与代理（可选）。
- 使用多种方式克隆本仓库。

## 前置条件

- 一台可上网的电脑。
- 浏览器（推荐 Chrome/Edge）。

## 步骤

### 第 1 步：注册 GitHub 账号

如果你还没有 GitHub 账号：

1. 访问 [GitHub.com](https://github.com/)。
2. 点击右上角的 **Sign up**。
3. 输入用户名、邮箱地址和密码。
4. 完成邮箱验证。

> [!tip] 用户名建议
>
> 建议使用全英文用户名，便于在协作时识别。例如 `zhangsan` 或 `zhang-san`。

### 第 2 步：下载与安装 Git

#### Windows

1. 访问 [Git 官网](https://git-scm.com/downloads)。
2. 点击 **Windows** 版本下载。
3. 运行安装程序，**大部分选项保持默认即可**，重点关注以下几点：
   - **选择默认编辑器**：建议选择 **Visual Studio Code**（而非 Vim）。
   - **调整 PATH 环境变量**：选择 **"Git from the command line and also from 3rd-party software"**（推荐）。
   - **换行符转换**：选择 **"Checkout Windows-style, commit Unix-style line endings"**（默认选项，适合跨平台协作）。

4. 完成安装后，打开终端（或 PowerShell），验证安装：

```bash
git --version
```

应显示类似 `git version 2.45.0.windows.1` 的信息。

#### macOS

1. 访问 [Git 官网](https://git-scm.com/downloads)，下载 macOS 版本。
2. 运行安装包按提示完成安装。
3. 或在终端中使用 Homebrew 安装：

```bash
brew install git
```

#### Linux

使用包管理器安装：

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git
```

### 第 3 步：配置 Git 用户信息

安装 Git 后，需要配置用户名和邮箱。这些信息会附加到每次提交中。

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

> [!warning] 邮箱与 GitHub 关联
>
> 建议使用**注册 GitHub 时使用的邮箱**，这样你的提交会自动关联到 GitHub 账号头像。

验证配置：

```bash
git config --global --list
```

### 第 4 步：配置代理（可选）

如果你所在的网络需要代理才能访问 GitHub，请配置代理：

```bash
# 设置 HTTP 代理（端口号以实际为准）
git config --global http.proxy http://127.0.0.1:1234
git config --global https.proxy https://127.0.0.1:1234

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

> [!note] 不需要代理则跳过此步

### 第 5 步：克隆本仓库

有几种克隆方式，按使用场景选择：

#### 方式一：默认克隆（最简单）

在终端中运行：

```bash
git clone https://github.com/FDscend/obsidian_tutorial.git
```

这会在当前目录下创建 `obsidian_tutorial` 文件夹，仓库内容放入其中。

#### 方式二：自定义文件夹名

```bash
git clone https://github.com/FDscend/obsidian_tutorial.git ObsidianTutorial
```

这会在当前目录下创建 `ObsidianTutorial` 文件夹。

#### 方式三：克隆到当前文件夹

```bash
git clone https://github.com/FDscend/obsidian_tutorial.git .
```

> [!warning] 注意 `.`
>
> 最后的 `.` 表示克隆到当前目录（当前文件夹必须为空）。这种方式适合在 VS Code 中直接操作。

#### 方式四：选择特定分支

1. 关闭 VS Code，确保目标文件夹为空。
2. 在 VS Code 中打开该空文件夹。
3. 按 `` Ctrl+` `` 打开终端，输入：

```bash
git clone https://github.com/FDscend/obsidian_tutorial.git .
```

4. 克隆完成后，点击左下角分支名（如 `main`），选择要切换的分支。
5. 之后在"源代码管理"侧栏的"图形"视图中，可查看所有分支的提交历史。

### 第 6 步：GitHub 登录验证（可选）

当克隆私有仓库或推送代码时，VS Code 会弹出 GitHub 登录窗口：

1. 在 VS Code 中尝试推送更改。
2. 弹出提示时点击 **允许**（Sign in with GitHub）。
3. 浏览器中确认授权。

> [!note] 无弹窗处理
>
> 如果没有自动弹出登录，可以按 `Ctrl+Shift+P`，输入 "Git: Sign in with GitHub" 手动触发。

## 扩展阅读

- [Pro Git 中文版（官方书籍）](https://git-scm.com/book/zh/v2)
- [GitHub 文档](https://docs.github.com/zh)

## 常见问题

**Q：`git --version` 提示找不到命令？**
A：安装后需要**重新打开终端**才会加载 PATH。如果还是找不到，请检查安装时是否选择了"Add to PATH"。

**Q：克隆时提示 SSL 错误？**
A：可能是代理或防火墙问题。可尝试：

```bash
git config --global http.sslVerify false
```

（不推荐长期关闭，仅用于临时排障）

**Q：提交后 GitHub 上看不到贡献记录？**
A：检查 `git config --global user.email` 是否与 GitHub 注册邮箱一致。

## 练习任务

1. 注册 GitHub 账号（如尚未注册）。
2. 下载并安装 Git。
3. 配置用户名和邮箱。
4. 使用默认方式克隆本仓库。
5. 在终端中运行 `git log`，查看提交历史。

## 验收清单

- [ ] 已注册 GitHub 账号
- [ ] 已安装 Git，`git --version` 可正常运行
- [ ] 已配置 `user.name` 和 `user.email`
- [ ] 已成功克隆本仓库到本地
- [ ] 可在 VS Code 中看到仓库的文件结构和 Git 历史
