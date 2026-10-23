<template>
  <div>
    <div class="filters">
      <input v-model="q" type="search" placeholder="Filter, e.g. dock, arm, hostile" aria-label="Filter the cheatsheet" />
      <button v-for="c in cats" :key="c.id" type="button" class="chip" :aria-pressed="cat === c.id" @click="cat = c.id">{{ c.label }}</button>
    </div>
    <table>
      <thead><tr><th>Say</th><th>What happens</th><th>Approve?</th></tr></thead>
      <tbody>
        <tr v-for="r in rows" :key="r[1]">
          <td><span class="say">{{ r[1] }}</span></td>
          <td>{{ r[2] }}</td>
          <td><code v-if="r[3] === 'yes'">/ok</code><span v-else>{{ r[3] === 'no' ? 'No' : 'Announced' }}</span></td>
        </tr>
      </tbody>
    </table>
    <p v-if="!rows.length" class="empty">Nothing matches. Try fewer words.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cats = [
  { id: 'all', label: 'All' }, { id: 'ask', label: 'Questions' }, { id: 'move', label: 'Moves' },
  { id: 'dock', label: 'Docking' }, { id: 'arm', label: 'Hangar arm' }, { id: 'sat', label: 'Satellites & map' },
]
const all = [
  ['ask', 'status report', 'A short summary: satellites, contacts, alerts, ships.', 'no'],
  ['ask', 'any hostiles near the moon?', 'Looks through live and stale contacts near a body.', 'no'],
  ['ask', 'can Satellite 2 reach my base GPS?', 'Asks AETHER to estimate the move: fuel, time, whether it\'s possible.', 'no'],
  ['ask', 'what\'s the weather on Earthlike?', 'The planet\'s assessment, with verified and estimated values.', 'no'],
  ['ask', 'where is the cargo drone?', 'Position, what it\'s docked to, and whether it can move.', 'no'],
  ['sat', 'send Satellite 2 to its station', 'Flies it back to its station.', 'yes'],
  ['sat', 'point Satellite 1 at the Sun', 'Turns its front to the Sun and holds it there.', 'yes'],
  ['sat', 'turn on station-keeping for Satellite 3', 'It flies back on its own when it drifts.', 'yes'],
  ['sat', 'show the Distressed Vessel on the holo table', 'Puts that contact on a holo table. Beta.', 'announced'],
  ['sat', 'show my base in ground view', 'Opens the map\'s Ground view on it. Beta.', 'announced'],
  ['move', 'fly the cargo drone to the moon base GPS', 'Flies a registered ship to a point in space.', 'yes'],
  ['move', 'shift the drone back a little', 'Moves it 10 m backward (as its cockpit faces).', 'yes'],
  ['move', 'move it up 50 m', 'A relative move by a set distance.', 'yes'],
  ['move', 'rotate the drone 90 degrees clockwise slowly', 'Turns it in place at 2 degrees a second.', 'yes'],
  ['move', 'turn the drone to face me', 'Points its front at you, keeping its roll.', 'yes'],
  ['move', 'level the drone with the Garage', 'Turns its top to the station\'s up.', 'yes'],
  ['move', 'drive the rover to the mining GPS', 'A registered wheeled vehicle drives there on the ground. Experimental.', 'yes'],
  ['dock', 'dock the cargo drone to the Hangar', 'Plans a route, opens doors, lines up and locks.', 'yes'],
  ['dock', 'undock the cargo drone', 'Backs it out and flies it clear; in a hangar with an arm, the arm launches it.', 'yes'],
  ['dock', 'undock it without the arm', 'Flies out by itself even if the hangar has an arm.', 'yes'],
  ['dock', 'move the docked drone up a little', 'Moves a docking port on pistons, with the drone on it.', 'yes'],
  ['arm', 'grab the cargo drone', 'The arm grips it, takes it off its pad and brings it home.', 'yes'],
  ['arm', 'bring the cargo drone to the middle', 'Grab, to a named place instead of home.', 'yes'],
  ['arm', 'store the cargo drone', 'Parks the drone the arm holds on a free pad.', 'yes'],
  ['arm', 'swap the cargo drone with the scout', 'Stores one and grabs the other.', 'yes'],
  ['arm', 'let go of the cargo drone', 'Unlocks the plate where it is and goes home.', 'yes'],
  ['arm', 'send the arm home', 'Moves the empty arm to its home.', 'yes'],
  ['arm', 'this is the arm\'s home', 'Saves where the arm is now as its home.', 'yes'],
]
const q = ref('')
const cat = ref('all')
const rows = computed(() => {
  const s = q.value.trim().toLowerCase()
  return all.filter(r => (cat.value === 'all' || r[0] === cat.value) && (!s || (r[1] + ' ' + r[2]).toLowerCase().includes(s)))
})
</script>

<style scoped>
.filters { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin: 1rem 0; }
.filters input { flex: 1 1 220px; height: 34px; border: 1px solid var(--ae-line); border-radius: 8px; background: var(--vp-c-bg); color: var(--vp-c-text); padding: 0 10px; font: inherit; }
.chip { border: 1px solid var(--ae-line); background: transparent; color: var(--vp-c-text); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: 0.88rem; }
.chip[aria-pressed='true'] { background: var(--vp-c-accent-soft); border-color: var(--vp-c-accent); }
table { width: 100%; display: table; }
.empty { color: var(--vp-c-text-mute, inherit); }
</style>
