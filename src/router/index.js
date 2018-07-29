import Vue from "vue";
import Router from "vue-router";
import VueAnime from "vue-animejs";
import Home from "@/components/Home";

Vue.use(Router);
Vue.use(VueAnime);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
