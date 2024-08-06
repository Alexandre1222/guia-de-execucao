<script setup>

import PillarComponent from "@/components/PillarComponent.vue";
</script>

<template>
  <v-container fluid class=" pa-2 iosPaddingMain">
    <PillarComponent :file="null" :index="0" id="pillar_name" pillar_name="titulo foda">
      <template v-slot:pillar-description>
        Descrição foda
      </template>
    </PillarComponent>
  </v-container>
</template>

<style scoped>

</style>