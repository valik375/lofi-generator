<template>
<div class="player-progress">
  <div class="player-progress__bar" @click="setProgress">
    <div class="player-progress__progress" :style="`width: ${props.progress}%`">
      <div class="player-progress__thumb"></div>
    </div>
  </div>
  <div class="player-progress__time-wrapper">
    <div class="player-progress__time">{{ soundTime }}</div>
    <div class="player-progress__time">{{ soundTotal }}</div>
  </div>
</div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0
  },
  currentTime: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    default: 0
  },
})
const emit = defineEmits(['updateTrackPosition'])

onMounted(() => {
  progressBar.value = document.querySelector('.player-progress__bar')
})

const isDragging = ref(false)
const progressBar = ref()
const soundTotal = computed(() => props.duration ? formatTime(props.duration) : '0:00')
const soundTime =  computed(() => props.currentTime ? formatTime(props.currentTime) : '0:00')

const formatTime = (time) => {
  const min = Math.floor(time / 60)
  const sec = Math.floor(time % 60)
  return `${min}:${sec < 10 ? '0' + sec : sec}`
}

const setProgress = (event) => {
  const rect = progressBar.value.getBoundingClientRect()
  const offsetX = event.clientX - rect.left
  const width = progressBar.value.clientWidth
  emit('updateTrackPosition', (offsetX / width))
}

window.addEventListener('mousedown', (event) => {
  if (event.target.classList.value !== 'player-progress__thumb') {
    return
  }
  isDragging.value = true

  window.addEventListener('mousemove', setProgress, false)
  window.addEventListener('mouseup', () => {
    isDragging.value = false
    window.removeEventListener('mousemove', setProgress, false)
  }, false)
})

</script>

<style scoped>
.player-progress__bar {
  width: 100%;
  height: 3px;
  background: var(--color-white);
  border-radius: 100px;
  cursor: pointer;
}
.player-progress__progress {
  height: 100%;
  position: relative;
  border-radius: 100px;
}
.player-progress__thumb {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 50%;
  right: -7px;
  transform: translateY(-50%);
  background: var(--color-white);
  border-radius: 100px;
  box-shadow: 0 0 4px 0 rgba(105, 105, 105, 1);
}
.player-progress__time-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}
.player-progress__time {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-dark);
}
</style>