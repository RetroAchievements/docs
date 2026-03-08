# libretro 核心支持

libretro 核心要支持 RetroAchievements，必须暴露内存且不得修改游戏文件。其余工作应由 libretro 前端（即 RetroArch 或 RALibretro）处理。

[[toc]]

### 暴露内存

首先，在 [consoleinfo.c](https://github.com/RetroAchievements/rcheevos/blob/develop/src/rcheevos/consoleinfo.c) 中查找与主机相关的映射，以确定 RetroAchievements 期望的内存区域。其格式大致如下：

```
static const rc_memory_region_t _rc_memory_regions_pc_engine[] = {
    { 0x000000U, 0x001FFFU, 0x1F0000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM" },
    { 0x002000U, 0x011FFFU, 0x100000U, RC_MEMORY_TYPE_SYSTEM_RAM, "CD RAM" },
    { 0x012000U, 0x041FFFU, 0x0D0000U, RC_MEMORY_TYPE_SYSTEM_RAM, "Super System Card RAM" },
    { 0x042000U, 0x0427FFU, 0x1EE000U, RC_MEMORY_TYPE_SAVE_RAM,   "CD Battery-backed RAM" }
};
```

此示例定义了 PC-Engine 主机的四个内存区域。前两个字段是区域的起始和结束 RetroAchievements 地址。第三个字段是区域的真实起始地址。第四个字段标识区域中存储的内存类型，最后一个字段是区域的标签。

成就几乎完全依赖系统 RAM 和存档 RAM。内存映射中可能还有其他类型的内存块。这些块来自独立模拟器最初暴露内存的方式。它们只能通过 `RETRO_ENVIRONMENT_SET_MEMORY_MAPS` 暴露，成就逻辑几乎从不需要，因此通常可以暂时忽略。

若未提供内存映射，RetroAchievements 尚不支持该系统。若你认为你的核心/系统已准备好支持，请联系我们。

#### 通过 retro_get_memory_data 暴露

内存可以通过两种方式暴露。最简单的是使用 `retro_get_memory_data`/`retro_get_memory_size` 函数。这些函数会以 `RETRO_MEMORY_SYSTEM_RAM` 和 `RETRO_MEMORY_SAVE_RAM`（如适用）调用。函数返回单个指针和内存块大小。该内存块随后分配到各内存区域，直到用完为止。

使用上述示例，预期 `retro_get_memory_size(RETRO_MEMORY_SYSTEM_RAM)` 返回 0x42000，`retro_get_memory_size(RETRO_MEMORY_SAVE_RAM)` 返回 0x800，`retro_get_memory_data` 返回指定大小的内存块指针。0x42000 字节的系统 RAM 将分配到三个 `RC_MEMORY_TYPE_SYSTEM_RAM` 块，0x800 字节的存档 RAM 将关联到那一个 `RC_MEMORY_TYPE_SAVE_RAM` 块。

若 `retro_get_memory_size(RETRO_MEMORY_SYSTEM_RAM)` 返回少于 0x42000 字节，将按先到先得原则分配到三个 `RC_MEMORY_TYPE_SYSTEM_RAM` 块。前 0x2000 字节分配给第一个块，接下来 0x10000 给第二个块，剩余给第三个块。无法填充的地址对成就代码不可用，依赖这些地址的成就将被禁用。

若 `retro_get_memory_size(RETRO_MEMORY_SYSTEM_RAM)` 返回多于 0x42000 字节，仅前 0x42000 字节会被分配，其余将被忽略。

#### 通过 RETRO_ENVIRONMENT_SET_MEMORY_MAPS 暴露

另一种暴露内存的方式是 `RETRO_ENVIRONMENT_SET_MEMORY_MAPS` 环境回调。该回调允许核心指定不连续的内存块，而无需将它们合并为 `retro_get_memory_data` 可访问的单个字节数组。使用上述示例，可以为三个系统 RAM 块分别返回唯一指针，甚至可以为每个块的子区域返回。

RetroAchievements 代码将使用提供的映射，通过暴露内存的 start/select/disconnect 属性将其地址转换到相应的核心内存。无法映射的地址对成就代码不可用，依赖这些地址的成就将被禁用。

#### 特殊考虑

部分映射包含注释，表明应对主机应用特殊考虑。这些通常与分页内存有关。由于成就代码需要访问所有内存，而不仅是当前分页的内存，我们通常要求整个未分页内存可访问。

```
    { 0x00C000U, 0x00CFFFU, 0x00C000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM (fixed)" },
    { 0x00D000U, 0x00DFFFU, 0x00D000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM (bank 1)" },

    /* GameBoy Color provides six extra banks of memory that can be paged out through the $DXXX
     * memory space, but the timing of that does not correspond with blanks, which is when achievements
     * are processed. As such, it is desirable to always have access to these extra banks. We do this
     * by expecting the extra banks to be addressable at addresses not supported by the native system. */
    { 0x010000U, 0x015FFFU, 0x010000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM (banks 2-7, GBC only)" }
```

GameBoy Color 有 32KB RAM，分为八个 4KB 的 bank。通常，第一个 bank 暴露在 $C000，其余七个 bank 分页到 $D000 内存空间。由于 RetroAchievements 每帧只处理一次数据，我们无法依赖评估逻辑时 $D000 页面的正确数据，因此我们要求 $D000 始终只包含 bank 1，bank 2-7 暴露在 $10000-$15FFF（GameBoy Color 通常不使用的地址）。

### 不可变游戏数据

核心需要考虑的另一重要事项是游戏文件不应被修改。

RetroAchievements [对部分游戏数据进行哈希](/zh/developer-docs/game-identification)（通常是大部分或全部），以确保玩家使用兼容版本的游戏。若哈希不完全匹配，我们不会启用成就。这确保仅当区域变体的内存正确对齐时才允许使用。也确保玩家不是在玩修改版（如无限生命或其他作弊）。

若核心修改了游戏文件，哈希可能改变，游戏将无法识别。

对游戏文件的任何修改应通过 `retro_serialize` 接口处理。

### 核心设置

若用户可以在核心中手动更改使游戏更易玩的设置，请告知我们，以便我们将其加入禁用硬核模式的黑名单。常见示例包括：

- 在 PAL 模式下运行 NTSC 游戏会减慢 16%
- 禁用图层允许玩家看穿战争迷雾
- 核心提供的作弊可无限生命/弹药等

### 重置

启用硬核模式时，前端会要求核心重置。核心必须执行重置，否则用户可以在游戏困难部分退出硬核模式，并在成就触发前无惩罚地切换回硬核模式。

### 存档状态

虽然不是必需，但存档状态支持使使用核心开发和调试/修复成就更加容易。

存档状态中支持成就无需特殊逻辑，前端会处理。

### 禁用支持

若核心希望选择退出成就支持，可以显式调用 `RETRO_ENVIRONMENT_SET_SUPPORT_ACHIEVEMENTS` 并传入 `false`/`0`。这将在加载核心时禁用成就子系统，避免尝试识别加载内容是否有成就，并禁用硬核模式下的所有功能（倒带、加载存档状态、慢动作、作弊）。
