<template>
<div class="glass-card">
  <slot/>
</div>
</template>

<style scoped>
.glass-card {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(17px) saturate(200%);
  background-color: rgba(214, 214, 214, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>