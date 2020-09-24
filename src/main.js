import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'
import 'buefy/dist/buefy.css'
import "./assets/styles/main.scss";

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
