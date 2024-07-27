<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app color="primary" dark>
    <v-main>
      <component :is="$route.meta.layout">
        <RouterView/>
      </component>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
