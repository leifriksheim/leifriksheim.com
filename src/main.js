import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload);

import "./styles/variables.css";
import "./styles/markdown.css";
import "./styles/sanitize.css";
import "./styles/fonts.css";
import "./styles/typography.css";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
