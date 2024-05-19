<template>
<header class="header">
  <Container>
    <GlassCard>
      <div class="header__wrapper">
        <Logo />
        <Search
          v-model="searchValue"
          @onSearch="onSearch"
        />
      </div>
    </GlassCard>
  </Container>
</header>
</template>

<script setup>
import { ref } from 'vue'
import { useTrack } from '@/store/track'
import { Container, GlassCard, Logo, Search } from '@/components/UI'

const track = useTrack()

const searchValue = ref('')

const onSearch = async () => {
  track.search = searchValue.value.toLowerCase()
  searchValue.value = ''
  await track.getTracks()
}

</script>

<style scoped>
.header {
  height: 50px;
  margin-top: 15px;
}
.header__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 15px;
}
</style>