# Survival rules <VersionBadge text="v0.50" />

In a survival world, AETHER doesn't hand you the whole system for free. What it knows has to reach you through your own network: a powered AETHER block at home, its antennas, and satellites linked to them.

Creative worlds are unaffected. To turn the rules off or force them on, set `[Survival] Mode` in the world's `AetherSettings.ini` to `auto` (the default: on in survival worlds), `on` or `off`.

## Your network

| Part | What it does |
|---|---|
| **Home** | Any working (powered, switched on) AETHER block of yours: Star Map Terminal, Command Console or Holo Table. |
| **Home antennas** | Broadcasting antennas on the home block's grid, or on anything docked to it, carry the network outwards. |
| **Satellites** | Report only while **linked**: their broadcast reaches a home antenna or another linked satellite. Relay chains work. An unlinked satellite sees nothing new. |
| **You** | Linked while a network antenna's broadcast reaches you, or while the ship you control broadcasts far enough to reach one. |

Your own senses always work, because they're local: what you can see, your own antennas, and broadcasts that reach you.

## The suit map

Without a link, <kbd>Ctrl</kbd>+<kbd>M</kbd> opens the **suit map**: Ground view around you, up to 1 km, showing what you already know. Planet View, the Solar System view, panning and moving to other spots need the link, and AETHER tells you why when it refuses. If you lose the link with the map open, it drops back to the suit map.

The map header shows how you're connected, for example `Network: linked via Base Antenna (2.1 km), satellites linked 2/3` or `SUIT MAP: no link to your network`. The minimap shows it too.

## At the block

Press <kbd>F</kbd> on a working AETHER block to get the full map, whatever the network. An unpowered block refuses to open.

::: tip Building it into a wall
The Command Console is a full, airtight block, so it can be part of a wall between space and a pressurized room.
:::

## Getting started in survival

1. Build a Star Map Terminal at your base and power it. Standing at it, you have the full map.
2. Add a broadcasting antenna to the same grid. Inside its range, the full map works anywhere, not just at the block.
3. Put satellites up within reach of that antenna, or of each other, so they link and report.
