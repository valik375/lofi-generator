<template>
<div>
  <Transition>
    <div v-if="isActive" class="modal__backdrop" @click.self="onCloseModal">
      <div class="modal">
        <div class="modal__close" @click.self="onCloseModal" >
          <X />
        </div>
        <slot />
      </div>
    </div>
  </Transition>
</div>

</template>

<script setup>
import { X } from 'lucide-vue-next'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['onCloseModal'])

const onCloseModal = () => {
  emit('onCloseModal')
}

</script>

<style scoped>
.modal__backdrop {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--color-dark-transparentize-6);
  backdrop-filter: blur(10px);
  z-index: 999999;
}
.modal {
  width: 100%;
  max-width: 90vw;
  height: 100%;
  max-height: 90vh;
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  background: var(--color-white);
  box-shadow: var(--shadow-card);
}
.modal__close {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  transition: all .3s ease;
  
  &:hover {
    background: var(--color-dark-transparentize-9);
  }
}
</style>