<template>
    <div :class="column">
        <b-field :label="label" label-position="inside" 
          type="is-success"
          message="This username is available">
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
    required: {
      type: Boolean,
      description: "Whether input is required (adds an asterix *)"
    },
    valid: {
      type: Boolean,
      description: "Whether is valid",
      default: undefined
    },
    alternative: {
      type: Boolean,
      description: "Whether input is of alternative layout"
    },
    label: {
      type: String,
      description: "Input label (text before input)"
    },
    error: {
      type: String,
      description: "Input error (below input)"
    },
    labelClasses: {
      type: String,
      description: "Input label css classes"
    },
    inputClasses: {
      type: String,
      description: "Input css classes"
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
    }
  },
  data() {
    return {
      d_value: this.value,
      d_hover: false,
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
      if (size) return 'column ' + size.class
      return 'column ' + sizeChart[0].class
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