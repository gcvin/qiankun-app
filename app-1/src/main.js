import '@/assets/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

let app

const render = (container, stores) => {
  app = createApp(App)
  app.config.globalProperties.stores = stores
  app
    .use(router)
    .use(createPinia())
    .use(ElementPlus)
    .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container, stores } = props
      render(container, stores)
      console.log(props.name, 'mount')
    },
    bootstrap() {},
    unmount(props) {
      app.unmount()
      console.log(props.name, 'unmount')
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
