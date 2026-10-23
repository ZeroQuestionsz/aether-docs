# Satellites

Any antenna can be a satellite. One satellite per grid.

## Detection

A satellite detects grids within its antenna range and line of sight. Line of sight is checked against the planet's real terrain, so a mountain hides a base.

## Stations

A station is where a satellite should stay. AETHER warns you when it drifts. The **station planner** suggests the best height over any point, for the widest coverage or for zero gravity, and saved stations get clear names such as `AETHER EARTHLIKE-2 (24N 113E)`.

## Pointing

With gyroscopes, a satellite aims a chosen front at its planet, another planet, the Sun, a contact (followed as it moves) or a fixed point, with its top kept towards north.

## Moves and routes

A satellite flies to a planned station or point after your approval. AETHER checks battery, fuel, thrust and delta-v against your reserve budgets first, plans the shortest gravity-free way around planets, and verifies arrival. You can cancel any time.

The **dispatch menu** picks the nearest ready satellite for a planned station or GPS, and sends it now, when ready, or later.

::: tip Station-keeping
Optional, per satellite: it flies back on its own when it drifts, within limits you set.
:::
