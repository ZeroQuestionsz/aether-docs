# Hangar arms

An arm of pistons and rotors that grips your drones, parks them on wall pads, fetches them back, and launches them through the hangar door. You can start every job from the star map's [fleet buttons](./fleet.md#from-the-map) too.

<HangarDemo />

## Building an arm

- A chain of **pistons and rotors** (normal or advanced; no hinges yet), up to 8 joints, ending in a **magnetic plate** or landing gear. AETHER finds the chain from the plate down.
- Prefer rotors whose axes are vertical and an arm that's square with the hangar walls: AETHER turns rotors in quarter turns from the arm's home.
- Put `arm` in the plate's name (for example `Arm Plate`) if a station has more than one.
- Square the arm up where it should rest, then say <span class="say">this is the arm's home</span>.

::: tip The plate's grip
A magnetic plate grips with its underside. AETHER switches the plate's AutoLock off so it only locks when and onto what AETHER means.
:::

## Parking pads and lights

Any connector on the station with `parking` in its name is a pad, for example `Parking Connector 7`. To reserve a pad for one drone, put this in the connector's Custom Data:

```ini
[AETHER Parking]
Drone=Cargo Drone 1
```

Add a light named with `Parking` and the same number (`Parking Light 7`) and it shows the pad's state: **green** free, **blinking amber** a drone on its way, **red** occupied. A light without a number pairs with the nearest pad within 5 m.

## What the arm can do

| Say | What happens |
|---|---|
| <span class="say">grab the cargo drone</span> | The plate grips the side opposite the drone's parking connector, eases in until the magnet catches, takes the drone off its pad and brings it home. |
| <span class="say">store the cargo drone</span> | Turns the drone so its connector faces a free pad (its reserved one first), locks it on, and only then lets go and goes home. |
| <span class="say">swap the cargo drone with the scout</span> | Stores one, then grabs the other, as one checked job. |
| <span class="say">bring it to the middle</span> | Grab, but to a named place: middle, front, back, left, right, top, ground. |
| <span class="say">let go of the cargo drone</span> | Unlocks the plate where it is, backs off and goes home. |
| <span class="say">send the arm home</span> | Moves the empty arm to its home (the nearest arm if you don't name a station). |

## Resting drones

While the arm holds a drone or it sits on a pad, AETHER switches its thrusters and gyroscopes off (only those that were on) to save fuel and power. They come back on before it undocks, or within a second if someone unlocks it by hand.

## Docking with the arm

<span class="say">dock the cargo drone to the Hangar</span> at a station with a plate arm hands the drone to the arm: the arm reaches out towards the hangar door and opens it, the drone flies in nose-first and waits in front of the plate, the plate grips it and the arm brings it home. The door closes once the doorway is clear.

## Hangar doors <VersionBadge text="v0.59" />

A piston hangar door is a plain moving panel: AETHER opens it before the drone goes through and closes it behind. It isn't airtight, because the game only seals a room with blocks of one grid. For an airtight bay, use the game's own **Hangar Door** blocks, which AETHER opens and closes too.

AETHER remembers where each door panel sits when shut, so routes and arm moves see the door where it really closes. If a door can't open (for example its panel has become part of the station), the job stops at once and tells you why.

## Launching

<span class="say">undock the cargo drone</span> in a hangar with an arm launches it: the arm grips it, holds it square in front of the hangar door, opens the door if it's shut, eases it out, lets go, and the drone flies straight out. The door closes behind it and the arm goes home. If the arm can't, the request is refused with the reason; say <span class="say">undock it without the arm</span> to let it fly out on its own.

::: warning Every move is checked
Before you see a request, AETHER checks each arm move against your hangar: every moving part of the arm, the drone it carries, other drones near it block by block, and parked drones where they will be. If something's in the way, the request names it.
:::
