import Vue from "vue";
import Router from "vue-router";
import VueAnime from "vue-animejs";
import Home from "@/components/Home";
import pk870 from "@/components/pk870";
import pkcmelt from "@/components/pkcmelt";

Vue.use(Router);
Vue.use(VueAnime);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/pk87.0",
      name: "pk87.0",
      component: pk870
    },
    {
      path: "/pkc.melt",
      name: "pkc.melt",
      component: pkcmelt
    }
  ]
});
