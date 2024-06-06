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
        //   text: "Guía de Configuración",
        //   link: "/es/general/setup-guide",
        // },
    
        {
          text: "Soporte y problemas de los emuladores",
          link: "/es/general/emulator-support-and-issues",
        },
        // {
        //   text: "How RA Works",
        //   link: "/general/how-ra-works",
        // },
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
        // {
        //   text: "Rollouts",
        //   link: "/es/general/rollouts"
        // },
        // {
        //   text: "DevQuests",
        //   link: "/es/general/devquests"
        // },
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
    //   text: "Tutoriales",
    //   collapsed: false,
    //   items: [
    //     {
    //       text: "Cómo configurar OBS Studio para ver las ventanas emergentes",
    //       link: "/es/general/tutorials/how-to-configure-obs-studio",
    //     },
    //     {
    //       text: "Juegos de Múltiples Discos",
    //       link: "/es/general/tutorials/multi-disc-games",
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
      text: "Directrices para Usuarios",
      collapsed: false,
      items: [
        {
          text: "Manifiesto de RetroAchievements",
          link: "/es/guidelines/users/retroachievements-manifesto",
        },
        {
          text: "Código de Conducta de los Usuarios",
          link: "/es/guidelines/users/code-of-conduct",
        },
        {
          text: "Reglas de la Tabla de Clasificación Global y Caza de Logros",
          link: "/es/guidelines/users/global-leaderboard-and-achievement-hunting-rules",
        },
      ],
    },
    {
      text: "Directrices para Desarrolladores",
      collapsed: false,
      items: [
        {
          text: "Código de Conducta de los Desarrolladores",
          link: "/es/guidelines/developers/code-of-conduct",
        },
        // {
        //   text: "Creación de Entradas",
        //   link: "/es/guidelines/developers/creating-entries",
        // },
        // {
        //   text: "Sistema de Reclamaciones",
        //   link: "/es/guidelines/developers/claims-system",
        // },
        // {
        //   text: "Manejo de Tickets",
        //   link: "/es/guidelines/developers/handling-tickets",
        // },
      ],
    },
    {
      text: "Directrices de Contenido",
      collapsed: false,
      items: [
        // {
        //   text: "Requisitos del Conjunto de Logros",
        //   link: "/es/guidelines/content/achievement-set-requirements",
        // },
        // {
        //   text: "Conceptos No Deseados",
        //   link: "/es/guidelines/content/unwelcome-concepts",
        // },
        // {
        //   text: "Directrices de Progresión y Condición de Victoria",
        //   link: "/es/guidelines/content/progression-and-win-condition-guidelines",
        // },
        // {
        //   text: "Plagio de Conjuntos",
        //   link: "/es/guidelines/content/set-plagiarism",
        // },
        // {
        //   text: "Convenciones de Nombres",
        //   link: "/es/guidelines/content/naming-conventions",
        // },
        // {
        //   text: "Política de Escritura",
        //   link: "/es/guidelines/content/writing-policy",
        // },
        // {
        //   text: "Directrices para Insignias e Íconos",
        //   link: "/es/guidelines/content/badge-and-icon-guidelines",
        // },
        // {
        //   text: "Notas de Código",
        //   link: "/es/guidelines/content/code-notes",
        // },
        // {
        //   text: "Editando Tablas de Clasificación",
        //   link: "/es/guidelines/content/editing-leaderboards",
        // },
        {
          text: "Revisiones del Conjunto de Logros",
          link: "/es/guidelines/content/achievement-set-revisions",
        },
        {
          text: "Logros para ROM Hacks",
          link: "/es/guidelines/content/achievements-for-rom-hacks",
        },
        {
          text: "Subconjuntos",
          link: "/es/guidelines/content/subsets",
        },
        {
          text: "Trabajando con la ROM Correcta",
          link: "/es/guidelines/content/working-with-the-right-rom",
        },
        // {
        //   text: "Etiquetas de Hash",
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
          text: "Cómo Convertirse en un Desarrollador de Logros",
          link: "/es/developer-docs/how-to-become-an-achievement-developer",
        },
        {
          text: "Comenzando como Desarrollador de Logros",
          link: "/es/developer-docs/getting-started-as-an-achievement-developer",
        },
        {
          text: "Identificación del Juego",
          link: "/es/developer-docs/game-identification",
        },
        {
          text: "Diseño de Logros",
          link: "/es/developer-docs/achievement-design",
        },
        // {
        //   text: "Puntuación de Logros",
        //   link: "/es/developer-docs/achievement-scoring",
        // },
        {
          text: "Escala de Dificultad y Equilibrio",
          link: "/es/developer-docs/difficulty-scale-and-balance",
        },
        // {
        //   text: "Directrices de Progresión y Condición de Victoria",
        //   link: "/es/guidelines/content/progression-and-win-condition-guidelines",
        // },
        {
          text: "Creación de Insignias e Íconos",
          link: "/es/developer-docs/badge-and-icon-creation",
        },
        // {
        //   text: "Descripción General del Desarrollo de Logros",
        //   link: "/es/developer-docs/achievement-development-overview",
        // },
        {
          text: "Versiones Mínimas Requeridas para Funciones de Lógica",
          link: "/es/developer-docs/minimum-required-versions-for-logic-features",
        },
        {
          text: "Inspector de Memoria",
          link: "/es/developer-docs/memory-inspector",
        },
        {
          text: "Ejemplos Reales",
          link: "/es/developer-docs/real-examples",
        },
        {
          text: "Hoja de Ruta del Desarrollo del Conjunto",
          link: "/es/developer-docs/set-development-roadmap",
        },
        {
          text: "Plantillas de Logros",
          link: "/es/developer-docs/achievement-templates",
        },
        // {
        //   text: "Save and Password Protection",
        //   link: "/developer-docs/save-and-password-protection",
        // },
        {
          text: "Consejos y Trucos",
          link: "/es/developer-docs/tips-and-tricks",
        },
        {
          text: "Tablas de Clasificación",
          link: "/es/developer-docs/leaderboards",
        },
        {
          text: "Rich Presence",
          link: "/es/developer-docs/rich-presence",
        },
        // {
        //   text: "RATools",
        //   link: "/es/developer-docs/ratools",
        // },
        {
          text: "Consejos Específicos para Consolas",
          link: "/es/developer-docs/console-specific-tips",
        },
        // {
        //   text: "Atajos del Emulador para Desarrolladores",
        //   link: "/es/developer-docs/emulator-hotkeys-for-developers",
        // },
        // {
        //   text: "Soporte del Núcleo de libretro",
        //   link: "/es/developer-docs/libretro-core-support",
        // },
      ],
    },
    {
      text: "Flags",
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
      text: "Funcionalidad Adicional",
      collapsed: false,
      items: [
        // {
        //   text: "Tamaño de BitCount",
        //   link: "/es/developer-docs/bitcount-size",
        // },
        {
          text: "Grupos Alternativos",
          link: "/es/developer-docs/alt-groups",
        },
        {
          text: "Contadores de Golpes",
          link: "/es/developer-docs/hit-counts",
        },
        {
          text: "Valores Delta",
          link: "/es/developer-docs/delta-values",
        },
        // {
        //   text: "Valores Previos",
        //   link: "/es/developer-docs/prior-values",
        // },
        // {
        //   text: "Recall",
        //   link: "/developer-docs/recall",
        // },
        // {
        //   text: "Definición de Valor",
        //   link: "/es/developer-docs/value-definition",
        // },
        // {
        //   text: "Sintaxis de Condición",
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
