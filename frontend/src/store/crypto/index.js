export default {
  namespaced: true,
  state() {
    return {
      items: [],
    };
  },
  actions: {
    async getCrypto(context) {
      // Gdy fetchowałem dostawałem błąd dlatego puściłem zapytanie przez expressa. To poniżej powinno działać.
      // const res = await fetch('http://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1,1027,2010&CMC_PRO_API_KEY=' + process.env.VUE_APP_API, {
      //   mode: 'no-cors',
      // });

      const res = await fetch('http://localhost:4000/api/crypto');

      const data = await res.json();

      context.commit('setCrypto', { data: data.data });
    },
  },
  mutations: {
    setCrypto(state, payload) {
      const items = [];
      for (const property in payload.data) {
        const changes = [
          payload.data[property].quote.USD.percent_change_90d,
          payload.data[property].quote.USD.percent_change_60d,
          payload.data[property].quote.USD.percent_change_30d,
          payload.data[property].quote.USD.percent_change_7d,
          payload.data[property].quote.USD.percent_change_24h,
          payload.data[property].quote.USD.percent_change_1h,
        ];
        const calculatedChanges = changes.map((value) => ((100 - value) / 100) * payload.data[property].quote.USD.price);
        const item = {
          id: payload.data[property].id,
          name: payload.data[property].name,
          symbol: payload.data[property].symbol,
          price: payload.data[property].quote.USD.price,
          price24h: payload.data[property].quote.USD.percent_change_24h,
          status: payload.data[property].quote.USD.percent_change_24h > 0 ? 'gain' : 'loss',
          changes: calculatedChanges,
        };
        items.push(item);
      }

      state.items = items;
    },
  },
  getters: {
    selectCrypto(state) {
      return state.items;
    },
  },
};
