import BaseInput from "../components/BaseInput";
import BaseField from "../components/BaseField";

export default {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseField.name, BaseField);
  }
};
