<template>
<div class="main">
  <Header />
  <FreeDraggableBlock name="Player.exe">
    <Player />
  </FreeDraggableBlock>
  <FreeDraggableBlock name="Search List.exe">
    <TracksList />
  </FreeDraggableBlock>
  <img class="main__background" src="@/assets/images/mainBackground.png" alt="Bg image">
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useTrack } from '@/store/track'
import Header from '@/components/Header.vue'
import Player from '@/components/Player.vue'
import TracksList from '@/components/TracksList.vue'
import FreeDraggableBlock from '@/components/FreeDraggableBlock.vue'

const track = useTrack()
const currentIndex = ref(0)

onMounted(async () => {
  const { results } = await track.getTracks({ search: 'lofi' })
  track.current = results[currentIndex.value]
})
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.main__background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>
