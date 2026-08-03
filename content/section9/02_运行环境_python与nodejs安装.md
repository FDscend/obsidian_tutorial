---
tags:
  - tutorial
  - agent
  - environment
  - python
  - nodejs
---

# 运行环境：Python 与 Node.js 安装

## 学习目标

- 理解为什么 Agent / Skill 需要 Python 与 Node.js 运行时。
- 掌握 Python 的安装、验证与 `pip` 配置。
- 掌握 Node.js 的安装、验证与 `npm` 配置。
- 了解国内镜像源配置，避免下载与安装卡顿。

## 前置条件

- 完成 [section1](../section1/) 环境安装。
- 了解终端的基本操作（或使用 VS Code 内置终端）。

## 为什么需要 Python 与 Node.js

很多 Agent 的 **Skill（技能）** 和 **MCP 服务器**本质上是可执行脚本或本地服务：

- **Python 脚本**：数据处理、网络请求、文件批量操作等，是 Skill 最常见的实现语言。
- **Node.js 脚本 / MCP 服务器**：大量 MCP 服务器（如 Tavily Search、Filesystem）以 `npx` 方式运行，官方 CLI 工具（如 Claude Code、Codex）也通过 `npm` 全局安装。

> 安装后，Agent 才能"运行脚本 / 启动 MCP 服务"，否则会报"找不到 python / node"之类的错误。

## 第 1 步：安装 Python

### Windows

1. 访问 [python.org/downloads](https://www.python.org/downloads/) 下载最新稳定版（如 3.12+）。
2. 运行安装程序，**务必勾选**：
   - ✅ **Add Python to PATH**（把 Python 加入环境变量，否则终端找不到 `python`）。
3. 点击 **Install Now** 完成安装。

### macOS / Linux

- macOS 推荐安装 [Homebrew](https://brew.sh/) 后执行 `brew install python`。
- Linux 发行版一般自带 Python，或使用系统包管理器安装（如 `sudo apt install python3`）。

### 验证安装

打开 VS Code 内置终端（`Ctrl+`` `），执行：

```bash
python --version
pip --version
```

应看到类似 `Python 3.12.x` 与 `pip 24.x` 的输出。

> 若提示 `python` 不是内部命令，尝试 `python3 --version`，或重启终端 / 重新登录 Windows 使 PATH 生效。

## 第 2 步：安装 Node.js

1. 访问 [nodejs.org](https://nodejs.org/) 下载 **LTS 版本**（长期支持版，推荐）。
2. 运行安装程序，保持默认选项即可（安装向导会自动把 `node` 与 `npm` 加入 PATH）。
3. 安装完成后**重启终端**，验证：

```bash
node -v
npm -v
```

- `node -v` 应显示 `v20.x` 或 `v22.x` 等版本号。
- `npm -v` 应显示 `10.x` 或更高版本。

> [!note] Agent 对 Node.js 版本的要求
> 不同工具要求不同：Quartz v5 需要 Node.js v22+；大部分 MCP 服务器与官方 CLI 需要 Node.js v18+ 即可。安装 LTS 版本通常最稳妥。

## 第 3 步（可选）：配置国内镜像源

在国内网络环境下，`npm` 默认源可能很慢。可以切换到国内镜像：

```bash
# 查看当前源
npm config get registry

# 切换为淘宝镜像源
npm config set registry https://registry.npmmirror.com
```

Python 的 `pip` 同理：

```bash
# 临时使用清华源安装
pip install 包名 -i https://pypi.tuna.tsinghua.edu.cn/simple

# 或永久配置
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## 常见问题

### Q：安装后终端仍提示"不是内部或外部命令"？

1. 确认安装时勾选了 **Add to PATH**（Python）或使用默认安装（Node.js）。
2. **重启终端 / VS Code**，让新的 PATH 生效。
3. 检查环境变量：`Win` 键搜索"环境变量"，确认 `python.exe` / `node.exe` 所在目录已加入 `Path`。

### Q：`pip` 不是内部命令？

新版 Python 自带 `pip`。若缺失，可执行 `python -m pip install --upgrade pip`，或重新运行安装程序并勾选 `pip` 组件。

### Q：多个 Python 版本并存怎么办？

优先使用 `py` 启动器（Windows）：`py -3.12` 指定版本运行；在 VS Code 中也可通过命令面板 **Python: Select Interpreter** 选择具体解释器。

## 练习任务

1. 分别验证 `python --version`、`pip --version`、`node -v`、`npm -v` 可正常输出。
2. 用 `pip` 安装一个示例包（如 `requests`），并用 Python 执行一次 `print("Hello")`。
3. 用 `npm` 执行一次 `npx cowsay hello`，确认 npx 可正常工作。

## 验收清单

- [ ] `python` 与 `pip` 命令可用。
- [ ] `node` 与 `npm` 命令可用。
- [ ] 知道如何配置国内镜像源。
- [ ] 能解释"找不到 python / node"类报错的一般排查思路。
