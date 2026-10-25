# What's new

The latest versions, newest first.

## v0.63

- **Trade page**: TRADE opens a full page over the map, with BUY (factions, what they sell, your order and its quote) and ORDERS. [Guide →](../guide/comms.md#trade)
- **Pirates and insurance**: a courier can be stopped on the way. Save it in time or pay the ransom, or it's stolen; insurance pays most of it back. [Guide →](../guide/comms.md#pirates-and-insurance)

## v0.62

- **Buying by courier**: open a faction in COMMS and click **TRADE** to buy what its stations sell. A courier brings it to your delivery drop after a travel time. Friends and specialists sell cheaper, and trading builds reputation. [Guide →](../guide/comms.md#trade)

## v0.61.2

- Less wear on the big dark parts of the Air Siren and Comms Array, and no beacon flare over the dish.

## v0.61.1

- The Air Siren and Comms Array look like worn metal instead of plastic: scratched paint, bare metal axles, struts and rotor vanes.

## v0.61

- **Faction comms**: a new block, the **AETHER Comms Array**, reaches NPC factions with a station or ship within its broadcast radius (up to 200 km). Talk to them from the star map's **COMMS** panel: pay tribute for reputation, or ask a friendly faction for credits. [Guide →](../guide/comms.md)
- **Real models**: the Air Siren is now a two-tone rotor siren whose rotor spins up and whose light flashes while it sounds; the Comms Array is a dish on a turntable. [Guide →](../guide/sirens.md)

## v0.60

- **Air sirens**: a new block, large and small, that sounds by itself when a hostile heads for your base (or you), a hostile turret locks on, or a hostile comes close. Wail, attack or steady, three pitches, always looping. [Guide →](../guide/sirens.md)

## v0.59.4

- **Every job from the map**: fleet buttons to move a ship (**MOVE...**), turn it (**TURN...**), move the port it's docked on (**PORT...**) and swap it with a parked ship (**SWAP...**), plus **SEND HOME** and **SET HOME HERE** for a station's hangar arm. [Guide →](../guide/fleet.md#from-the-map)

## v0.59.3

- **Your fleet in the map list**: your registered ships are listed under the satellites with where each one is. Click one to select it even when no sensor sees it, and use its fleet buttons. [Guide →](../guide/fleet.md#from-the-map)

## v0.59.2

- A dock or hangar-arm job that fails or is cancelled part-way closes the doors it opened again (unless something is in the doorway). [Guide →](../guide/docking.md#doors)
- An arm with no saved home saves it only once you approve the job, not when it's planned.
- A swap checks the second ship again when you approve (allowed, crew).
- A ship climbing out of gravity before it stops gives up if it isn't gaining height, and brakes where it is.

## v0.59.1

- **Timing readouts**: the map's debug display (<kbd>`</kbd>) shows how much time AETHER takes on the game thread, which parts take the most, and spikes such as planning a dock.
- Drawing is more robust: an error in one HUD part no longer hides the others.

## v0.59

- **Fleet buttons on the map**: select your station (or a ship) and your registered ships there get **DOCK...**, **UNDOCK**, **STORE**, **GRAB** and **RELEASE** buttons. You see AETHER's plan first, then **CONFIRM**. No JARVIS needed. [Guide →](../guide/fleet.md#from-the-map)
- **Piston hangar doors are plain moving panels**: no more merge-block sealing or air handling, so nothing gets stuck sealed. For an airtight bay, use the game's own hangar door blocks.
- A door that can't open now stops the job at once with the reason, and the status shows what the door is doing.

## v0.58.1

- Hangar arm requests get the same checks as flights: the ship must allow JARVIS requests, the crew warning shows in the request and is checked again when you approve.
- A drive request asks again if the crew situation changed before you approved, instead of refusing.
- Turning or docking a ship that's held (docked or landing gear locked) is refused with the reason; arm jobs and port moves are refused while you're flying the ship.

## v0.58

- **New minimap**: near a planet, a round radar with your heading up and the terrain you know (planet colours, hill shading, contour lines), a compass ring and a labelled range ring; in space, a 3D disc with planets, satellites and contacts standing above or below it. Contacts show as ship and station icons. [Guide →](../guide/minimap-and-hud.md)
- **Minimap keys**: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd> for the previous mode, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>+</kbd> / <kbd>-</kbd> to zoom.
- **GPS icons**: your GPS marks drawn with icons (about 110), grouped when they overlap, on the screen edge when off-screen. Look at a mark and press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> to choose its icon and colour.
- **Antenna and beacon signals** with icons, names and distances, coloured by owner. Hide the game's own markers with <kbd>H</kbd>.
- Fixed: lag building up over a long session when a world is reloaded many times.
- More robust: an error in one operation now stops only that one and hands the controls back, and repeated errors no longer flood the log.

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

- **Airtight hangar doors**: merge blocks seal the door; AETHER depressurizes, unseals, opens, then reseals and pressurizes again. *(Removed in v0.59.)*
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
