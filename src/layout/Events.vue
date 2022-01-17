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
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="eventDetail"
                v-model="form.eventDetail"
                ref="eventDetail"
                label="Event Detail"
                placeholder=""
                :no-validate="true"
              />
              <div class="column is-4">
                <b-field label="Start Date" label-position="inside">
                  <b-datetimepicker
                    v-model="form.startDate"
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
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="city"
                v-model="form.city"
                ref="city"
                label="City"
                placeholder=""
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="detailLocation"
                v-model="form.detailLocation"
                ref="detailLocation"
                label="Detail Location"
                placeholder=""
                :no-validate="true"
              />
              
              
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
                    <p class="subtitle is-6">{{card.province}} - {{card.city}}</p>
                  </div>
                </div>
                <div class="content">
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
        isMultiScan: null
      }
    }
  },
  methods: {
    addEvent() {
      console.log(JSON.stringify(this.form))
      this.getEvents()
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

<style>
</style>