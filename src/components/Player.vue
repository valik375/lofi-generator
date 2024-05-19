<template>
<div class="player">
  <GlassCard class="player__wrapper">
    <div class="player__song">
      <div class="player__song-author">{{ track.current.artist_name }}</div>
      <div class="player__song-name">{{ track.current.name }}</div>
      <div class="player__image">
        <img :src="track.current.image" alt="music-cover"/>
      </div>
    </div>
    <audio
      class="player__audio"
      ref="audioPlayer"
      :src="track.current.audio"
      @timeupdate="updateProgress"
    ></audio>
    <div class="player__navigation">
      <PlayerProgressBar
        :progress="progress"
        :currentTime="audioPlayer.currentTime"
        :duration="audioPlayer.duration"
        @updateTrackPosition="updateTrackPosition"
      />
      <PlayerNav :player="audioPlayer" @onNext="track.onNextTrack"/>
    </div>
  </GlassCard>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useTrack } from '@/store/track'
import { GlassCard } from '@/components/UI'
import PlayerProgressBar from '@/components/Player/PlayerProgressBar.vue'
import PlayerNav from '@/components/Player/PlayerNav.vue'

const track = useTrack()

const progress = ref(0)
const audioPlayer = ref('')

const updateProgress = (event) => {
  const { duration, currentTime } = event.srcElement
  progress.value = (currentTime / duration) * 100
}

const updateTrackPosition = (value) => {
  audioPlayer.value.currentTime = audioPlayer.value.duration * value
}
</script>

<style lang="scss" scoped>
.player {
  width: 100%;
  max-width: 300px;
}
.player__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 25px 15px 25px;
  gap: 25px;
}
.player__song {
  width: 100%;
  max-width: 240px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.player__song-author {
  font-size: 12px;
  font-weight: 300;
  color: var(--color-dark);
  opacity: .7;
  line-height: 18px;
}
.player__song-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-dark);
  line-height: 24px;
  margin-bottom: 10px;
  text-align: center;
}
.player__image {
  width: 100%;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-card);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.player__audio {
  display: none;
}
.player__navigation {
  width: 100%;
  max-width: 220px;
}
</style>