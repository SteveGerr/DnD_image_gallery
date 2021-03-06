import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store/Store'
Vue.use(Vuex)

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
