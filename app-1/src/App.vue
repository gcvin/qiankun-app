<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="app-1-el">
    <RouterView />
  </el-config-provider>
</template>
