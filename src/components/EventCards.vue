<template>
  <div class="card large">
    <div class="card-image">
      <figure class="image is-16by9">
        <img :src="value.eventImage" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="value.eventAvatar" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 no-padding">{{value.eventName}}</p>
          <!-- <p>
            <span class="title is-6">
              {{titleDate(value.startDate)}} - {{titleDate(value.endDate)}}
            </span>
          </p> -->
          <p class="subtitle is-6">{{value.province}} - {{value.city}}</p>
        </div>
      </div>
      <div class="content">
        <p class="has-text-weight-bold">{{titleDate(value.startDate)}} - {{titleDate(value.endDate)}}</p>
        <p id="ellipsis" :class="ellipsisClass">
          {{value.eventDetail}}
        </p>
        <a v-if="showReadMore" @click="readMore" class="has-text-info">{{labelReadMore}}</a>
        <div class="background-icon"><span class="icon-twitter"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'event-cards',
  props: {
    value: {
      type: Object
    }
  },
  data() {
    return {
      ellipsis: true
    }
  },
  computed: {
    isLongText() {
      try {
        const { scrollHeight = 0, clientHeight = 0 } = document.getElementById('ellipsis')
        if(scrollHeight > clientHeight) return true
        return false
      } catch (error) {
        return false
      }
    },
    ellipsisClass() {
      if (this.ellipsis) {
        return 'ellipsis is-ellipsis-2 has-text-justified'
      } else {
        return 'ellipsis has-text-justified'
      }
    },
    showReadMore() {
      return !this.isLongText
    },
    labelReadMore() {
      if(this.ellipsis) {
        return 'Read More'
      } else {
        return 'Read Less'
      }
    }
  },
  methods: {
    titleDate(payload) {
      return moment(payload).format('DD/MMM/YY hh:mm')
    },
    readMore() {
      this.ellipsis = !this.ellipsis
    }
  }

}
</script>

<style lang="scss" scoped>
 .ellipsis {
    display: block;
    /* Fallback for non-webkit */
    display: -webkit-box;
    /*   max-width: 400px; */
    /*   height: 109.2px; */
    /* Fallback for non-webkit */
    margin: 0 auto;
    /*   font-size: 26px; */
    line-height: 1.4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .is-ellipsis-1 {
    -webkit-line-clamp: 1;
  }

  .is-ellipsis-2 {
    -webkit-line-clamp: 2;
  }

  .is-ellipsis-3 {
    -webkit-line-clamp: 3;
  }

  .is-ellipsis-4 {
    -webkit-line-clamp: 4;
  }

  .is-ellipsis-5 {
    -webkit-line-clamp: 5;
  }

  .is-ellipsis-6 {
    -webkit-line-clamp: 6;
  }

  .is-ellipsis-7 {
    -webkit-line-clamp: 7;
  }

  .is-ellipsis-8 {
    -webkit-line-clamp: 8;
  }

  .is-ellipsis-9 {
    -webkit-line-clamp: 9;
  }

  .is-ellipsis-10 {
    -webkit-line-clamp: 10;
  }

</style>