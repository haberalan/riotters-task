<template>
  <base-card class="container">
    <ul class="header">
      <li @click="handleChangeTab" id="Summary" :class="isActive('Summary')">Summary</li>
      <li @click="handleChangeTab" id="Table" :class="isActive('Table')">Table</li>
      <li @click="handleChangeTab" id="Charts" :class="isActive('Charts')">Charts</li>
      <li @click="handleChangeTab" id="Reporting" :class="isActive('Reporting')">Reporting</li>
      <li @click="handleChangeTab" id="Analysis" :class="isActive('Analysis')">Analysis</li>
    </ul>
    <div class="content">
      <component :is="activeTab" />
    </div>
  </base-card>
</template>

<script setup>
import { computed, ref } from 'vue';
import TabSummaryList from './Tabs/TabSummaryList.vue';

const selectedTab = ref('Summary');

const handleChangeTab = (e) => {
  selectedTab.value = e.target.id;
};

const activeTab = computed(() => {
  switch (selectedTab.value) {
    case 'Summary':
      return TabSummaryList;
    case 'Table':
      return <p>Table</p>;
    case 'Charts':
      return <p>Charts</p>;
    case 'Reporting':
      return <p>Reporting</p>;
    case 'Analysis':
      return <p>Analysis</p>;
    default:
      return null;
  }
});

const isActive = (name) => (name === selectedTab.value ? 'active' : '');
</script>

<style scoped>
.container {
  padding-right: 0 !important;
  grid-column: -1 / 1;
}

/* Header */
.header {
  display: flex;
  gap: 24px;
  border-bottom: 1px solid var(--paper-dark);
  overflow-x: auto;
}

.header > li {
  color: var(--secondary);
  font-size: 16px;
  font-weight: 400;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  padding-bottom: 12px;
  border-bottom: 4px solid transparent;
}

.header > li::after {
  display: block;
  content: attr(id);
  font-weight: 500;
  height: 1px;
  color: transparent;
  overflow: hidden;
  visibility: hidden;
}

.header > li.active {
  font-weight: 500;
  color: var(--main);
  border-bottom: 4px solid var(--info);
}

/* Content */
.content {
  margin-top: 32px;
  padding-right: 32px;
}
</style>
