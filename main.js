import Vue from 'Vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import vueSmoothScroll from 'vue2-smooth-scroll';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.css';

Vue.use(BootstrapVue);
Vue.use(vueSmoothScroll);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
