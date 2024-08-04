<script setup>
import HeaderNav from "@/components/HeaderNav.vue";
import BottomNavigation from '@/components/BottomNavigation.vue'
</script>

<template>
  <v-main>
    <HeaderNav/>
    <slot/>
    <BottomNavigation/>
  </v-main>
</template>

<style scoped>

</style>