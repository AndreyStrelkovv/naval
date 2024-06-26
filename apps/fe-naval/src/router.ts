import { createWebHistory, createRouter } from "vue-router"

import Home from "./pages/Home.vue"
import Login from "./pages/Login.vue"
import Signup from "./pages/Signup.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
