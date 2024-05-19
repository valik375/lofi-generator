<template>
<div
  class="free-draggable"
  ref="draggable"
>
  <div
    class="free-draggable__trigger"
    draggable="true"
    @dragstart="onDragStart"
    @drag="onDrag"
    @dragend="onDragEnd"
  >
    <div class="free-draggable__name">{{ props.name }}</div>
  </div>
  <slot />
</div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})

const draggable = ref('')
let offsetX
let offsetY

const onDragStart = (event) => {
  draggable.value.style.position = 'absolute'

  const rect = event.target.getBoundingClientRect()
  offsetX = event.clientX - rect.x
  offsetY = event.clientY - rect.y
}

const onDrag = (event) => {
  draggable.value.style.left = event.clientX - offsetX + 'px'
  draggable.value.style.top = event.clientY - offsetY + 'px'
}

const onDragEnd = (event) => {
  draggable.value.style.left = event.clientX - offsetX + 'px'
  draggable.value.style.top = event.clientY - offsetY + 'px'
}

</script>

<style lang="scss" scoped>
.free-draggable {
  width: auto;
  height: auto;
  position: absolute;
  z-index: 999;
}
.free-draggable__trigger {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: absolute;
  left: 0;
  top: 0;
  cursor: grab;
  border-bottom: 1px solid rgba(209, 213, 219, 0.3);
  z-index: 999;
}
.free-draggable__name {
  margin-bottom: -2px;
  font-size: 10px;
  font-weight: 400;
  color: var(--color-dark);
}
</style>