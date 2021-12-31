import BaseInput from "../components/BaseInput";
import BaseField from "../components/BaseField";
import ModalCard from "../components/ModalCard";

export default {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseField.name, BaseField);
    Vue.component(ModalCard.name, ModalCard);
  }
};
