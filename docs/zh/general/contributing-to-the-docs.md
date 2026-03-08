---
title: 如何贡献 RetroAchievements 文档
description: 了解如何通过本指南贡献 RetroAchievements 文档，包括快速编辑、详细贡献和最佳实践。
---

# 贡献文档

**欢迎所有对文档的贡献。**

我们感谢你的贡献热情。无论你是 Git 新手还是资深开发者，我们都能满足你的需求。以下是你如何帮助改进我们文档的方法：

## 快速编辑

如果你只想对现有页面进行快速编辑，请按以下简单步骤操作：

1. **编辑此页**：访问文档站点的任意页面，滚动到底部，点击「编辑此页」链接。
2. **Fork 仓库**：点击「Fork this repository」按钮。这将创建你自己的文档副本。
3. **进行修改**：使用屏幕上的 Markdown 编辑器进行修改并预览。
4. **提交修改**：点击「Commit changes」按钮。为你的修改填写标题和描述，然后提交。
5. **创建 Pull Request**：点击「Create pull request」按钮。为你的 Pull Request 填写标题和描述，然后提交审核。

## 详细贡献

如果你想创建新页面或处理多个页面，请按以下步骤操作：

### 1. Fork 仓库

- 前往[仓库页面](https://github.com/RetroAchievements/docs)并点击「Fork」按钮。![fork button](/fork-button.png)
- 在出现的表单中点击「Create fork」。

### 2. 在 VSCode 中打开

- 当你在查看你的 fork 时（通常位于 `github.com/your-username-here/docs`），按键盘上的句号（"."）键在浏览器中打开 VSCode。
- 使用左侧的文件树浏览文档，特别是展开「docs」文件夹。
- 使用 Ctrl+P 快捷键搜索文件，例如「README」。

![readme search](/readme-search.png)

### 3. 编辑和预览

- 使用 Ctrl+Shift+P（或 Firefox 中的 F1）打开命令面板，搜索「markdown preview」，选择「Markdown: Open Preview to the Side」。
- 使用 Markdown 预览在编写时查看你的修改。

![markdown preview](/markdown-preview.png)

### 4. 创建分支

- 点击 VSCode 左下角的分支名称（通常为 `main`）。
- 点击「Create branch」，输入分支名称，按 Enter，然后点击「Switch to Branch」。

![current branch](/current-branch.png)

![switch to branch](/switch-to-branch.png)

### 5. 保存并提交

- 使用 Ctrl+S 在工作时保存文件。
- 点击左侧的 Source Control 图标，右键点击你修改的文件，点击「Stage Changes」。
- 填写提交信息，然后点击「Commit & Push」按钮。

![commit changes](/commit-changes.png)

### 6. 创建 Pull Request

- 使用 Ctrl+Shift+P（或 Firefox 中的 F1）打开命令面板，使用「Create Pull Request」命令。
- 填写表单的标题和描述，然后点击「Create」。

![create pull request](/create-pull-request.png)

![pr form](/pr-form.png)

## 添加新页面

如果你想添加新页面，需要更新 [en.ts 文件](https://github.com/RetroAchievements/docs/blob/main/docs/.vitepress/config/en.ts) 中的 `sidebar` 配置。这是将导航连接到新页面的方法。

例如，如果你的新 Markdown 文件是 _docs/general/my-file.md_，在 `sidebarGeneral()` 中添加：

```js
{
    text: "My New Page",
    link: "/general/my-file",
}
```

最佳实践是将其添加到其他语言的配置中以保持同步，即使注释掉也可以：

```js
// {
//     text: "My New Page",
//     link: "/general/my-file",
// }
```

## 本地运行文档站点

在计算机上运行文档站点：

1. [下载并安装 Node.js v20](https://nodejs.org/en/download/prebuilt-installer)。

2. 安装 Git。如果你是 Windows 用户，请[下载并安装 Git](https://git-scm.com/download/win)。

3. 打开命令提示符/终端并克隆仓库：

```bash
git clone https://github.com/RetroAchievements/docs.git
```

4. 进入克隆的仓库并运行本地开发服务器：

```bash
cd docs
npm install
npm run dev
```

完成！你的本地服务器现在应该正在运行，可以预览你的修改。

## Markdown 注意事项

Markdown 是一种轻量级且极易学习的标记语言，具有纯文本格式化语法。要在我们的项目中贡献，你至少需要了解 Markdown 的基础知识。这里有一个很好的单页参考：[http://commonmark.org/help/](http://commonmark.org/help/)，以及[这里可以尝试 10 分钟教程](http://commonmark.org/help/tutorial/)。

### 标题

标题（由 `#` 定义）应遵循页面内容层级的自然递进。

```
✅ 正确

# 标题
## 主标题一
### 子标题一
### 子标题二
## 主标题二
```

每个页面_必须_以标题（`#`）开头。

```
🛑 错误

## 主标题一
### 子标题一
### 子标题二
## 主标题二
```

你_不能_有两个标题（`#`）。

```
🛑 非常错误

# 标题
# 标题二
## 主标题一
### 子标题一
### 子标题二
## 主标题二
```

### 链接

内部文档链接应遵循此语法，省略 `.md` 和 `.html` 扩展名：

```
✅ 正确

[技巧与窍门](/zh/developer-docs/tips-and-tricks)

[规则](/zh/guidelines/users/code-of-conduct#rules)
```

在引用文档中另一页时**不要**使用绝对路径。VitePress 会自动检测并警告断开的链接，但此检测对绝对路径不生效。

```
🛑 错误

[技巧与窍门](https://docs.retroachievements.org/developer-docs/tips-and-tricks.html)

[规则](https://docs.retroachievements.org/guidelines/users/code-of-conduct.html#rules)
```

### 图片

你可以通过将图片放在 _docs/public_ 目录中来添加图片。

图片链接应遵循此语法：

```
✅ 正确

![current branch](/current-branch.png)
```

链接中应省略 `/public`，因为不需要。

尽量不要引用任何外部站点的图片，包括 RetroAchievements 本身。引用不在 _docs/public_ 中的图片很危险，因为它们可能随时失效。

```
🛑 错误

![Image](https://retroachievements.org/Badges/12345.png)
```

务必确保方括号内的 alt 文本具有可访问性。如果图片因任何原因失效，用户将看到此文本。它应是图片的简洁描述。Google 会惩罚没有此文本的页面，有时会完全将其从搜索结果中移除，导致人们无法找到它们。这非常重要。

```
🛑 非常错误

![](http://url/a.png)
```

### 表格

简单表格如下所示：

```
| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |
```

渲染效果如下：

| First Header | Second Header | Third Header |
| ------------ | ------------- | ------------ |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |
| Content Cell | Content Cell  | Content Cell |

你可以通过在分隔线中添加冒号来指定每列的对齐方式：

```
| First Header | Second Header | Third Header |
| :----------- | :-----------: | -----------: |
| Left         | Center        | Right        |
| Left         | Center        | Right        |
| Left         | Center        | Right        |
```

结果：

| First Header | Second Header | Third Header |
| :----------- | :-----------: | -----------: |
| Left         |    Center     |        Right |
| Left         |    Center     |        Right |
| Left         |    Center     |        Right |

## VitePress 组件

VitePress 支持许多超越传统 GitHub Markdown 的额外功能。可在此[参考](https://vitepress.dev/guide/markdown)。

### 自动目录

**输入**

```md
[[toc]]
```

**输出**

[[toc]]

### 提示框

**输入**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**输出**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
