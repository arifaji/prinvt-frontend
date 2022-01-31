<template>
  <div class="hero-head is-primary has-background-white box-shadow">
    <b-navbar class="ml-2">
      <template #brand>
        <b-navbar-item>
    <!-- <b-icon
          pack="fas"
          icon="bars"
          size="is-large"
          type="is-info"
          @click.native="sidebarAction"
        /> -->
          <img src="@/assets/img/Logo.png" alt="Prinvt." />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item>
          <router-link :to="{ name: 'home' }"> Home </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link :to="{ name: 'events' }"> Events </router-link>
        </b-navbar-item>
        <!-- <b-navbar-dropdown label="Info">
  <b-navbar-item href="#"> About </b-navbar-item>
  <b-navbar-item href="#"> Contact </b-navbar-item>
</b-navbar-dropdown> -->
      </template>

      <template #end>
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
      </template>
    </b-navbar>
  </div>
</template>

<script>
import _ from "lodash";
import defaultAvatar from '@/assets/user-profile.png'
export default {
  name: "navbar",
  data() {
    return {
      username: "",
      avatar: defaultAvatar
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
        this.avatar = '@/assets/user-profile.png';
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
.box-shadow {
  box-shadow: 0 0.025em 0.25em -0.125em
}
</style>