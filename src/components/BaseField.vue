<template>
    <div :class="column">
        <b-field :label-position="labelPosition" 
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
              :size="inputSize"
              :id=id 
              :placeholder="placeholder"
              :type="type"
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
              :password-reveal="passwordReveal"
            />
          </slot>
        </b-field>
    </div>
</template>
<script>
import inputMixin from './mixins/input'
export default {
  name: "base-field",
  mixins: [inputMixin]
};
</script>