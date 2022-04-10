<script setup lang="ts">
import { defineComponent, ref } from 'vue'
const current = ref<string[]>(['mail'])
</script>
<template>
  <a-layout>
    <a-layout-header class="layout-sider">
      <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
        <a-menu-item key="home" @click="$router.push({ path: '/' })">
        <template #icon>
          <icon-home />
        </template>
          首页
        </a-menu-item>
        <a-sub-menu>
          <template #icon><icon-tool /></template>
          <template #title>工具</template>
          <a-menu-item key="setting:1" @click="$router.push({ path: '/timestamp' })">时间戳转换</a-menu-item>
          <a-menu-item key="setting:2">QQ号查询</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>主页</a-breadcrumb-item>
        <a-breadcrumb-item>工具</a-breadcrumb-item>
        <a-breadcrumb-item>时间戳</a-breadcrumb-item>
      </a-breadcrumb>
      <div>
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      工具集合 ©2021
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.arco-layout-content {
  padding: 0 50px;
}

.arco-layout {
  height: calc(100vh);
}
</style>