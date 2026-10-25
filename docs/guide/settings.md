# Settings and key binds <VersionBadge text="v0.54" />

With the **Rich HUD Master** mod (workshop [1965654081](https://steamcommunity.com/sharedfiles/filedetails/?id=1965654081)) in your world, AETHER has its own entry in the Rich HUD terminal. Press <kbd>F2</kbd> (or type `/rhd open` in chat) and pick **AETHER**.

Rich HUD is optional. Without it, the keys are the defaults below and the settings stay where they were: the map's **OPERATIONS → [ SETTINGS ]** list and the world's `AetherSettings.ini`.

## Display

How the minimap and its readout look. These are saved on this PC and apply to every world.

- **Minimap:** mode (Auto, Ground, Planet, Solar system, Off), size, planet range, background, and which markers it shows.
- **Readout:** the text lines under the minimap.
- **GPS icons:** on/off, size, names, hide beyond, off-screen marks, and antenna / beacon signals ([Minimap and HUD icons](./minimap-and-hud.md)).

They're the same settings as the map's [ SETTINGS ] list; change either one and the other follows.

## World

This world's `AetherSettings.ini`, without editing the file. Only the line you change is rewritten, so your comments in the file stay.

| Section | Settings |
|---|---|
| **Alerts** | What's announced for new, reacquired and lost contacts and watch zones (everything, others' grids, hostile only, none); satellite health; threats to you; how early to warn before a watch zone |
| **Ground sensors** | Antenna range, your own sight range, radio contacts ([Ground view](./ground-view.md)) |
| **Survival rules** | Auto / on / off, and whether satellites need a Satellite Core ([Survival](./survival.md)) |
| **Intel** | When to forget contacts no one has seen for a while |

## Binds

Every key the map uses can be rebound, and each action can have a second key. Your binds are saved on this PC in `aether_binds.xml`. The map's **HELP** list shows the keys you've set.

| Group | Actions (default keys) |
|---|---|
| **Map** | Open / close the map (<kbd>Ctrl</kbd>+<kbd>M</kbd>), minimap mode (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>) |
| **Map view** | Coverage cones (<kbd>C</kbd>), Ship view (<kbd>S</kbd>), Ground view (<kbd>G</kbd>), closer / further view (<kbd>Up</kbd> / <kbd>Down</kbd>), previous / next planet (<kbd>Left</kbd> / <kbd>Right</kbd>), less / more detail (<kbd>[</kbd> / <kbd>]</kbd>), debug display (<kbd>`</kbd>), forget contact (<kbd>Delete</kbd>) |
| **Ground view and planner** | Pan / slide (<kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd>), back to you (<kbd>Home</kbd>), clear the plan (<kbd>Backspace</kbd>), plan step (<kbd>-</kbd> / <kbd>+</kbd>, numpad too) |
| **Ship view** | Deck up / down (<kbd>Up</kbd> / <kbd>Down</kbd>, <kbd>PgUp</kbd> / <kbd>PgDn</kbd>), your deck (<kbd>Home</kbd>), all decks (<kbd>A</kbd>), x-ray (<kbd>X</kbd>), colours (<kbd>V</kbd>) |
| **HUD** | GPS icon picker (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>), minimap previous mode (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd>), minimap zoom in / out (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>+</kbd> / <kbd>-</kbd>) |

The groups keep different contexts apart: <kbd>S</kbd> opens the Ship view on the map but pans back on the ground, and <kbd>Up</kbd> / <kbd>Down</kbd> change the view outside the Ship view but the deck inside it.

The debug display (<kbd>`</kbd> on the map) adds raw numbers, and since v0.59.1 a **TIMING** section: AETHER's total time on the game thread (milliseconds per second and the share of a 60 fps frame), its busiest parts with their longest single call, and one-off spikes such as planning a dock.

Not rebindable: <kbd>Esc</kbd> (close the map), <kbd>Shift</kbd> (faster panning; <kbd>Shift</kbd> + forget contact forgets every stale one).
