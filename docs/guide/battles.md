# Battles <VersionBadge text="v0.70" />

Fights near you look and sound like they're really happening. This only adds to your screen and speakers. It never changes who wins, and it works for any fight, whoever's in it.

## Effects

You'll see tracers, flashes, shockwaves, embers and burning ships, and blasts shake your view.

Turn them off under **Display → Battles** in the [settings](./settings.md), or with `/aether fx on` and `/aether fx off`. The shake has its own checkbox. Guns and blasts still sound with the effects off.

## Sound

Sound takes time to reach you, as it does in air:

| Distance | You hear it after |
|---|---|
| 34 m | 0.1 s |
| 343 m | 1 s |
| 2 km | 5.8 s |

- **It comes from where it happened.** A sound starts from a fixed place and moment, so flying towards a blast means you meet its sound sooner.
- **No air, no sound.** You won't hear anything if there's no air at the source, around you, or halfway along a long path. The game's own suit sounds, like your jetpack, still play.
- **Distance makes it quieter.** Past a set distance for each kind of sound, the level falls by half each time the distance doubles.
- **Pausing holds it.** Sounds on their way wait for you, and those playing go quiet.

Guns, blasts and hits on the ground use the game's own recordings. Blasts have a low layer added, a tight thump for small ones and a long rumble for big ones.

::: tip What's assumed
Air is treated as Earth-like everywhere, with sound at 343 m/s. How loud each kind of sound is up close is set by ear, not measured.
:::

## Testing

These need the debug display on (<kbd>~</kbd> with the map open). Stay on foot.

| Command | What it does |
|---|---|
| `/aether fx check` | Shots at set distances, for delay and level, then a pause test |
| `/aether fx check vac` | Two silent shots high above the planet, then one you hear back in air |
| `/aether fx check bass` | Each blast size: the game's recording, the low layer alone, then both |
| `/aether fx check mix` | Six big blasts in a second, to test for clipping |
| `/aether fx stats` | How many sounds played, and why any weren't heard |
| `/aether fx diag all` | Logs every sound (`off` and `drops` log less) |
