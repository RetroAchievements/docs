import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh-CN",
  description: "访问 RetroAchievements 的完整指南、教程和开发者资源。了解如何通过自定义成就增强您的复古游戏体验。",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/zh/general/": sidebarGeneral(),
      "/zh/guidelines/": sidebarGuidelines(),
      "/zh/developer-docs": sidebarDeveloperDocs(),
    },

    editLink: {
      pattern: "https://github.com/RetroAchievements/docs/edit/main/docs/:path",
      text: "编辑此页",
    },

    footer: {
      message: "采用 GPL-3 许可证发布。RetroAchievements 上不提供受版权保护的 ROM 下载。",
      copyright: `Copyright © 2012–${new Date().getFullYear()} RetroAchievements. 保留所有权利。`,
    },

    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "切换语言",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "侧边栏菜单",
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "通用",
      link: "/zh/general/index",
      activeMatch: "/zh/general/",
    },
    {
      text: "指南",
      link: "/zh/guidelines/users/retroachievements-manifesto",
      activeMatch: "/zh/guidelines/",
    },
    {
      text: "成就开发",
      link: "/zh/developer-docs/index",
      activeMatch: "/zh/developer-docs/",
    },
  ];
}

function sidebarGeneral(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "通用",
      collapsed: false,
      items: [
        {
          text: "索引",
          link: "/zh/general/index",
        },
        {
          text: "常见问题",
          link: "/zh/general/faq",
        },
        // {
        //   text: "安装指南",
        //   link: "/zh/general/setup-guide",
        // },
        {
          text: "模拟器支持",
          link: "/zh/general/emulator-support-and-issues",
        },
        {
          text: "硬核模式合规要求",
          link: "/zh/general/hardcore-compliance-requirements",
        },
        {
          text: "独立版支持",
          link: "/zh/general/standalone-support",
        },
        {
          text: "RA 如何运作",
          link: "/zh/general/how-ra-works",
        },
        {
          text: "非开发者如何贡献",
          link: "/zh/general/ways-to-contribute",
        },
        {
          text: "RABot，RA 的 Discord 机器人",
          link: "/zh/general/rabot",
        },
        {
          text: "活动",
          link: "/zh/general/events",
        },
        {
          text: "叠加主题",
          link: "/zh/general/overlay-themes",
        },
        {
          text: "实用链接",
          link: "/zh/general/useful-links",
        },
        {
          text: "贡献文档",
          link: "/zh/general/contributing-to-the-docs",
        },
        {
          text: "关于我们",
          link: "/zh/general/about-us",
        },
      ],
    },
    {
      text: "团队",
      collapsed: false,
      items: [
        {
          text: "质量保证",
          link: "/zh/general/teams/qa-team",
        },
      ],
    },
    {
      text: "教程",
      collapsed: false,
      items: [
        {
          text: "如何配置 OBS Studio 以查看弹窗",
          link: "/zh/general/tutorials/how-to-configure-obs-studio",
        },
        {
          text: "多碟游戏",
          link: "/zh/general/tutorials/multi-disc-games",
        },
        {
          text: "连发按钮",
          link: "/zh/general/tutorials/turbo-button",
        },
        {
          text: "PlayStation Portable 的 DLC 使用",
          link: "/zh/general/tutorials/working-with-dlc-for-the-psp",
        },
        {
          text: "如何游玩子集",
          link: "/zh/general/tutorials/how-to-play-subsets",
        },
      ],
    },
  ];
}

function sidebarGuidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "用户指南",
      collapsed: false,
      items: [
        {
          text: "RetroAchievements 宣言",
          link: "/zh/guidelines/users/retroachievements-manifesto",
        },
        {
          text: "用户行为准则",
          link: "/zh/guidelines/users/code-of-conduct",
        },
        {
          text: "全球排行榜与成就狩猎规则",
          link: "/zh/guidelines/users/global-leaderboard-and-achievement-hunting-rules",
        },
      ],
    },
    {
      text: "开发者指南",
      collapsed: false,
      items: [
        {
          text: "开发者行为准则",
          link: "/zh/guidelines/developers/code-of-conduct",
        },
        {
          text: "认领系统",
          link: "/zh/guidelines/developers/claims-system",
        },
        {
          text: "处理工单",
          link: "/zh/guidelines/developers/handling-tickets",
        },
        {
          text: "维护者角色",
          link: "/zh/guidelines/developers/maintainership",
        },
        {
          text: "成就集与成就贡献署名",
          link: "/zh/guidelines/developers/credit",
        },
      ],
    },
    {
      text: "内容指南",
      collapsed: false,
      items: [
        {
          text: "成就集要求",
          link: "/zh/guidelines/content/achievement-set-requirements",
        },
        {
          text: "不受欢迎的概念",
          link: "/zh/guidelines/content/unwelcome-concepts",
        },
        {
          text: "进度与通关条件指南",
          link: "/zh/guidelines/content/progression-and-win-condition-guidelines",
        },
        {
          text: "成就集抄袭",
          link: "/zh/guidelines/content/set-plagiarism",
        },
        {
          text: "游戏信息与中心指南",
          link: "/zh/guidelines/content/game-info-and-hub-guidelines",
        },
        {
          text: "类型定义",
          link: "/zh/guidelines/content/genre-definitions",
        },
        {
          text: "写作规范",
          link: "/zh/guidelines/content/writing-policy",
        },
        {
          text: "徽章与图标指南",
          link: "/zh/guidelines/content/badge-and-icon-guidelines",
        },
        {
          text: "代码注释",
          link: "/zh/guidelines/content/code-notes",
        },
        {
          text: "编辑排行榜",
          link: "/zh/guidelines/content/editing-leaderboards",
        },
        {
          text: "成就集修订",
          link: "/zh/guidelines/content/achievement-set-revisions",
        },
        {
          text: "添加额外哈希",
          link: "/zh/guidelines/content/adding-hashes",
        },
        {
          text: "玩家兼容性测试",
          link: "/zh/guidelines/content/player-compatibility-testing",
        },
        {
          text: "并行发布的游戏",
          link: "/zh/guidelines/content/games-with-parallel-releases",
        },
        {
          text: "ROM 改版的成就",
          link: "/zh/guidelines/content/achievements-for-rom-hacks",
        },
        {
          text: "子集",
          link: "/zh/guidelines/content/subsets",
        },
        {
          text: "使用正确的 ROM",
          link: "/zh/guidelines/content/working-with-the-right-rom",
        },
        {
          text: "哈希标签",
          link: "/zh/guidelines/content/hash-labels",
        },
      ],
    },
  ];
}

function sidebarDeveloperDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "开发",
      collapsed: false,
      items: [
        {
          text: "索引",
          link: "/zh/developer-docs/index",
        },
        {
          text: "如何成为成就开发者",
          link: "/zh/developer-docs/how-to-become-an-achievement-developer",
        },
        {
          text: "成就开发者入门",
          link: "/zh/developer-docs/getting-started-as-an-achievement-developer",
        },
        {
          text: "初级开发者计划",
          link: "/zh/developer-docs/jr-dev-rules",
        },
        {
          text: "我准备好接受代码审查了吗？",
          link: "/zh/developer-docs/am-i-ready-for-review",
        },
        {
          text: "开发者模拟器设置",
          link: "/zh/developer-docs/emulator-setup-for-developers",
        },
        {
          text: "游戏识别",
          link: "/zh/developer-docs/game-identification",
        },
        {
          text: "成就设计",
          link: "/zh/developer-docs/achievement-design",
        },
        {
          text: "成就评分",
          link: "/zh/developer-docs/achievement-scoring",
        },
        {
          text: "难度等级与平衡",
          link: "/zh/developer-docs/difficulty-scale-and-balance",
        },
        {
          text: "进度与通关条件类型",
          link: "/zh/guidelines/content/progression-and-win-condition-guidelines",
        },
        {
          text: "徽章与图标创建",
          link: "/zh/developer-docs/badge-and-icon-creation",
        },
        {
          text: "成就开发概述",
          link: "/zh/developer-docs/achievement-development-overview",
        },
        {
          text: "逻辑功能最低所需版本",
          link: "/zh/developer-docs/minimum-required-versions-for-logic-features",
        },
        {
          text: "内存检查器",
          link: "/zh/developer-docs/memory-inspector",
        },
        {
          text: "真实示例",
          link: "/zh/developer-docs/real-examples",
        },
        {
          text: "成就模板",
          link: "/zh/developer-docs/achievement-templates",
        },
        {
          text: "存档与密码保护",
          link: "/zh/developer-docs/save-and-password-protection",
        },
        {
          text: "技巧与窍门",
          link: "/zh/developer-docs/tips-and-tricks",
        },
        {
          text: "排行榜",
          link: "/zh/developer-docs/leaderboards",
        },
        {
          text: "丰富状态",
          link: "/zh/developer-docs/rich-presence",
        },
        {
          text: "Rollouts",
          link: "/zh/developer-docs/rollouts",
        },
        {
          text: "DevQuests",
          link: "/zh/developer-docs/devquests",
        },
        {
          text: "DevJam",
          link: "/zh/developer-docs/devjam",
        },
        {
          text: "RATools",
          link: "/zh/developer-docs/ratools",
        },
        {
          text: "主机特定技巧",
          link: "/zh/developer-docs/console-specific-tips",
        },
        {
          text: "我真的需要使用 Delta 吗？",
          link: "/zh/developer-docs/why-delta",
        },
        {
          text: "开发者模拟器快捷键",
          link: "/zh/developer-docs/emulator-hotkeys-for-developers",
        },
        {
          text: "不支持的模拟器与核心",
          link: "/zh/developer-docs/unsupported-emulators-and-cores",
        },
        {
          text: "libretro 核心支持",
          link: "/zh/developer-docs/libretro-core-support",
        },
      ],
    },
    {
      text: "标志",
      collapsed: false,
      items: [
        {
          text: "ResetIf",
          link: "/zh/developer-docs/flags/resetif",
        },
        {
          text: "ResetNextIf",
          link: "/zh/developer-docs/flags/resetnextif",
        },
        {
          text: "PauseIf",
          link: "/zh/developer-docs/flags/pauseif",
        },
        {
          text: "AndNext 与 OrNext",
          link: "/zh/developer-docs/flags/andnext-ornext",
        },
        {
          text: "AddSource",
          link: "/zh/developer-docs/flags/addsource",
        },
        {
          text: "SubSource",
          link: "/zh/developer-docs/flags/subsource",
        },
        {
          text: "AddHits 与 SubHits",
          link: "/zh/developer-docs/flags/addhits-subhits",
        },
        {
          text: "AddAddress",
          link: "/zh/developer-docs/flags/addaddress",
        },
        {
          text: "Measured",
          link: "/zh/developer-docs/flags/measured",
        },
        {
          text: "Trigger",
          link: "/zh/developer-docs/flags/trigger",
        },
        {
          text: "Remember",
          link: "/zh/developer-docs/flags/remember",
        },
      ],
    },
    {
      text: "附加功能",
      collapsed: false,
      items: [
        {
          text: "BitCount 大小",
          link: "/zh/developer-docs/bitcount-size",
        },
        {
          text: "Alt Groups",
          link: "/zh/developer-docs/alt-groups",
        },
        {
          text: "命中计数",
          link: "/zh/developer-docs/hit-counts",
        },
        {
          text: "Delta 值",
          link: "/zh/developer-docs/delta-values",
        },
        {
          text: "Prior 值",
          link: "/zh/developer-docs/prior-values",
        },
        {
          text: "Recall",
          link: "/zh/developer-docs/recall",
        },
        {
          text: "值定义",
          link: "/zh/developer-docs/value-definition",
        },
        {
          text: "条件语法",
          link: "/zh/developer-docs/condition-syntax",
        },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  zh: {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "搜索",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除搜索",
          resetButtonAriaLabel: "清除搜索",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "无最近搜索",
          saveRecentSearchButtonTitle: "保存到搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "请检查您的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "导航",
          closeText: "关闭",
          searchByText: "搜索由",
        },
        noResultsScreen: {
          noResultsText: "未找到结果",
          suggestedQueryText: "您可以尝试新的搜索",
          reportMissingResultsText: "此搜索应该有结果吗？",
          reportMissingResultsLinkText: "点击提交反馈",
        },
      },
    },
  },
};
