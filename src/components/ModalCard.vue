<template>
  <section>
    <b-modal v-model="show" :width="400" :can-cancel="canCancel" scroll="keep">
      <slot></slot>
    </b-modal>
  </section>
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
    slotFooter() {
      if (this.$slots.footer) return true
      return false
    }
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
<style lang="scss" scoped>
  .modal-content {
    max-height: none !important;
  }
</style>