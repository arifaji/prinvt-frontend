<template>
  <base-body>
    <div class="column is-12 mt-4">
      <div class="card row columns is-multiline is-vcentered is-flex-direction-column" style="width: inherit;">
          <h1 class="title is-12">404 Page Not Found</h1>
          <p class="subtitle is-12">
            An unexpected error has occurred. Please contact the site owner.
          </p>
          <router-link :to="{ path: '/' }">
            <a class="button">Home</a>
          </router-link>
        </div>
    </div>
  </base-body>
</template>

<script>
export default {
  
};
</script>

<style>
</style>