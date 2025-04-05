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
      pattern: "https://github.com/RetroAchievements/docs/edit/main/docs/:path",
      text: "Editar esta página",
    },

    footer: {
      message: "Publicado bajo la Licencia GPL-3. No hay ROM protegidas por derechos de autor disponibles para descargar en RetroAchievements.",
      copyright: `Copyright © 2012–${new Date().getFullYear()} RetroAchievements. Todos los derechos reservados.`,
    },

    lastUpdated: {
      text: "Actualizado el",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "Cambiar idioma",
    returnToTopLabel: "Volver al inicio",
    sidebarMenuLabel: "Menú lateral",
    darkModeSwitchLabel: "Modo oscuro",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "General",
      link: "/es/general/index",
      activeMatch: "/es/general/",
    },
    {
      text: "Directrices",
      link: "/es/guidelines/users/retroachievements-manifesto",
      activeMatch: "/es/guidelines/",
    },
    {
      text: "Desarrollo de logros",
      link: "/es/developer-docs/index",
      activeMatch: "/es/developer-docs/",
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
          text: "Preguntas frecuentes",
          link: "/es/general/faq",
        },
        // {
        //   text: "Guía de instalación",
        //   link: "/es/general/setup-guide",
        // },

        {
          text: "Soporte y problemas de los emuladores",
          link: "/es/general/emulator-support-and-issues",
        },
        {
          text: "Cómo funciona RA",
          link: "/es/general/how-ra-works",
        },
        {
          text: "Maneras de contribuir",
          link: "/es/general/ways-to-contribute",
        },
        {
          text: "RABot, el bot de RA para Discord",
          link: "/es/general/rabot",
        },
        {
          text: "Eventos",
          link: "/es/general/events",
        },
        {
          text: "Temas superpuestos",
          link: "/es/general/overlay-themes",
        },
        {
          text: "Enlaces útiles",
          link: "/es/general/useful-links",
        },
        {
          text: "Contribuir a la documentación",
          link: "/es/general/contributing-to-the-docs",
        },
        {
          text: "Sobre nosotros",
          link: "/es/general/about-us",
        },
      ],
    },
    // {
    //   text: "Equipos",
    //   collapsed: false,
    //   items: [
    //    {
    //      text: "Control de calidad",
    //      link: "/general/teams/qa-team",
    //    },
    //  ],
    //},
    // {
    //   text: "Tutoriales",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "Cómo configurar OBS Studio para ver las ventanas emergentes",
    //       link: "/es/general/tutorials/how-to-configure-obs-studio",
    //     },
    //     {
    //       text: "Juegos multidisco",
    //       link: "/es/general/tutorials/multi-disc-games",
    //     },
    //     {
    //       text: "Botones turbo",
    //       link: "/general/tutorials/turbo-button",
    //     },
    //     {
    //       text: "Trabajando con DLC para PlayStation Portable",
    //       link: "/es/general/tutorials/working-with-dlc-for-the-psp",
    //     },
    //   ],
    // },
  ];
}

