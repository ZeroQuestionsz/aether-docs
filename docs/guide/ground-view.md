# Ground view <VersionBadge text="v0.49" />

For life on a planet's surface: the ground around you as a 3D relief map, what's on it, and your bases standing on it. No satellite network needed.

## Opening it

- Open the map (<kbd>Ctrl</kbd>+<kbd>M</kbd>) while you're on or just above the ground: it opens in Ground view by itself.
- From Planet View, zoom in all the way: you land on the spot under the cursor, on any planet.
- <kbd>G</kbd> turns Ground view around you on and off; <kbd>Up</kbd> / <kbd>Down</kbd> step between Ground, Planet and Solar System view.

## Moving around

| Do | What happens |
|---|---|
| Left-drag | Rotate the view. |
| Right-drag, or <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> | Pan across the ground (<kbd>Shift</kbd>: faster). The map stops following you. |
| Wheel | Zoom; close enough to look at a base. |
| <kbd>[</kbd> <kbd>]</kbd> | Range: 0.5, 1, 2, 4, 8 or 16 km. |
| Double-click the ground | Move the map to that spot. |
| <kbd>Home</kbd>, or double-click yourself | Back to the ground around you. |
| Middle-click | Turn the map so the way you face is up. |
| Right-click the ground | Drop a GPS mark there (`AETHER mark 1`, 2, …). |

## What you can see

The map only shows ground something of yours can see, so it fills in as you explore:

| Ground | Means |
|---|---|
| In colour | Seen right now: by you (1 km), your broadcasting antennas (3 km), or a satellite overhead within its range. |
| Grey | Seen before. The shape is right; what's on it may have changed. Remembered with the world. |
| Dark and flat | Never seen. The header says **NO COVERAGE** where nothing of yours has looked. |

A teal line marks the edge of what's seen right now. Contour lines show the height, with the step in the header. Hills hide what's behind them.

## Contacts without satellites

On the ground AETHER finds grids by itself: anything you can see within 1 km, anything your broadcasting antennas cover within 3 km, and any grid whose antenna or beacon broadcast reaches you (what the game's HUD shows). Aircraft keep their height on the map, labelled like `^4.0 km up`, even past the map's edge.

The ranges are in the `[Ground]` section of `AetherSettings.ini` in the world's storage folder:

```ini
[Ground]
AntennaRangeKm=3
SightRangeKm=1
RadioContacts=on
```

## Your base in 3D

Grids stand on the map as 3D models, where they are, at their real size. Up close, your own grids and anything in view right now are drawn block by block:

- your **paint** colours;
- armour **slopes, corners, half blocks and half slopes** cut to shape;
- catwalks, walls and machines at their real thickness;
- windows tinted, working lights glowing;
- railings, ladders, trusses and beams as **bars**.

Further away, or for contacts no longer in view, you see their last captured shape.

::: info Not the game's own meshes
Pipes, machines and turrets are simple boxes: the map shows what each block is and where, not its full model.
:::

## On the minimap

On the surface the minimap switches to **GROUND** mode: a simple relief disc under the radar, lighter where the ground is higher than you, dark where you've never looked.

## Driving a rover <VersionBadge text="experimental" kind="beta" />

Register a wheeled vehicle (role **Rover**), drop a GPS mark in Ground view, select it and use **DRIVE A VEHICLE**, or ask JARVIS to <span class="say">drive the rover to the mining GPS</span>. It steers round grids it sees and turns round in tight spots; marks it reaches are deleted.

::: warning
Rover driving isn't reliable yet, especially on the Moon, and is parked for a later version.
:::

**Rover landing assist** (cockpit terminal, on by default): when a registered rover leaves the ground off a crest, its gyros turn it to land square. Steering with the mouse in the air gives it back to you.
