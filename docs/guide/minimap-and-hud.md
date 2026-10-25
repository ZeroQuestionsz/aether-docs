# Minimap and HUD icons <VersionBadge text="v0.58" />

AETHER adds three things to your view while you play: the **minimap** in the top right, **GPS marks with icons**, and **antenna and beacon signals** with icons and names.

## The minimap

It changes its look with where you are.

- **Near a planet (Ground and Planet modes):** a round radar with your heading up. It shows the terrain you know in the planet's colours, with hill shading and contour lines; ground nothing of yours has seen stays dark. The compass ring turns with you (north in gold), and the dashed ring is labelled with its distance. Things higher or lower than you get a small ▲ / ▼ with the metres.
  - **Ground** is the close-up (0.5 to 5 km, to scale).
  - **Planet** reaches further (10 to 100 km). Its scale is squeezed towards the edge, so things near you get more room.
- **In space (Solar mode):** a 3D disc seen from above and behind, the plane of your ship. Planets, satellites and contacts stand on stalks above or below it, so above and below read at a glance. The Sun is a dot on the rim.
- **Auto** (the default) picks Ground on or low over a planet's surface, Planet higher up, and Solar in space.

What it shows:

- **GPS marks** with their icons (see below).
- **Contacts** as a small ship, a large ship or a station, coloured by relation, dimmed when they're no longer seen. Moving ones show where they'll be in 60 s.
- **Antennas and beacons** you can hear, one icon per grid.
- Your satellites and watch zones.

### Keys

| Key | What it does |
|---|---|
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> | Next mode: Auto → Ground → Planet → Solar → Off |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>N</kbd> | Previous mode |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>+</kbd> / <kbd>-</kbd> | Zoom in / out (numpad too) |

Zoom works on the look you're seeing: Ground and Planet step through their ranges, Solar from the whole system down to 1% of it. Your zoom is saved on this PC. All three keys can be rebound ([Settings](./settings.md), group **HUD**).

## GPS icons

AETHER draws your GPS marks with icons instead of the game's pins: about 110 icons in seven groups (markers, places, ships, danger, supplies, ores, numbers). Ore marks get their ore's icon by name automatically.

- Marks on top of each other become one icon with **+N**.
- Names show where they fit; the mark nearest your crosshair always shows its name.
- Marks off the screen sit on its edge with an arrow pointing the way.

**Change a mark's icon:** look at it and press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd>. Pick an icon and a colour, or **Auto icon**. The same window has the GPS icon settings: on/off, size, names (always / near the crosshair / off), hide beyond a distance, and off-screen marks on the edge. <kbd>Esc</kbd> or right-click closes it.

The icon is kept in the mark's description as `[icon:id]`, so it stays after a reload.

::: tip Your "Show on HUD" choices
To stop the game drawing its pins, AETHER unticks **Show on HUD** on the marks it draws. While the GPS screen or any game screen is open, and whenever the world is saved, they're ticked again, so you always see and save your own choices. Untick a mark there and AETHER leaves it hidden.
:::

## Antenna and beacon signals

Every antenna and beacon you can hear (working, broadcasting, and you're inside its range) gets AETHER's icon with its name and distance beside it, coloured by owner: yours, friendly, neutral or hostile.

A mod can't hide or change the game's own signal markers. To avoid seeing both, press <kbd>H</kbd> (the game's signal key; it cycles full / minimal / hidden) until the game's are hidden.

::: warning H hides all of the game's signal markers
That includes markers for blocks with **Show on HUD** ticked, which AETHER doesn't redraw.
:::

**Setting:** <kbd>F2</kbd> → AETHER → Display → GPS icons → **Antenna / beacon signals**:

- **Full** (default): AETHER's whole marker, for use with the game's hidden.
- **In the game's brackets**: just the icon, inside the game's marker (which keeps the name).
- **Off.**

The ship you're sitting in doesn't show its own signals.
