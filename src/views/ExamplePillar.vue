<script setup>

import PillarComponent from "@/components/PillarComponent.vue";
import {usePillar} from "@/store/pillar.js";
import {storeToRefs} from "pinia";

const pillarStore = usePillar();

const {pillars} = storeToRefs(pillarStore)
console.log(pillars.value)
</script>

<template>
  <v-container fluid class="pa-2">
    <v-select density="comfortable" single-line hide-details class="mb-2" variant="outlined" label="Escolha um Pillar"
              bg-color="white" :items="pillars" item-title="pillarName" item-key="pk"></v-select>
    <PillarComponent :file="null" :index="0" id="pillar_name" pillar_name="titulo foda">
      <template v-slot:pillar-description>
        Descrição foda
      </template>
    </PillarComponent>
  </v-container>
</template>

<style scoped>

</style>