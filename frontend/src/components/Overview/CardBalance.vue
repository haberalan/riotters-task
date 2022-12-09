<template>
  <base-card class="container">
    <header class="header">
      <h3 class="header-title">Current Balance</h3>
      <button class="header-button">
        <EllipsisHorizontalIcon class="icon" />
      </button>
    </header>
    <div class="content">
      <p class="content-balance"><span>$</span>21 432.23</p>
      <div class="content-stats">
        <ArrowUpRightIcon class="icon" />
        <p class="content-stats-text">12% vs last month</p>
      </div>
    </div>
    <div class="actions">
      <base-button variant="contained">Quick Invest</base-button>
      <base-button variant="outlined">Show Report</base-button>
    </div>
  </base-card>
</template>

<script setup>
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
.container {
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

/* Content */
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content-balance {
  font-size: 56px;
  font-weight: 500;
}

.content-balance > span {
  font-weight: 300;
  color: var(--secondary);
}

.content-stats {
  display: flex;
  align-items: center;
  gap: 8px;
}

.content-stats .icon {
  background: var(--success);
  border-radius: 50%;
  color: #fff;
  padding: 3px;
  height: 14px;
  width: 14px;
}

.content-stats-text {
  font-size: 18px;
  font-weight: 500;
  color: var(--success);
}

/* Actions */
.actions {
  margin-top: 32px;
  display: flex;
  gap: 4px;
}

/* Media queries */
@media (max-width: 440px) {
  .content-balance {
    font-size: 44px;
  }
}
</style>
