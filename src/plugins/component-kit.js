import "../assets/fontawesome/css/all.css";
import "../assets/materialdesignicons/css/materialdesignicons.min.css";
import "../assets/scss/_floating.scss"
import globalComponents from "./globalComponents";

export default {
  install(Vue) {
    Vue.use(globalComponents);
  }
};
