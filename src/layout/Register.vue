<template>
  <div>
    <section class="hero is-success is-fullheight has-background-light">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <figure class="image container is-128x128">
                <img src="../assets/logo-2.png">
              </figure>
              <small class="subtitle has-text-grey">Create new account</small>
              <hr class="has-background-grey"/>
              <form @submit.prevent="formAction">
                <div class="field">
                  <div class="control">
                    <b-input size="is-large" placeholder="Fullname" autofocus="" required/>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <b-input size="is-large" type="email" placeholder="Email" autofocus="" required/>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <b-input size="is-large" type="password" placeholder="Password" required/>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <b-input size="is-large" type="password" placeholder="Confirm Password" required/>
                  </div>
                </div>
                <button type="submit" class="button is-block is-info is-large is-fullwidth">
                  Register 
                  <i class="fa fa-file-signature"></i>
                </button>
              </form>
            </div>
            <p class="has-text-grey">
              <router-link :to="{ name: 'login' }">
                <a>Already have account? Login</a> &nbsp;·&nbsp;
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import validator from '../util/validator'
export default {
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
    formAction() {
      alert('ok');
    },
    clickMe() {
      const valid = this.validator.validate(this.$refs)
      console.log(valid)
    }
  }
};
</script>