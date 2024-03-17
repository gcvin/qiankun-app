<script setup>
import { RouterView } from 'vue-router'
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance()
const store = proxy.stores.useCounterStore()
const count = ref(store.count)
store.$subscribe((_, state) => {
  count.value = state.count
})
</script>

<template>
  <el-config-provider namespace="app-1-el">
    <RouterView />
    {{ count }}
    <el-button @click="store.count++">click</el-button>
  </el-config-provider>
</template>
