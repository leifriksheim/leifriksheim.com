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
      meta: { title: "Menu" }
    },
    {
      path: "/cv",
      name: "cv",
      meta: { title: "CV" },
      component: () => import(/* webpackChunkName: "about" */ "./views/CV.vue")
    },
    {
      path: "/projects",
      name: "projects",
      meta: { title: "Projects" },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Projects.vue")
    },
    {
      path: "/project/:slug",
      name: "project",
      meta: { title: "Project" },
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Project.vue")
    }
  ]
});
