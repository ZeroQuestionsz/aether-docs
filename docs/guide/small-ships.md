# Small ships & holograms

AETHER on rovers, fighters and shuttles: small grid blocks made for small ships, and the star map as a hologram right in your cockpit.

## Small grid blocks

| Block | Size | What it does |
|---|---|---|
| AETHER Command Module | 1×1×1 | No screens: it just puts the ship on AETHER, for ships you only enter through the cockpit. <kbd>F</kbd> on its front panel opens the star map. Mounts on every side but the front. |
| AETHER Command Console | 3×2×2 | A sloped dashboard for ships you can walk around in: the star map on the main screen, satellites and contacts on the two side screens. |
| AETHER Holo Projector | 1×1×1 | Projects the star map out of its top face (yellow brackets, glowing dish). On a floor it rises up, on a wall it sticks out, on a ceiling it hangs down. |
| AETHER Star Map Terminal | 1×3×1 | The small control pedestal. <kbd>F</kbd> opens the star map. |

In the <kbd>G</kbd> menu the large and small versions share one icon with a **+**: scroll or click it, and the grid size you build on picks the right one.

## The cockpit hologram

Any cockpit on a ship with an AETHER block (a Command Module is enough) can show the star map as a flat hologram disc over the dashboard while you sit in it, in first person.

1. Open the cockpit's terminal (<kbd>K</kbd>) and tick **Show hologram** under **AETHER Hologram**.
2. Pick what it **Shows** (below), and move it with **Distance ahead**, **Below eye level** and **Left / right** if it sits in your dashboard.
3. Optional: drag the cockpit onto its own toolbar for **AETHER hologram on/off** and **AETHER hologram: next view**.

The disc always fits what it shows inside its rim. Under it, a readout tells you what you're looking at, your active satellites, live contacts and hostiles. Names only appear for your current planet, your selection and hostile contacts.

## Views

| View | Shows |
|---|---|
| Follow the star map | Whatever the map last showed from here: solar system, planet or ground. |
| Whole solar system | All planets on their orbits. |
| Nearest planet | The planet you're at, with your satellites and contacts around it. |
| Ground around you | The terrain within 1.4 km, with contacts and GPS marks on it. Only ground something of yours has seen is drawn. In a cockpit your nose points away from you; on a table or projector north does. In space it shows the planet instead. |

The Holo Table and the Holo Projector have the same views.

## Settings

On the Holo Table, the Holo Projector and every cockpit, the block's own terminal has an **AETHER Hologram** section: show, view, size, height (or position in a cockpit), brightness, names, and **Reset hologram settings**.

The same settings are stored in the block's Custom Data under `[AETHER Hologram]`, with a comment on every line, so you never have to guess what to type. Everything else in Custom Data is left alone.

## Picking screen apps

The Command Consoles and the Holo Table have **AETHER Screens** on their terminal page: one dropdown per screen to choose its AETHER app. **Off / other** hands the screen back to you.
