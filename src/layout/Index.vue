<template>
  <section class="hero has-background-light is-fullheight">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 class="title is-1">Prinvt</h1>
              <h2 class="subtitle has-text-success">One-Stop Event Planner.</h2>
              <p class="has-text-grey">Prinvt app helps organized event with easy private invitation.</p>
            </div>
            <div class="column right has-text-centered">
              <!-- <h1 class="title is-4">Sign up today</h1>
              <p class="description has-text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p> -->
              <form @submit.prevent="submit">
                <modal-card ref="modalRegister" :canCancel="false">
                  
                </modal-card>
                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="email" placeholder="Email" required>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input class="input is-medium" type="password" placeholder="Password" required>
                  </div>
                </div>

                <button type="submit" class="button is-block is-success is-fullwidth is-medium mb-1">Login</button>
                <router-link :to="{ name: 'forgot-password' }">
                  <small><em class="has-text-success">Forgot Password ?</em></small>
                </router-link>

                <hr style="margin:0.5em;" class="has-background-primary-light"/>
                <!-- <router-link :to="{ name: 'register' }"> -->
                  <b-button @click="openModalRegister" class="is-block is-info is-fullwidth is-medium mb-1">Create Account</b-button>
                <!-- </router-link> -->
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-instagram"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="level-right">
              <small class="level-item has-text-grey">
                &copy; Prinvt. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ModalCard from '../components/ModalCard.vue';
import validator from '../util/validator'
export default {
  components: { ModalCard },
  data() {
    return {
      email: null,
      username: null,
    };
  },
  computed: {
    validator() {
      return validator
    }
  },
  methods: {
    submit() {
      alert('submit');
    },
    openModalRegister() {
      this.$refs.modalRegister.open()
    },
    clickMe() {
      const valid = this.validator.validate(this.$refs)
      console.log(valid)
    }
  }
};
</script>
<style lang="scss" scoped>
  :root {
    --brandColor: hsl(166, 67%, 51%);
    --background: rgb(247, 247, 247);
    --textDark: hsla(0, 0%, 0%, 0.66);
    --textLight: hsla(0, 0%, 0%, 0.33);
  }

  body {
    background: var(--background);
    height: 100vh;
    color: var(--textDark);
  }

  .is-fullheight {
    display: flex;
    flex-direction: row; // this is default
    align-items: stretch; // this will stretch the children vertically
  }

  .field:not(:last-child) {
    margin-bottom: 1rem;
  }

  .register {
    margin-top: 2rem;
    background: white;
    border-radius: 10px;
  }

  .left,
  .right {
    padding: 4.5rem;
  }

  .left {
    border-right: 5px solid #F5F5F5;
  }

  .left .title {
    font-weight: 800;
    letter-spacing: -2px;
  }

  .left .colored {
    color: var(--brandColor);
    font-weight: 500;
    margin-top: 1rem !important;
    letter-spacing: -1px;
  }

  .left p {
    color: var(--textLight);
    font-size: 1.15rem;
  }

  .right .title {
    font-weight: 800;
    letter-spacing: -1px;
  }

  .right .description {
    margin-top: 1rem;
    margin-bottom: 1rem !important;
    color: var(--textLight);
    font-size: 1.15rem;
  }

  .right small {
    color: var(--textLight);
  }

  input {
    font-size: 1rem;
  }

  input:focus {
    border-color: var(--brandColor) !important;
    box-shadow: 0 0 0 1px var(--brandColor) !important;
  }

  .fab,
  .fas {
    color: var(--textLight);
    margin-right: 1rem;
  }
</style>