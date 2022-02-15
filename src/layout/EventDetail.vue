<template>
  <div>
    <navbar/>
    <base-body>
      <div class="column is-12 mt-2">
        <div class="card row columns is-multiline" style="width: -webkit-fill-available;">
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
          <base-date
            class="column is-4"
            id="startDate"
            label="Start Date"
            v-model="form.startDate"
          />
           <base-date
            class="column is-4"
            id="endDate"
            label="End Date"
            v-model="form.endDate"
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
            class="column is-12"
            id="detailLocation"
            v-model="form.detailLocation"
            type="textarea"
            ref="detailLocation"
            label="Detail Location"
            placeholder=""
            required
          />

          <div class="column is-4">
            <b-switch
              v-model="form.isMultiScan"
              :rounded="false"
              size="is-medium"
              type="is-success"
            >
              Allow MultiScan
            </b-switch>              
          </div>

          <div class="column is-12">
            <b-button @click="saveEvent" class="is-fullwidth" style="margin-top: 2px;" size="is-medium" icon-left="playlist-plus">
              Save
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
    },
    async saveEvent() {
      try {
        const event = await this.$helpers.httpPut(`/api/event`, this.form)
        this.form = _.get(event, 'data', this.form)
        this.$buefy.notification.open({
          message: "Saved",
          duration: 5000,
          progressBar: true,
          type: "is-success",
          pauseOnHover: true,
        });
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
.column {
  display: flex;
}
</style>