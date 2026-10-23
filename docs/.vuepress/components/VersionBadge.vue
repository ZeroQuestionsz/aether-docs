<template>
  <span :class="['vb', kind]">{{ text }}</span>
</template>

<script setup>
defineProps({ text: { type: String, required: true }, kind: { type: String, default: 'new' } })
</script>

<style scoped>
.vb { display: inline-block; vertical-align: middle; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.03em; border-radius: 999px; padding: 1px 9px; margin-left: 6px; }
.new { background: var(--vp-c-accent-soft); color: var(--vp-c-accent); }
.beta { background: rgba(231, 176, 77, 0.16); color: var(--ae-amber); }
</style>
