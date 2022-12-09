<template>
  <ul class="list">
    <TabSummaryListItem v-for="item in crypto" :key="item.id" :variant="item.status" :item="item" />
  </ul>
</template>

<script setup>
import { useStore } from 'vuex';
import TabSummaryListItem from './TabSummaryListItem.vue';

const store = useStore();

const crypto = store.getters['crypto/selectCrypto'];
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
