<template>
  <modal-card ref="modalRegister" :canCancel="false" style="width: auto">
    <form>
      <div class="modal-card" style="width: auto;">
        <header class="modal-card-head">
          <p class="modal-card-title">Register</p>
            <button
              type="button"
              class="delete"
              @click="close"/>
        </header>
        <section class="modal-card-body is-justify-content-start">
          <base-field
            ref="fullname"
            v-model="form.fullname"
            label="Fullname"
            id="register-fullname"
            :minlength="3"
            validation="alphaNum"
            required
          />

          <base-field
            ref="email"
            v-model="form.email"
            label="Email"
            id="register-email"
            validation="email"
            required
          />

          <base-field
            ref="password"
            v-model="form.password"
            label="Password"
            id="register-password"
            type="password"
            required
          />

          <base-field
            ref="confirmPassword"
            v-model="form.confirmPassword"
            label="Confirm Password"
            id="register-confirm-password"
            type="password"
            required
            :externalValidation="confirmPassword"
          />

        </section>
        <footer class="modal-card-foot">
          <b-button
            label="Sign Up"
            type="is-success"
            @click="signUp"
          />
          <b-button
            label="Cek"
            type="is-success"
            @click="cek"
          />
        </footer>
      </div>
    </form>
  </modal-card>
</template>

<script>
import BaseField from '../../components/BaseField.vue';
import { validate } from '../../util/validator';
import axios from 'axios';
export default {
  components: { BaseField },
  data() {
    return {
      form: {
        fullname: null,
        email: null,
        password: null,
        confirmPassword: null
      }
    }
  },
  methods: {
    open() {
      this.$refs.modalRegister.open();
    },
    close() {
      this.$refs.modalRegister.close();
    },
    confirmPassword() {
      if (this.form.password !== this.form.confirmPassword) {
        return 'Password not match'
      }
    },
    signUp() {
      const valid = validate(this.$refs);
      this.$store.commit('setItem', { key: 'form', object: this.form });
      if (!valid) alert('OH NOOOO')
    },
    async cek() {
      const form = this.$store.getters.getItem('form')
      console.log(process.env.VUE_APP_API)
      const api = '/api/nope'
      const result = await axios.post(api, form)
      console.log(result);
    }
  }
}
</script>

<style>

</style>