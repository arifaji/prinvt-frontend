<template>
  <div :class="column">
    <b-field
      :label-position="labelPosition"
      :type="d_type"
      style="width: -webkit-fill-available"
      :message="message"
    >
      <template #label>
        <div>
          {{ label }}
          <!-- <em class="has-text-danger" v-if="required">*</em> -->
        </div>
      </template>
      <slot v-bind="slotData">
        <b-datetimepicker
          v-bind="$attrs"
          v-model="convertDate"
          icon="calendar-today"
          locale="id-ID"
          :timepicker="{ hourFormat: '24' }"
          horizontal-time-picker
        />
      </slot>
    </b-field>
  </div>
</template>
<script>
import inputMixin from "./mixins/input";
import moment from 'moment'
export default {
  name: "base-date",
  mixins: [inputMixin],
  computed: {
    convertDate: {
      get() {
        return new Date(this.value)
      },
      set(payload) {
        const isoString = moment(payload).toISOString()
        this.$emit('input', isoString)
      }
    }
  },
  method: {
  },
  watch: {
  }
};
</script>