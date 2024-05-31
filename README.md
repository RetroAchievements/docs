<p align="center" dir="auto"><a href="https://retroachievements.org" rel="nofollow"><img src="https://raw.githubusercontent.com/RetroAchievements/RAWeb/master/public/assets/images/ra-icon.webp" width="200" alt="RetroAchievements Logo" style="max-width: 100%;"></a></p>

<h1 align="center">RetroAchievements Docs</h1>

<p align="center">
  <i>Adding achievements to retro games since 2012.</i>
  <br /><br />
</p>

<p align="center">
  <a href="https://docs.retroachievements.org"><strong>View Docs</strong></a>
  <br />
</p>

<hr />

## About

RetroAchievements is a community-driven project dedicated to enhancing the experience of retro gaming by adding achievements to classic games. Since its inception in 2012, RetroAchievements has brought a new layer of challenge and excitement to vintage titles, allowing players to revisit their favorite games with fresh objectives and a competitive edge.

Our mission is to celebrate and preserve the legacy of retro gaming by integrating modern achievement systems into classic games. We strive to create a welcoming and enthusiastic community where players and developers alike can share their passion for retro gaming and contribute to the project's growth.

This repository holds all the files for the official RetroAchievements documentation. Anyone may propose a revision to this documentation at any time, and if the proposed revision is accepted, it will go live instantly.

## How to Contribute to the Documentation

RADocs is a [VitePress](https://vitepress.dev/) app. There are multiple ways you can contribute to the docs, depending on your level of technical proficiency.

### I just want to edit a page

1. Visit any page in the docs, scroll to the bottom, and click the "Edit this page" link.
2. Click the "Fork this repository" button.
3. Make and preview your changes in the Markdown editor on the screen.
4. Click the "Commit changes" button.
5. Write a title and description for your changes if you want, then submit.
6. Click the "Create pull request" button.
7. Write a title and description for your pull request. This is more important.
8. Click the "Create pull request" button. You're done.

### I want to create pages or work on multiple pages

First, fork the repository on GitHub. You can do this by clicking the "Fork" button on the [repository's page](https://github.com/RetroAchievements/docs-vitepress):

![fork button](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/public/fork-button.png)

A form will appear when clicking this button. Press "Create fork".

After you've forked the repository, you should automatically be viewing your fork. Once it's visible, press the period (".") key on your keyboard. This will open VSCode inside your browser. You can use the file tree on the left to explore the docs, specifically by expanding the "docs" folder. You can search for files by using the Ctrl+P hotkey, for example, you can search for "README":

![readme search](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/public/readme-search.png)

Once a document is opened, it's extremely helpful to also open VSCode's built-in Markdown preview. First, open the command palette with the Ctrl+Shift+P hotkey, then search for "markdown preview", then select the "Markdown: Open Preview to the Side" option. This will let you preview your changes as you write them.

![markdown preview](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/public/markdown-preview.png)

Another helpful VSCode hotkey is Ctrl+Shift+F. This lets you search for some text throughout the entire project in the event you don't know where the file is you're looking for.

Use Ctrl+S to save files as you work in them.

When you're ready to propose a pull request for your changes, follow these steps:

1. Click the Source Control icon on the left, right click the files you've changed and click "Stage Changes". Write some message describing your commit, then click the "Commit & Push" button.

![commit changes](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/public/commit-changes.png)

2. Open the command palette with Ctrl+Shift+P and use the "Create Pull Request" command.

![create pull request](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/public/create-pull-request.png)

3. You'll see the following form appear:

![pr form](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/public/pr-form.png)

Enter a title and description for your pull request. Then click the Create button.

Your pull request is now created and ready for review.

### I want to add a new page

New pages need to be hooked up to the project's [config.mts file](https://github.com/RetroAchievements/docs-vitepress/blob/main/docs/.vitepress/config.mts). Nearly all site navigation lives in the `sidebar` config in this file.

If your new Markdown file lives in _docs/general/my-file.md_, you'd add this to the configuration:

```js
sidebar: {
  "/general/": [
    {
      text: "General",
      collapsed: false,
      items: [
        // ... existing items ...
        {
          text: "My New Page", // whatever label you want the nav item to have
          link: "/general/my-file" // exclude the .md file extension
        }
        // ... existing items ...
      ]
    }
  ]
}
```

### I want to run the whole docs site on my computer

First, [download and install Node.js v20](https://nodejs.org/en/download/prebuilt-installer).

You'll also need to have Git installed. If you're a Windows user, [download and install Git](https://git-scm.com/download/win).

Next, open a command prompt/terminal and clone this repository to somewhere on your computer:

```
C:\My Documents\> git clone https://github.com/RetroAchievements/docs-vitepress.git
```

Navigate into the cloned repository and run a few more commands to install dependencies and run the local dev server:

```
C:\My Documents\> cd docs-vitepress
C:\My Documents\docs-vitepress> npm install
C:\My Documents\docs-vitepress> npm run dev
```
