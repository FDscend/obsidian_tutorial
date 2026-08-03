---
tags:
  - tutorial
  - agent
  - environment
  - powershell
---

# 运行环境：PowerShell 7 安装与配置

## 学习目标

- 理解 Windows PowerShell 5.1 与 PowerShell 7（`pwsh`）的区别，以及为什么 Agent 需要 pwsh。
- 掌握 PowerShell 7 的安装与验证方法。
- 掌握把 VS Code 默认终端切换为 `pwsh` 的配置。

## 前置条件

- 已完成 [section9/02](02_运行环境_python与nodejs安装.md)（或已了解终端操作）。
- 已安装 VS Code（参考 [section1/02](../section1/02_vscode安装与配置.md)）。

## 为什么需要 PowerShell 7

Windows 系统自带的终端是 **Windows PowerShell 5.1**，它只在 Windows 上运行，且版本较老。而很多 Agent / Skill / 自动化脚本在 Windows 上会调用 **`pwsh`（PowerShell 7）**：

- **跨平台一致**：PowerShell 7 基于 .NET，在 Windows / macOS / Linux 上行为一致，脚本可复用。
- **更贴近主流**：`pwsh` 是官方推荐的现代版本，很多工具（含部分 Agent 的终端执行）默认调用 `pwsh`。
- **语法/命令兼容性更好**：支持更多新语法与并行能力，且 `pwsh` 与 `bash` 的许多约定一致。
- **默认 UTF-8 编码**：pwsh 7 默认使用 UTF-8，读写含中文的文件 / 脚本不易乱码；而 Windows PowerShell 5.1 默认使用系统代码页（中文系统为 GBK），处理 UTF-8 内容时容易出现乱码。

> 在 VS Code 内置终端中，即使系统装了 pwsh，默认也可能仍是 Windows PowerShell 5.1，需要手动切换默认配置。

## 第 1 步：确认是否已安装

打开终端，执行：

```bash
pwsh --version
```

- 若显示 `PowerShell 7.x.x`，说明已安装，可直接跳到第 4 步配置 VS Code。
- 若提示"不是内部或外部命令"，说明未安装或未加入 PATH，按下一步安装。

也可以查看系统自带的旧版：

```powershell
$PSVersionTable.PSVersion
```

## 第 2 步：安装 PowerShell 7

### Windows（推荐 winget）

```bash
winget install Microsoft.PowerShell
```

### Windows（Microsoft Store）

1. 打开 Microsoft Store，搜索 **PowerShell**。
2. 选择发布者为 **Microsoft Corporation** 的 **PowerShell**（7.x）应用，点击 **获取 / 安装**。
3. 安装完成后，在开始菜单即可找到 **PowerShell 7 (x64)**。

> 通过 Store 安装后 `pwsh` 一般会自动加入 PATH；若终端找不到，重启终端或重新登录 Windows。

### Windows（MSI 手动安装）

1. 访问 [PowerShell GitHub Releases](https://github.com/PowerShell/PowerShell/releases)。
2. 下载最新稳定版的 `.msi` 安装包（如 `PowerShell-7.x.x-win-x64.msi`）。
3. 双击运行，保持默认选项即可（默认会加入 PATH）。
4. 完成后**重启终端**使生效。

### macOS / Linux

```bash
# macOS（Homebrew）
brew install --cask powershell

# Ubuntu / Debian
# 参照 https://learn.microsoft.com/powershell/scripting/install/installing-powershell-on-linux
# 添加微软源后：sudo apt install powershell
```

## 第 3 步：验证安装

重启终端后执行：

```bash
pwsh --version
```

应显示 `PowerShell 7.x.x`。再快速验证：

```bash
pwsh -c "Write-Host 'PowerShell OK'"
```

## 第 4 步：把 VS Code 默认终端切换为 pwsh

1. 打开 VS Code 命令面板（`Ctrl+Shift+P`）。
2. 输入 **Terminal: Select Default Profile**，回车。
3. 在弹出的列表中选择 **PowerShell**（注意选择 7.x 对应的条目；若列表中没有，先重启 VS Code 或检查 pwsh 是否在 PATH）。
4. 打开新终端（`Ctrl+`` `），提示符应显示 `PS ...` 且版本为 7。

### 通过 settings.json 配置（更精确）

在 `settings.json` 中添加：

```json
{
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}
```

> 若希望启动时自动切换到 pwsh，也可以将默认配置项设置为 `"PowerShell"`，并确保已安装 PowerShell 扩展（ID：`ms-vscode.PowerShell`）。

## 常见问题

### Q：Windows 自带 PowerShell 5.1 和 pwsh 7 有什么区别？

| 对比项       | Windows PowerShell 5.1                          | PowerShell 7（pwsh）           |
| :----------- | :---------------------------------------------- | :----------------------------- |
| 平台         | 仅 Windows                                      | 跨平台（Win/mac/Linux）        |
| 运行基础     | .NET Framework                                  | .NET（现代）                   |
| 维护状态     | 维护模式（不再增加新特性）                      | 活跃开发                       |
| 默认编码     | 系统代码页（中文系统为 GBK），处理 UTF-8 易乱码 | UTF-8，中文 / UTF-8 内容更稳定 |
| Agent 兼容性 | 部分脚本/工具不支持                             | 主流工具默认支持               |

### Q：pwsh 5 里中文乱码，装 7 能解决吗？

能。Windows PowerShell 5.1 默认按系统代码页（中文系统 GBK）解析文本，读取 / 输出 UTF-8 内容时容易乱码；PowerShell 7 默认 UTF-8，编码问题大幅减少。若仍需兼容 5.1，可临时设置输出编码：

```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
```

或切换代码页 `chcp 65001`。长期方案仍是使用 pwsh 7。

### Q：装了 pwsh，但 VS Code 终端还是旧版？

在 VS Code 命令面板执行 **Terminal: Select Default Profile** 重新选择；或确认 `settings.json` 中 `terminal.integrated.defaultProfile.windows` 已设为 `"PowerShell"`。

### Q：`winget` 不是内部命令？

需要较新的 Windows 10/11。旧系统可从 GitHub Releases 下载 MSI 手动安装，或使用 Scoop / Chocolatey：

```bash
# Scoop
scoop install pwsh

# Chocolatey
choco install powershell-core
```

### Q：pwsh 与 bash 都能用，该用哪个？

取决于脚本类型：**bash 脚本**用 Git Bash（见 [section9/03](03_运行环境_gitbash与rg安装.md)），**PowerShell 脚本 / 系统命令**用 pwsh。两者可以共存，Agent 会根据脚本自动选择合适的解释器。

## 练习任务

1. 运行 `pwsh --version`，确认已安装 PowerShell 7。
2. 用 `pwsh -c` 执行一条简单的 PowerShell 命令。
3. 将 VS Code 默认终端切换为 PowerShell，确认新终端提示符显示 `PS ...`。
4. 让一个终端型 Agent 执行一次 `pwsh` 命令，确认其能找到解释器。

## 验收清单

- [ ] `pwsh --version` 可正常输出（PowerShell 7.x）。
- [ ] 知道 winget / MS Store / MSI / 包管理器等安装方式。
- [ ] VS Code 新终端的默认配置文件为 PowerShell 7。
- [ ] 能区分 Windows PowerShell 5.1 与 PowerShell 7。
- [ ] 知道 5.1 与 7 的默认编码差异（乱码问题的来源）。
