<template>
  <div class="w-full flex justify-start gap-4 overflow-x-auto p-4">
    <router-link v-for="(route, index) in routes" :to="route.path" :key="index">
      <div
        class="bg-green-300 rounded-md text-slate-900 h-16 w-32 p-1"
        :class="{ 'bg-amber-300 text-white': $route.path === route.path }"
      >
        {{ route.meta!.title }}
      </div>
    </router-link>
  </div>
  <router-view class="p-2"></router-view>
</template>

<script setup lang="ts">
import { routes } from '@/router'
</script>

<style scoped></style>
