const validator = require('../../util/validator')
const inputMixin = {
  props: {
    id: {
      required: true,
      type: String,
      description: "Tag input ID"
    },
    placeholder: {
      type: String,
      description: "Placeholder"
    },
    type: {
      type: String,
      default: "text",
      description: "Type of input"
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
    validation: {
      type: String,
      description: "validator from utill",
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
      description: "column size"
    },
    inputSize: {
      type: String,
      description: "input size"
    },
    clearable: {
      type: Boolean,
      description: "Whether input is can clearable with button"
    },
    externalValidation: {
      type: Function,
      default: null
    },
    labelPosition: {
      type: String,
      default: "inside",
      description: "label position"
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
    column() {
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
    isClearable() {
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
    },
    passwordReveal() {
      return this.type === 'password'
    }
  },
  methods: {
    clearMessage() {
      this.message = []
      this.d_type = ''
    },
    validate() {
      this.clearMessage()

      if (!this.d_value && this.required) {
        this.message.push('Please fill out this field.')
      } else if (this.d_value && this.d_value.length > this.maxlength) {
        this.message.push(this.label + ' field exceeded.')
      } else if (this.minlength && this.d_value && this.d_value.length < this.minlength) {
        this.message.push(`Please lengthen this field to ${this.minlength} characters or more`)
      }

      if (this.externalValidation != null) {
        const message = this.externalValidation(this.d_value)
        if (message) { this.message.push(message) }
      }

      if (this.validation && validator[this.validation]) {
        const message = validator[this.validation](this.d_value)
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
    onMouseover() {
      this.d_hover = true
    },
    onMouseleave() {
      this.d_hover = false
    },
    clearIconClick() {
      this.d_value = null;
      this.$emit("input", this.d_value);
    },
    input(value) {
      this.$emit("input", value);
      this.validate();
    },
    onFocus(value) {
      this.focused = true;
      this.validate();
      this.$emit("focus", value);
    },
    onBlur(value) {
      this.focused = false;
      this.$emit("blur", value);
    }
  },
  watch: {
    value(n) {
      this.d_value = n
    }
  }
}

export default inputMixin