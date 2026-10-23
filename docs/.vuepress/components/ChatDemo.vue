<template>
  <div class="chat">
    <div class="tabs" role="tablist" aria-label="Chat scenarios">
      <button v-for="(s, key) in scenarios" :key="key" role="tab" type="button"
              :aria-selected="key === current" @click="play(key)">{{ s.label }}</button>
    </div>
    <div class="log" aria-live="polite">
      <div v-for="(row, i) in scenarios[current].rows" :key="current + i"
           :class="['ln', 'who-' + row[0], { wait: i >= shown }]">
        <span class="t">{{ stamp(i) }}</span>
        <b>{{ row[0] === 'you' ? 'z:' : row[0] === 'jarvis' ? 'JARVIS:' : 'AETHER:' }}</b>
        <span v-html="row[1]" />
      </div>
    </div>
    <div class="foot"><span>Global chat · example session</span><button type="button" @click="play(current)">Replay</button></div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'

const scenarios = {
  dock: { label: 'Dock a drone', rows: [
    ['you', 'jarvis dock the cargo drone to the Hangar'],
    ['aether', 'JARVIS #1: dock Cargo Drone 1 to Hangar / Parking Connector 4 (0.2 km away, planned route 135 m; opens Hangar Door Piston 2)   <span class="q">/ok 1  or  /no 1  (60 s)</span>'],
    ['jarvis', 'Requested.'],
    ['you', '/ok 1'],
    ['aether', 'Cargo Drone 1 docking to Hangar. Take the controls to stop it.'],
    ['aether', 'Cargo Drone 1: doors open; lined up on Parking Connector 4: closing in'],
    ['aether', '<span class="ok">Cargo Drone 1: docked</span>; closed 2 door(s) again; switched off its 27 thruster(s) / gyro(s) while it\'s held'],
  ] },
  store: { label: 'Park it', rows: [
    ['you', 'jarvis store the cargo drone'],
    ['aether', 'JARVIS #2: park Cargo Drone 1 on Parking Connector 10 (by its Connector), let go, arm back home (8 steps, every move checked)   <span class="q">/ok 2  or  /no 2  (60 s)</span>'],
    ['jarvis', 'Requested.'],
    ['you', '/ok 2'],
    ['aether', 'Arm: turning; lining up with Parking Connector 10; in front of Parking Connector 10'],
    ['aether', 'Arm: parking on Parking Connector 10; letting go; backing off; going home'],
    ['aether', '<span class="ok">Cargo Drone 1: arm job succeeded</span> - done.'],
  ] },
  intel: { label: 'Hostiles?', rows: [
    ['you', 'jarvis any hostiles near the moon?'],
    ['jarvis', 'One live contact: Fractured Station, 15.5 km from the moon\'s surface, closing at 6 m/s. Two stale contacts last seen 3 h ago near its north pole.'],
    ['you', 'jarvis can Satellite 2 see it?'],
    ['jarvis', 'Yes. Satellite 2 has line of sight; it\'s inside its 50 km antenna range.'],
  ] },
  nudge: { label: 'Nudge', rows: [
    ['you', 'jarvis shift the drone back a little'],
    ['aether', 'JARVIS #4: move Cargo Drone 1 backward 10 m   CREW WARNING: you are 8 m from Cargo Drone 1 (30 m safety radius); approve only if that\'s intended   <span class="q">/ok 4  or  /no 4</span>'],
    ['jarvis', 'Requested. You\'re inside its safety radius.'],
    ['you', '/no 4'],
    ['aether', 'Request #4 declined.'],
  ] },
}

const current = ref('dock')
const shown = ref(99)
let timers = []

function stamp(i) {
  const m = 21 + Math.floor(i / 3), s = (i * 7 + 13) % 60
  return '[18:' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + ']'
}

function play(key) {
  timers.forEach(clearTimeout); timers = []
  current.value = key
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) { shown.value = 99; return }
  shown.value = 0
  let t = 200
  scenarios[key].rows.forEach((r, i) => {
    t += r[0] === 'you' ? 900 : 650
    timers.push(setTimeout(() => { shown.value = i + 1 }, t))
  })
}

onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<style scoped>
.chat { border: 1px solid var(--ae-line); border-radius: 12px; background: var(--ae-panel); overflow: hidden; margin: 1rem 0; }
.tabs { display: flex; flex-wrap: wrap; gap: 4px; padding: 8px; border-bottom: 1px solid var(--ae-line); }
.tabs button { border: 1px solid transparent; background: transparent; color: var(--vp-c-text-mute, inherit); padding: 6px 10px; border-radius: 8px; cursor: pointer; font: inherit; font-size: 0.9rem; }
.tabs button[aria-selected='true'] { border-color: var(--ae-line); background: var(--vp-c-bg); color: var(--vp-c-text); }
.log { font-family: var(--vp-font-family-mono, ui-monospace, monospace); font-size: 0.82rem; line-height: 1.5; padding: 10px 12px; min-height: 230px; background: rgba(0, 0, 0, 0.22); color: #dfe8ee; }
.ln { margin: 2px 0; transition: opacity 0.25s; }
.ln.wait { opacity: 0; }
.ln .t { opacity: 0.5; }
.who-you b { color: #f2f2f2; }
.who-aether b { color: #43d6c9; }
.who-jarvis b { color: #e7b04d; }
.log :deep(.q) { color: #e7b04d; }
.log :deep(.ok) { color: #5bcf8c; }
.foot { display: flex; justify-content: space-between; align-items: center; padding: 6px 12px; font-size: 0.82rem; color: var(--vp-c-text-mute, inherit); }
.foot button { border: 1px solid var(--ae-line); background: var(--vp-c-bg); color: var(--vp-c-text); border-radius: 8px; padding: 4px 10px; cursor: pointer; font: inherit; }
</style>
