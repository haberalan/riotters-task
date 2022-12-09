<template>
  <div class="card">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  box-sizing: border-box;
  padding: 32px;
  border-radius: 16px;
  background: var(--paper);
}
</style>
