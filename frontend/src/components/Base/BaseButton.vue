<template>
  <button :class="`button ${props.variant}`">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  // Great to use typescript as PropType<'contained' | 'outlined'>
  variant: String,
});
</script>

<style scoped>
.button {
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

/* Contained */
.contained {
  color: #fff;
  background: var(--info);
  border: 1px solid var(--info);
}

.contained:hover {
  background: var(--info-dark);
  color: var(--paper);
}

/* Outlined */
.outlined {
  color: var(--info);
  background: #fff;
  border: 1px solid var(--paper-darker);
}

.outlined:hover {
  background: var(--paper);
  color: var(--info-dark);
}
</style>
