<template>
    <div :class="column">
        <form class="form">
            <div class="field">
            <div class="control has-floating-label">
                <slot v-bind="slotData">
                    <input 
                        class="input is-medium with-floating-label"
                        :id=id 
                        placeholder=" "
                        type="text"
                        :value="value"
                        v-on="listeners"
                        v-bind="$attrs"
                    />
                </slot>
                <label class="label is-floating-label" :for="label">
                    {{label}}
                    <span v-if="required" class="has-text-danger">*</span>
                </label>
            </div>
            </div>
        </form>
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
    }
  },
  data() {
    return {
      focused: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
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
    }
  },
  methods: {
    updateValue(evt) {
      let value = evt.target.value;
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
  }
};
</script>