import { defineConfig, type DefaultTheme } from "vitepress";

export const pt = defineConfig({
  lang: "pt",
  description: "Acesse guias abrangentes, tutoriais e recursos para desenvolvedores no RetroAchievements. Aprenda como melhorar sua experiência de jogos retrô com conquistas personalizadas.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/pt/general/": sidebarGeneral(),
      "/pt/guidelines/": sidebarGuidelines(),
      "/pt/developer-docs": sidebarDeveloperDocs(),
    },

    editLink: {
      pattern: "https://github.com/RetroAchievements/docs/edit/main/docs/:path",
      text: "Edite esta página",
    },

    footer: {
      message: "Lançado sob a Licença GPL-3. Não há ROMs protegidas por direitos autorais disponíveis para download no RetroAchievements.",
      copyright: `Copyright © 2012–${new Date().getFullYear()} RetroAchievements. Todos os direitos reservados.`,
    },

    lastUpdated: {
      text: "Atualizado em",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "Alterar Idioma",
    returnToTopLabel: "Voltar ao Topo",
    sidebarMenuLabel: "Menu Lateral",
    darkModeSwitchLabel: "Tema Escuro",
    lightModeSwitchTitle: "Mudar para Modo Claro",
    darkModeSwitchTitle: "Mudar para Modo Escuro",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Geral",
      link: "/pt/general/index",
      activeMatch: "/pt/general/",
    },
    {
      text: "Diretrizes",
      link: "/pt/guidelines/users/retroachievements-manifesto",
      activeMatch: "/pt/guidelines/",
    },
    {
      text: "Desenvolvimento de Conquistas",
      link: "/pt/developer-docs/indexo",
      activeMatch: "/pt/developer-docs/",
    },
  ];
}

function sidebarGeneral(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Geral",
      collapsed: false,
      items: [
        {
          text: "Índice",
          link: "/pt/general/index",
        },
        {
          text: "FAQ",
          link: "/pt/general/faq",
        },
        // {
        //   text: "Guia de Configuração",
        //   link: "/pt/general/setup-guide",
        // },
        {
          text: "Suporte e Problemas de Emuladores",
          link: "/pt/general/emulator-support-and-issues",
        },
        // {
        //   text: "Maneiras de Contribuir",
        //   link: "/pt/general/ways-to-contribute",
        // },
        // {
        //   text: "RABot, o Robô do Discord do RA",
        //   link: "/pt/general/rabot",
        // },
        // {
        //   text: "Eventos",
        //   link: "/pt/general/events",
        // },
        // {
        //   text: "Temas de Overlay",
        //   link: "/pt/general/overlay-themes",
        // },
        // {
        //   text: "Links Úteis",
        //   link: "/pt/general/useful-links",
        // },
        {
          text: "Contribuindo para os Documentos",
          link: "/pt/general/contributing-to-the-docs",
        },
        // {
        //   text: "Sobre Nós",
        //   link: "/pt/general/about-us",
        // },
      ],
    },
    {
      text: "Tutoriais",
      collapsed: false,
      items: [
        // {
        //   text: "Como configurar o OBS Studio para ver os popups",
        //   link: "/pt/general/tutorials/how-to-configure-obs-studio",
        // },
        {
          text: "Jogos Multi-Disco",
          link: "/pt/general/tutorials/multi-disc-games",
        },
        // {
        //   text: "Trabalhando com DLC para o PlayStation Portable",
        //   link: "/pt/general/tutorials/working-with-dlc-for-the-psp",
        // },
      ],
    },
  ];
}

function sidebarGuidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Diretrizes de Usuário",
      collapsed: false,
      items: [
        {
          text: "Manifesto RetroAchievements",
          link: "/pt/guidelines/users/retroachievements-manifesto",
        },
        {
          text: "Código de Conduta dos Usuários",
          link: "/pt/guidelines/users/code-of-conduct",
        },
        {
          text: "Regras do Placar Global e de Caça às Conquistas",
          link: "/pt/guidelines/users/global-leaderboard-and-achievement-hunting-rules",
        },
      ],
    },
    // {
    //   text: "Diretrizes de Desenvolvedor",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "Código de Conduta dos Desenvolvedores",
    //       link: "/pt/guidelines/developers/code-of-conduct",
    //     },
    //     {
    //       text: "Criando Entradas",
    //       link: "/pt/guidelines/developers/creating-entries",
    //     },
    //     {
    //       text: "Sistema de Reivindicações",
    //       link: "/pt/guidelines/developers/claims-system",
    //     },
    //     {
    //       text: "Tratamento de Tickets",
    //       link: "/pt/guidelines/developers/handling-tickets",
    //     },
    //   ],
    // },
    // {
    //   text: "Diretrizes de Conteúdo",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "Requisitos do Conjunto de Conquistas",
    //       link: "/pt/guidelines/content/achievement-set-requirements",
    //     },
    //     {
    //       text: "Conceitos Indesejados",
    //       link: "/pt/guidelines/content/unwelcome-concepts",
    //     },
    //     {
    //       text: "Diretrizes de Progressão e Condições de Vitória",
    //       link: "/pt/guidelines/content/progression-and-win-condition-guidelines",
    //     },
    //     {
    //       text: "Plágio de Conjuntos",
    //       link: "/pt/guidelines/content/set-plagiarism",
    //     },
    //     {
    //       text: "Convenções de Nomenclatura",
    //       link: "/pt/guidelines/content/naming-conventions",
    //     },
    //     {
    //       text: "Política de Redação",
    //       link: "/pt/guidelines/content/writing-policy",
    //     },
    //     {
    //       text: "Diretrizes de Emblemas e Ícones",
    //       link: "/pt/guidelines/content/badge-and-icon-guidelines",
    //     },
    //     {
    //       text: "Notas de Código",
    //       link: "/pt/guidelines/content/code-notes",
    //     },
    //     {
    //       text: "Editando Placar de Líderes",
    //       link: "/pt/guidelines/content/editing-leaderboards",
    //     },
    //     {
    //       text: "Revisões do Conjunto de Conquistas",
    //       link: "/pt/guidelines/content/achievement-set-revisions",
    //     },
    //     {
    //       text: "Conquistas para ROM Hacks",
    //       link: "/pt/guidelines/content/achievements-for-rom-hacks",
    //     },
    //     {
    //       text: "Subconjuntos",
    //       link: "/pt/guidelines/content/subsets",
    //     },
    //     {
    //       text: "Trabalhando com a ROM Correta",
    //       link: "/pt/guidelines/content/working-with-the-right-rom",
    //     },
    //     {
    //       text: "Etiquetas de Hash",
    //       link: "/pt/guidelines/content/hash-labels",
    //     },
    //   ],
    // },
  ];
}

function sidebarDeveloperDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Desenvolvimento",
      collapsed: false,
      items: [
        {
          text: "Índice",
          link: "/pt/developer-docs/index",
        },
        // {
        //   text: "Como se Tornar um Desenvolvedor de Conquistas",
        //   link: "/pt/developer-docs/how-to-become-an-achievement-developer",
        // },
        {
          text: "Começando como Desenvolvedor de Conquistas",
          link: "/pt/developer-docs/getting-started-as-an-achievement-developer",
        },
        // {
        //   text: "Identificação de Jogos",
        //   link: "/pt/developer-docs/game-identification",
        // },
        {
          text: "Design de Conquistas",
          link: "/pt/developer-docs/achievement-design",
        },
        // {
        //   text: "Pontuação de Conquistas",
        //   link: "/pt/developer-docs/achievement-scoring",
        // },
        {
          text: "Escala de Dificuldade e Balanceamento",
          link: "/pt/developer-docs/difficulty-scale-and-balance",
        },
        // {
        //   text: "Diretrizes de Progressão e Condições de Vitória",
        //   link: "/pt/guidelines/content/progression-and-win-condition-guidelines",
        // },
        {
          text: "Criação de Emblemas e Ícones",
          link: "/pt/developer-docs/badge-and-icon-creation",
        },
        // {
        //   text: "Visão Geral do Desenvolvimento de Conquistas",
        //   link: "/pt/developer-docs/achievement-development-overview",
        // },
        // {
        //   text: "Versões Mínimas Requeridas para Funcionalidades de Lógica",
        //   link: "/pt/developer-docs/minimum-required-versions-for-logic-features",
        // },
        // {
        //   text: "Inspetor de Memória",
        //   link: "/pt/developer-docs/memory-inspector",
        // },
        {
          text: "Exemplos Reais",
          link: "/pt/developer-docs/real-examples",
        },
        {
          text: "Roteiro de Desenvolvimento de Conjuntos",
          link: "/pt/developer-docs/set-development-roadmap",
        },
        {
          text: "Modelos de Conquistas",
          link: "/pt/developer-docs/achievement-templates",
        },
        {
          text: "Dicas e Truques",
          link: "/pt/developer-docs/tips-and-tricks",
        },
        {
          text: "Placar de Líderes",
          link: "/pt/developer-docs/leaderboards",
        },
        {
          text: "Rich Presence",
          link: "/pt/developer-docs/rich-presence",
        },
        // {
        //   text: "RATools",
        //   link: "/pt/developer-docs/ratools",
        // },
        {
          text: "Dicas Específicas para Consoles",
          link: "/pt/developer-docs/console-specific-tips",
        },
        // {
        //   text: "Teclas de Atalho do Emulador para Desenvolvedores",
        //   link: "/pt/developer-docs/emulator-hotkeys-for-developers",
        // },
        // {
        //   text: "Suporte ao núcleo do libretro",
        //   link: "/pt/developer-docs/libretro-core-support",
        // },
      ],
    },
    // {
    //   text: "Flags",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "ResetIf",
    //       link: "/pt/developer-docs/flags/resetif",
    //     },
    //     {
    //       text: "ResetNextIf",
    //       link: "/pt/developer-docs/flags/resetnextif",
    //     },
    //     {
    //       text: "PauseIf",
    //       link: "/pt/developer-docs/flags/pauseif",
    //     },
    //     {
    //       text: "AndNext e OrNext",
    //       link: "/pt/developer-docs/flags/andnext-ornext",
    //     },
    //     {
    //       text: "AddSource",
    //       link: "/pt/developer-docs/flags/addsource",
    //     },
    //     {
    //       text: "SubSource",
    //       link: "/pt/developer-docs/flags/subsource",
    //     },
    //     {
    //       text: "AddHits e SubHits",
    //       link: "/pt/developer-docs/flags/addhits-subhits",
    //     },
    //     {
    //       text: "AddAddress",
    //       link: "/pt/developer-docs/flags/addaddress",
    //     },
    //     {
    //       text: "Measured",
    //       link: "/pt/developer-docs/flags/measured",
    //     },
    //     {
    //       text: "Trigger",
    //       link: "/pt/developer-docs/flags/trigger",
    //     },
    //   ],
    // },
    // {
    //   text: "Funcionalidade Adicional",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "Tamanho do BitCount",
    //       link: "/pt/developer-docs/bitcount-size",
    //     },
    //     {
    //       text: "Grupos Alternativos",
    //       link: "/pt/developer-docs/alt-groups",
    //     },
    //     {
    //       text: "Contagem de Acertos",
    //       link: "/pt/developer-docs/hit-counts",
    //     },
    //     {
    //       text: "Valores Delta",
    //       link: "/pt/developer-docs/delta-values",
    //     },
    //     {
    //       text: "Valores Anteriores",
    //       link: "/pt/developer-docs/prior-values",
    //     },
    //     {
    //       text: "Definição de Valores",
    //       link: "/pt/developer-docs/value-definition",
    //     },
    //     {
    //       text: "Sintaxe de Condição",
    //       link: "/pt/developer-docs/condition-syntax",
    //     },
    //   ],
    // },
  ];
}
