<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column has-text-centered">
            <h1 class="title">Verify your email</h1>
            <p class="subtitle">
              To use Prinvt, click the verification button in <br />
              the email we sent to <strong>{{user.email}}</strong>. <br />
              This helps keep your account secure. <br />
              No email in your inbox or spam folder? Let’s resend it. <br />
              Wrong address? Log out to sign in with a different email. <br />
              If you mistyped your email when signing up, create a new account.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted() {
    this.apiMe()
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async apiMe () {
      const { data: { data: user }} = await axios.get('/api/me')
      this.user = user
    }
  }
}
</script>

<style>
</style>