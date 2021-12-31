<template>
  <div>
    <section class="hero is-primary is-fullheight is-fullwidth">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-multiline">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                <!-- <div class="field"> -->
                  <base-field
                    id="username"
                    ref="username"
                    v-model="username"
                    label="Username 3"
                    required
                    :isClearable="true"
                    :externalValidation="validator.alphaNum"
                    :minlength="3"
                  />
                <!-- </div> -->
                <div class="field">
                  <base-field
                    id="email"
                    ref="password"
                    v-model="email"
                    label="Email"
                    :externalValidation="validator.email"
                    required
                  />
                </div>
                <div class="field">
                  <label for="" class="checkbox">
                    <input type="checkbox">
                  Remember me
                  </label>
                </div>
                <div class="field">
                  <b-button class="is-success" @click="clickMe">Login</b-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="columns is-multiline">
      <base-field
        id="username"
        ref="username"
        size="1/2"
        v-model="username"
        label="Username 3"
        required
        :isClearable="true"
        :externalValidation="validator.alphaNum"
      />
      <base-field
        id="email"
        ref="password"
        size="1"
        v-model="email"
        label="Email"
        :externalValidation="validator.email"
      />
      <b-button @click="clickMe">Click Me</b-button>
    </section> -->
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
    clickMe() {
      const valid = this.validator.validate(this.$refs)
      console.log(valid)
    }
  }
};
</script>