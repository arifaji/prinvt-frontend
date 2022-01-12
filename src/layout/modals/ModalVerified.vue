<template>
  <modal-card ref="modalRegister" style="width: auto">
    <div class="card">
      <div class="card-content">
        <div class="content">
          To use Prinvt, click the verification button in
          the email we sent to <strong>{{message.email}}</strong>.
          This helps keep your account secure.
          No email in your inbox or spam folder? <a><strong>Let’s resend it.</strong></a>
        </div>
      </div>
    </div>
  </modal-card>
</template>

<script>
export default {
  data() {
    return {
      message: {
        email: '',
        link: ''
      }
    };
  },
  methods: {
    open() {
      this.$refs.modalRegister.open();
    },
    close() {
      this.$refs.modalRegister.close();
    },
    setData({ email, link}) {
      this.message.email = email
      this.message.link = link
    }
  },
};
</script>

<style>
</style>