import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home" },
    },
    {
      path: "/cv",
      name: "cv",
      meta: { title: "Experience" },
      component: () => import(/* webpackChunkName: "cv" */ "./views/CV.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      meta: { title: "Contact" },
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue"),
    },
    {
      path: "/work",
      name: "work",
      meta: { title: "Work" },
      component: () =>
        import(/* webpackChunkName: "work" */ "./views/Work.vue"),
    },
    {
      path: "/iaac",
      name: "iaac",
      meta: { title: "IAAC" },
      component: () =>
        import(/* webpackChunkName: "iaac" */ "./views/IAAC.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
