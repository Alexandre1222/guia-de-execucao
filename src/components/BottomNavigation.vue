<script setup>
import router from '@/router';
</script>
<template>
<v-bottom-navigation grow bg-color="primary">
  <v-btn @click.stop="router.push('/login')">
    <v-icon>mdi-home</v-icon>

    <span>Inicio</span>
  </v-btn>

  <v-btn value="favorites">
    <v-icon>mdi-heart</v-icon>

    <span>Favorites</span>
  </v-btn>

  <v-btn value="nearby">
    <v-icon>mdi-map-marker</v-icon>

    <span>Nearby</span>
  </v-btn>
</v-bottom-navigation>
</template>
<style scoped>
</style>