function sidebarGuidelines(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Directrices para los usuarios",
      collapsed: false,
      items: [
        {
          text: "Manifiesto de RetroAchievements",
          link: "/es/guidelines/users/retroachievements-manifesto",
        },
        {
          text: "Código de conducta de los usuarios",
          link: "/es/guidelines/users/code-of-conduct",
        },
        {
          text: "Reglas de la clasificación global y de la caza de logros",
          link: "/es/guidelines/users/global-leaderboard-and-achievement-hunting-rules",
        },
      ],
    },
    {
      text: "Directrices para desarrolladores",
      collapsed: false,
      items: [
        {
          text: "Código de conducta de los desarrolladores",
          link: "/es/guidelines/developers/code-of-conduct",
        },
        // {
        //   text: "Sistema de reclamaciones",
        //   link: "/es/guidelines/developers/claims-system",
        // },
        // {
        //   text: "Manejo de tickets",
        //   link: "/es/guidelines/developers/handling-tickets",
        // },
      ],
    },
    {
      text: "Directrices sobre contenidos",
      collapsed: false,
      items: [
        // {
        //   text: "Requisitos del set de logros",
        //   link: "/es/guidelines/content/achievement-set-requirements",
        // },
        // {
        //   text: "Conceptos no deseados",
        //   link: "/es/guidelines/content/unwelcome-concepts",
        // },
        // {
        //   text: "Pautas de progresión y condiciones de victoria",
        //   link: "/es/guidelines/content/progression-and-win-condition-guidelines",
        // },
        // {
        //   text: "Plagio de sets",
        //   link: "/es/guidelines/content/set-plagiarism",
        // },
        // {
        //   text: "Game Info and Hub Guidelines",
        //   link: "/guidelines/content/game-info-and-hub-guidelines",
        // },
        // {
        //   text: "Genre Definitions",
        //   link: "/guidelines/content/genre-definitions",
        // },
        // {
        //   text: "Política de redacción",
        //   link: "/es/guidelines/content/writing-policy",
        // },
        // {
        //   text: "Directrices sobre insignias e iconos",
        //   link: "/es/guidelines/content/badge-and-icon-guidelines",
        // },
        // {
        //   text: "Notas de código",
        //   link: "/es/guidelines/content/code-notes",
        // },
        // {
        //   text: "Edición de tablas de clasificación",
        //   link: "/es/guidelines/content/editing-leaderboards",
        // },
        {
          text: "Revisiones de sets de logros",
          link: "/es/guidelines/content/achievement-set-revisions",
        },
        // {
        //   text: "Añadir hashes adicionales",
        //   link: "/es/guidelines/content/adding-hashes",
        // },
        //         {
        //  text: "Player Compatibility Testing",
        //  link: "/guidelines/content/player-compatibility-testing",
        // },
        {
          text: "Logros para ROM Hacks",
          link: "/es/guidelines/content/achievements-for-rom-hacks",
        },
        {
          text: "Subsets",
          link: "/es/guidelines/content/subsets",
        },
        {
          text: "Trabajando con la ROM adecuada",
          link: "/es/guidelines/content/working-with-the-right-rom",
        },
        // {
        //   text: "Etiquetado de hashes",
        //   link: "/es/guidelines/content/hash-labels",
        // },
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
          link: "/es/developer-docs/index",
        },
        {
          text: "Cómo convertirse en desarrollador de logros",
          link: "/es/developer-docs/how-to-become-an-achievement-developer",
        },
        {
          text: "Primeros pasos como desarrollador de logros",
          link: "/es/developer-docs/getting-started-as-an-achievement-developer",
        },
        // {
        //   text: "Programa para desarrolladores junior",
        //   link: "/developer-docs/jr-dev-rules",
        // },
        // {
        //   text: "Am I Ready for Code Review?",
        //   link: "/developer-docs/am-i-ready-for-review",
        // },
        // {
        //   text: "Configuración del emulador para desarrolladores",
        //   link: "/developer-docs/emulator-setup-for-developers",
        // },
        {
          text: "Identificación de juegos",
          link: "/es/developer-docs/game-identification",
        },
        {
          text: "Diseño de logros",
          link: "/es/developer-docs/achievement-design",
        },
        // {
        //   text: "Puntuación de los logros",
        //   link: "/es/developer-docs/achievement-scoring",
        // },
        {
          text: "Escala de dificultad y equilibrio",
          link: "/es/developer-docs/difficulty-scale-and-balance",
        },
        // {
        //   text: "Tipos de progresión y condiciones de victoria",
        //   link: "/es/guidelines/content/progression-and-win-condition-guidelines",
        // },
        {
          text: "Creación de insignias e iconos",
          link: "/es/developer-docs/badge-and-icon-creation",
        },
        // {
        //   text: "Desarrollo de los logros",
        //   link: "/es/developer-docs/achievement-development-overview",
        // },
        {
          text: "Versiones mínimas necesarias para las funciones lógicas",
          link: "/es/developer-docs/minimum-required-versions-for-logic-features",
        },
        {
          text: "Inspector de memoria",
          link: "/es/developer-docs/memory-inspector",
        },
        {
          text: "Ejemplos reales",
          link: "/es/developer-docs/real-examples",
        },
        {
          text: "Plantillas de logros",
          link: "/es/developer-docs/achievement-templates",
        },
        // {
        //   text: "Guardar y proteger con contraseña",
        //   link: "/developer-docs/save-and-password-protection",
        // },
        {
          text: "Consejos y trucos",
          link: "/es/developer-docs/tips-and-tricks",
        },
        {
          text: "Tablas de clasificación",
          link: "/es/developer-docs/leaderboards",
        },
        {
          text: "Estado de la actividad",
          link: "/es/developer-docs/rich-presence",
        },
        // {
        //   text: "Rollouts",
        //   link: "/es/developer-docs/rollouts"
        // },
        // {
        //   text: "DevQuests",
        //   link: "/es/developer-docs/devquests"
        // },
        // {
        //   text: "DevJam",
        //   link: "/es/developer-docs/devjam",
        // },
        // {
        //   text: "RATools",
        //   link: "/es/developer-docs/ratools",
        // },
        {
          text: "Consejos específicos para consolas",
          link: "/es/developer-docs/console-specific-tips",
        },
        // {
        //   text: "Do I Really Need to Use Delta?",
        //   link: "/developer-docs/why-delta",
        // },
        // {
        //   text: "Teclas de acceso rápido del emulador para desarrolladores",
        //   link: "/es/developer-docs/emulator-hotkeys-for-developers",
        // },
        // {
        //   text: "Soporte del núcleo libretro",
        //   link: "/es/developer-docs/libretro-core-support",
        // },
      ],
    },
    {
      text: "Banderas",
      collapsed: false,
      items: [
        {
          text: "ResetIf",
          link: "/es/developer-docs/flags/resetif",
        },
        // {
        //   text: "ResetNextIf",
        //   link: "/es/developer-docs/flags/resetnextif",
        // },
        {
          text: "PauseIf",
          link: "/es/developer-docs/flags/pauseif",
        },
        // {
        //   text: "AndNext y OrNext",
        //   link: "/es/developer-docs/flags/andnext-ornext",
        // },
        {
          text: "AddSource",
          link: "/es/developer-docs/flags/addsource",
        },
        {
          text: "SubSource",
          link: "/es/developer-docs/flags/subsource",
        },
        {
          text: "AddHits y SubHits",
          link: "/es/developer-docs/flags/addhits-subhits",
        },
        // {
        //   text: "AddAddress",
        //   link: "/es/developer-docs/flags/addaddress",
        // },
        // {
        //   text: "Measured",
        //   link: "/es/developer-docs/flags/measured",
        // },
        // {
        //   text: "Trigger",
        //   link: "/es/developer-docs/flags/trigger",
        // },
        // {
        //   text: "Remember",
        //   link: "/developer-docs/flags/remember",
        // },
      ],
    },
    {
      text: "Funciones adicionales",
      collapsed: false,
      items: [
        // {
        //   text: "Tamaño de BitCount",
        //   link: "/es/developer-docs/bitcount-size",
        // },
        {
          text: "Agrupado alt",
          link: "/es/developer-docs/alt-groups",
        },
        {
          text: "Contadores",
          link: "/es/developer-docs/hit-counts",
        },
        {
          text: "Valores delta",
          link: "/es/developer-docs/delta-values",
        },
        // {
        //   text: "Valores anteriores",
        //   link: "/es/developer-docs/prior-values",
        // },
        // {
        //   text: "Recall",
        //   link: "/developer-docs/recall",
        // },
        // {
        //   text: "Definición del valor",
        //   link: "/es/developer-docs/value-definition",
        // },
        // {
        //   text: "Sintaxis de condiciones",
        //   link: "/es/developer-docs/condition-syntax",
        // },
      ],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  es: {
    placeholder: "Buscar en los documentos",
    translations: {
      button: {
        buttonText: "Buscar",
        buttonAriaLabel: "Buscar",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "Limpiar búsqueda",
          resetButtonAriaLabel: "Limpiar búsqueda",
          cancelButtonText: "Cancelar",
          cancelButtonAriaLabel: "Cancelar",
        },
        startScreen: {
          recentSearchesTitle: "Historial de búsqueda",
          noRecentSearchesText: "No hay búsquedas recientes",
          saveRecentSearchButtonTitle: "Guardar en el historial de búsqueda",
          removeRecentSearchButtonTitle: "Eliminar del historial de búsqueda",
          favoriteSearchesTitle: "Favoritos",
          removeFavoriteSearchButtonTitle: "Eliminar de favoritos",
        },
        errorScreen: {
          titleText: "No se pudieron obtener resultados",
          helpText: "Comprueba tu conexión de red",
        },
        footer: {
          selectText: "Seleccionar",
          navigateText: "Navegar",
          closeText: "Cerrar",
          searchByText: "Buscar por",
        },
        noResultsScreen: {
          noResultsText: "No se pudieron encontrar resultados",
          suggestedQueryText: "Puedes intentar una nueva consulta",
          reportMissingResultsText: "¿Debería haber resultados para esta consulta?",
          reportMissingResultsLinkText: "Haz clic para enviar comentarios",
        },
      },
    },
  },
};
