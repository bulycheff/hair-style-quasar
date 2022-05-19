import { defineStore } from 'pinia';
import axios from 'axios';

export const usePriceListStore = defineStore('priceListStore', {
  state: () => ({
    matrix: [],
    davines: [],
    schwarzkopf: [],
  }),
  getters: {
    loaded: (state) => state.matrix.length > 0
      && state.davines.length > 0
      && state.schwarzkopf.length > 0,
  },
  actions: {
    async fill() {
      this.matrix = (await axios.get('https://api.hair.site.net.ru/api/v1/price/matrix')).data;
      this.davines = (await axios.get('https://api.hair.site.net.ru/api/v1/price/davines')).data;
      this.schwarzkopf = (await axios.get('https://api.hair.site.net.ru/api/v1/price/schwarzkopf')).data;
    },
  },
});
