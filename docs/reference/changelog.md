# What's new

The latest versions, newest first.

## v0.57.1

- Fixed: the hologram's Ground view flickering to the planet view every few seconds.

## v0.57

- **Small grid blocks**: the AETHER Command Module (1×1×1, no screens), a small Command Console (3×2×2 sloped dashboard with three screens), the AETHER Holo Projector (1×1×1, projects out of its marked face in any direction) and the small Star Map Terminal. The <kbd>G</kbd> menu **+** switches between large and small. [Guide →](../guide/small-ships.md)
- **Cockpit hologram**: the star map as a flat disc over your dashboard, seated in first person, on any ship with an AETHER block. Toolbar actions for on/off and next view.
- **Hologram views** for cockpits, tables and projectors: follow the map, solar system, nearest planet, or the **ground** around you (1.4 km) with contacts and GPS marks.
- **Hologram settings** on the block's own terminal (size, height or position, brightness, names, reset), stored in Custom Data with a comment on every line. Consoles pick each screen's app from their terminal page too.
- Fixed: cockpit settings (fleet asset, hologram) switching back off when the cockpit's Custom Data held other text, such as Ship Layout options.

## v0.56

- **AETHER Viewer**: your ships and bases in 3D in your web browser, with the blocks' real models and paint, live while you play. Paint, systems and damage colours, X-ray, search, block details. Step through floors with the arrow keys, with walls up, a dollhouse cutaway or walls down; every key can be rebound. Turn it on with <kbd>F2</kbd> → AETHER → Display → **Export my grids**, then run **AETHER Viewer.bat** in `tools\viewer` (needs Python 3). [Guide →](../guide/viewer.md)

## v0.55

- **Airlocks** from one air vent: tick **AETHER airlock** on the vent and press <kbd>F</kbd> on any door as usual. AETHER closes the other side, pumps the air out or in, then opens it. It never locks you in or out. [Guide →](../guide/airlocks.md)

## v0.54

- **Settings and key binds** with the optional Rich HUD Master mod: press <kbd>F2</kbd> → AETHER to change the minimap and this world's settings, and to rebind every map key. [Guide →](../guide/settings.md)
- The map's background is darker, so bright surroundings no longer show through.

## v0.53

- **Ship view**: press <kbd>S</kbd> on the map (or the new view tabs, bottom right) while aboard a ship or base: block by block, deck by deck, coloured by paint, damage or system; destroyed blocks stay as red ghosts. [Guide →](../guide/ship-view.md)
- **AETHER: Ship Layout** LCD app: deck plans with damage, in small, medium and large layouts; several LCDs can show one picture.

## v0.52

- Ground view: zoomed in close, the camera stays above the hills (no more seeing through them).

## v0.51

- **AETHER Satellite Core**: in survival, satellites need one to report.
- **AETHER Sensor Array**: scans its broadcast radius for ships and stations; power grows with range, and it broadcasts while scanning.
- Survival: Planet View relief and ore estimates are earned by exploring; unlinked satellites show **NO LINK**.

## v0.50

- **Survival rules** (survival worlds): satellites report only while linked to a powered AETHER block through antennas (relay chains work). The full map needs a link, or open it at the block; otherwise <kbd>Ctrl</kbd>+<kbd>M</kbd> opens the 1 km suit map.
- The Command Console is airtight.

## v0.49

- Ground view: hills look solid from every angle; bases stand on top of their ground and hide behind ridges.

## v0.48

- Ground view draws bases and ships as 3D models: up close, block by block in their real paint and shapes (slopes, corners, half slopes, thin blocks, windows, lights, railings and ladders as bars).
- You can zoom much closer in Ground view.

## v0.47

- **Airtight hangar doors**: merge blocks seal the door; AETHER depressurizes, unseals, opens, then reseals and pressurizes again.
- Faster hangar jobs: doors open while the arm is already moving.
- **Ground view** and the minimap's **GROUND** mode: the terrain around you, filled in as you explore.
- **Ground sensors**: you and your antennas detect grids without satellites; grids whose broadcast reaches you are contacts.
- Contact colours follow your reputation with NPC factions; the owner is named in the info panel.
- Pick from a list when markers sit on top of each other.
- Rover driving (experimental) and the rover landing assist.

## v0.46 and earlier

- v0.46: a safety net for routes through closed piston doors.
- v0.42–v0.45: the magnetic-plate hangar arm: grab, store, swap, hand-off docking and launch.
- v0.41: doors close behind ships, resting drones, parking lights.
- v0.40: hangar arms with rotors; store, grab, swap.
- v0.39: shape-aware docking through hangars, piston doors, movable ports.
