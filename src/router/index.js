import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/poetry',
    name: 'Poetry',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Poetry" */ '../views/Poetry.vue')
    },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
