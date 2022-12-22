<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="includes">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { useTagsView } from "@/stores/tagsView"
import { storeToRefs } from "pinia"
import {
  bubbleSort,
  bubbleSortAd1,
  bubbleSortFin,
  QuickSort
} from "@/hooks/sort"
const route = useRoute()
const store = useTagsView()
console.log(QuickSort([2, 1, 3, 4, 8, 6, 7, 10, 6, 123, 4, 1, 23, 5, 6]))

const { cachedViews } = storeToRefs(store)
const includes = computed(() => cachedViews.value as string[])
</script>
<style lang="scss" scoped>
.app-main {
  /* navbar 50px  */
  min-height: calc(100vh - 50px);
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
