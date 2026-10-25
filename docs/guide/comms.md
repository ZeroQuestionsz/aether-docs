# Faction comms <VersionBadge text="v0.61" />

Talk to the NPC factions around you from the star map. You need a physical link first: an **AETHER Comms Array**.

## The Comms Array

Build it from the AETHER tab of the <kbd>G</kbd> menu (large or small grid, 3x3x3). It's a worn-metal dish on a turntable that stands on its bottom face, the dish towards the block's front. Paint colours it like any block.

- Its **broadcast radius** is its reach: up to **200 km** on large grid, **50 km** on small.
- Power grows with the reach: up to 5 MW at 200 km (1.2 MW for the small one at 50 km).
- Like any beacon, it broadcasts: anyone in range can see where it is.

A faction is in reach when one of its stations (the game's trading stations, wherever they are) or one of its ships AETHER sees is inside a working array's radius. The array's info shows its reach, its power draw and how many factions it reaches.

## The COMMS panel

Open the star map and click **[ COMMS ]** next to **SETTINGS**. It lists the factions in reach, nearest first, with their type, your reputation (friendly over 500, hostile under -500) and their nearest station or ship. Click a faction's tag to open it.

| Action | What it does |
|---|---|
| **TRIBUTE** | Pay credits for +25 reputation. It can raise you to the top of neutral (500) but no further: trust has to be earned. 500 credits a point, twice that while they're hostile, and half as much again for each tribute to them in the last 4 hours. |
| **ASK** | A friendly faction gives you 10k, 50k or 200k credits from its own funds, for 15, 60 or 200 reputation. Once every 2 hours per faction. |

Every action shows its terms first. **CONFIRM** checks them again and does it; **BACK** cancels. Pirates don't answer.

::: tip
Select an NPC ship or station on the map and click **[ HAIL ]** under its info to open its faction in COMMS.
:::

## Trade <VersionBadge text="v0.62" />

Open a faction and click **[ TRADE ]**. You see what its stations in reach sell, from the game's own station stores: real stock and prices, most expensive first, at **your** price.

1. **[ BUY ]** an item, then set how many: **-** / **+**, the step button (1, 10, 100, 1,000 or 10,000 a click) or **MAX** (as many as you can afford).
2. **[ COURIER ]** shows the terms: the goods, the courier fee, how long it takes and where it's delivered.
3. **[ CONFIRM ]** pays. The order shows under **DELIVERIES** at the top of COMMS until it arrives.

| | |
|---|---|
| **Your price** | 10% off as a friend (over 500), 15% off over 1000. Another 10% off what the faction specialises in: miners' ores and ingots, builders' components, the military's weapons and ammo. |
| **Courier** | 1,000 credits + 20 a km + 1 a kg. Traders run their own couriers: half price. |
| **Travel time** | 2 minutes plus 6 seconds a km (about 12 minutes from 100 km). |
| **Trust** | Every 10,000 credits of goods earns +1 reputation (up to +15 an order). Unlike tribute, trade can take you past 500, up to 1500. |

Hostile factions won't trade with you.

### Delivery drop

Tick **AETHER delivery drop** in a cargo container's terminal: couriers unload there (the drop nearest to you when you order). With none marked, they use your nearest cargo container within 5 km, on a station first. If it doesn't all fit, the rest waits and arrives once there's room.

## What's next

Pirates intercepting couriers (with a chance to save your order), insurance, a full trade page, jobs through the game's contracts, and calling for help.
