import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile";
import Project from "../views/Project";
import Timeline from "../views/Timeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "DevlUp Portfolio" }
  },
  {
    path: "/about",
    name: "About",
    component: Home,
    meta: { title: "About Us" }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Project,
    meta: { title: "Our Projects" }
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline,
    meta: { title: "Timeline" }
  },
  {
    path: "/blog",
    name: "Blog",
    component: Home,
    meta: { title: "DevlUp's Blog" }
  },
  {
    path: "/team",
    name: "Team",
    component: Profile,
    meta: { title: "Our Team" }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
