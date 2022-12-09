<template>
  <li class="item">
    <div class="item-header">
      <img :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`" alt="crypto icon" class="icon" />
      <div class="item-data">
        <p class="item-data-title">{{ item.symbol }}</p>
        <p class="item-data-text">{{ item.name }}</p>
      </div>
    </div>
    <div class="item-data item-price">
      <p class="item-data-title">Price</p>
      <p class="item-data-text">${{ item.price.toFixed(2) }}</p>
    </div>
    <div class="item-data item-change">
      <p class="item-data-title">Change</p>
      <div :class="`item-data-change item-data-change-${props.variant}`">
        <p>{{ item.price24h.toFixed(2) }}%</p>
        <component :is="icon" />
      </div>
    </div>
    <apexchart height="90" class="chart" :options="options" :series="series" />
    <div class="item-actions">
      <base-button variant="outlined">Sell</base-button>
      <base-button variant="contained">Buy</base-button>
    </div>
  </li>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline';
import { ArrowDownRightIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  item: Object,
  variant: String,
});

const icon = computed(() => (props.variant === 'gain' ? <ArrowUpRightIcon class="icon" /> : <ArrowDownRightIcon class="icon" />));

// Chart
const options = {
  chart: {
    id: '90d',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    width: 3,
    curve: 'smooth',
  },

  xaxis: {
    categories: ['90d', '60d', '30d', '7d', '24h', '1h'],
    labels: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

const series = computed(() => [
  {
    name: 'Price changes',
    data: props.item.changes,
    color: props.variant === 'gain' ? '#2dc78f' : '#ea4d4d',
  },
]);
</script>

<style scoped>
.item {
  box-sizing: border-box;
  padding: 20px;
  height: 80px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid var(--paper-darker);
  line-height: 14px;

  display: grid;
  grid-template-columns: 2fr 2fr 1fr 140px 2fr;
  gap: 16px;
  align-content: center;
  align-items: center;
}

/* Default classes */
.item-data {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-data-title {
  font-size: 14px;
  font-weight: 400;
  color: var(--secondary);
}

.item-data-text {
  font-weight: 600;
}

/* Header data */
.item-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item-header .icon {
  height: 32px;
  width: 32px;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid #ebebf3;
}

/* Change data */
.item-data-change {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  font-weight: 600;
}

.item-data-change .icon {
  height: 10px;
  width: 10px;
  padding: 2px;
  border-radius: 50%;
}

.item-data-change-gain {
  color: var(--success);
}

.item-data-change-gain .icon {
  border: 1.5px solid var(--success);
  background: #eaf9f4;
}

.item-data-change-loss {
  color: var(--error);
}

.item-data-change-loss .icon {
  border: 1.5px solid var(--error);
  background: #fbdbdb;
}

/* Actions */
.item-actions {
  justify-self: end;
  display: flex;
  gap: 8px;
}

/* Media queries */
@media (max-width: 940px) {
  .item {
    /* grid-template-columns: 2fr 2fr 1fr 2fr 1fr; */
    grid-template-columns: 2fr 2fr 1fr 1fr;
  }

  .chart {
    display: none;
  }
}

@media (max-width: 800px) {
  .item {
    column-gap: 24px;
    grid-template-columns: 1fr 1fr 2fr;
    height: auto;
  }

  .item-header {
    grid-column: -1 / 1;
  }

  .chart {
    display: block;
  }

  .item-actions {
    grid-column: -1 / 1;
  }
}

@media (max-width: 600px) {
  .item {
    grid-template-columns: 1fr 1fr;
  }

  .item-price {
    grid-column: -1 / 1;
  }
}
</style>
