import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import CompKit from "./plugins/component-kit";
import router from "./router"

Vue.use(Buefy)
Vue.use(CompKit)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
