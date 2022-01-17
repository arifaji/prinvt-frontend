<template>
    <div id="app" class="">
      <b-loading v-model="isLoading"></b-loading>
      <router-view/>
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
