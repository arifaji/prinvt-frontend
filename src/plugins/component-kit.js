import "../assets/fontawesome/css/all.css";
import "../assets/materialdesignicons/css/materialdesignicons.min.css";
import globalComponents from "./globalComponents";

export default {
  install(Vue) {
    Vue.use(globalComponents);
  }
};