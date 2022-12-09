import { createStore } from 'vuex';

import cryptoModule from './crypto/index';

export default createStore({
  modules: {
    crypto: cryptoModule,
  },
});
