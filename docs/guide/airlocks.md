# Airlocks <VersionBadge text="v0.55" />

An airlock needs nothing but the air vent it already has. AETHER finds the doors, keeps one side shut, and moves the air for you, so you just walk through.

## Setting one up

1. Give the airlock room its own **air vent**, facing into the airlock. A vent in the wall between the airlock and the base works, as long as its front faces the airlock.
2. In the vent's terminal, tick **AETHER airlock**.
3. Check the vent's info. It lists the doors **Into the base** and **Outside**, and how big the room is.

AETHER finds the room in front of the vent the same way the game finds rooms, then looks across each of its doors. A sealed space behind a door is the base. Open space is outside. When you build or remove blocks there, it looks again by itself; **Find doors again** does it now.

### Checklist

- The room is airtight with every door shut (the vent's **Leak Finder** says the area is sealed).
- At least one door into the base and one to the outside. More on either side is fine.
- The base's other doors are shut when AETHER looks, so the base counts as sealed.
- The doors are on the same grid as the vent (not on a piston or rotor part).
- One vent per airlock, and no door shared between two airlocks.

### When it guesses wrong

Name the doors in the **vent's** Custom Data. Named doors always win; doors you don't name keep the side AETHER found.

```ini
[AETHER Airlock]
Inner=Base Door
Outer=Outside Hatch Door 1, Outside Hatch Door 2
```

## Using it

Press <kbd>F</kbd> on any airlock door, as you always would.

- **The air already matches** (and the other side is shut): the door opens.
- **It doesn't:** the door stays shut, so no air escapes. The other side closes, the vent pumps the air out (going out) or in (coming in), then your door opens. The HUD shows how far along it is.

After you leave, the airlock stays empty, so coming back in from outside opens at once.

### Options on the vent

| Option | What it does |
|---|---|
| **Cycle when you step in** | You're in the airlock and the door behind you has shut: it cycles for the other side by itself, and opens that door if there's only one. |
| **Close doors behind you** | A door you've walked away from closes after a few seconds. Never hangar doors, since ships use those. |

## Never locked in or out

- **Press the door again** while it waits: it opens now. It does this even when a door on the other side won't close, and warns you that air will escape.
- **It gives up waiting** after 20 seconds and opens anyway, with the reason: oxygen tanks full, no oxygen to fill with, or the vent without power.
- **A door on the other side won't close** (something in the way): it tells you, and pressing your door again opens it anyway.
- AETHER never switches a door off.
