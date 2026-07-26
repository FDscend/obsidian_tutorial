---
tags:
  - tutorial
  - quartz
  - installation
  - nodejs
---

# 环境准备与 Quartz 安装

## 学习目标

- 安装并确认 Node.js v22+ 环境
- 获取 Quartz v5 源码
- 理解 Quartz v5 的目录结构

## 前置条件

- 完成 [section1/01](../section1/01_obsidian安装与配置.md) 的环境安装
- Git 已配置并可用

## 1. 确认 Node.js 环境

Quartz v5 要求 **Node.js v22+** 和 **npm v10.9.2+**。

```bash
node -v
npm -v
```

如果版本低于要求，去 [nodejs.org](https://nodejs.org/) 下载 LTS 版本安装。

> Windows 用户安装后可能需要重启终端才能生效。

## 2. 获取 Quartz v5

Quartz v5 不再作为 npm 包发布，而是通过克隆官方仓库获取：

```bash
# 在仓库根目录执行
git remote add upstream https://github.com/jackyzha0/quartz.git
git fetch upstream v5
git checkout -b v5 upstream/v5
```

执行后，你的仓库会出现 `v5` 分支，包含 Quartz 的完整源码。

### 目录结构说明

```
v5 分支根目录
├── content/          ← 你的笔记源文件（后续放入）
├── quartz/           ← Quartz 核心源码
├── quartz.config.yaml  ← 站点配置文件（核心）
├── quartz.ts         ← Quartz 入口文件
├── package.json      ← Node.js 依赖
├── tsconfig.json     ← TypeScript 配置
└── .github/workflows/  ← CI/CD 工作流
```

### 与 v4 的关键区别

| 项目     |            v4（旧）             |          v5（当前）          |
| -------- | :-----------------------------: | :--------------------------: |
| 安装方式 | `npm install @jackyzha0/quartz` |           克隆仓库           |
| 配置格式 |       TypeScript（`.ts`）       |       YAML（`.yaml`）        |
| 插件系统 |              内置               |         社区独立插件         |
| 内容目录 |             可配置              |      固定为 `content/`       |
| 布局配置 |     单独 `quartz.layout.ts`     | 合并到 YAML 的 `layout` 字段 |

> `@jackyzha0/quartz` npm 包已废弃，不要使用。

## 3. 安装依赖

```bash
# 安装项目依赖
npm ci

# 安装 Quartz 社区插件
npx quartz plugin install
```

> **关于 npm registry**：如果使用中国镜像（npmmirror.com）时提示找不到 `@quartz-community/` 包，可临时切换：
>
> ```bash
> npm ci --registry=https://registry.npmjs.org
> ```
>
> 或在仓库根目录创建 `.npmrc`：
>
> ```
> registry=https://registry.npmjs.org
> ```

## 4. 创建内容目录

Quartz v5 要求所有笔记放在 `content/` 目录下。将你的 Obsidian 笔记从 `main` 分支同步过来：

```bash
# 从 main 分支检出内容
git checkout main -- section0 section1 ... appendix

# 移动到 content/
Move-Item section0, section1, ... appendix content/
```

也可以直接拷贝：

```bash
Copy-Item -Recurse section0 content/  # Windows
# cp -r section0 content/  # macOS/Linux
```

## 扩展阅读

- [Quartz 官方安装文档](https://quartz.jzhao.xyz/getting-started/installation)
- [Node.js 下载](https://nodejs.org/)

## 常见问题

### Q: `npm ci` 报错说找不到 `package-lock.json`？

用 `npm install` 代替，会自动生成 lockfile：

```bash
npm install
```

### Q: `@jackyzha0/quartz` 报 404？

这个包已废弃。请使用上述克隆仓库的方式获取 Quartz v5。

### Q: 我用的 Node.js 版本低于 22？

Quartz v5 要求 Node.js 22+。升级方法：

- Windows：去 nodejs.org 下载安装包
- macOS/Linux：使用 `nvm` 管理多版本

## 练习任务

1. 检查当前 Node.js 版本：`node -v`
2. 获取 Quartz v5 并安装依赖
3. 执行 `npx quartz build` 验证安装成功

## 验收清单

- [ ] Node.js v22+ 已安装
- [ ] 已获取 Quartz v5 分支
- [ ] 依赖安装成功
- [ ] `npx quartz build` 能正常执行
