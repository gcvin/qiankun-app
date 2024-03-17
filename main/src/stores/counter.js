import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useAppStore = defineStore('app', () => {
  const apps = ref([
    {
      name: 'app-1', // 子应用名称，跟package.json一致
      entry: '//localhost:5174', // 子应用入口，本地环境下指定端口
      container: '#app-1', // 挂载子应用的dom
      activeRule: '/app-1', // 路由匹配规则
    },
    {
      name: 'app-2',
      entry: '//localhost:5175',
      container: '#app-2',
      activeRule: '/app-2'
    }
  ])
  const curApp = ref(null)

  return { apps, curApp }
})
