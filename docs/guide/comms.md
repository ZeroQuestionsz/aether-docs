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

Open a faction and click **[ TRADE ]**: the trade page opens over the map <VersionBadge text="v0.63" />. **[ ORDERS ]** next to DELIVERIES in COMMS opens it on your orders. **[ CLOSE ]** brings the map back.

The **BUY** tab has three columns:

1. **Factions in reach**, with your reputation and how far. Click one.
2. **For sale**: what its stations in reach sell, from the game's own station stores: real stock and prices, most expensive first, at **your** price. Click an item.
3. **Order**: set how many with **-** / **+**, the step button (1, 10, 100, 1,000 or 10,000 a click) or **MAX** (as many as you can afford and fit in the drop), and turn insurance on or off. The quote shows the goods, courier fee, pirate risk, insurance, total, and when and where it arrives. **[ CONFIRM ORDER ]** pays.

The **ORDERS** tab lists your orders and where each one is. DELIVERIES at the top of COMMS shows the latest few.

| | |
|---|---|
| **Your price** | 10% off as a friend (over 500), 15% off over 1000. Another 10% off what the faction specialises in: miners' ores and ingots, builders' components, the military's weapons and ammo. |
| **Courier** | 1,000 credits + 20 a km + 1 a kg. Traders run their own couriers: half price. |
| **Travel time** | 2 minutes plus 6 seconds a km (about 12 minutes from 100 km). |
| **Trust** | Every 10,000 credits of goods earns +1 reputation (up to +15 an order). Unlike tribute, trade can take you past 500, up to 1500. |

Hostile factions won't trade with you.

### Delivery drop

Tick **AETHER delivery drop** in a cargo container's terminal: couriers unload there (the drop nearest to you when you order). With none marked, they use your nearest cargo container within 5 km, on a station first. If it doesn't all fit, the rest waits and arrives once there's room.

### Pirates and insurance <VersionBadge text="v0.63" />

Pirates may stop a courier late in its trip. The quote shows the chance before you buy:

| | |
|---|---|
| **Risk** | 2% plus 0.15% a km, +5% for every hostile AETHER sees near the route (up to +15%). Higher for cargo worth over 500,000, lower under 20,000, halved for military couriers. At most 45%. |
| **Saving it** | You get an alert, a red **Courier under attack** GPS marker and a timer (2.5 minutes plus the time to fly there). Get within 3 km of the marker, or **[ PAY RANSOM ]** on ORDERS (35% of the goods). The courier goes on, a minute late. |
| **Stolen** | If the timer runs out, the cargo is gone. |
| **Insurance** | On by default. Costs 2% of the goods plus 0.8 × the risk (10% risk: 10% of the goods); pays back 90% of the goods if it's stolen. |

## What's next

A courier drone you can see delivering, fighting off the pirates yourself, choosing where cargo is dropped, jobs through the game's contracts, and calling for help.
