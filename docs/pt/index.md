---
layout: home

title: RetroAchievements

# TODO track what the most popular links are and update these accordingly
hero:
  name: RetroAchievements
  text: Documentação
  tagline: Adicionando conquistas aos jogos retrô desde 2012.
  actions:
    - theme: brand
      text: Suporte ao Emulador
      link: /pt/general/emulator-support-and-issues
    - theme: alt
      text: Código de Conduta
      link: /pt/guidelines/users/code-of-conduct
    - theme: alt
      text: Torne-se um Desenvolvedor
      link: /developer-docs/how-to-become-an-achievement-developer
  image:
    src: /ra-logo-big-shadow.png
    alt: VitePress

features:
  - icon: 🙋🏽
    title: Cadastre-se
    details: Comece criando uma conta.
    link: https://retroachievements.org/createaccount.php
  - icon: 🕹️
    title: Baixe um Emulador
    details: Instale um emulador compatível e comece a ganhar conquistas.
    link: https://retroachievements.org/download.php
  - icon: 📡
    title: Documentação da API
    details: Integre RetroAchievements em seu aplicativo, site ou front-end.
    link: https://api-docs.retroachievements.org
  - icon: 🔧
    title: Documentação de Integração do Emulador
    details: Integre RetroAchievements em seu emulador.
    link: https://github.com/RetroAchievements/rcheevos/wiki/rc_client-integration
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    140deg,
    hsl(44deg 85% 48%) 0%,
    hsl(40deg 51% 59%) 44%,
    hsl(43deg 21% 62%) 58%,
    hsl(187deg 10% 62%) 66%,
    hsl(202deg 40% 60%) 72%,
    hsl(200deg 68% 53%) 78%,
    hsl(204deg 68% 52%) 82%,
    hsl(208deg 68% 52%) 87%,
    hsl(212deg 68% 52%) 91%,
    hsl(218deg 68% 52%) 96%,
    hsl(223deg 67% 52%) 100%
  );

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #c39c30 50%, #3663d8 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
