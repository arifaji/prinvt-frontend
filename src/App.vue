<template>
    <div id="app" class="">
      <b-loading v-model="isLoading"></b-loading>
      <section class="hero is-fullheight is-light">
        <router-view/>
      </section>
    </div>
</template>
<script>

export default {
  components: {
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  }
  
};
</script>
