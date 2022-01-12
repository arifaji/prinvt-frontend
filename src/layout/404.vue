<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="title">404 Page Not Found</h1>
            <p class="subtitle">
              An unexpected error has occurred. Please contact the site owner.
            </p>
            <router-link :to="{ path: '/' }">
              <a class="button">Home</a>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>