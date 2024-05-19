<template>
<div class="pagination">
  <Button :disabled="disabledPrevButton" color="transparent" class="pagination__prev-button" @click="prevPage">
    <ChevronLeft :color="getRootColor('--color-white')" />
  </Button>
  <div class="pagination__current-page">{{ currentPage }}</div>
  <Button :disabled="disabledNextButton" color="transparent" class="pagination__prev-button" @click="nextPage">
    <ChevronRight :color="getRootColor('--color-white')" />
  </Button>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getRootColor } from '@/utils'
import { Button } from '@/components/UI'
import { ChevronLeft, ChevronRight  } from 'lucide-vue-next'

const props = defineProps({
  itemsToShow: {
    type: Number,
    default: 10
  },
  currentListLength: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['onPrevPage', 'onNextPage'])

const currentPage = ref(1)

const disabledPrevButton = computed(() => currentPage.value === 1)
const disabledNextButton = computed(() => props.itemsToShow > props.currentListLength)

const prevPage = () => {
  currentPage.value -= 1
  emit('onPrevPage', currentPage)
}

const nextPage = () => {
  currentPage.value += 1
  emit('onNextPage', currentPage)
}

</script>

<style scoped>
.pagination {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    width: 30px;
    height: 30px;
    font-weight: 600;
  }
}
.pagination__current-page {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: var(--color-white);
  font-weight: 500;
  border: 1px solid var(--color-white);
}
</style>