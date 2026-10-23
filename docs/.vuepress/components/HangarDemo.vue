<template>
  <div class="hangar">
    <svg viewBox="0 0 520 300" role="img" aria-label="Top-down schematic of a hangar: a wall of parking pads, an arm, a drone and the hangar door">
      <rect class="wall" x="10" y="10" width="500" height="34" rx="3" />
      <text x="18" y="31">PARKING WALL</text>
      <g v-for="(x, i) in padX" :key="i">
        <rect class="pad" :x="x - 12" y="44" width="24" height="10" rx="2" />
        <circle :cx="x" cy="27" r="5" :fill="lightColor(i)" :opacity="padState(i) === 1 && blink ? 0.35 : 1" />
        <rect v-if="padState(i) === 2 && i !== 2" :x="x - 13" y="54" width="26" height="42" rx="4" class="parked" />
      </g>
      <rect class="door" x="10" y="280" width="200" height="8" rx="2" />
      <text x="16" y="274">HANGAR DOOR</text>
      <circle class="joint" cx="470" cy="250" r="12" />
      <text x="420" y="282">ARM BASE</text>
      <polyline class="armseg" :points="armPoints" />
      <circle class="joint" :cx="470" :cy="s.tip[1]" r="6" />
      <g :transform="`translate(${s.d[0]} ${s.d[1]}) rotate(${s.d[2]})`">
        <rect class="drone" x="-16" y="-26" width="32" height="52" rx="5" />
        <rect x="-6" y="-26" width="12" height="5" class="conn" />
        <text x="-13" y="44">DRONE</text>
      </g>
      <rect class="plate" x="-7" y="-4" width="14" height="8" rx="2" :transform="`translate(${s.tip[0]} ${s.tip[1]}) rotate(${s.ang - 180})`" />
    </svg>
    <div class="ctl">
      <span class="phase">{{ fi + 1 }}/{{ frames.length }} · {{ frames[fi].cap }}</span>
      <button type="button" @click="next">Next step</button>
      <button type="button" @click="toggle">{{ playing ? 'Pause' : 'Play' }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'

const padX = [60, 130, 200, 270, 340, 410]
const baseState = [2, 0, 0, 2, 0, 0]   // 0 free, 1 reserved, 2 occupied
const frames = [
  { tip: [400, 180], ang: 180, d: [210, 200, 0], pad: 0, cap: 'Drone waiting in the hangar.' },
  { tip: [246, 200], ang: 180, d: [210, 200, 90], pad: 0, cap: 'Grip: the plate eases onto the drone\'s front until the magnet catches.' },
  { tip: [246, 200], ang: 180, d: [210, 200, 90], pad: 1, cap: 'Locked. Pad 3 is reserved: its light blinks amber.' },
  { tip: [236, 150], ang: 270, d: [200, 114, 0], pad: 1, cap: 'The arm turns the drone so its connector faces the pad.' },
  { tip: [236, 136], ang: 270, d: [200, 100, 0], pad: 2, cap: 'Connectors meet and lock. Only then does the plate let go.' },
  { tip: [400, 180], ang: 180, d: [200, 100, 0], pad: 2, cap: 'Arm back home. Pad 3 is occupied: red.' },
]
const fi = ref(0)
const blink = ref(false)
const playing = ref(false)
const s = reactive({ tip: frames[0].tip.slice(), ang: 180, d: frames[0].d.slice() })
let anim = 0, timer = 0, blinkTimer = 0

const armPoints = computed(() => `470,250 470,${s.tip[1]} ${s.tip[0]},${s.tip[1]}`)
function padState(i) { return i === 2 ? frames[fi.value].pad : baseState[i] }
function lightColor(i) { const st = padState(i); return st === 2 ? 'var(--ae-bad)' : st === 1 ? 'var(--ae-amber)' : 'var(--ae-ok)' }

function go(n) {
  fi.value = n
  const f = frames[n], from = { tip: s.tip.slice(), ang: s.ang, d: s.d.slice() }
  cancelAnimationFrame(anim)
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    s.tip = f.tip.slice(); s.ang = f.ang; s.d = f.d.slice(); return
  }
  let t0 = null
  const step = ts => {
    if (t0 === null) t0 = ts
    const k = Math.min(1, (ts - t0) / 1100), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2
    s.tip = [from.tip[0] + (f.tip[0] - from.tip[0]) * e, from.tip[1] + (f.tip[1] - from.tip[1]) * e]
    s.ang = from.ang + (f.ang - from.ang) * e
    s.d = [0, 1, 2].map(j => from.d[j] + (f.d[j] - from.d[j]) * e)
    if (k < 1) anim = requestAnimationFrame(step)
  }
  anim = requestAnimationFrame(step)
}
function stop() { clearInterval(timer); playing.value = false }
function next() { stop(); go((fi.value + 1) % frames.length) }
function toggle() {
  if (playing.value) { stop(); return }
  playing.value = true
  go(0)
  timer = setInterval(() => {
    if (fi.value + 1 >= frames.length) { stop(); return }
    go(fi.value + 1)
  }, 2200)
}
onMounted(() => { blinkTimer = setInterval(() => { blink.value = Math.floor(Date.now() / 500) % 2 === 0 }, 250) })
onBeforeUnmount(() => { clearInterval(timer); clearInterval(blinkTimer); cancelAnimationFrame(anim) })
</script>

<style scoped>
.hangar { border: 1px solid var(--ae-line); border-radius: 12px; background: var(--ae-panel); padding: 10px; margin: 1rem 0; }
svg { width: 100%; height: auto; display: block; }
text { font-family: var(--vp-font-family-mono, ui-monospace, monospace); font-size: 10px; fill: var(--vp-c-text-mute, #8a99a6); }
.wall { fill: var(--vp-c-bg); stroke: var(--ae-line); }
.pad { fill: var(--ae-line); }
.parked { fill: var(--vp-c-bg); stroke: var(--ae-line); }
.door { fill: var(--ae-amber); opacity: 0.7; }
.joint { fill: var(--vp-c-bg); stroke: var(--vp-c-text-mute, #8a99a6); stroke-width: 2; }
.armseg { fill: none; stroke: var(--vp-c-text-mute, #8a99a6); stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
.drone { fill: var(--vp-c-bg); stroke: var(--vp-c-accent); stroke-width: 2; }
.conn { fill: var(--vp-c-accent); }
.plate { fill: var(--ae-amber); }
.ctl { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-top: 8px; }
.phase { flex: 1 1 260px; font-size: 0.88rem; }
.ctl button { border: 1px solid var(--ae-line); background: var(--vp-c-bg); color: var(--vp-c-text); border-radius: 8px; padding: 5px 12px; cursor: pointer; font: inherit; }
</style>
