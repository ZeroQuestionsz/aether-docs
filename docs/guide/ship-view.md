# Ship view and Ship Layout screens <VersionBadge text="v0.53" />

See the ship or base you're on deck by deck: where things are, what's damaged, and what's been shot away. Two ways in: a **Ship** tab on the star map, and the **AETHER: Ship Layout** app for any LCD.

## Ship view

Press <kbd>S</kbd> on the map, or click **[ SHIP ]** in the tab strip at the bottom right (SHIP / GROUND / PLANET / SYSTEM). It works only while you're aboard: seated, or standing in or on the grid. Step off and the map goes back to the view you came from. It needs no network, so it works in the suit map too.

The grid is drawn block by block in your paint and real shapes, with rotors and pistons where they are now.

**Decks.** AETHER finds the floors itself: a floor is a block with room for a person above it and a ceiling within 8 m (that's how it tells an inside floor from the roof). The chosen deck is solid, the decks below are faint, and the ones above are cut away, so you look down into the rooms. The deck list on the left (in place of the satellite list) shows each deck with its damage; click one to go there.

| Key | Does |
|---|---|
| <kbd>Up</kbd> / <kbd>Down</kbd> (or <kbd>PgUp</kbd> / <kbd>PgDn</kbd>) | Deck up / down |
| <kbd>Home</kbd> | Your deck |
| <kbd>A</kbd> | All decks |
| <kbd>X</kbd> | X-ray (see-through) |
| <kbd>V</kbd> | Colours: paint, damage, systems |
| Click a block | Its details: integrity, state, and the components it still needs |
| Middle-click | Ahead is up again |

**Colours.**
- **Paint:** your colours. Damaged blocks glow red.
- **Damage:** intact blocks dim green, damaged amber to red, broken bright red.
- **Systems:** what each block is for (power, thrust, life support, weapons, cargo, doors...).

**Lost blocks.** Blocks destroyed on your grids (not ground down) show as red ghost boxes where they were. A marker goes away when something is built in its place, or with **[ CLEAR LOST ]**. They're saved with the world.

## AETHER: Ship Layout (LCD app)

Edit an LCD on the grid → Content: Script → **AETHER: Ship Layout**. Like every AETHER app, it needs an AETHER block on the grid.

It draws a floor plan: walls, floors, machines by system, damage in red, destroyed blocks as red outlines, you (gold) and the screen itself (teal ring). The layout fits the screen:

- **Small** (cockpit screens): the plan and one line of stats.
- **Medium**: plan, stats and a legend.
- **Large / wide**: plan, plus a side panel with the decks, stats and the most damaged blocks by name.

Settings go in the panel's **Custom Data** (filled in the first time):

| Setting | Values |
|---|---|
| `Deck=` | `auto` (this screen's deck), `cycle` (each deck in turn), `all`, or a number |
| `View=` | `plan` (from above) or `side` (the whole ship from the side, nose right) |
| `Colors=` | `systems`, `damage` or `paint` |
| `Size=` | `auto`, `small`, `medium` or `large` |
| `Wall=` | A name. LCD panels on the same grid with the same Wall name, side by side and facing the same way, show **one big picture** together. |

::: tip A wall of screens
Build a 3 × 2 block of wide LCDs, set them all to Ship Layout with `Wall=bridge`, and they become one large deck plan.
:::
