import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// Create app
const app = createApp(App);

// Charts
import VueApexCharts from 'vue3-apexcharts';

// Base components
import BaseCard from './components/Base/BaseCard.vue';
import BaseButton from './components/Base/BaseButton.vue';

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);

// Mounting app
app.use(store).use(VueApexCharts).mount('#app');
