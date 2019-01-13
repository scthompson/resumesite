import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
var VueScrollTo = require('vue-scrollTo');

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
