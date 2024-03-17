import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubContainer from '../views/SubContainer.vue'
import SettingHome from '../views/SettingHome.vue'
import SettingUser from '../views/SettingUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SubContainer,
      children: [
        {
          path: '',
          name: 'setting-home',
          component: SettingHome
        },
        {
          path: 'user',
          name: 'setting-user',
          component: SettingUser
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: SubContainer
    },
  ]
})

export default router
