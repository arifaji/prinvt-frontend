<template>
  <section class="hero is-fullheight is-light">
    <!-- Hero head: will stick at the top -->
    <navbar />

    <!-- Hero content: will be in the middle -->
    <base-body>
          <div class="column is-8">
            <div class="card row columns is-multiline is-vcentered">
              <base-field
                class="column is-4"
                id="seventname"
                ref="seventName"
                label="label here"
                placeholder="Event Name"
                
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="seventname"
                ref="seventName"
                label="label here"
                placeholder="Event Name"
                
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="seventname"
                ref="seventName"
                label="label here"
                placeholder="Event Name"
                
                :no-validate="true"
              />
              <base-field
                class="column is-4"
                id="seventLocation"
                ref="seventLocation"
                label="label here"
                placeholder="Event Location"
                
                :no-validate="true"
              />
              <div class="column is-4">
                <b-button class="is-fullwidth is-medium" style="margin-top: -5px;" size="" icon-left="magnify">
                  Search
                </b-button>
              </div>
            </div>
          </div>
          <div class="column is-2">
            <aside class="menu row columns">
              <div class="column card">
                <p class="menu-label">Servizi Arc</p>
                <ul class="menu-list">
                  <li>
                    <a
                      ><i class="fas fa-project-diagram"></i
                      >&nbsp;Actions&trade;</a
                    >
                    <ul>
                      <li><a>Members</a></li>
                      <li><a>Plugins</a></li>
                      <li><a>Add a member</a></li>
                    </ul>
                  </li>
                  <a
                    ><i class="fas fa-shield-alt"></i
                    >&nbsp;&nbsp;Security&trade;&nbsp;<span
                      class="tag is-primary is-rounded"
                      >In arrivo</span
                    ></a
                  >
                </ul>
              </div>
            </aside>
          </div>
          <!-- <div class="column is-7 is-align-self-center">
            <div class="box">
              <h1 class="title has-text-weight-light">
                Hello, <span class="has-text-weight-bold">username</span>.
              </h1>
              <p class="subtitle is-5 has-text-grey">
                Seleziona un servizio per continuare...
              </p>
            </div>
          </div> -->
    </base-body>
    <!-- Hero footer: will stick at the bottom -->
    <!-- <div class="hero-foot">
      <footer
        style="border-top: 1px solid hsl(0, 0%, 93%); padding-top: 1.7rem"
      >
        <div class="container">
          <div
            class="columns is-vcentered is-centered has-text-centered-mobile" style="margin-bottom: 1em;"
          >
            <div class="column is-narrow">
              <img alt="logo" />
            </div>
            <div class="column is-3">
              <h5
                class="
                  title
                  is-5
                  has-text-grey-light has-text-weight-normal
                  is-italic
                "
              >
                Arc ha come obiettivo il creare un'ecosistema semplice ma
                potente per aiutarti a gestire tutte le tue operazioni.
              </h5>
            </div>
            <div class="column is-4 is-narrow">
              &copy; 2020
              <a href="https://rgbcraft.com" class="has-text-grey-darker"
                >RGBCraft</a
              >
              & Artemis&trade;.
              <br />
              <i>Tutti i diritti riservati.</i>
            </div>
            <div class="column is-narrow">
              Sitemap
              <ul>
                <li><a class="has-text-grey">Home</a></li>
                <li><a class="has-text-grey">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div> -->
  </section>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {Navbar},
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
