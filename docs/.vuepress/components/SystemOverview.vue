<template>
  <div class="overview">
    <svg viewBox="0 0 640 330" role="img" aria-label="A planet with orbiting satellites, a station with a hangar, a drone, and JARVIS">
      <defs>
        <radialGradient id="ae-pl" cx="35%" cy="35%" r="70%"><stop offset="0" stop-color="#3f7fa0" /><stop offset="1" stop-color="#14304a" /></radialGradient>
      </defs>
      <ellipse cx="250" cy="175" rx="215" ry="74" fill="none" stroke="var(--ae-line)" stroke-dasharray="3 6" />
      <ellipse cx="250" cy="175" rx="150" ry="50" fill="none" stroke="var(--ae-line)" />
      <circle cx="250" cy="175" r="66" fill="url(#ae-pl)" />
      <path d="M206 140c22 6 40 2 58-8M196 180c30 10 70 6 106-10M214 212c20 4 44 2 66-6" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2" stroke-linecap="round" />
      <path d="M398 136 L470 92 L486 118 Z" fill="var(--vp-c-accent)" opacity="0.14" />
      <g transform="translate(398 136)"><rect x="-6" y="-4" width="12" height="8" fill="#9fb3c2" /><rect x="-18" y="-2" width="10" height="4" fill="var(--vp-c-accent)" /><rect x="8" y="-2" width="10" height="4" fill="var(--vp-c-accent)" /></g>
      <text x="414" y="160">SAT-2 · station held</text>
      <g transform="translate(478 104)"><path d="M0 -6 L6 0 L0 6 L-6 0 Z" fill="var(--ae-bad)" /></g>
      <path d="M478 104 L540 78" stroke="var(--ae-bad)" stroke-dasharray="3 4" />
      <text x="488" y="122">contact · live · 60 s track</text>
      <g transform="translate(560 230)"><rect x="-38" y="-24" width="76" height="48" rx="3" fill="var(--vp-c-bg)" stroke="var(--ae-line)" /><rect x="-38" y="-8" width="6" height="16" fill="var(--ae-amber)" /><circle cx="-14" cy="-12" r="3" fill="var(--ae-ok)" /><circle cx="0" cy="-12" r="3" fill="var(--ae-ok)" /><circle cx="14" cy="-12" r="3" fill="var(--ae-bad)" /></g>
      <text x="522" y="272">Hangar · 3 pads</text>
      <path d="M380 252 C440 270 480 236 518 232" fill="none" stroke="var(--vp-c-accent)" stroke-dasharray="4 4" />
      <g transform="translate(372 250)"><rect x="-10" y="-5" width="20" height="10" rx="2" fill="var(--vp-c-bg)" stroke="var(--vp-c-accent)" /></g>
      <text x="332" y="280">Cargo Drone 1 · docking</text>
      <g transform="translate(140 96)"><circle r="5" fill="var(--vp-c-text)" /></g>
      <text x="94" y="84">you</text>
      <path d="M140 96 C150 40 260 34 300 40" fill="none" stroke="var(--ae-amber)" stroke-dasharray="2 5" />
      <g transform="translate(330 40)"><rect x="-40" y="-14" width="80" height="26" rx="13" fill="var(--vp-c-bg)" stroke="var(--ae-amber)" /><text x="0" y="4" text-anchor="middle" class="j">jarvis …</text></g>

      <a v-for="h in hots" :key="h.key" :href="withBase(h.link)" :aria-label="h.label"
         :class="['hot', { on: active === h.key, jarvis: h.key === 'jarvis' }]"
         @mouseenter="active = h.key" @mouseleave="active = ''" @focus="active = h.key" @blur="active = ''">
        <circle class="ring" :cx="h.x" :cy="h.y" r="10" />
        <circle class="dot" :cx="h.x" :cy="h.y" r="5" />
      </a>
    </svg>
    <div class="rail">
      <a v-for="h in hots" :key="h.key" :href="withBase(h.link)" :class="['cap', { on: active === h.key, jarvis: h.key === 'jarvis' }]"
         @mouseenter="active = h.key" @mouseleave="active = ''">
        <b>{{ h.label }}</b><span>{{ h.text }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase } from 'vuepress/client'

const active = ref('')
const hots = [
  { key: 'starmap', label: 'Star map', x: 250, y: 175, link: '/guide/star-map.html', text: 'A live 3D map of planets, your satellites and every contact they have seen.' },
  { key: 'ground', label: 'Ground view', x: 300, y: 222, link: '/guide/ground-view.html', text: 'On a planet: the terrain around you in 3D, and your base block by block.' },
  { key: 'satellites', label: 'Satellites', x: 398, y: 136, link: '/guide/satellites.html', text: 'Any antenna becomes a satellite: it detects, aims, holds station and flies when you approve.' },
  { key: 'intel', label: 'Intelligence & alerts', x: 478, y: 104, link: '/guide/intel.html', text: 'Live and stale contacts, exploration, watch zones, inbound and intercept warnings.' },
  { key: 'fleet', label: 'Fleet & docking', x: 372, y: 250, link: '/guide/docking.html', text: 'Move, turn, dock and undock your ships with planned routes through hangar doors.' },
  { key: 'hangar', label: 'Hangar arms', x: 560, y: 230, link: '/guide/hangar.html', text: 'An arm that parks drones on wall pads, launches them, and seals airtight doors.' },
  { key: 'jarvis', label: 'JARVIS', x: 368, y: 40, link: '/jarvis/setup.html', text: 'The ship\'s AI. Ask in chat; it looks things up and requests operations you approve.' },
]
</script>

<style scoped>
.overview { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 16px; align-items: start; margin: 1.5rem 0; }
@media (max-width: 760px) { .overview { grid-template-columns: 1fr; } }
svg { width: 100%; height: auto; border: 1px solid var(--ae-line); border-radius: 12px; background: var(--ae-panel); }
text { font-family: var(--vp-font-family-mono, ui-monospace, monospace); font-size: 10px; fill: var(--vp-c-text-mute, #8a99a6); }
text.j { fill: var(--ae-amber); font-size: 11px; }
.hot { cursor: pointer; }
.hot .dot { fill: var(--vp-c-accent); }
.hot.jarvis .dot { fill: var(--ae-amber); }
.hot .ring { fill: none; stroke: var(--vp-c-accent); stroke-width: 2; opacity: 0; transition: opacity 0.2s; }
.hot.jarvis .ring { stroke: var(--ae-amber); }
.hot.on .ring, .hot:focus .ring { opacity: 1; }
.rail { display: grid; gap: 6px; }
.cap { display: block; padding: 8px 12px; border: 1px solid var(--ae-line); border-radius: 10px; text-decoration: none !important; color: var(--vp-c-text); transition: border-color 0.2s, background 0.2s; }
.cap b { display: block; font-size: 0.95rem; }
.cap span { display: block; font-size: 0.84rem; color: var(--vp-c-text-mute, inherit); }
.cap.on, .cap:hover { border-color: var(--vp-c-accent); background: var(--vp-c-accent-soft); }
.cap.jarvis.on, .cap.jarvis:hover { border-color: var(--ae-amber); background: rgba(231, 176, 77, 0.12); }
</style>
