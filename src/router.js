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
      component: Home
    },
    {
      path: "/cv",
      name: "cv",
      component: () => import(/* webpackChunkName: "about" */ "./views/CV.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Projects.vue")
    },
    {
      path: "/project/:slug",
      name: "project",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Project.vue")
    }
  ]
});
