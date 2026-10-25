# Air sirens <VersionBadge text="v0.60" />

An air-raid siren that sounds by itself when AETHER sees danger coming. Build an **AETHER Air Siren** (large or small grid, in the AETHER tab of the <kbd>G</kbd> menu), power it, and it's armed.

It's a two-tone rotor siren that stands on its base plate. While AETHER sounds it, the rotor winds up and spins behind the ports and the light on top flashes red. When it stops, the rotor winds down and the light goes back to green. <VersionBadge text="v0.61" />

## When it sounds

Every check uses AETHER's own contacts: the hostiles your satellites, antennas and sensors detect.

| Check | Sounds when | Default |
|---|---|---|
| **A hostile heads here** | A hostile ship is on course for this grid (or you) and keeps coming for the time you set. One that only points this way for a moment doesn't count. | On, 5 s |
| **Locked onto** | A turret on a hostile contact has this grid, or you, as its target. | On |
| **A hostile is within** | Any hostile this close to the siren, wherever it's heading. | Off |

**Watch out for me too** makes the first two checks count you and the ship you fly, not only the grid the siren is on. When nothing is left to warn about, it keeps sounding for a few seconds more (**Keep sounding after all clear**, 10 s), then stops.

## Sound

- **Siren sound**: **Wail** (the classic air-raid rise and fall), **Attack** (a faster rise and fall) or **Steady** (one held tone).
- **Pitch**: low, normal or high. Small grid sirens start on high.
- **Volume** and **Range** are the usual sound block sliders. Range goes up to 2 km on large grid, 800 m on small.

A siren always loops, so it has no loop slider. Its **Play** button sounds it by hand (for a test), and AETHER leaves a siren you started yourself alone.

The siren's info says whether it's quiet, watching a hostile that's heading this way, or sounding and why.

::: tip
The siren sounds are in every sound block's list too ("Air siren: wail (normal)" and so on), if you'd rather sound one from a timer or a sensor.
:::

## Custom Data

The terminal controls write these, under `[AETHER Siren]`:

```ini
[AETHER Siren]
Sound=Wail
Pitch=Normal
Inbound=true
HoldSeconds=5
LockOn=true
RangeKm=0
WatchYou=true
StopAfter=10
```
