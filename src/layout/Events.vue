<template>
  <div>
    <navbar/>
    <base-body>
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
      <div class="column is-12 mt-2">
        <div class="card row columns is-multiline" style="width: inherit;">
          <div v-for="(card, index) in events" v-bind:key="index" class="column is-4">
            <event-cards :value="card" />
          </div>
        </div>
      </div>
    </base-body>
  </div>
</template>
<script>
import _ from 'lodash';
import moment from 'moment';
export default {
  mounted() {
    this.getEvents()
  },
  computed: {
    readMore(payload) {
      let text = payload
      const isReadMore = false
      const isReadLess = false
      if (payload && payload.length > 80) {
        text = text.substring(0, 80)

      }

      return { text, isReadMore, isReadLess}
    }
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    titleDate(payload) {
      return moment(payload).format('DD/MMM/YY hh:mm')
    },
    async getEvents() {
      try {
        const events = await this.$helpers.httpGet('/api/events')
        this.events = _.get(events, 'data')
      } catch (error) {
        this.events = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .column {
    display: block;
  }
</style>