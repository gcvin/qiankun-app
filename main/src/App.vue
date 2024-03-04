<script setup>
import { RouterView, useRoute } from 'vue-router'
import { Menu, HomeFilled } from '@element-plus/icons-vue'

const route = useRoute()
</script>

<template>
  <div class="main-app">
    <el-menu :default-active="route.path" router unique-opened>
      <el-menu-item index="/">
        <template v-slot:title>
          <el-icon><HomeFilled /></el-icon>
          <span>Home</span>
        </template>
      </el-menu-item>
      <el-sub-menu index='/app-1'>
        <template v-slot:title>
          <el-icon><Menu /></el-icon>
          <span>App-1</span>
        </template>
        <el-menu-item index="/app-1/">Home</el-menu-item>
        <el-menu-item index="/app-1/about">About</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/app-2">
        <template v-slot:title>
          <el-icon><Menu /></el-icon>
          <span>App-2</span>
        </template>
        <el-menu-item index="/app-2/">Home</el-menu-item>
        <el-menu-item index="/app-2/about">About</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <RouterView />
  </div>
</template>

<style scoped>
.main-app {
  display: flex;
}
.el-menu {
  width: 200px;
  min-height: 100vh;
  margin-right: 20px;
}
</style>
