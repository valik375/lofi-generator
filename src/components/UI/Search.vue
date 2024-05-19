<template>
<div class="search">
  <input
    :id="props.id"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    type="search"
    @input="onInput"
    @keydown.enter="onSearch"
  >
  <button class="search__button" @click="onSearch">
    <Search :color="getRootColor('--color-white')" />
  </button>
</div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
import { getRootColor } from '@/utils'
import { Button } from '@/components/UI'

const props = defineProps({
  id: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search'
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['onInput', 'onSearch', 'update:modelValue'])

const onInput = (event) => {
  emit('onInput', event)
  emit('update:modelValue', event.target.value)
}

const onSearch = (event) => {
  emit('onSearch', event)
}

</script>

<style scoped>
.search {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  padding: 0 30px 0 10px;
  border: 1px solid var(--color-dark);
  border-radius: 100px;

  svg {
    width: 18px;
    height: 18px;
  }

  input {
    width: calc(100% - 18px);
    background: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    color: var(--color-dark);
  }
}
.search__button {
  height: 30px;
  width: auto;
  position: absolute;
  top: -1px;
  right: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background: var(--color-dark);
  border: none;
  border-radius: 100px;
  color: var(--color-white);
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: var(--color-dark-transparentize-1);
  }
}
</style>