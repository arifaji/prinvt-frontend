import Vue from "vue";
import Router from "vue-router";
import Index from './layout/Index.vue'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        // header: AppHeader,
       default: Index
        // footer: AppFooter
      }
    }
  ]
})