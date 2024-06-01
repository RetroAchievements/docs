---
layout: home

title: RetroAchievements

# TODO track what the most popular links are and update these accordingly
hero:
  name: RetroAchievements
  text: Documentation
  tagline: Adding achievements to retro games since 2012.
  actions:
    - theme: brand
      text: Emulator Support
      link: /general/emulator-support-and-issues
    - theme: alt
      text: Code of Conduct
      link: /guidelines/users/code-of-conduct
    - theme: alt
      text: Become a Developer
      link: /developer-docs/how-to-become-an-achievement-developer
  image:
    src: /ra-logo-big-shadow.png
    alt: VitePress

features:
  - icon: 🙋🏽
    title: Sign Up
    details: Get started by making an account.
    link: https://retroachievements.org/createaccount.php

  - icon: 🕹️
    title: Download an Emulator
    details: Install a supported emulator and start earning achievements.
    link: https://retroachievements.org/download.php

  - icon: 📡
    title: API Docs
    details: Integrate RetroAchievements into your app, website, or front-end.
    link: https://api-docs.retroachievements.org

  - icon: 🔧
    title: Emulator Integration Docs
    details: Integrate RetroAchievements into your emulator.
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
