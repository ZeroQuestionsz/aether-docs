# Fleet ships

Register a ship and JARVIS can ask to move, turn and dock it. You approve every request.

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
