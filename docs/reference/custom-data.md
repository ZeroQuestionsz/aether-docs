# Names & Custom Data

How AETHER recognises the parts of your builds. Names are matched without regard to case.

| Block | Name contains, or Custom Data | Means |
|---|---|---|
| Connector | `parking` or `[AETHER Parking]` | A parking pad for the hangar arm. |
| Connector | `[AETHER Parking]` + `Drone=<ship name>` | The pad is reserved for that ship. |
| Light | `parking` or `[AETHER Parking Light]` | Shows a pad's state (same number in the name). |
| Magnetic plate / landing gear | `arm` (preferred) | The tip of a hangar arm. |
| Arm tip | `[AETHER Arm]` + `Home=` | The arm's home; written for you by <span class="say">this is the arm's home</span>. |
| Piston | `door`, `hangar`, `gate`, `hatch` or `[AETHER Door]` | Moves a custom door panel. |
| Piston door | `Open=extend` / `Open=retract` | Which end of its travel is open. |
| Air vent | `hangar`, or within 40 m of the door | Depressurized before the door opens, pressurized after it closes. |
| Any upright block | `[AETHER Up]` | Decides which way is up for the whole station. |
| Antenna | Terminal: **Satellite mode** | The grid becomes a satellite. |
| Cockpit / remote | Terminal: **AETHER fleet asset**, **Allow JARVIS requests** | Registers the ship; lets JARVIS ask to move it. |
| Cockpit / remote | Terminal: **Rover landing assist** | Gyros land a registered rover square after a jump. |
