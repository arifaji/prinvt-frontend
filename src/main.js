import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import CompKit from "./plugins/component-kit";
import router from "./router"
import { store } from "./store/index"
// import axiosConfig from "./util/axios.config"

Vue.use(Buefy)
Vue.use(CompKit)
Vue.config.productionTip = false

// axiosConfig()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
