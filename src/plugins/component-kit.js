import "../assets/fontawesome/css/all.css";
import "../assets/materialdesignicons/css/materialdesignicons.min.css";
// import "../assets/scss/_floating.scss"
import globalComponents from "./globalComponents";
import helpers from "./helpers";
import validator from "../util/validator"

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.helpers = helpers;
    Vue.validator = validator;
    Vue.prototype.$helpers = helpers;
    Vue.prototype.$validator = validator;
  }
};
