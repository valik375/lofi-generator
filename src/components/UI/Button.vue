<template>
<button
  :class="`button ${color}`"
  :disabled="disabled"
>
  <slot/>
</button>
</template>

<script setup>

const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>
.button {
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  background: var(--color-white);
  transition: all .3s ease;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-dark);
  cursor: pointer;

  &.white {
    color: var(--color-dark);
    background: var(--color-white);
    border-color: var(--color-white);

    &:hover {
      background: transparent;
      color: var(--color-white);
    }
  }

  &.dark {
    color: var(--color-white);
    background: var(--color-dark);
    border-color: var(--color-dark);

    &:hover {
      background: transparent;
      color: var(--color-dark);
    }
  }

  &.primary {
    color: var(--color-dark);
    background: var(--color-primary);
    border-color: var(--color-primary);

    &:hover {
      background: transparent;
      color: var(--color-primary);
    }
  }

  &.transparent {
    color: var(--color-white);
    background: transparent;
    border-color: var(--color-white);

    &:hover {
      background: var(--color-white-transparentize-7);
      color: var(--color-dark);
    }
  }
}
</style>