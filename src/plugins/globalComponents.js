import BaseInput from "../components/BaseInput";
import BaseField from "../components/BaseField";
import ModalCard from "../components/ModalCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SingleImage from "../components/SingleImage";
import BaseBody from "../components/BaseBody";
import EventCards from "../components/EventCards";

export default {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseField.name, BaseField);
    Vue.component(ModalCard.name, ModalCard);
    Vue.component(Sidebar.name, Sidebar);
    Vue.component(Navbar.name, Navbar);
    Vue.component(SingleImage.name, SingleImage);
    Vue.component(BaseBody.name, BaseBody);
    Vue.component(EventCards.name, EventCards);
    Vue.component()
  }
};
