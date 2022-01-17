<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item>
        <!-- <b-icon
          pack="fas"
          icon="bars"
          size="is-large"
          type="is-info"
          @click.native="sidebarAction"
        /> -->
        <img
          src="@/assets/img/Logo.png"
          alt="Prinvt."
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <router-link :to="{ name: 'home' }">
          Home
        </router-link>
      </b-navbar-item>
      <b-navbar-item> 
        <router-link :to="{ name: 'events' }">
          Events
        </router-link>
      </b-navbar-item>
      <!-- <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"> About </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown> -->
    </template>

    <template #end>
      <b-navbar-dropdown>
        <template #label>
            <div class="image" style="display: flex;">
              <img
                class="is-48x48 is-rounded"
                style="width: auto;"
                src="@/assets/user-profile.png"
              >
              <span style="margin-left: 0.5em; margin-top: 1px;">{{name}}</span>
            </div>
        </template>

        <b-navbar-item>
          <span class="icon-text ml-4">
            <span class="icon">
              <i class="mdi mdi-cog"></i>
              <p class="ml-1">Setting</p>
            </span>
          </span>
        </b-navbar-item>

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
</template>

<script>
import _ from 'lodash'
export default {
  name: "navbar",
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    this.apiMe()
  },
  computed: {
    sidebarOpen() {
      return this.$store.getters.getItem('sidebarOpen')
    }
  },
  methods: {
    logout() {
      const loadingComponent = this.$buefy.loading.open()
      setTimeout(() => {
        loadingComponent.close()
        localStorage.removeItem('token');
        this.$router.push({ name: 'index' })
      }, 3 * 1000)
    },
    async apiMe () {
      try {
        const user = await this.$helpers.httpGet('/api/me');
        this.name = _.get(user, 'data.name', 'Account');
      } catch (error) {
        this.name = 'Account'
      }
    },
    sidebarAction() {
      console.log('action')
      this.$store.commit('setItem', { key: 'sidebarOpen', object: !this.sidebarOpen });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>