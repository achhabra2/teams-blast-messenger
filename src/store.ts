import Vue from 'vue';
import Vuex from 'vuex';
// import { MutationTree, ActionTree } from 'vuex';
import VuexPersistence from 'vuex-persist';
// import localForage from 'localforage';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

interface State {
  token: string;
  render: string;
}

export default new Vuex.Store<State>({
  state: {
    token: '',
    render: ''
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token;
    },
    setRender(state, render: string) {
      state.render = render;
    }
  },
  actions: {
    setToken(context, token: string) {
      context.commit('setToken', token);
    },
    setRender(context, render: string) {
      context.commit('setRender', render);
    }
  },
  plugins: [vuexLocal.plugin]
});
