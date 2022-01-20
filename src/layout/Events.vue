<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="section">
        <section class="hero card is-white welcome is-small mb-2">
          <div class="hero-body">
            <div class="row columns is-multiline is-vcentered">
              <base-field
                class="column is-4"
                id="seventname"
                v-model="searchBar.eventName"
                ref="seventName"
                label=""
                placeholder="Event Name"
                :label-position="null"
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="seventLocation"
                v-model="searchBar.eventLocation"
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
        </section>

        <section class="hero card is-white welcome is-small mb-2">
          <div class="hero-body">
            <div class="row columns is-multiline is-vcentered">
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
              <div class="column is-4">
                <b-field label="Start Date" label-position="inside">
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
                <b-field label="End Date" label-position="inside">
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
              </div>
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
                <b-button @click.native="addEvent" class="is-fullwidth" style="margin-top: 2px;" size="is-medium" icon-left="playlist-plus">
                  Add Event
                </b-button>
              </div>
            </div>
          </div>
        </section>
        
        <div class="row columns is-multiline">
          <div v-for="(card, index) in events" v-bind:key="index" class="column is-4">
            <div class="card large">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img :src="card.eventImage" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="card.eventAvatar" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4 no-padding">{{card.eventName}}</p>
                    <!-- <p>
                      <span class="title is-6">
                        {{titleDate(card.startDate)}} - {{titleDate(card.endDate)}}
                      </span>
                    </p> -->
                    <p class="subtitle is-6">{{card.province}} - {{card.city}}</p>
                  </div>
                </div>
                <div class="content">
                  <p class="has-text-weight-bold">{{titleDate(card.startDate)}} - {{titleDate(card.endDate)}}</p>
                  {{card.eventDetail}}
                  <div class="background-icon"><span class="icon-twitter"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cardsData } from './cardData'
import _ from 'lodash'
import moment from 'moment'
export default {
  mounted() {
    this.getEvents()
  },
  computed: {
    eStartDate() {
      return this.startDate
    }
  },
  data() {
    return {
      today: new Date(),
      cardData: cardsData,
      events: [],
      searchBar: {
        eventName: null,
        eventLocation: null
      },
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
    async addEvent() {
      try {
        const valid = await this.$validator.validate([
          this.$refs.eventName,
          this.$refs.eventDetail,
          // this.$refs.startDate,
          // this.$refs.endDate,
          this.$refs.province,
          this.$refs.city,
          this.$refs.detailLocation
        ])
        if (!valid) return;
        await this.$helpers.httpPost('/api/event', this.form)
        this.getEvents()
      } catch (error) {
        this.$buefy.notification.open({
          message: _.get(error, 'message'),
          duration: 5000,
          progressBar: true,
          type: 'is-danger',
          pauseOnHover: true
        })
      }
    },
    async getEvents() {
      try {
        const events = await this.$helpers.httpGet('/api/events')
        this.events = _.get(events, 'data')
      } catch (error) {
        this.events = []
      }
    },
    titleDate(payload) {
      return moment(payload).format('DD/MMM/YY hh:mm')
    }
    
  }
}
</script>

<style>
</style>