<script setup>
import router from '@/router';
import responsiveBreakpoints from "@/helpers/responsiveBreakpoints.js";
import {ref, watch} from "vue";

const activeBreakpoint  = responsiveBreakpoints();
const isMobile = ref(activeBreakpoint.value === 'mobile');

watch(activeBreakpoint, (newBreakpoint) => {
  isMobile.value = newBreakpoint === 'mobile';
});
</script>
<template>
<v-bottom-navigation grow v-if="isMobile" bg-color="primary">
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