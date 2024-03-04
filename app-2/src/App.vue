<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="app-2-el">
    <RouterView />
  </el-config-provider>
</template>
