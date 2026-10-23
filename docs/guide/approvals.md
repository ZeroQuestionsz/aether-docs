# Approvals and safety

AETHER never moves a ship or satellite on JARVIS's word alone. Every request waits for you, and every flight can be stopped instantly.

## How a request looks

When JARVIS asks for something, AETHER checks it and posts one chat line with a number, a plain summary and the commands to answer:

```text
AETHER: JARVIS #3: dock Cargo Drone 1 to Hangar / Parking Connector 4 (0.16 km away,
planned route 135 m; opens Hangar Door Piston 2)   /ok 3  or  /no 3  (60 s)
```

| Type | What it does |
|---|---|
| `/ok 3` | Approves request 3. AETHER checks again right then; if things changed, it says so instead of starting. |
| `/no 3` | Declines it. Nothing happens. |
| `/aether approve 3` | The long form of `/ok 3`. |
| Nothing | The request expires after 60 seconds. |

You can also approve, deny and cancel from the OPERATIONS console on the star map.

## Stopping anything

- **Take the controls** of the ship being moved: the operation ends at once and its dampeners come back on.
- **Cancel** from the OPERATIONS console, or ask JARVIS to cancel it.
- A hangar arm that stops moving for 3 seconds ends its job instead of pushing on.

## Crew safety

If you're standing aboard or close to a ship (within 30 m), the request carries a **CREW WARNING** and AETHER checks again when you approve. Sitting in any seat counts as safe. If you get up from a seat during a move, the move pauses. A ship can be set to refuse moves with crew at risk entirely.

::: tip Good to know
Refused and failed requests are written to the game log as well as the chat, so `tools/check_log.py` can show you why something didn't start.
:::
