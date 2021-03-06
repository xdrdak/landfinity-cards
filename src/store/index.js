import Vue from 'vue';
import Vuex from 'vuex';
import characters from './modules/characters';
import autosave from './plugins/autosave';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/* eslint-disable no-new */
export default new Vuex.Store({
  modules: {
    characters,
  },
  plugins: [autosave],
  strict: debug,
});
