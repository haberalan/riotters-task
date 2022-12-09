<template>
  <base-card class="container">
    <div class="content">
      <header class="header">
        <h3 class="header-title">Summary</h3>
        <button class="header-button">
          <EllipsisHorizontalIcon class="icon" />
        </button>
      </header>
      <div class="chart-wrapper">
        <apexchart height="210" :options="options" :series="series" />
      </div>
    </div>
    <div class="actions">
      <p :class="`actions-text ${classActive('this')}`" @click="handleChange('this')">This month</p>
      <p :class="`actions-text ${classActive('last')}`" @click="handleChange('last')">Last month</p>
    </div>
  </base-card>
</template>

<script setup>
import { computed, ref } from 'vue';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';

// Select active chart month
const selectedMonth = ref('this');

const handleChange = (name) => (selectedMonth.value = name);

const classActive = (name) => (name === selectedMonth.value ? 'selected' : '');

// Chart
const options = {
  chart: {
    id: 'summary',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    shared: false,
    theme: 'dark',
    fillSeriesColor: true,
  },
  stroke: {
    width: 3,
    curve: 'smooth',
    dashArray: [8, 0],
  },
  xaxis: {
    categories: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31'],
    labels: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 30,
    tickAmount: 6,
    labels: {
      formatter: (val) => (val === 0 ? val : val + 'K'),
    },
  },
  grid: {
    strokeDashArray: 8,
  },
  dataLabels: {
    enabled: false,
  },
};

const thisMonthData = computed(() => ({
  name: 'This month',
  data: [2, 4, 6, 10, 14, 15, 24, 18, 16, 24, 21],
  color: selectedMonth.value === 'this' ? '#7445fb' : '#d5d5d6',
}));

const lastMonthData = computed(() => ({
  name: 'Last month',
  data: [0, 4, 13, 4, 5, 7, 8, 3, 4, 7, 3],
  color: selectedMonth.value === 'last' ? '#7445fb' : '#d5d5d6',
}));

const series = computed(() => (selectedMonth.value === 'this' ? [lastMonthData.value, thisMonthData.value] : [thisMonthData.value, lastMonthData.value]));
</script>

<style scoped>
.container {
  height: 336px;

  padding: 0 !important;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  padding-bottom: 0;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 20px;
  font-weight: 500;
}

.header-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--secondary);
  transition: all 0.2s ease-in-out;
}

.header-button:hover {
  color: var(--main);
}

.header .icon {
  height: 24px;
  width: 24px;
}

/* Chart */
.chart-wrapper {
  margin-top: 10px;
}

/* Actions */
.actions {
  border-top: 1px solid #eeeeee;
  padding: 15px 40px 18px;
  display: flex;
  gap: 28px;
  font-size: 12px;
  font-weight: 400;
  line-height: 10px;
  color: var(--secondary);
}

.actions-text {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.actions .actions-text::before {
  position: absolute;
  content: '';
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #d5d5d6;
  left: -14px;
}

.selected.actions-text::before {
  background: var(--info);
}
</style>
