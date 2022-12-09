<template>
  <div class="main">
    <SearchAndButtons />
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>
    <div class="main-grid" v-else>
      <CardBalance class="balance" />
      <CardSummary class="summary" />
      <CardTabs class="tabs" />
    </div>
  </div>
</template>

<script setup>
import SearchAndButtons from './components/Overview/SearchAndButtons.vue';
import CardBalance from './components/Overview/CardBalance.vue';
import CardSummary from './components/Overview/CardSummary.vue';
import CardTabs from './components/Overview/CardTabs.vue';

// Fetching data
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const loading = ref(true);

const store = useStore();

onMounted(async () => {
  await store.dispatch('crypto/getCrypto');
  loading.value = false;
});
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* ********************************************* */
/* ********************************************* */
/* ********************************************* */

/* Palette */
:root {
  --main: #0a041c;
  --secondary: #9896a1;
  --secondary-dark: #898791;
  --paper: #f7f7f9;
  --paper-dark: #f5f3f4;
  --paper-darker: #ebebf3;
  --info: #7445fb;
  --info-dark: #683ee2;
  --success: #2dc78f;
  --error: #ea4d4d;
}

/* Main styles */
* {
  font-family: 'SF Pro Display', sans-serif;
  line-height: 24px;
}

body {
  font-family: 'SF Pro Display', sans-serif;
  background: #fff;
  color: var(--main);
}

.main {
  box-sizing: border-box;
  padding: 50px 68px;
  background: #fff;
  min-height: 100vh;
  width: 82%;
  float: right;

  display: flex;
  flex-direction: column;
  gap: 32px;
}

.main-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

/* Loading */
.loading {
  color: var(--main);
  font-weight: 500;
  margin-top: 300px;
  align-self: center;
}

/* Media queries */
/* xs-500px */
/* sm-800px */
/* md-940px */
/* lg-1240px */

@media (max-width: 1240px) {
  .main {
    width: 100%;
    padding: 20px 34px;
  }
}

@media (max-width: 800px) {
  .main-grid {
    display: flex;
    flex-direction: column;
  }

  .summary {
    order: 1;
  }
}

@media (max-width: 440px) {
  .main {
    padding: 12px 8px;
  }
}
</style>
