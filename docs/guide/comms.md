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
2. **For sale**: what its stations in reach sell, from the game's own station stores: real stock and prices at **your** price. The same item at different stations sits together, cheapest first. Click an item.
3. **Item and cart**: set how many with **-** / **+**, the step button (1, 10, 100, 1,000 or 10,000 a click) or **MAX** (as many as you can afford and one courier carries), then **[ ADD TO CART ]**.

The **cart** <VersionBadge text="v0.64" /> is always in the bottom right. Each faction has its own, and you see the one for the faction you've picked. It holds up to 8 items, all brought by one courier in one crate for one fee (counted from the farthest of the stations). Below it: insurance on or off, **[ DROP ]** (where the crate goes: beside your delivery drop, near you, or one of your GPS markers), the live quote (goods, courier fee, the crate, pirate risk, insurance, total, when and where it arrives) and **[ ORDER CART ]**, which pays.

The **ORDERS** tab lists your orders and where each one is. DELIVERIES at the top of COMMS shows the latest few.

| | |
|---|---|
| **Your price** | 10% off as a friend (over 500), 15% off over 1000. Another 10% off what the faction specialises in: miners' ores and ingots, builders' components, the military's weapons and ammo. |
| **Courier** | 1,000 credits + 20 a km + 1 a kg. Traders run their own couriers: half price. |
| **Travel time** | 2 minutes plus 6 seconds a km (about 12 minutes from 100 km). |
| **Trust** | Every 10,000 credits of goods earns +1 reputation (up to +15 an order). Unlike tribute, trade can take you past 500, up to 1500. |

Hostile factions won't trade with you.

### Delivery <VersionBadge text="v0.64" />

The courier waits at the drop until you're within 8 km of it. Then it comes down from 1.5 km with a crate on its magnetic plate, lowers the crate onto an open, flat spot and flies off. The spot can be the ground or a roof; in space it's clear space beside your ship or base, away from asteroids. A gold **AETHER cargo** GPS marker shows the crate until you've been to it or emptied it.

| | |
|---|---|
| **Courier** | The game's Consignment Drone (one small-grid container, on its nose) or Builder Hauler (bigger crates, under its belly), in the seller's colours. It can't be damaged. |
| **Crate** | Cargo containers end to end, sized to the order: one Medium container, one Modular (Contact DLC) or Large container, then 1-4 large-grid Small Cargo Containers, then 1-4 Bulk (Economy DLC) or Large ones. It's yours: the quote charges for the containers. It lands static, never touching blocks of its own grid size (it would merge into them). |
| **Drop** | **Beside your delivery drop**: tick **AETHER delivery drop** in a cargo container's terminal (with none marked: your nearest container within 5 km). **Near you**, or **one of your GPS markers**. |

If it can't come down, ORDERS says why (no flat spot, no clear space) and it keeps trying.

### Pirates and insurance <VersionBadge text="v0.63" />

Pirates may stop a courier late in its trip. The quote shows the chance before you buy:

| | |
|---|---|
| **Risk** | 2% plus 0.15% a km, +5% for every hostile AETHER sees near the route (up to +15%). Higher for cargo worth over 500,000, lower under 20,000, halved for military couriers. At most 45%. |
| **Saving it** | You get an alert, a red **Courier under attack** GPS marker where the courier is on its route, and a timer (2.5 minutes plus the time to fly there). Within 12 km of it the held courier and 1-3 pirate drones (the game's Bandit, Scimitar and Shakedown Drone; more for richer cargo) appear and fight on their own AI, and you get 10 more minutes <VersionBadge text="v0.64" />. Destroy their guns, or **[ PAY RANSOM ]** on ORDERS (35% of the goods). The courier goes on, a minute late. Fly off past 30 km and they leave. |
| **Stolen** | If the timer runs out, the cargo is gone. |
| **Insurance** | On by default. Costs 2% of the goods plus 0.8 × the risk (10% risk: 10% of the goods); pays back 90% of the goods if it's stolen. |

::: tip Testing
With AETHER's debug display on (\` on the map), `/aether courier arrive` brings your latest order now, and `/aether courier pirates` (or `fight`) has pirates stop it where it is.
:::

## Jobs <VersionBadge text="v0.65" />

**[ JOBS ]** on a faction in COMMS (or the JOBS tab on the trade page) lists the game's own contracts at that faction's stations in reach: the same ones their contracts blocks offer, with the game's pay, deposits, reputation and time limits. Pick one to see what to do, where it ends, what failing costs and, for a run between stations, the average speed its time limit needs.

| | |
|---|---|
| **Out in the world** | Search, salvage, repair, bounties, supply runs: **[ ACCEPT ]** takes the job now. The game takes the deposit, starts the clock and adds its GPS markers. |
| **Starting at a station** | Package deliveries, ship hauls, escorts: **[ BOOK ]** puts a blue **AETHER job** GPS marker on the station. The game accepts the job when you're within 3 km of it, so the deposit, the package and the clock start there, as at its contracts block. Up to 3 booked; **[ CANCEL ]** one under YOUR JOBS. |
| **Reputation** | Each kind of job needs the reputation a contracts block asks for (high-risk deliveries and big ship hauls +500, others less). |
| **Handing in** | As in the game: at the end station's contracts block, at the wreck, or by destroying the target. A running job is abandoned at any contracts block. |

**YOUR JOBS**, bottom right, shows booked and running jobs with the time left, and whether they were done or failed. You get an alert when a job starts, is done or fails.

### AETHER's own jobs <VersionBadge text="v0.66" />

Factions also post AETHER's own jobs on their stations' boards, shown in teal among the game's contracts. Each station keeps up to 2 up (a new one maybe every 10 minutes, each up for about 2 hours); you can do 3 at a time.

| Job | What to do | Pays | Needs |
|---|---|---|---|
| **Clear raiders** | 1-3 pirate drones 6-20 km from the station. Accept and a red GPS marker shows where; they appear when you're within 12 km of it. Destroy their guns. Fly off past 30 km and they wait for you. The wrecks are yours. | 1 drone about 120,000 and +20 reputation, 2 about 280,000 and +40, 3 about 550,000 and +75 | -500 / 0 / +250 reputation; 60 / 75 / 90 minutes |
| **Set up a relay** | Have a working beacon or antenna of yours within 1 km of a cyan GPS marker 15-50 km from the station (on the ground on a planet), and be there. It stays yours. | 40,000 + 1,000 a km, +15 reputation | 2 hours |

The faction pays from its own funds (it only posts what it can pay); reputation from jobs stops at 1500, as with trade. Often part of the pay is **goods** of the faction's own kind (miners ore and ingots, builders components, military ammo), worth a quarter more than the credits they replace: a free courier brings them like an order, with no pirates (ORDERS: "job pay"). Failing (the time runs out, or **[ ABANDON ]** under YOUR JOBS) costs reputation.

::: tip Testing
With the debug display on, `/aether job raiders` or `/aether job relay` posts one at the nearest station in reach, and `/aether job here` moves your newest AETHER job's marker 2 km from you.
:::

## What's next

Calling for help: military aid.
