<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app color="primary" dark>
      <component :is="$route.meta.layout">
        <RouterView/>
      </component>
  </v-app>
</template>

<style scoped>

</style>
