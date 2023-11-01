import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      alias: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/about/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})

export default router
