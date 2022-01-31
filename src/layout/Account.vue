<template>
  <div>
    <navbar/>
    <base-body>
      <div class="column is-12">
        <div class="card row columns is-multiline is-vcentered is-centered" style="width: inherit;">
          <single-image id="avatar-image"
            class="column is-8"
            readonly
            :max-height="300"
            :max-width="300"
            rounded
            v-model="account.avatar"
          />
          <base-field
            size="1"
            id="accountFullName"
            ref="accountFullName"
            label="Fullname"
            validation="alphaNum"
            v-model="account.fullname"
          />
          <div class="column is-4">
            <b-button @click="save" class="is-fullwidth" style="margin-top: 2px;" size="" icon-left="content-save">
              Save
            </b-button>
          </div>
        </div>
      </div>

      <div class="column is-12 mt-2">
        <div class="card row columns is-multiline is-vcentered" style="width: inherit;">
          <base-field
            class="column is-4"
            id="seventname"
            ref="seventName"
            label=""
            placeholder="Event Name"
            :label-position="null"
            :no-validate="true"
          />
          <base-field
            size="1"
            id="seventLocation"
            ref="seventLocation"
            label=""
            placeholder="Event Location"
            :label-position="null"
            :no-validate="true"
          />
          <div class="column is-4">
            <b-button class="is-fullwidth" style="margin-top: 2px;" size="" icon-left="magnify">
              Search
            </b-button>
          </div>
        </div>
      </div>
    </base-body>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  mounted() {
    this.getAccount()
  },
  computed: {
  },
  data() {
    return {
      account: {
        fullname: null,
        avatar: null
      }
    }
  },
  methods: {
    async getAccount() {
      try {
        const user = await this.$helpers.httpGet("/api/account");
        this.account.fullname = _.get(user, "data.fullname", null);
        this.account.avatar = _.get(user, "data.avatar", null);
      } catch (error) {
        console.log(error)
      }
    },
    async save() {
      try {
        const user = await this.$helpers.httpPut("/api/account", this.account);
        console.log(user)
        this.$router.go()
      } catch (error) {
        this.$buefy.notification.open({
          message: _.get(error, "message"),
          duration: 5000,
          progressBar: true,
          type: "is-danger",
          pauseOnHover: true,
        });
      }
    }
  }
}
</script>

<style>
</style>