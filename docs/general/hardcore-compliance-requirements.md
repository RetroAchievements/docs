---
title: Hardcore Compliance Requirements
description: Comprehensive requirements for emulators to achieve hardcore compliance with RetroAchievements, including feature support, rules enforcement, and technical specifications.
---

# Hardcore Compliance Requirements

This page outlines the comprehensive requirements that emulators must meet to be considered hardcore-compliant with RetroAchievements. These requirements ensure fair play, proper functionality, and consistent experience across all platforms. Hardcore-compliant emulators are approved for the competitive hardcore-mode leaderboard. They are also listed on our [Downloads page](https://retroachievements.org/downloads), providing a steady and stable stream of free traffic.

## A. RetroAchievements Features

RetroAchievements features must work as intended:

- **Achievements**: Triggers must evaluate correctly. Measured and Trigger flags must work properly.
- **Rich Presence and Leaderboards**: Must function correctly.
- **Offline queueing**: Unlocks created while offline must be securely cached and sync to RetroAchievements when connectivity returns.
- **Save state hit storage**: Hit counts should be stored in save states. While not strictly required, this is highly recommended as it's important for debugging complex achievement logic and ensures proper functionality in softcore mode. Without this, players may experience issues and developers will have difficulty troubleshooting.
- **Toolkit support**: If you ship a Windows version of the emulator, please investigate adding [RAIntegration DLL](https://github.com/RetroAchievements/RAIntegration) support. This is not required, but if it isn't included, a subtle info blurb will be present on our Downloads page, and players will get a very loud warning when trying to open tickets.
- **Save file compatibility**: Save files (memory cards, SRAM, EEPROM, battery saves, etc.) should use standard formats compatible with other emulators of the same system. This is highly recommended as it benefits both users (who can switch emulators without losing progress) and developers (who can validate manual unlock requests by loading saves in emulators with RAIntegration support).

## B. Hardcore Rules Enforcement

The following rules must be enforced in Hardcore mode:

- **Cheats are disabled** in hardcore, including:
  - Built-in cheat engines
  - Mountable cheat devices (GameShark, Game Genie, etc.)
  - External cheat files not used for minor QoL improvements (widescreen hacks, etc.)
- **Rewind is disabled** in hardcore.
- **Slowdown and frame advance are disabled** in hardcore.
- **Loading save states is ALWAYS blocked** in hardcore.
- **Rich Presence and Leaderboards cannot be disabled** in hardcore. Disabling leaderboard popups is okay to support for either mode.
- If the emulator supports a **"resume/quick resume" feature**, the resumed session must drop to Softcore.
- **Mode switching**: Switching from softcore to hardcore is not allowed mid-session. **This action must result in a full reset of the game.** Switching from hardcore to softcore is allowed mid-session.
- Users should be allowed to create save states while in hardcore for debugging purposes, but those states cannot be loadable when hardcore mode is enabled.
- Memory editors, debuggers, and/or scripting/TAS/recorded input playback are strictly prohibited.

## C. Identity and Integrity of the Client

The emulator must use its own unique, stable user agent with the following format:

```
EmulatorName/v1.0.0 (OSName 10.0) core_name/v0.5.0
```

Our user agent format has three segments:

- A. **Required.** The emulator name and version. Versions must be numeric and incrementing, with the exception of an optional "v" prefix.
- B. Optional. The operating system name and version.
- C. Optional. The core name and version.

These are examples of valid user agents:

```
RetroArch/1.20.0 (Android 13.0) genesis_plus_gx_libretro_android/v1.7.4_8ea39ee
PPSSPP/v1.19.3
PCSX/v2.5.103 (Microsoft Windows 10+)
RALibRetro/1.8.1 (WindowsNT 10.0) fbneo_libretro/v1.0.0.03__e90b821
```

## D. Defaults and UX

- When users log in to their RetroAchievements accounts, **enabling hardcore by default is recommended**, but not required. If softcore is the default, enabling hardcore must be one click/tap away and clearly indicated.
- **Hardcore state must be visibly indicated** in the UI during play. This is normally done when the player starts a game - they can see a brief informational message saying what mode they're in.

## E. Transparency and Legality

The following transparency and legal requirements must be met:

- **Monetization disclosure**: If there is any monetization/commercialization involved in the emulator, you must publish a features matrix (free vs paid) with exact limits (e.g., cloud-save quotas). Paid features must not undermine hardcore rules.
- **Licenses & notices**: Publish a page (or otherwise have accessible) a listing of every shipped FOSS core, its license, and any relevant upstream links.
  - Non-commercial licenses may not be shipped if there is any commercialization without written permission from rightsholders.
  - GPL/LGPL/MPL/etc. obligations must be satisfied for any distributed binaries.
- **Privacy policy**: Publish a privacy policy that is easy to find and includes:
  - Data retention periods.
  - Server locations/countries.
  - How the emulator satisfies GDPR compliance if any retained telemetry is in place.

## F. Auto-fail Criteria

Any one of these will lead to an **automatic rejection** of the emulator for hardcore verification:

- Loading save states in hardcore mode.
- Allowing rewind/slo-mo/frame advance in hardcore mode.
- Allowing gameplay-altering cheats in hardcore mode.
- The Ability to switch between modes without a reset of the game.
- Identifying the emulator to the server with a non-unique user agent.
- Shipping non-commercial cores while any commercialization or in-app purchases exists without written permission from the necessary rightsholders.
- Privacy policy with placeholders/contradictions (e.g., missing data warehouse location, "no third parties" while using social logins/analytics).

::: warning Important
Meeting these requirements is essential for an emulator to be listed as hardcore-compliant on RetroAchievements. We reserve the right to periodically re-evaluate compliant emulators for continued compliance. Failure to maintain compliance may result in removal from the approved emulators list and our Downloads page.
:::
