<template>
  <div id="app-1" v-show="route.path.startsWith('/app-1')"></div>
  <div id="app-2" v-show="route.path.startsWith('/app-2')"></div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { loadMicroApp } from 'qiankun'
import { onMounted } from 'vue';
import config from '@/config'

const { subApps, mounted } = config
const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true
  }
  const app = subApps.find(app => route.path.startsWith(app.activeRule))
  if (app && !app.microApp) {
    app.microApp = loadMicroApp(app)
    mounted[app.name] = true
  }
})
router.afterEach((to) => {
  subApps.forEach(app => {
    if(to.path.startsWith(app.activeRule)) {
      if (!app.microApp) {
        app.microApp = loadMicroApp(app)
        mounted[app.name] = true
      } else if (app.microApp.getStatus() === 'NOT_MOUNTED' && !mounted[app.name]) {
        app.microApp.mount()
        mounted[app.name] = true
      }
    } else if (app.microApp?.getStatus() === 'MOUNTED' && mounted[app.name]) {
      app.microApp?.unmount()
      mounted[app.name] = false
    }
  })
})
</script>