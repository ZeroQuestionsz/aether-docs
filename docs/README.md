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
    details: A magnetic-plate arm docks, parks, swaps and launches drones through airtight hangar doors. Every move is checked before you approve it.
footer: AETHER · JARVIS · single-player, Space Engineers 1 · Requires the Text HUD API mod
---

::: tip v0.49
Ground view now draws your bases as 3D models, block by block, on the terrain around you. [See the Ground view guide →](./guide/ground-view.md)
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
