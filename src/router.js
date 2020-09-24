import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home" }
    },
    {
      path: "/cv",
      name: "cv",
      meta: { title: "Experience" },
      component: () => import(/* webpackChunkName: "about" */ "./views/CV.vue")
    },
    {
      path: "/contact",
      name: "contact",
      meta: { title: "Contact" },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/projects",
      name: "projects",
      meta: { title: "Projects" },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Projects.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
