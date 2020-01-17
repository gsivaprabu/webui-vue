import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import {
  ButtonPlugin,
  NavPlugin,
  CollapsePlugin,
  LinkPlugin,
  NavbarPlugin
} from "bootstrap-vue";

Vue.use(ButtonPlugin);
Vue.use(NavPlugin);
Vue.use(CollapsePlugin);
Vue.use(LinkPlugin);
Vue.use(NavbarPlugin);

Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");