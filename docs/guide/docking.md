# Docking

AETHER plans the whole route itself: around the station, through hangar doors, lined up and locked.

## Dock and undock

<span class="say">dock the cargo drone to the Hangar</span> picks a free connector the drone can actually reach, plans a route for the drone's real shape, opens doors on the way, lines up, closes in slowly and locks only when the connector faces meet. <span class="say">undock the cargo drone</span> backs it out the same way.

The last stretch is always a straight run along the connector's axis, through the middle of any door on it. Near a door opening the ship slows to 1 m/s.

## Doors

Door blocks and hangar doors on the route open automatically. Doors AETHER opened close again as soon as the ship is through and nothing is in the doorway (the ship, other ships, an arm, people). A door that was already open stays open.

**Custom piston doors**: name the piston with `door`, `hangar`, `gate` or `hatch` in it (for example `Hangar Door Piston 1`). Two pistons in a row move together. AETHER first tries the route with the door as it is, then with it moved to the other end of its travel. Put `Open=extend` or `Open=retract` under `[AETHER Door]` in the piston's Custom Data to say which end is open. Airtight doors are on the [Hangar arms](./hangar.md#airtight-hangars) page.

## Which way is up

AETHER works out a station's up from blocks builders put upright: cockpits, seats, screens, doors, gravity generators. If it guesses wrong, put `[AETHER Up]` in the Custom Data of a block that stands upright, and that block decides.

## Watching a dock

The star map shows a docking box with the route. On any LCD, choose the **AETHER: Docking** app for a 3D view, or **AETHER: Docking Steps** for the stages in large text.

::: tip If a plan fails
AETHER writes `dock_plan_debug.txt` to its storage folder: slices of the space it planned in, showing exactly where the ship didn't fit.
:::
