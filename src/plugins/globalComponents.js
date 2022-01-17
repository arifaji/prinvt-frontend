import BaseInput from "../components/BaseInput";
import BaseField from "../components/BaseField";
import ModalCard from "../components/ModalCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseField.name, BaseField);
    Vue.component(ModalCard.name, ModalCard);
    Vue.component(Sidebar.name, Sidebar);
    Vue.component(Navbar.name, Navbar);
  }
};
