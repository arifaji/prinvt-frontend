<template>
    <div :class="column">
        <b-field label-position="inside" 
          :type="d_type"
          :message="message">
          <template #label>
            <div>
              {{label}}
              <!-- <em class="has-text-danger" v-if="required">*</em> -->
            </div>
          </template>
          <slot v-bind="slotData">
            <b-input 
              :id=id 
              placeholder=" "
              type="text"
              v-model="d_value"
              v-on="listeners"
              v-bind="$attrs"
              :icon-right="isClearable.icon"
              :icon-right-clickable="isClearable.clickable"
              @icon-right-click="clearIconClick"
              @mouseover.native="onMouseover"
              @mouseout.native="onMouseleave"
              :required="required"
              :minlength="minlength"
              :maxlength="maxlength"
            />
          </slot>
        </b-field>
    </div>
</template>
<script>
export default {
  name: "base-field",
  props: {
    id: {
      required: true,
      type: String,
      description: "Tag input ID"
    },
    minlength: {
      type: Number,
      description: "Minimal input"
    },
    maxlength: {
      type: Number,
      description: "Input value"
    },
    required: {
      type: Boolean,
      description: "Whether input is required (adds an asterix *)"
    },
    valid: {
      type: Boolean,
      description: "Whether is valid",
      default: undefined
    },
    label: {
      type: String,
      description: "Input label (text before input)"
    },
    value: {
      type: [String, Number],
      description: "Input value"
    },
    addonRightIcon: {
      type: String,
      description: "Addon right icon"
    },
    addonLeftIcon: {
      type: String,
      description: "Addont left icon"
    },
    size: {
      type: String,
      description: "Input value"
    },
    clearable: {
      type: Boolean,
      description: "Whether input is can clearable with button"
    },
    externalValidation: {
      type: Function,
      default: null 
    }
  },
  data() {
    return {
      d_value: this.value,
      d_hover: false,
      d_type: '',
      message: [],
      focused: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.input,
        focus: this.onFocus,
        blur: this.onBlur,
        mouseover: this.onMouseover
      };
    },
    slotData() {
      return {
        focused: this.focused,
        ...this.listeners
      };
    },
    hasIcon() {
      const { addonRight, addonLeft } = this.$slots;
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined
      );
    },
    column () {
      const sizeChart = [
        {
          size: '1',
          class: 'is-full'
        },
        {
          size: '1/4',
          class: 'is-one-quarter'
        },
        {
          size: '1/3',
          class: 'is-one-third'
        },
        {
          size: '1/2',
          class: 'is-half'
        },
        {
          size: '2/3',
          class: 'is-two-thirds'
        },
        {
          size: '3/4',
          class: 'is-three-quarters'
        }
      ]

      const size = sizeChart.find(o => o.size === this.size)
      if (size) return `column ${size.class}`
      return null
    },
    isClearable () {
      if (this.clearable && this.d_hover) {
        return {
          icon: 'close-circle',
          clickable: true
        }
      }
      return {
        icon: '',
        clickable: false
      }
    }
  },
  methods: {
    clearMessage () {
      this.message = []
      this.d_type = ''
    },
    validate () {
      this.clearMessage()

      if (!this.d_value && this.required) {
        this.message.push(this.label + ' is required')
      } else if (this.d_value && this.d_value.length > this.maxlength) {
        this.message.push(this.label + ' input exceeded')
      } else if (this.minlength && this.d_value && this.d_value.length < this.minlength) {
        this.message.push(`Please lengthen this input to ${this.minlength} characters or more`)
      }

      if (this.externalValidation != null) {
        const message = this.externalValidation(this.d_value)
        if (message) { this.message.push(message) }
      }

      if (this.message.length === 0) {
        this.d_type = "is-success"
        return true
      } else {
        this.d_type = 'is-danger'
        return false
      }
    },
    onMouseover () {
      this.d_hover = true
    },
    onMouseleave () {
      this.d_hover = false
    },
    clearIconClick () {
      this.d_value = null;
      this.$emit("input", this.d_value);
    },
    input(value) {
      this.$emit("input", value);
      this.validate()
    },
    onFocus(value) {
      this.focused = true;
      this.$emit("focus", value);
    },
    onBlur(value) {
      this.focused = false;
      this.$emit("blur", value);
    }
  },
  watch: {
    value (n) {
      this.d_value = n
    }
  },
};
</script>