<template>
  <header class="header">
    <div class="paper search">
      <button class="search-button">
        <MagnifyingGlassIcon class="icon" />
      </button>
      <input type="text" placeholder="Search" class="search-input" />
    </div>
    <div class="buttons">
      <button class="paper button notification notification-badge">
        <BellAlertIcon class="icon" />
      </button>
      <button class="paper button menu">
        <Bars3Icon class="icon" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { BellAlertIcon } from '@heroicons/vue/24/outline';
import { Bars3Icon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.paper {
  background: var(--paper);
  height: 48px;
  border-radius: 8px;
}

/* Search */
.search {
  box-sizing: border-box;
  width: 232px;
  display: flex;
  align-items: center;

  padding: 12px 20px;
}

.search-button {
  background: transparent;
  border: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search .icon {
  height: 18px;
  width: 18px;
  color: var(--secondary);
  transition: all 0.2s ease-in-out;
}

.search .icon:hover {
  color: var(--main);
}

.search-input {
  background: inherit;
  border: none;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
}

.search-input:focus {
  outline: none;
  color: var(--main);
}

.search-input::placeholder {
  color: var(--secondary);
}

/* Buttons */
.buttons {
  display: flex;
  gap: 16px;
}

.buttons .icon {
  width: 24px;
  height: 24px;
  color: var(--secondary);
  transition: all 0.2s ease-in-out;
}

.button {
  width: 48px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background: var(--paper-dark);
}

.button:hover .icon {
  color: var(--main);
}

.notification {
  position: relative;
}

.notification-badge::after {
  position: absolute;
  top: -4px;
  right: -4px;
  height: 12px;
  width: 12px;
  content: '';
  border-radius: 50%;
  background: var(--error);
  border: 2px solid #ffffff;
}

/* Menu slider */
.menu {
  content: '';
}
</style>
