import Vue from "vue";
import Router from "vue-router";
import Index from './layout/Index.vue'
import Login from './layout/Login.vue'
import Register from './layout/Register.vue'
import ForgotPassword from './layout/Forgot-Password.vue'
import NotFound from './layout/404.vue'
import Home from './layout/Home.vue'
import Events from './layout/Events.vue'
import { token, noToken } from './util/routeGuard'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      beforeEnter: noToken,
      components: {
        // header: AppHeader,
       default: Index
        // footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        // header: AppHeader,
       default: Login
        // footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        // header: AppHeader,
       default: Register
        // footer: AppFooter
      }
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      components: {
        // header: AppHeader,
       default: ForgotPassword
        // footer: AppFooter
      }
    },
    {
      path: "/home",
      name: "home",
      beforeEnter: token,
      components: {
        // header: AppHeader,
       default: Home
        // footer: AppFooter
      }
    },
    {
      path: "/events",
      name: "events",
      beforeEnter: token,
      components: {
        // header: AppHeader,
       default: Events
        // footer: AppFooter
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})