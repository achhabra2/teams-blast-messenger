import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'bulma/css/bulma.css';
import Hero from './components/Hero.vue';

const validateConfig = {
  classNames: {
    valid: 'is-success',
    invalid: 'is-danger'
  },
  classes: true
};

Vue.use(VeeValidate, validateConfig);
Vue.component('Hero', Hero);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
