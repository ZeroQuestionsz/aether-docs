# AETHER Viewer <VersionBadge text="v0.56" />

Your ships and bases in 3D in your web browser, block by block with their real models and paint, updating while you play. Walk through a base floor by floor, with the walls cut away like a dollhouse.

It runs only on your PC and only reads what AETHER writes. It can't change anything in the game.

## Turning it on

1. You need **Python 3** (from python.org, or the Microsoft Store).
2. In game, press <kbd>F2</kbd> → **AETHER** → **Display** → **Export my grids**. Without Rich HUD Master, set `Enabled=true` under `[Viewer]` in `aether_integration.ini` instead.
3. Open the AETHER mod folder, then `tools\viewer`, and double-click **AETHER Viewer.bat**. Your browser opens the viewer at `http://127.0.0.1:47620/`.

Your grids are listed on the left, and the one you're aboard says **you're here**. Click one to open it.

The first time you open a grid, the viewer converts its block models from the game's files. That takes a few seconds per new kind of block, and after that they're kept in `tools\viewer\cache`.

::: tip Only your own grids
The viewer gets the grids you own blocks on (up to 24), and nothing else. The page is served on `127.0.0.1` only, so no other computer can open it.
:::

## Looking around

| Do | To |
|---|---|
| Drag | turn around |
| Right-drag | move sideways |
| Wheel | zoom |
| Click a block | its details: system, floor, integrity, built, state |
| Double-click | look at that block |

**Find a block** (left) searches names, types and systems. Click a result to go to it.

### Colours

- **Paint**: the blocks as you painted them. Only the paintable parts take your colour, so catwalk grates stay metal and lamps light only the lamp.
- **Systems**: power, conveyors, weapons, doors, production and so on, each its own colour (see the legend).
- **Damage**: green to red by integrity.

**X-ray** makes walls and armour see-through, so the machines inside stand out.

## Floors

The viewer finds the floors from the structure itself. Each patch of floor with a roof over it is a floor, numbered from the bottom. A level one block up beside another floor, like an attic, is its own floor.

- <kbd>↑</kbd> / <kbd>↓</kbd> step up and down through the floors. The camera moves to that floor's height.
- The floor list shows that floor and everything below it. Tick **only** to see just that one floor.

## Walls

| Button | Key | What you see |
|---|---|---|
| **Walls up** | <kbd>1</kbd> | Every wall |
| **Cutaway** | <kbd>2</kbd> | The walls between you and what you're looking at are left out, like a dollhouse. Turn around and the far walls come back. |
| **Walls down** | <kbd>3</kbd> | Floors and machines only. Turrets, lamps and gear mounted up on walls and ceilings go with the walls. |

<kbd>W</kbd> cycles through the three.

## Keys

Click **Keys** to change any of them: click a key, then press the new one (<kbd>Backspace</kbd> clears it). They're saved in your browser.

| Default | Does |
|---|---|
| <kbd>↑</kbd> <kbd>PgUp</kbd> / <kbd>↓</kbd> <kbd>PgDn</kbd> | Floor up / down |
| <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd>, <kbd>W</kbd> | Walls up, cutaway, walls down; next |
| <kbd>X</kbd> | X-ray |
| <kbd>Y</kbd> | Look at where you are in game |
| <kbd>Home</kbd> | Whole grid |
| <kbd>Esc</kbd> | Deselect |

## Good to know

- Change a block in game and the viewer shows it within about 15 seconds (`IntervalSeconds` under `[Viewer]`).
- Blocks from mods show their own models when the mod's files are on your PC.
- Hollow armour shapes (the "Inv" corners) still draw as plain cubes.
- For your own tools: the files the viewer reads are described in the repository's INTEGRATION.md, under "Viewer files".
