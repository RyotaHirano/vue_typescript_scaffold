import Vue from "vue";
import App from "./components/App.vue";
import "../html/index.pug";
import "../css/style.scss";

import myAlert from "./utils/myAlert";

document.addEventListener("DOMContentLoaded", () => myAlert("TypeScript"));

new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  }
});
