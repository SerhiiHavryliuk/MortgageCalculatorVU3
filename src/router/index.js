import { createRouter, createWebHashHistory } from 'vue-router'
import BanksView from '../views/BanksView.vue'

const routes = [
  {
    path: '/',
    name: 'banks',
    component: BanksView
  },
  {
    path: '/calc',
    name: 'calc',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CalcView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
