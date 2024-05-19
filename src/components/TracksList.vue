<template>
<div class="tracks-list">
  <GlassCard class="tracks-list__wrapper">
    <CustomScrollbar class="tracks-list__scroll">
      <div
        v-for="(item, index) in track.list"
        :key="item.id"
        class="tracks-list__item"
        :class="{'active': item.id === track.current.id}"
      >
        <div class="tracks-list__item-wrapper" @click="setCurrentTrack(item)">
          <div class="tracks-list__item-position">{{ formatPosition(index + 1) }}</div>
          <div class="tracks-list__item-image">
            <img :src="item.image" :alt="item.name">
          </div>
          <div class="tracks-list__item-name">{{ item.name }}</div>
        </div>

        <div class="tracks-list__item-actions">
          <div class="tracks-list__item-favorite">
            <Heart :color="getRootColor('--color-white')" />
          </div>
        </div>
      </div>
    </CustomScrollbar>
    <Button class="tracks-list__load" @click="loadTracks">Load More</Button>
  </GlassCard>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useTrack } from '@/store/track'
import { getRootColor, formatPosition } from '@/utils'
import { GlassCard, Button } from '@/components/UI'
import { Heart } from 'lucide-vue-next'

const track = useTrack()

const trackOffset = ref(1)

const setCurrentTrack = (item) => {
  if (track.current.id === item.id) {
    return
  }
  track.current = item
}

const loadTracks = async () => {
  console.log(1)
  trackOffset.value += 1
  await track.loadTracks({ offset: trackOffset.value * 10, search: 'lofi' })
}

</script>

<style lang="scss" scoped>
.tracks-list {
  width: 100%;
  max-width: 400px;
  height: auto;
  max-height: 90vh;
}
.tracks-list__wrapper {
  width: 100%;
  height: 100%;
  padding: 25px 0 15px 0;
}
:deep(.scrollbar__wrapper) {
  width: 100%;
  height: 100%;
}
.tracks-list__item {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;
  border-bottom: 1px solid var(--color-white);
  transition: all .3s ease;

  &:first-child {
    border-top: 1px solid var(--color-white);
  }

  &.active,
  &:hover {
    background: var(--color-white-transparentize-7);
  }
}
.tracks-list__item-wrapper {
  width: calc(100% - 50px);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.tracks-list__item-position {
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-dark);
  border: 1px solid var(--);
  border-radius: 100px;
  background: var(--color-white-transparentize-5);
}
.tracks-list__item-image {
  min-width: 40px;
  height: 40px;
  border-radius: 4px;
  box-shadow: var(--shadow-card);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.tracks-list__item-name {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tracks-list__item-favorite {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    background: var(--color-white-transparentize-7);
  }
}
.tracks-list__load {
  padding: 0 15px;
  margin: 15px auto 0;
}
:deep(.tracks-list__scroll) {
  max-height: 660px;
}
</style>