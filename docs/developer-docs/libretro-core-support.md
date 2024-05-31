# libretro Core Support

For a libretro core to support RetroAchievements, it must expose memory and it must not modify the game files. Everything else should be handled by the libretro frontend (i.e. RetroArch or RALibretro).

[[toc]]

### Exposing Memory

First, find the memory regions expected by RetroAchievements by looking for the mapping associated to the console in [consoleinfo.c](https://github.com/RetroAchievements/rcheevos/blob/develop/src/rcheevos/consoleinfo.c). It will look something like this:

```
static const rc_memory_region_t _rc_memory_regions_pc_engine[] = {
    { 0x000000U, 0x001FFFU, 0x1F0000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM" },
    { 0x002000U, 0x011FFFU, 0x100000U, RC_MEMORY_TYPE_SYSTEM_RAM, "CD RAM" },
    { 0x012000U, 0x041FFFU, 0x0D0000U, RC_MEMORY_TYPE_SYSTEM_RAM, "Super System Card RAM" },
    { 0x042000U, 0x0427FFU, 0x1EE000U, RC_MEMORY_TYPE_SAVE_RAM,   "CD Battery-backed RAM" }
};
```

This example defines four regions of memory for the PC-Engine console. The first two fields are the starting and ending RetroAchievements address for the region. The third field is the starting real address for the region. The fourth field identifies the type of memory stored in the region, and the last field is a label for the region.

Achievements rely almost entirely on system RAM and save RAM. There may be additional blocks in the memory map flagged as other types of memory. Those blocks are leftover from the way the memory way initially exposed by a standalone emulator. They can only be exposed by `RETRO_ENVIRONMENT_SET_MEMORY_MAPS`, and are almost never needed for achievement logic, so it's usually acceptable to not worry about them initially.

If no memory map is provided, RetroAchievements doesn't support the system yet. Please contact us if you believe your core/system is ready to be supported.

#### Exposing via retro_get_memory_data

Memory can be exposed in two ways. The simplest is using the `retro_get_memory_data`/`retro_get_memory_size` functions. These functions will be called with `RETRO_MEMORY_SYSTEM_RAM` and `RETRO_MEMORY_SAVE_RAM` (when applicable). The functions return a single pointer and a size for a block of memory. This block of memory is then distributed to the memory regions until no more is available.

Using the above example, the expectation would be that `retro_get_memory_size(RETRO_MEMORY_SYSTEM_RAM)` would return 0x42000 and `retro_get_memory_size(RETRO_MEMORY_SAVE_RAM)` would return 0x800, and `retro_get_memory_data` would return pointers to blocks of memory of the specified sizes. The 0x42000 bytes of system RAM would be distributed to the three blocks of `RC_MEMORY_TYPE_SYSTEM_RAM`, and the 0x800 bytes of save RAM would be associated to the one block of `RC_MEMORY_TYPE_SAVE_RAM`.

If less than 0x42000 bytes is returned by `retro_get_memory_size(RETRO_MEMORY_SYSTEM_RAM)`, it will be associated to the three blocks of `RC_MEMORY_TYPE_SYSTEM_RAM` in a first-come, first-serve basis. The first 0x2000 bytes will be allocated to the first block. The next 0x10000 to the second block, and whatever is left to the third block. Whatever addresses could not be filled will be unavailable to the achievement code and achievements dependent on those addresses will be disabled.

If more than 0x42000 bytes is returned by `retro_get_memory_size(RETRO_MEMORY_SYSTEM_RAM)`, only the first 0x42000 bytes will be allocated and the rest will be ignored.

#### Exposing via RETRO_ENVIRONMENT_SET_MEMORY_MAPS

The other way to expose memory is the `RETRO_ENVIRONMENT_SET_MEMORY_MAPS` environment callback. This callback allows the core to specify disparate chunks of memory without having to join them into a single byte array for access by `retro_get_memory_data`. Using the example above, unique pointers could be returned for each of the three blocks of system RAM, or even for subsections of each of the three blocks of system RAM.

The RetroAchievements code will using the provided map to translate it's addresses to the appropriate core memory through the start/select/disconnect properties of the exposed memory. Addresses that cannot be mapped will be unavailable to the achievement code and achievements dependent on those addresses will be disabled.

#### Special considerations

Some maps contain comments indicating special considerations should be applied for the console. These usually have to do with paged memory. As the achievement code needs access to all memory, not just the currently paged memory, we often request that the entire unpaged memory be accessible.

```
    { 0x00C000U, 0x00CFFFU, 0x00C000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM (fixed)" },
    { 0x00D000U, 0x00DFFFU, 0x00D000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM (bank 1)" },

    /* GameBoy Color provides six extra banks of memory that can be paged out through the $DXXX
     * memory space, but the timing of that does not correspond with blanks, which is when achievements
     * are processed. As such, it is desirable to always have access to these extra banks. We do this
     * by expecting the extra banks to be addressable at addresses not supported by the native system. */
    { 0x010000U, 0x015FFFU, 0x010000U, RC_MEMORY_TYPE_SYSTEM_RAM, "System RAM (banks 2-7, GBC only)" }
```

The GameBoy Color has 32KB of RAM broken into eight 4KB banks. Normally, the first bank is exposed at $C000, and the other seven banks are paged into the $D000 memory space. As RetroAchievements only process data once per frame, we can't rely on the correct data being in the $D000 page when we evaluate our logic, so we ask that $D000 always only contains bank 1, and banks 2-7 are exposed at $10000-$15FFF (addresses which are not normally used by the GameBoy Color).

### Immutable Game Data

The other important thing for a core to consider is that the game files should not be modified.

RetroAchievements [hashes a portion of the game data](Game-Identification) (usually most or all of it) to ensure the player is using a compatible version of the game. If the hash doesn't match exactly, we don't enable achievements. This ensures that regional variants are only allowed if their memory lines up correctly. It also ensures players aren't playing on a hacked version where they have infinite health or some other cheat applied.

If the game files are modified by the core, the hash may change and the game will no longer be identified.

Any modifications to the game files should be handled through the `retro_serialize` interface.

### Core Settings

If a user can manually change settings in the core that could make playing a game easier, please inform us so we can add them to a blacklist that disables hardcore when they're set. Common examples are:

- running NTSC games in PAL mode slows them down by 16%
- disabling layers allows players to see through fog-of-war
- core provided cheats give infinite health/ammo/etc

### Reset

When enabling hardcore mode, the frontend will ask the core to reset. It is important that the core do this, or users can drop out of hardcore mode for difficult parts of the game and switch back to hardcore mode without penalty just before an achievement triggers.

### Save States

While not required, save state support makes it much easier to develop and debug/fix achievements using the core.

No special logic is required to support achievements in the save states - the frontend will handle that.

### Disabling Support

If a core wishes to opt-out of achievement support, it can explicitly call the `RETRO_ENVIRONMENT_SET_SUPPORT_ACHIEVEMENTS` with `false`/`0`. This will disable the achievement subsystem while the core is loaded, which will avoid any attempts to identify if the loaded content has achievements, and disable all functionality limited by having achievement hardcore mode enabled (rewind, loading save states, slow-motion, cheats).
