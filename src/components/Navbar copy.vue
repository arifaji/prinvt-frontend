<template>
  <div class="hero-head is-primary has-background-white box-shadow">
    <nav class="navbar ">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://bulma.io">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>

    <a class="navbar-item is-hidden-desktop is-right" href="https://twitter.com/jgthms" target="_blank">
      <span class="icon" style="color: #55acee;">
        <i class="mdi mdi-twitter"></i>
      </span>
    </a>

    <div class="navbar-burger burger" data-target="navMenubd-example" @click="burgerAction">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenubd-example" :class="`navbar-menu ${navbarMenu ? 'is-active' : ''}`">
    <div class="navbar-start">
      <b-navbar-item>
          <router-link :to="{ name: 'home' }"> Home </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link :to="{ name: 'events' }"> Events </router-link>
        </b-navbar-item>
    </div>

    <div class="navbar-end">
      <a class="navbar-item is-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="mdi mdi-github"></i>
        </span>
      </a>
      <b-navbar-dropdown>
        <template #label>
          <div class="image" style="display: flex">
            <img
              class="is-48x48 is-rounded"
              style="width: auto"
              :src="avatar"
            />
            <span style="margin-left: 0.5em; margin-top: 1px">{{
              username
            }}</span>
          </div>
        </template>

        <router-link :to="{ name: 'account' }">
          <b-navbar-item>
            <span class="icon-text ml-4">
              <span class="icon">
                <i class="ml-1 mdi mdi-account"></i>
                <p class="ml-1">Account</p>
              </span>
            </span>
          </b-navbar-item>
        </router-link>

        <b-navbar-item @click="logout">
          <span class="icon-text ml-4">
            <span class="icon">
              <i class="mdi mdi-logout"></i>
              <p class="ml-1">Logout</p>
            </span>
          </span>
        </b-navbar-item>
      </b-navbar-dropdown>
      <!-- <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              <span class="icon">
                <i class="mdi mdi-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div> -->
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import _ from "lodash";
import defaultAvatar from "@/assets/user-profile.png";
export default {
  name: "navbar",
  data() {
    return {
      navbarMenu: false,
      username: '',
      avatar: defaultAvatar,
    };
  },
  mounted() {
    this.apiMe();
  },
  computed: {
    sidebarOpen() {
      return this.$store.getters.getItem("sidebarOpen");
    },
  },
  methods: {
    burgerAction() {
      this.navbarMenu = !this.navbarMenu
    },
    logout() {
      const loadingComponent = this.$buefy.loading.open();
      setTimeout(() => {
        loadingComponent.close();
        localStorage.removeItem("token");
        this.$router.push({ name: "index" });
      }, 3 * 1000);
    },
    async apiMe() {
      try {
        const user = await this.$helpers.httpGet("/api/me");
        this.username = _.get(user, "data.username", "Account");
        this.avatar = _.get(user, "data.avatar", defaultAvatar);
      } catch (error) {
        this.username = "Account";
        this.avatar = "@/assets/user-profile.png";
      }
    },
    sidebarAction() {
      console.log("action");
      this.$store.commit("setItem", {
        key: "sidebarOpen",
        object: !this.sidebarOpen,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .navbar-burger {
    margin-left: unset;
  }
  .navbar-item.is-right {
    margin-left: auto;
  }
</style>