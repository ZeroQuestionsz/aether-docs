# Get started

Install the mod, open the map, turn an antenna into your first satellite. JARVIS is optional and comes last.

## What you need

- **Space Engineers 1**, single-player. Multiplayer isn't supported.
- The **Text HUD API** mod (Steam Workshop 758597413). AETHER draws all its on-screen text with it.
- For JARVIS only: **Python 3.10 or newer** on the same PC, and either an Anthropic API key or a local model through Ollama.

## Install AETHER

1. Put the `AETHER` folder in `%AppData%\SpaceEngineers\Mods`.
2. In your world's settings, add **Text HUD API** and **AETHER** to the mods list, then load the world.
3. Press <kbd>Ctrl</kbd>+<kbd>M</kbd>: the star map should open. If it doesn't, see [Troubleshooting](../reference/troubleshooting.md).

## Your first ten minutes

1. **Open the map:** press <kbd>Ctrl</kbd>+<kbd>M</kbd> anywhere, or build an **AETHER Star Map Terminal** and press <kbd>F</kbd> on it. On a planet's surface it opens in [Ground view](./ground-view.md).
2. **Make a satellite:** on any grid with an antenna, open the antenna's terminal and tick **Satellite mode**. It starts detecting grids within its range and line of sight.
3. **Give it a station:** select it on the map and set where it should stay. The station planner suggests the best height over any point.
4. **Register a ship** (optional): in a cockpit or remote control, tick **AETHER fleet asset** and pick a role. Tick **Allow JARVIS requests** if JARVIS may ask to fly it.
5. **Read the console:** on the map, the OPERATIONS console lists requests, alerts and the log. **HELP** there lists every key.

::: tip Minimap
The minimap in the top right follows you while you play. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> switches it between automatic, ground, planet, solar and off. On a planet's surface it shows the ground around you.
:::

## Turning on JARVIS later

JARVIS talks to AETHER through files in `%AppData%\SpaceEngineers\Storage\AETHER_AETHER`. Each channel is off until you switch it on in `aether_integration.ini` there. The [JARVIS setup](../jarvis/setup.md) page walks through it.
