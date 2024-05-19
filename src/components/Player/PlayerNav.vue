<template>
<div class="player-navigation">
  <div class="player-navigation__button" @click="onPrev">
    <StepBack :color="getRootColor('--color-dark')" />
  </div>
  <div class="player-navigation__button" @click="onPlay">
    <Play :color="getRootColor('--color-dark')" v-if="!isPlay"/>
    <Pause :color="getRootColor('--color-dark')" v-else/>
  </div>
  <div class="player-navigation__button" @click="onNext">
    <StepForward :color="getRootColor('--color-dark')" />
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { getRootColor } from '@/utils'
import { Play, Pause, StepBack, StepForward } from 'lucide-vue-next'

const props = defineProps({
  player: {
    type: [Object, String],
    default: () => ({})
  }
})
const emit = defineEmits(['onNext', 'onPrev'])
const isPlay = ref(false)

const onPlay = () => {
  if (isPlay.value) {
    props.player?.pause()
  } else {
    props.player?.play()
  }
  isPlay.value = !isPlay.value
}

const onPrev = () => {
  emit('onPrev')
}

const onNext = () => {
  props.player.currentTime = 0
  isPlay.value = false
  if (props.player.readyState >= 4) {
    props.player?.play()
  }
  emit('onNext')
}
</script>

<style scoped>
.player-navigation {
  width: 100%;
  margin: 12px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.player-navigation__button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
  transition: all .3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: var(--color-white);
    background: var(--color-white-transparentize-5);
  }
}
</style>