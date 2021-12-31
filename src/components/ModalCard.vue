<template>
  <div :class="`modal ${show ? 'is-active': ''}`" tabindex="0" v-on:keyup.esc="outsideClose"  @keyup.esc="outsideClose">
    <div class="modal-background" v-on:click="outsideClose"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close" type="button" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot name="content"></slot>
      </section>
      <footer class="modal-card-foot">
        <b-button class="is-success">Save changes</b-button>
        <b-button class="">Cancel</b-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-card",
  props: {
    id: {
      // required: true,
      type: String,
      description: "Tag input ID"
    },
    title: {
      type: String,
      description: "Title Modal"
    },
    canCancel: {
      type: Boolean,
      default: true,
      description: 'Is component can canceled outside or not'
    }
  },
  created() {
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
  },
  methods: {
    keyPress({ key }) {
      if (this.show && (key === 'Escape' || key === 'Esc')) this.outsideClose()
    },
    outsideClose() {
      if (this.canCancel) this.close()
    },
    close() {
      this.show = false
      document.addEventListener('keyup', this.keyPress)
    },
    open() {
      this.show = true
      document.addEventListener('keyup', this.keyPress)
    }
  },
  watch: {
  },
};
</script>