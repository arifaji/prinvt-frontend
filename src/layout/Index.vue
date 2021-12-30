<template>
  <div>
    <section class="columns is-multiline">
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
    </section>
    {{ username }}
    {{ email }}
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