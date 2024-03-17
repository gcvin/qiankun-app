<template>
  <div id="app-1" v-show="route.path.startsWith('/app-1')"></div>
  <div id="app-2" v-show="route.path.startsWith('/app-2')"></div>
  <RouterView></RouterView>
</template>

<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router'
import { loadMicroApp } from 'qiankun'
import { onMounted } from 'vue'
import * as stores from '@/stores/counter'

const store = stores.useAppStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true
  }
  const app = store.apps.find(app => route.path.startsWith(app.activeRule))
  store.curApp = app
  if (app && !app.microApp) {
    app.microApp = loadMicroApp({...app, props: {stores}})
    app.mounted = true
  }
})
router.afterEach((to) => {
  store.apps.forEach(app => {
    if(to.path.startsWith(app.activeRule)) {
      store.curApp = app
      if (!app.microApp) {
        app.microApp = loadMicroApp({...app, props: {stores}})
        app.mounted = true
      } else if (app.microApp.getStatus() === 'NOT_MOUNTED' && !app.mounted) {
        app.microApp.mount()
        app.mounted = true
      }
    } else if (app.microApp?.getStatus() === 'MOUNTED' && app.mounted) {
      app.microApp?.unmount()
      app.mounted = false
    }
  })
})
</script>