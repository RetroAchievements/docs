---
title: 游戏信息与中心指南
description: 在 RetroAchievements 上贡献和编辑游戏元数据、图片和中心的指南。了解输入游戏标题、开发商、发行商、类型和发行日期信息的最佳实践，以及截图、封面和通过中心系统分类的方法。
---

# 游戏信息与中心指南

[[toc]]

## 游戏信息

游戏信息是指游戏页面上的元数据，包括游戏标题、发行日期、开发商、发行商和类型。

### 游戏标题与发行日期

- 标题可使用特殊/重音字符，如 Pokémon 中的 `é`。但不应使用表情符号。
- 副标题通常用冒号而非连字符分隔。如有多个副标题，先使用冒号，后跟连字符。
  - Atlantis - The Lost Empire -> Atlantis: The Lost Empire
  - Yu Yu Hakusho - Ghost Files - Tournament Tactics -> Yu Yu Hakusho: Ghost Files - Tournament Tactics
- 若同一平台上有两个同名游戏冲突，可在括号中添加发行商、开发商或发行年份以区分。示例：[Renegade (Ocean Software)](https://retroachievements.org/game/26867) 和 [Renegade (Kuma Computers)](https://retroachievements.org/game/26732)。
- 当地区变体获批拥有独立页面时，可添加地区以区分。示例：[Ecco the Dolphin](https://retroachievements.org/game/8) 和 [Ecco the Dolphin (Japan)](https://retroachievements.org/game/4374)。
- 对于有不同 MSX2 版本的 MSX 游戏，后者可在标题中添加 (MSX2)。示例：[Dragon Quest](https://retroachievements.org/game/16399) 和 [Dragon Quest (MSX2)](https://retroachievements.org/game/16400)。
- 红白机磁盘系统游戏目前包含在 NES/Famicom 下，但惯例是在标题中添加 (FDS)。示例：[All Night Nippon Super Mario Bros. (FDS)](https://retroachievements.org/game/12852)。
- 日文标题的罗马化可能不一致。如有疑问，使用 Wikipedia 和其他来源中最常用的罗马化。示例：[Yu Yu Hakusho](https://retroachievements.org/hub/7785) 而非 "Yuu Yuu Hakusho"，[Cho Aniki](https://retroachievements.org/hub/18695) 而非 "Chou Aniki"，[Bobobo-bo Bo-bobo](https://retroachievements.org/hub/20736) 而非 "Boboboubo Boubobo"。
  - 同一系列的游戏应使用主标题的相同罗马化。

#### 标签

- 改版、自制、演示、原型、测试套件和未授权游戏通过在游戏标题前添加 `~Hack~`、`~Homebrew~`、`~Demo~`、`~Prototype~`、`~Test Kit~` 或 `~Unlicensed~` 表示。这是可能在未来改变的技术限制。
- 当 `~Demo~` 或 `~Prototype~` 与 `~Hack~` 或 `~Homebrew~` 同时使用时，应列于后者之后。
  - 示例：`~Homebrew~ ~Demo~ Bob's Game` 而非 `~Demo~ ~Homebrew~ Bob's Game`。原因是无论游戏处于何种阶段，它始终是自制或改版；因此这些标签应优先。
- 当游戏为未授权且实际上只是另一游戏的改版时，应使用 `~Hack~` 而非 `~Unlicensed~`。
  - 示例：NES 上的最终幻想 VII，是盗版发行，但实际上只是放在卡带上的最终幻想 III 的改版。因此 RA 条目应为 `~Hack~ Final Fantasy VII`。
- 一些仍保留在网站上的已弃用游戏页面以 `~Z~` 为前缀，以便在列表中排序到底部。
- 子集通过在标题后添加 `[Subset - 子集名称]` 表示。

#### 地区标题

- 可为每个地区添加多个标题。
- 规范标题应为最易识别的标题。如有疑问，一般优先级为：北美英文标题 > 欧洲英文标题 > 非英文标题（通常为日文，但取决于游戏起源）。可能存在欧洲标题比北美标题更有帮助的情况，或其他例外。
  - 例外示例是 [Dragon Quest](https://retroachievements.org/game/1471)，使用国际知名的后来官方标题，而非原始英文标题 "Dragon Warrior"。此外，这也使列表中的游戏排序更便捷。
- 对于日文标题，优先级应为罗马化标题（如 "Zelda no Densetsu"），因为对大多数人更易读。这应是附加于日文发行日期的标题。
  - 也可添加日文汉字/假名标题（如 ゼルダの伝説）。日文发行日期无需重复。
- 不应添加盗版标题，即使它们有链接到页面的哈希。例如，[Adventure Island II: Aliens in Paradise](https://retroachievements.org/game/4486) 有一个名为 "Super Mario World 7" 的盗版哈希链接，但将其显示在官方标题旁边会很奇怪。
- 有粉丝翻译补丁的游戏可添加翻译标题。这些标题不应包含地区或发行日期。原始官方标题仍应作为规范标题使用。
- 在某些情况下，如果有助于或为粉丝常用，可添加额外标题，即使它们未被正式使用或非来自翻译补丁。这可能包括非英文标题的英文翻译等。与翻译补丁一样，这些不应包含地区或发行日期，且不应为规范标题。
- 若非英文游戏多年后获得官方英文翻译，该英文标题可作为规范标题优先于原始标题。示例：[EarthBound Beginnings](https://retroachievements.org/game/3814) 而非 Mother，[Trials of Mana](https://retroachievements.org/game/1391) 而非 Seiken Densetsu 3。

#### 发行日期

- 可为游戏发行的每个地区输入多个发行日期。
- 对于欧洲，使用最早发行日期。若各国发行日期不同，无需添加每个欧洲国家的每个发行日期。
- 发行日期无需重复。例如，若添加了两个日文标题（罗马化和汉字/假名），只有罗马化标题应有日文发行日期。
- 粉丝翻译标题的发行日期应留空。
- 对于移植和转换版本，请确保使用其特定发行日期，而非原版游戏的发行日期。
- 发行日期的一些来源：
  - https://web.archive.org/web/20140611225644/http://www.nintendo.com/consumer/downloads/nes_games.pdf - 北美 NES 发行日期。
  - https://www.famitsu.com/search?type=game-title&q=&max=100&order=desc&platform=alldevice - 日本红白机发行日期。需搜索日文标题。
  - https://nescartdb.com/search/browse/a - NES 发行日期，包括欧洲。
  - https://archive.gamehistory.org/ - 电子游戏历史基金会的数字档案。

### 开发商与发行商

- 开发商和发行商名称应手动输入到其元数据字段中。
  - 将开发商和发行商中心链接到页面时，它们会自动显示在页面顶部的游戏信息中作为链接。但这不会直接在元数据字段中记录它们。仍建议手动输入，因为这些字段中的数据用于其他目的，如管理应用。当文本与中心名称完全匹配时，链接将叠加显示而不会重复文本。
    - 类型也是如此。
    - 首次命名开发商、发行商或类型中心时要小心。若需重命名，中心内每款游戏的相应元数据字段都需要更新以匹配。
- 移植和转换版本应输入特定移植版本的开发商。除非原版游戏的开发商直接参与移植创作，否则不应包含原版游戏的开发商。
- 当开发团队或子公司为另一公司所有时，无需包含该大公司。例如，[Sonic the Hedgehog](https://retroachievements.org/game/1) 输入了 Sonic Team，不包含 Sega。
- 对于改版开发者，惯例是输入 "Hacker - 改版者名称" 作为开发商。[Central - Hacker](https://retroachievements.org/hub/913) 中心会自动将链接叠加到开发商字段中。
- 当发行商因地区而异时，可输入多个发行商。这不需要与实际链接到页面的地区版本对应。
- 改版使用发行商字段注明改版基于的游戏，例如 "Hack - Super Mario World"。[Hacks](https://retroachievements.org/hub/5987) 中心链接将自动叠加于此。
- 若无明确发行商，如许多数字发行的自制游戏，开发商可在发行商字段中重复。
- 开发商或发行商名称中不包含 Co、Inc、Ltd 等缩写。

### 类型

- 必要时可输入多种类型和子类型。
- 某些类型实际上不应在游戏页面上使用，而应始终将游戏归类到其子类型之一。这适用于 [Genre - Fighting](https://retroachievements.org/hub/8346)、[Genre - Platforming](https://retroachievements.org/hub/9120) 和 [Genre - Shooter](https://retroachievements.org/hub/2656)。
  - 其他类型在可能时也首选如此，例如若游戏在 [Subgenre - Turn-based RPG](https://retroachievements.org/hub/5468) 中，则不应同时包含在 [Genre - Role-Playing Game](https://retroachievements.org/hub/898) 中。但也有特殊情况，如体育 RPG 和钓鱼 RPG 可能不适合子类型。
- 有关类型的更多信息，请参阅 [类型定义](/zh/guidelines/content/genre-definitions) 页面。

## 游戏图片

游戏图片是游戏页面上显示的图片，包括图标（即精通徽章）、封面、标题截图和游戏截图。

### 图标

- 图片尺寸必须为 96x96 才能上传。
- 有关图标的更多规则，请参阅 [徽章与图标指南](/zh/guidelines/content/badge-and-icon-guidelines)。

### 封面

- 文件大小必须小于 1 MB 才能上传。
- 在求助 Google 图片之前，请先查看这些资源以获取高质量封面：
  - https://github.com/libretro-thumbnails/
  - https://gamesdb.launchbox-app.com/
  - https://db.hfsplay.fr/
  - https://www.mobygames.com/
- 街机游戏可使用宣传海报，因为它们没有封面。来源之一是 http://adb.arcadeitalia.net/default.php
- 应尽可能使用官方封面。改版和自制游戏可使用粉丝创作的封面。
- 北美封面在存在时始终优先，其次是欧洲封面。这与链接到页面的地区版本无关。

### 截图

- 文件大小必须小于 1 MB 才能上传。
- 鼓励使用英文截图，除非来自翻译补丁，此时首选原始语言。
- 任何图片上不得有水印。
- 某些游戏缺乏典型的标题画面。在这种情况下，可使用开场电影或加载画面中的标题截图。若不存在，可使用初始菜单画面或游戏画面。
- Game Boy 截图应为黑白。
- 截图时应禁用模拟器滤镜和着色器。例如，Game Boy Color 和 Game Boy Advance 不应使用色彩校正，Apple II 不应使用扫描线滤镜。

#### 截图尺寸

- 截图应尽可能具有相同的标准尺寸。
- 以下列出各系统的标准图片尺寸。
  - 96x64 - Pokemon Mini（图片按 4x 缩放）
  - 128x64 - Arduboy（图片按 2x 缩放）
  - 146x240 - Arcadia 2001, Elektor TV Games Computer, Interton VC 4000
  - 160x102 - Atari Lynx
  - 160x144 - Game Boy, Game Boy Color, Game Gear, Mega Duck
  - 160x152 - Neo Geo Pocket
  - 160x160 - WASM-4, Watara Supervision
  - 160x240 - Nintendo DS, Nintendo DSi
  - 193x240 - Vectrex
  - 200x234 - VIC-20
  - 224x144 - WonderSwan
  - 240x160 - Game Boy Advance
  - 256x192 - ColecoVision, Master System, SG-1000
  - 256x224 - NES/Famicom, Sega CD, SNES/Super Famicom
  - 256x232 - PC Engine/TurboGrafx-16, PC-FX
  - 272x240 - MSX
  - 306x192 - Fairchild Channel F
  - 320x180 - PlayStation Portable
  - 320x186 - Virtual Boy
  - 320x200 - Atari ST, Intellivision, PC-8000/8800
  - 320x219 - Apple II
  - 320x223 - Atari 7800
  - 320x224 - 32X, Genesis/Mega Drive, Neo Geo CD
  - 320x226 - Amstrad CPC
  - 320x228 - Atari 5200
  - 320x235 - Magnavox Odyssey 2
  - 320x240 - 3DO Interactive Multiplayer, Dreamcast, GameCube, Nintendo 64, PlayStation, PlayStation 2, Xbox
  - 326x240 - Atari Jaguar CD（这些会被缩小并因此模糊）
  - 视游戏而定 - Arcade, Atari 2600, Atari Jaguar, DOS, Nokia N-Gage, PC Engine CD, Sharp X68000, Uzebox

## 中心与类似游戏

中心用于以多种方式对游戏页面进行分类。也可以添加类似游戏的链接以帮助在网站上导航。

### 创建中心

- 开发者可以从 [Meta - Available Hubs](https://retroachievements.org/hub/3029) 重用中心（如有）。只需重命名中心并从 Meta 中心取消链接即可。
- 网站清理团队的某些成员可以在管理应用中创建新中心。
- [Series](https://retroachievements.org/hub/3)、[Publisher](https://retroachievements.org/hub/958)、非自制 [Developer](https://retroachievements.org/hub/5733)、[Hacks](https://retroachievements.org/hub/5987)、系列改版、[Fangames](https://retroachievements.org/hub/22202) 和 [Unlicensed series](https://retroachievements.org/hub/5751) 中心应仅在包含至少 3 款游戏时创建。
  - 自制开发商和 [Hacker](https://retroachievements.org/hub/913) 中心应至少有 5 款游戏。
  - 其他一些中心类型，如 [Theme](https://retroachievements.org/hub/5699)、[Setting](https://retroachievements.org/hub/29405) 和 [Protagonist](https://retroachievements.org/hub/5743)，需要更多游戏数量，将非常谨慎地创建。
- 注意不要创建 frivolous 中心，游戏页面上的中心列表已经可能过长。

### 常见中心

- 所有游戏页面应链接其开发商、发行商和类型中心（如存在）。
- 适用时应链接 [Language](https://retroachievements.org/hub/7885) 中心。
- 每当游戏属于更广泛系列时，通常使用 [Series](https://retroachievements.org/hub/3) 中心。
  - 盗版/盗版游戏和粉丝游戏不应添加到它们所基于的系列中心。
- 改版应添加到相应的 [Hacks](https://retroachievements.org/hub/5987) 中心（如存在）。此中心将自动显示在游戏页面顶部的发行商字段中。
  - 改版也可以添加到系列改版中心（如存在）。改版中心预期适用于特定游戏，而系列改版中心可以收集同一系列的不同游戏。注意系列改版中心不会出现在发行商字段中。
  - 若游戏没有改版中心，应添加到 [Uncategorized Hacks](https://retroachievements.org/hub/8018)，即使它在系列改版中心中。
- 自制、演示、原型和未授权游戏应始终添加到 [Central - Homebrew](https://retroachievements.org/hub/2469)、[Central - Demo](https://retroachievements.org/hub/5901)、[Central - Prototypes](https://retroachievements.org/hub/7824) 或 [Central - Unlicensed](https://retroachievements.org/hub/5751)。
  - 当未授权游戏在未授权系列中心（如 [Unlicensed - Mario](https://retroachievements.org/hub/29507)）中时会有例外。在这些情况下不应冗余添加 Central 中心。
- 子集应始终添加到 [Subsets](https://retroachievements.org/hub/18903) 中心。注意有 Bonus 和 Multi 等子集类型的专门中心。
  - 子集还应继承其基础游戏页面的所有中心。
- 还有许多其他中心，您可以[在此](https://retroachievements.org/hubs)浏览。

### 特殊中心

- [Meta|QA](https://retroachievements.org/hub/7582) 中心只能由 [QATeam](https://retroachievements.org/user/QATeam) 管理。如需请求更新这些中心，请向他们发送消息。
  - [Misc. - LGBTQ+ Representation](https://retroachievements.org/hub/9970) 也由 QATeam 特别管理。任何请求请向他们发送消息。
- Meta|Art 中心由 [RAArtTeam](https://retroachievements.org/user/RAArtTeam) 管理。
- [Meta|DevComp](https://retroachievements.org/hub/13591) 中心由 [DevCompliance](https://retroachievements.org/user/DevCompliance) 管理。
- [Theme - Mature](https://retroachievements.org/hub/7869) 由 [RAdmin](https://retroachievements.org/user/RAdmin) 管理。访问游戏页面时，此中心会显示成人内容警告。

### 类似游戏

- 类似游戏列表应限制在约 5 或 6 个条目。
- 若链接了系列中心，不应添加太多来自同一系列的类似游戏，因为会有些冗余。若它们比系列中的其他游戏更直接相关，或在同一系统上，添加几个仍可能有帮助。
- 类似游戏也可以包括共享玩法或其他有趣联系的游戏，特别是当它们在同一系统或同一代主机上，或共享制作人员时。
- 同一游戏的不同版本或移植也通常链接在一起，但若游戏移植版本过多，不要全部链接。

## 贡献游戏信息

用户可以在**清理请求论坛**（我们 [Discord 服务器](https://discord.gg/dq2E4hE) 的频道之一）帮助提交游戏信息、图片和中心。

### 标记您的帖子

- 创建帖子时，您可以选择几个标签来标记您的请求。每个标签将表明所提出的请求类型。
  - 游戏信息 - 用于编辑游戏标题、发行日期、开发商、发行商和类型。请参阅上文 [游戏信息](#游戏信息) 部分。
  - 游戏图片 - 用于编辑图标、封面和截图。请参阅 [游戏图片](#游戏图片) 部分。
  - 中心更新 - 用于编辑中心和类似游戏。请参阅 [中心与类似游戏](#中心与类似游戏) 部分。
  - 成就类型 - 用于提交缺乏进度标注的游戏的进度计划，使游戏能够授予通关奖励。请参阅下文 [成就类型](#成就类型) 部分。
  - Challenge League - 用于与 Challenge League 活动相关的提交。请参阅 [Challenge League](#challenge-league) 部分。
- 元标签：
  - Open - 表示帖子仍在进行中，请求尚未完成。
  - Complete - 表示帖子已获批，更改已应用到网站。
  - Denied - 表示帖子被拒绝，原因可能是虚假信息、质量不足或帖子内容无关。
  - Closed - 表示帖子已关闭，您将无法在这些帖子上评论。
  - Discussion - 表示有持续讨论的帖子，预计不会很快关闭。

### 发帖

- 提供游戏页面的链接。
- 提交开发商、发行商和类型信息时，如存在请记得也链接中心。
- 也链接任何额外的中心或相关游戏请求，而不是仅仅命名它们。
- 除了列出中心链接外，您还可以提供中心 ID 列表（页面 URL 中看到的数字），用逗号或空格分隔。
- 对游戏类型要非常具体，将网球或摔跤游戏仅标为 "Sports" 在存在这些运动的中心时不是好的做法。
- 仅当游戏尚未有图标时才能提交图标。若有，您必须使用 [Icon Gauntlet](/zh/guidelines/content/achievement-set-revisions#icon-gauntlet)。
  - 若图标是简单的质量升级，可以有例外。但任何颜色或构图的更改都需要 Icon Gauntlet 投票。
- 请记住图片应具有适当尺寸，图标为 96x96，尽可能使用上述给定系统截图的标准尺寸。
- 还请记住图片需要小于 1 MB。

### 成就类型

- 若游戏缺乏进度标注，且集的开发者不活跃（他们不再拥有 Developer 或 Jr. Developer 角色），您可以在清理请求论坛提交计划以标注该集。此类游戏列表可在 [Missing Progression Typing](https://retroachievements.org/hub/25585) 中心找到。
- 请记得查阅 [进度与通关条件指南](/zh/guidelines/content/progression-and-win-condition-guidelines)。
- 若您认为集的标注不正确，或集的开发者仍然活跃，请改为向 [QATeam](https://retroachievements.org/user/QATeam) 发送消息，网站清理无法处理这些报告。
- 易错过标注的请求也应发送给 QATeam，网站清理同样无法处理。

### Challenge League

- 2023 年活动 Challenge League: The Top 100 包含在清理请求论坛提交游戏信息和图片的某些挑战。
- 此活动继续作为 [Evergreen Event](https://retroachievements.org/viewtopic.php?t=25332) 提供。
- 相关挑战来自 KingS1zzle（五月）和 Soulsderfuchs（八月）。更多信息请参阅 [原主题](https://retroachievements.org/viewtopic.php?t=19615)。
