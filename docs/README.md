---
home: true
title: Home
heroText: AETHER
tagline: Know your system. Command it from chat. A Space Engineers 1 mod, with JARVIS, the ship's AI in your chat.
actions:
  - text: Get started
    link: /guide/getting-started.md
    type: primary
  - text: What can I say?
    link: /jarvis/cheatsheet.md
    type: secondary
features:
  - title: Live 3D star map
    details: Planets, moons, your satellites and every contact they've seen, with real terrain, the Sun's true direction and honest "verified / estimated / stale" labels.
  - title: Ground view
    details: On a planet, the terrain around you as a 3D relief map that fills in as you explore, with your base standing on it block by block.
  - title: Hangar automation
    details: A magnetic-plate arm docks, parks, swaps and launches drones through hangar doors. Every move is checked before you approve it.
footer: AETHER · JARVIS · single-player, Space Engineers 1 · Requires the Text HUD API mod
---

::: tip v0.59.4
Every job from the star map: move, turn, dock, undock, port moves, hangar arm store, grab, swap and home, each planned first, then confirmed. [See the guide →](./guide/fleet.md#from-the-map)
:::

::: tip v0.59
Dock, undock and hangar-arm buttons for your fleet right on the star map: select your station, pick the action, check the plan, confirm. [See the guide →](./guide/fleet.md#from-the-map)
:::

::: tip v0.58
A new minimap (terrain radar near planets, a 3D disc in space, zoom keys), GPS marks with icons you choose, and antennas and beacons with icons and names. [See the guide →](./guide/minimap-and-hud.md)
:::

::: tip v0.57
AETHER on small ships: a Command Module, a small console and the Holo Projector, plus the star map as a hologram in your cockpit, down to the ground around you. [See the guide →](./guide/small-ships.md)
:::

::: tip v0.56
The AETHER Viewer: your ships and bases in 3D in your browser, with their real models, floor by floor with a dollhouse cutaway. [See the guide →](./guide/viewer.md)
:::

::: tip v0.55
Airlocks from one air vent: press <kbd>F</kbd> on a door and AETHER cycles the air for you. [See the guide →](./guide/airlocks.md)
:::

::: tip v0.54
Settings and rebindable keys in the Rich HUD terminal (<kbd>F2</kbd>), with the optional Rich HUD Master mod. [See the guide →](./guide/settings.md)
:::

::: tip v0.53
The Ship view and the Ship Layout LCD app: your ship or base deck by deck, with damage. [See the guide →](./guide/ship-view.md)
:::

::: tip v0.51
Survival: the Satellite Core and Sensor Array blocks, and Planet View maps you earn by exploring. [See the survival guide →](./guide/survival.md)
:::

## Everything at a glance

Hover a dot or a card to see what it does; click to read more.

<SystemOverview />

## Ask. Approve. Watch it happen.

Type to JARVIS in the normal chat. Anything that would move or change something becomes a numbered request from AETHER, and nothing happens until you answer it with `/ok N`. Pick a scenario to replay it.

<ChatDemo />

[How approvals work](./guide/approvals.md) · [Everything you can say](./jarvis/cheatsheet.md)

## The arm parks drones for you

A magnetic plate on an arm of pistons and rotors grips the drone, turns it so its connector faces a free pad, locks it on and lets go. Pad lights show what's free: green free, blinking amber reserved, red occupied.

<HangarDemo />

## JARVIS asks. AETHER checks. You decide.

JARVIS runs outside the game on your PC and reads only what AETHER exports. AETHER does every calculation and every move, and it refuses anything it can't do safely.

1. **You** type `jarvis dock the drone` in chat.
2. **JARVIS** looks up the drone and the station, then asks AETHER for a dock.
3. **AETHER** plans the route, checks it, and posts request #1 with a summary.
4. **You** read the summary and answer `/ok 1` or `/no 1`.
5. **AETHER** flies it, reports each stage, and stops the moment you take the controls.

## Built to be trusted with your ships

- **Honest numbers.** Every value is marked verified, estimated, stale or unknown. The map shows what you know, not everything that exists.
- **Your approval.** Anything that moves a ship or satellite waits for your `/ok`. Stopping never does.
- **Checked first.** Routes, arm moves and door swings are checked against your blocks before you see the request.
- **Off until you say.** Automation and outside access are opt-in, per world and per ship.
