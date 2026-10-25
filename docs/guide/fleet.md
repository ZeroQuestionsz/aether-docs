# Fleet ships

Register a ship and you can dock, undock and hand it to a hangar arm from the star map, and JARVIS can ask to move, turn and dock it. You approve every request.

## Registering a ship

1. Open the terminal of a cockpit or remote control on the ship.
2. Tick **AETHER fleet asset** and choose a role (cargo, drone, rover and so on).
3. Tick **Allow JARVIS requests** if JARVIS may ask to fly it.

The ship gets a stable id and a measured hardware report: thrust, hover ability, fuel, power, cargo, connectors, seats, weapons, wheels and damage.

## Moves and turns

- **Fly to a point** in space: <span class="say">fly the cargo drone to the moon base GPS</span>. Not while docked or landed, and not to a destination in gravity yet.
- **Relative moves**: <span class="say">shift the drone back a little</span>, <span class="say">move it up 50 m</span>. "A little" is 10 m.
- **Turns**: <span class="say">rotate the drone 90 degrees clockwise slowly</span>, <span class="say">turn it to face me</span>.
- **Matching**: <span class="say">level the drone with the Garage</span>, <span class="say">match its roll to the satellite</span>.

Ships stop next to a ship they're sent to, and slow down and stop short of anything in the way. Vehicles with wheels can drive on the ground instead: see [Driving a rover](./ground-view.md#driving-a-rover) (experimental).

## From the map <VersionBadge text="v0.59" />

Open the star map (<kbd>Ctrl</kbd>+<kbd>M</kbd>) and click your station, a fleet ship on the map, or one of the **SHIP** rows in the list on the left <VersionBadge text="v0.59.3" />. The list has all your registered ships, even ones no sensor sees. Under the info panel, **YOUR FLEET** lists your registered ships there, with where each one is and only the buttons that fit right now:

| Button | When | What it does |
|---|---|---|
| **DOCK...** | The ship is free | Lists your grids within 5 km with a free connector or a hangar arm. Click one to dock there. |
| **UNDOCK** | Docked or held by an arm | Undocks it (in a hangar with an arm, the arm launches it). |
| **STORE** | On an arm | The arm parks it on a free pad. |
| **GRAB** | On a parking pad | The arm fetches it. |
| **RELEASE** | Held by a plate arm | The plate lets go. |
| **MOVE...** | The ship is free | Forward, back, up, down, left or right (as its cockpit faces), or **NEXT TO ME**. <VersionBadge text="v0.59.4" /> |
| **TURN...** | The ship is free | Left, right, nose up or down, roll, **AROUND**, or **FACE ME**. It turns in place. |
| **PORT...** | On a movable port | Moves the port with the ship on it: a direction (the station's), to the ground, top or centre, or a quarter turn. |
| **SWAP...** | On an arm, another ship parked there | Stores this one and fetches the one you pick. |
| **CANCEL** | Running a job | Stops it. |

The gold button at the start of a MOVE, TURN or PORT row sets how far one press goes: click it to step through 25 m to 2 km, 15 to 90 degrees, or 0.5 to 5 m.

A station with a hangar arm also gets a **Hangar arm** row: **SEND HOME** moves the empty arm home, **SET HOME HERE** makes where it is now its home.

Clicking a button doesn't move anything yet. AETHER plans the whole job, with the same checks as a JARVIS request, and shows you what will happen, including a crew warning if you're aboard. Click **CONFIRM** to start it, or **BACK**. If it can't be done, it says why.

These are your own commands, so the ship doesn't need **Allow JARVIS requests**, and they work with JARVIS off.

::: tip
A ship shows up once AETHER knows it as a contact. Ships near you are picked up by your own sensors.
:::
