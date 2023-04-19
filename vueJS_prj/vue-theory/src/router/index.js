import { createRouter, createWebHistory } from 'vue-router'
import TheHome from "@/components/TheHome.vue"
import TheComputed from "../views/TheComputed.vue"
import StyleBinding from "../views/StyleBinding.vue"
import ConditionalRendering from "../views/ConditionalRendering.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHome
  },
  {
    path: '/computed',
    name: 'computed',
    component: TheComputed
  },
  {
    path: '/style-binding',
    name: 'style-binding',
    component: StyleBinding
  },
  {
    path: '/conditional-rendering',
    name: 'conditional-rendering',
    component: ConditionalRendering
  },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
