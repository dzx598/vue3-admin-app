<template>
  <el-menu
    class="sidebar-container-menu"
    mode="vertical"
    :default-active="activeMenu"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
    :collapse="sidebar.opened"
    :collapse-transition="true"
  >
    <!-- 循环sidebar-item组件 -->
    <sidebar-item
      v-for="route in menuRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>
<script lang="ts" setup>
import scssVariables from "@/styles/variables.module.scss"
// 导入路由表
import { routes } from "@/router"

import { useAppStore } from "@/stores/app"
import { storeToRefs } from "pinia"
const store = useAppStore()
const { sidebar } = storeToRefs(store)
// 渲染路由
const menuRoutes = computed(() => routes)
const route = useRoute()
// 根据路由路径 对应 当前激活的菜单 页面刷新后 激活当前路由匹配的菜单
const activeMenu = computed(() => {
  const { path, meta } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
const isCollapse = ref(false)
</script>
