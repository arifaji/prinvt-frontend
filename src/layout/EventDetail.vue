<template>
  <div>
    <navbar/>
    <base-body>
      <div class="column is-12 mt-2">
        <div class="card row columns is-multiline is-vcentered" style="width: inherit;">
          <base-field
            class="column is-4"
            id="eventname"
            v-model="form.eventName"
            ref="eventName"
            label="Event Name"
            required
          />
          <base-field
            class="column is-4"
            id="eventDetail"
            v-model="form.eventDetail"
            ref="eventDetail"
            label="Event Detail"
            placeholder=""
            required
          />
          {{form.startDate}}
          <base-date
            class="column is-4"
            id="startDate"
            label="Start Date"
            v-model="form.startDate"
          />
          <!-- <div class="column is-4">
            <b-field label="Start Date" label-position="inside" style="width: -webkit-fill-available">
              <b-datetimepicker
                v-model="form.startDate"
                ref="startDate"
                icon="calendar-today"
                locale="id-ID"
                :timepicker="{ hourFormat: '24' }"
                :min-datetime="today"
                horizontal-time-picker
              />
            </b-field>
          </div>
          <div class="column is-4">
            <b-field label="End Date" label-position="inside" style="width: -webkit-fill-available">
              <b-datetimepicker
                :disabled="form.startDate ? false : true"
                v-model="form.endDate"
                ref="endDate"
                icon="calendar-today"
                locale="id-ID"
                :timepicker="{ hourFormat: '24' }"
                horizontal-time-picker
                :min-datetime="form.startDate"
              />
            </b-field>
          </div> -->
          <base-field
            class="column is-4"
            id="province"
            v-model="form.province"
            ref="province"
            label="Province"
            placeholder=""
            required
          />
          <base-field
            class="column is-4"
            id="city"
            v-model="form.city"
            ref="city"
            label="City"
            placeholder=""
            required
          />
          <base-field
            class="column is-4"
            id="detailLocation"
            v-model="form.detailLocation"
            ref="detailLocation"
            label="Detail Location"
            placeholder=""
            required
          />

          <div class="column is-4">
            <b-switch
              v-model="form.isMultiScan"
              :rounded="false"
              size="is-large"
              type="is-success"
            >
              Allow MultiScan
            </b-switch>              
          </div>

          <div class="column is-12">
            <b-button class="is-fullwidth" style="margin-top: 2px;" size="is-medium" icon-left="playlist-plus">
              Add Event
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
    this.getEvent()
  },
  computed: {
  },
  data() {
    return {
      today: new Date(),
      form: {
        eventName: null,
        eventDetail: null,
        startDate: null,
        endDate: null,
        province: null,
        city: null,
        detailLocation: null,
        isMultiScan: false
      }
    }
  },
  methods: {
    async getEvent() {
      try {
        const event = await this.$helpers.httpGet(`/api/event/${this.$route.params.id}`)
        this.form = _.get(event, 'data', this.form)
      } catch (error) {
        console.log(error)
        this.$router.push({ name: 'not-found' })
      }
    }
  }
}
</script>

<style>
.column {
  display: flex;
}
</style>