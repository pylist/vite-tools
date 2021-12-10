<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IconHome,
  IconTool,
} from '@arco-design/web-vue/es/icon'
const current = ref<string[]>(['mail'])
</script>
<template>
  <a-layout>
    <a-layout-header class="layout-sider">
      <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
        <a-menu-item key="home" @click="$router.push({ path: '/' })">
          <template #icon>
            <IconHome />
          </template>
          首页
        </a-menu-item>
        <a-sub-menu key="0">
          <template #title>
            <IconTool />工具
          </template>
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
      <router-view></router-view>
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