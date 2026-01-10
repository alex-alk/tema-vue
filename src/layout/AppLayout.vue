<script setup>
import AppFooter from './AppFooter.vue'
import AppMenu from './AppMenu.vue'
import AppTopbar from './AppTopbar.vue'
</script>

<template>
  <AppTopbar />
  <AppMenu />
  <div class="ml-65 pb-15 pl-6 pr-6">
    <router-view></router-view>
  </div>
  <AppFooter />
</template>
