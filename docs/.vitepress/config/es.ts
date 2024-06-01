import { defineConfig, type DefaultTheme } from "vitepress";

export const es = defineConfig({
  lang: "es",
  description: "Acceda a guías completas, tutoriales y recursos para desarrolladores en RetroAchievements. Aprenda cómo mejorar su experiencia de juego retro con logros personalizados.",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/es/general/": sidebarGeneral(),
      "/es/guidelines/": sidebarGuidelines(),
      "/es/developer-docs": sidebarDeveloperDocs(),
    },

    editLink: {
      pattern: "https://github.com/RetroAchievements/docs-vitepress/edit/main/docs/:path",
      text: "Editar esta página",
    },

    footer: {
      message: "Publicado bajo la Licencia GPL-3. No hay ROMs protegidas por derechos de autor disponibles para descargar en RetroAchievements.",
      copyright: `Copyright © 2012–${new Date().getFullYear()} RetroAchievements. Todos los derechos reservados.`,
    },

    lastUpdated: {
      text: "Actualizado en",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "Cambiar Idioma",
    returnToTopLabel: "Volver al Inicio",
    sidebarMenuLabel: "Menú Lateral",
    darkModeSwitchLabel: "Modo Oscuro",
    lightModeSwitchTitle: "Cambiar a Modo Claro",
    darkModeSwitchTitle: "Cambiar a Modo Oscuro",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "General",
      link: "/es/general/index",
    },
    {
      text: "Directrices",
      link: "/es/guidelines/users/retroachievements-manifesto",
    },
    {
      text: "Desarrollo de Logros",
      link: "/es/developer-docs/index",
    },
  ];
}

function sidebarGeneral(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "General",
      collapsed: false,
      items: [
        {
          text: "Índice",
          link: "/es/general/index",
        },
        {
          text: "Preguntas Frecuentes",
          link: "/es/general/faq",
        },
        {
          text: "Guía de Configuración",
          link: "/es/general/setup-guide",
        },
        {
          text: "Soporte e Incidentes del Emulador",
          link: "/es/general/emulator-support-and-issues",
        },
        {
          text: "Maneras de Contribuir",
          link: "/general/ways-to-contribute",
        },
        {
          text: "RABot, el Robot de Discord de RA",
          link: "/general/rabot",
        },
        {
          text: "Eventos",
          link: "/general/events",
        },
        {
          text: "Temas de Superposición",
          link: "/general/overlay-themes",
        },
        {
          text: "Enlaces Útiles",
          link: "/general/useful-links",
        },
        {
          text: "Contribuir a la Documentación",
          link: "/general/contributing-to-the-docs",
        },
        {
          text: "Sobre Nosotros",
          link: "/general/about-us",
        },
      ],
    },
    {
      text: "Tutoriales",
      collapsed: false,
      items: [
        {
          text: "Cómo configurar OBS Studio para ver las ventanas emergentes",
          link: "/general/tutorials/how-to-configure-obs-studio",
        },
        {
          text: "Juegos de Múltiples Discos",
          link: "/general/tutorials/multi-disc-games",
        },
        {
          text: "Trabajando con DLC para PlayStation Portable",
          link: "/general/tutorials/working-with-dlc-for-the-psp",
        },
      ],
    },
  ];
}

function sidebarGuidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Directrices para Usuarios",
      collapsed: false,
      items: [
        {
          text: "Manifiesto de RetroAchievements",
          link: "/guidelines/users/retroachievements-manifesto",
        },
        {
          text: "Código de Conducta de los Usuarios",
          link: "/guidelines/users/code-of-conduct",
        },
        {
          text: "Reglas de la Tabla de Clasificación Global y Caza de Logros",
          link: "/guidelines/users/global-leaderboard-and-achievement-hunting-rules",
        },
      ],
    },
    {
      text: "Directrices para Desarrolladores",
      collapsed: false,
      items: [
        {
          text: "Código de Conducta de los Desarrolladores",
          link: "/guidelines/developers/code-of-conduct",
        },
        {
          text: "Creación de Entradas",
          link: "/guidelines/developers/creating-entries",
        },
        {
          text: "Sistema de Reclamaciones",
          link: "/guidelines/developers/claims-system",
        },
        {
          text: "Manejo de Tickets",
          link: "/guidelines/developers/handling-tickets",
        },
      ],
    },
    {
      text: "Directrices de Contenido",
      collapsed: false,
      items: [
        {
          text: "Requisitos del Conjunto de Logros",
          link: "/guidelines/content/achievement-set-requirements",
        },
        {
          text: "Conceptos No Deseados",
          link: "/guidelines/content/unwelcome-concepts",
        },
        {
          text: "Directrices de Progresión y Condición de Victoria",
          link: "/guidelines/content/progression-and-win-condition-guidelines",
        },
        {
          text: "Plagio de Conjuntos",
          link: "/guidelines/content/set-plagiarism",
        },
        {
          text: "Convenciones de Nombres",
          link: "/guidelines/content/naming-conventions",
        },
        {
          text: "Política de Escritura",
          link: "/guidelines/content/writing-policy",
        },
        {
          text: "Directrices para Insignias e Íconos",
          link: "/guidelines/content/badge-and-icon-guidelines",
        },
        {
          text: "Notas de Código",
          link: "/guidelines/content/code-notes",
        },
        {
          text: "Editando Tablas de Clasificación",
          link: "/guidelines/content/editing-leaderboards",
        },
        {
          text: "Revisiones del Conjunto de Logros",
          link: "/guidelines/content/achievement-set-revisions",
        },
        {
          text: "Logros para ROM Hacks",
          link: "/guidelines/content/achievements-for-rom-hacks",
        },
        {
          text: "Subconjuntos",
          link: "/guidelines/content/subsets",
        },
        {
          text: "Trabajando con la ROM Correcta",
          link: "/guidelines/content/working-with-the-right-rom",
        },
        {
          text: "Etiquetas de Hash",
          link: "/guidelines/content/hash-labels",
        },
      ],
    },
  ];
}

function sidebarDeveloperDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Desarrollo",
      collapsed: false,
      items: [
        {
          text: "Índice",
          link: "/developer-docs/index",
        },
        {
          text: "Cómo Convertirse en un Desarrollador de Logros",
          link: "/developer-docs/how-to-become-an-achievement-developer",
        },
        {
          text: "Comenzando como Desarrollador de Logros",
          link: "/developer-docs/getting-started-as-an-achievement-developer",
        },
        {
          text: "Identificación del Juego",
          link: "/developer-docs/game-identification",
        },
        {
          text: "Diseño de Logros",
          link: "/developer-docs/achievement-design",
        },
        {
          text: "Puntuación de Logros",
          link: "/developer-docs/achievement-scoring",
        },
        {
          text: "Escala de Dificultad y Equilibrio",
          link: "/developer-docs/difficulty-scale-and-balance",
        },
        {
          text: "Directrices de Progresión y Condición de Victoria",
          link: "/guidelines/content/progression-and-win-condition-guidelines",
        },
        {
          text: "Creación de Insignias e Íconos",
          link: "/developer-docs/badge-and-icon-creation",
        },
        {
          text: "Descripción General del Desarrollo de Logros",
          link: "/developer-docs/achievement-development-overview",
        },
        {
          text: "Versiones Mínimas Requeridas para Funciones de Lógica",
          link: "/developer-docs/minimum-required-versions-for-logic-features",
        },
        {
          text: "Inspector de Memoria",
          link: "/developer-docs/memory-inspector",
        },
        {
          text: "Ejemplos Reales",
          link: "/developer-docs/real-examples",
        },
        {
          text: "Hoja de Ruta del Desarrollo del Conjunto",
          link: "/developer-docs/set-development-roadmap",
        },
        {
          text: "Plantillas de Logros",
          link: "/developer-docs/achievement-templates",
        },
        {
          text: "Consejos y Trucos",
          link: "/developer-docs/tips-and-tricks",
        },
        {
          text: "Tablas de Clasificación",
          link: "/developer-docs/leaderboards",
        },
        {
          text: "Rich Presence",
          link: "/developer-docs/rich-presence",
        },
        {
          text: "RATools",
          link: "/developer-docs/ratools",
        },
        {
          text: "Consejos Específicos para Consolas",
          link: "/developer-docs/console-specific-tips",
        },
        {
          text: "Atajos del Emulador para Desarrolladores",
          link: "/developer-docs/emulator-hotkeys-for-developers",
        },
        {
          text: "Soporte del Núcleo de libretro",
          link: "/developer-docs/libretro-core-support",
        },
      ],
    },
    {
      text: "Banderas",
      collapsed: false,
      items: [
        {
          text: "ResetIf",
          link: "/developer-docs/flags/resetif",
        },
        {
          text: "ResetNextIf",
          link: "/developer-docs/flags/resetnextif",
        },
        {
          text: "PauseIf",
          link: "/developer-docs/flags/pauseif",
        },
        {
          text: "AndNext y OrNext",
          link: "/developer-docs/flags/andnext-ornext",
        },
        {
          text: "AddSource",
          link: "/developer-docs/flags/addsource",
        },
        {
          text: "SubSource",
          link: "/developer-docs/flags/subsource",
        },
        {
          text: "AddHits y SubHits",
          link: "/developer-docs/flags/addhits-subhits",
        },
        {
          text: "AddAddress",
          link: "/developer-docs/flags/addaddress",
        },
        {
          text: "Measured",
          link: "/developer-docs/flags/measured",
        },
        {
          text: "Trigger",
          link: "/developer-docs/flags/trigger",
        },
      ],
    },
    {
      text: "Funcionalidad Adicional",
      collapsed: false,
      items: [
        {
          text: "Tamaño de BitCount",
          link: "/developer-docs/bitcount-size",
        },
        {
          text: "Grupos Alternativos",
          link: "/developer-docs/alt-groups",
        },
        {
          text: "Contadores de Golpes",
          link: "/developer-docs/hit-counts",
        },
        {
          text: "Valores Delta",
          link: "/developer-docs/delta-values",
        },
        {
          text: "Valores Previos",
          link: "/developer-docs/prior-values",
        },
        {
          text: "Definición de Valor",
          link: "/developer-docs/value-definition",
        },
        {
          text: "Sintaxis de Condición",
          link: "/developer-docs/condition-syntax",
        },
      ],
    },
  ];
}
