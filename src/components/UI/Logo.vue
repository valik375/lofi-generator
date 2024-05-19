<template>
<div class="logo">
  <AudioWaveform :color="getRootColor('--color-dark')" />
  <div class="logo__text">Music</div>
</div>
</template>

<script setup>
import { AudioWaveform } from 'lucide-vue-next'
import { getRootColor } from '@/utils'
</script>

<style scoped>
.logo {
  display: flex;
  gap: 6px;
}
.logo__text {
  font-size: 16px;
  font-weight: 500;
  color: var(--color-dark);
}
</style>