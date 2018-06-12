import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'bulma/css/bulma.css';
import Hero from './components/Hero.vue';

Vue.component('Hero', Hero);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
