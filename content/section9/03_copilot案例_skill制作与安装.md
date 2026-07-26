---
tags:
  - tutorial
  - vscode
  - copilot
  - skill
  - case
---

# Copilot 案例：Skill 制作与安装

## 学习目标

- 掌握 Skill 文件夹的完整结构。
- 学会创建包含脚本和模板的实用 Skill。
- 掌握 Skill 的安装路径与使用方式。
- 了解 Skill 的渐进式加载机制。

## 前置条件

- 已了解 Skill 的概念与结构（参考 [section8/03](../section8/03_skill与mcp基础.md)）。
- 已完成本教程的 [00*copilot案例*指令文件示例](00_copilot案例_指令文件示例.md)。
- 具备基本的 Markdown 和脚本编写能力。

## 项目概述

在本实战中，你将创建一个名为 **"生成练习文件"** 的 Skill，用于为本教程仓库中的章节自动生成配套的练习题文件。这个 Skill 包含 SKILL.md 定义文件、Markdown 模板和参考规范文档。

## 步骤

### 第 1 步：创建 Skill 目录结构

在仓库中创建以下目录结构：

```
.github/skills/generate-exercise/
├── SKILL.md
├── assets/
│   └── exercise-template.md
└── references/
    └── section-writing-guide.md
```

### 第 2 步：编写 SKILL.md

创建 `.github/skills/generate-exercise/SKILL.md`：

```markdown
---
name: generate-exercise
description: "为本教程章节生成配套的练习题 Markdown 文件。适用于已有章节内容需要配套练习的场景。"
argument-hint: "章节编号..."
user-invocable: true
---

# 生成练习文件

## 何时使用

- 需要为一个已有章节生成配套的练习题。
- 需要确保练习题的风格与仓库中已有练习保持一致。

## 步骤

1. 读取目标章节的 `00_` 文件，了解章节覆盖的知识点。
2. 参考 [练习模板](./assets/exercise-template.md) 创建 `01_练习.md` 文件。
3. 确保练习题覆盖章节中的所有核心知识点。
4. 参考 [章节编写规范](./references/section-writing-guide.md) 统一格式。

## 输出原则

- 练习题从易到难排列。
- 包含至少 5 道独立题目。
- 最后一道为综合运用题。
- 每道题标注考察的知识点。
```

### 第 3 步：创建练习模板

创建 `.github/skills/generate-exercise/assets/exercise-template.md`：

```markdown
---
tags:
  - tutorial
  - exercise
---

# {章节名称} 练习

## 题目 1：{考察知识点}

{题目描述}

## 题目 2：{考察知识点}

{题目描述}

## 题目 3：{考察知识点}

{题目描述}

## 题目 4：{考察知识点}

{题目描述}

## 题目 5：综合运用

{综合性题目描述，要求同时运用本章多个知识点}
```

### 第 4 步：创建章节编写规范参考文档

创建 `.github/skills/generate-exercise/references/section-writing-guide.md`：

```markdown
# 章节编写规范

## 文件命名

- `00_主题概述.md` — 章节主教程
- `01_练习.md` — 配套练习题

## 练习题编写规范

- 每题标注考察的知识点。
- 难度从 ⭐ 到 ⭐⭐⭐⭐⭐。
- 包含参考答案（可选）。
- 综合题需要结合 2 个以上知识点。
```

### 第 5 步：测试 Skill

1. 在 Copilot Chat 中输入 `/`。
2. 从菜单中选择 `/generate-exercise`。
3. 输入参数（如 `section3`）。
4. 观察 AI 是否：
   - 读取了 `section3/00_markdown扩展与obsidian语法.md`。
   - 加载了 `SKILL.md` 和引用的模板文件。
   - 生成了符合规范的练习文件。

### 第 6 步：在不同位置安装 Skill

除了项目级路径 `.github/skills/`，Skill 还可以安装在用户级路径下，对所有项目生效。

**安装到用户级目录（Windows）：**

```
%APPDATA%\Code\User\prompts\ 下的 skills 目录
```

或手动创建：

```
~/.copilot/skills/generate-exercise/
├── SKILL.md
└── assets/
    └── exercise-template.md
```

> 用户级的 Skill 对所有 VS Code 项目可见，适合个人常用的通用技能。

### 第 7 步：从社区安装 Skill

你也可以安装社区分享的 Skill：

1. 克隆或下载社区 Skill 仓库。
2. 将 Skill 文件夹复制到 `.github/skills/` 或用户级 skills 目录。
3. 重启 VS Code。
4. 在斜杠菜单中即可看到新安装的 Skill。

> 社区 Skill 资源推荐：[Awesome Copilot](https://github.com/github/awesome-copilot)

## Skill 的最佳实践

| 原则                  | 说明                                                      |
| :-------------------- | :-------------------------------------------------------- |
| **描述要精准**        | `description` 是 AI 发现 Skill 的唯一途径，包含触发关键词 |
| **SKILL.md 保持精简** | 控制在 500 行以内，详细信息放在 `references/` 中          |
| **使用相对路径**      | 引用附属资源时使用 `./scripts/xxx` 格式                   |
| **渐进式加载**        | SKILL.md 只包含核心步骤，细节放在按需加载的引用文件中     |
| **文件夹名匹配**      | 文件夹名必须与 `name` 字段一致                            |

## 扩展阅读

- [VS Code Agent Skills 官方文档](https://code.visualstudio.com/docs/copilot/customization/agent-skills)
- [Awesome Copilot - Skills 示例](https://github.com/github/awesome-copilot)

## 常见问题

**Q：Skill 中的脚本可以用哪些语言编写？**
A：任何可执行语言都可以。Shell 脚本、Python、Node.js 是常见选择。确保运行环境中有所需的运行时。

**Q：如何调试 Skill 没有被正确加载？**
A：在 Chat 面板右键 → Diagnostics，查看 "Skills" 列表。确认文件夹名和 `name` 字段一致。

**Q：Skill 和 Prompt 文件在斜杠菜单中如何排序？**
A：按字母顺序排列。你可以在文件名前加数字前缀控制顺序，如 `01-`、`02-`。

**Q：Skill 可以引用其他 Skill 吗？**
A：不可以直接引用。但你可以将通用逻辑提取为指令文件（`.instructions.md`），让多个 Skill 分别引用。
