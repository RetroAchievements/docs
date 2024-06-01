import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";

export const pt = defineConfig({
  lang: "pt",
  description: "Acesse guias abrangentes, tutoriais e recursos para desenvolvedores no RetroAchievements. Aprenda como melhorar sua experiência de jogos retrô com conquistas personalizadas.",

  themeConfig: {
    nav: [],

    sidebar: {},

    editLink: {
      pattern: "https://github.com/RetroAchievements/docs-vitepress/edit/main/docs/:path",
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
