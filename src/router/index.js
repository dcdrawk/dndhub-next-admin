import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Sign In',
    component: SignIn
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/create-account',
    name: 'Create Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "createAccount" */ '../views/CreateAccount.vue')
  },
  {
    path: '/races',
    name: 'Races',
    component: () => import(/* webpackChunkName: "races" */ '../views/races/Index.vue')
  },
  {
    path: '/races/new',
    name: 'New Race',
    component: () => import(/* webpackChunkName: "races" */ '../views/races/New.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
