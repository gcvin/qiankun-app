import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app-2' : '/'
  ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  router.afterEach(() => {
    if(location.pathname.startsWith('/app-2') && !history.state.current.startsWith('/app-2')) {
      history.state.current = '/app-2' + history.state.current
    }
  })
}

export default router
