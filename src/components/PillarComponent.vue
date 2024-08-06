<script setup>
import {ref} from "vue";

const props = defineProps(['hide_download', 'file', 'id', 'index', 'name', 'pillar_name'])
// const open = ref({});
const open_card_pillar = ref("");
const open_card_value_area = ref("");
const open_card_value_attribute = ref("");
const open_card_orientation = ref("");

function toggle_card(card_name, nivel) {
  if (nivel === "pillar") {
    if (open_card_pillar.value === card_name) {
      open_card_pillar.value = "";
    } else {
      open_card_pillar.value = card_name;
      open_card_value_area.value = "";
      open_card_value_attribute.value = "";
      open_card_orientation.value = "";
    }
  } else if (nivel === "value_area") {
    open_card_pillar.value = "";
    open_card_value_attribute.value = "";
    open_card_orientation.value = "";
    if (open_card_value_area.value === card_name) {
      open_card_value_area.value = "";
    } else {
      open_card_value_area.value = card_name;
    }
  } else if (nivel === "value_attribute") {
    open_card_orientation.value = "";
    if (open_card_value_attribute.value === card_name) {
      open_card_value_attribute.value = "";
    } else {
      open_card_value_attribute.value = card_name;
    }
  }
}


</script>

<template>
  <v-responsive class=" mt-2 mb-0">
    <v-card class="mx-auto text-primary" style="cursor: pointer">
      <div v-ripple>
        <v-chip class="float-right mt-3 mr-2 d-flex" color="warning"
                size="small">
          Baixar
          <v-icon class="mdi mdi-download"></v-icon>
        </v-chip>
        <v-card-text class="mx-auto mr-0 text-h6" style="cursor: pointer"
                     @click.stop="toggle_card('subtitle', 'pillar')">
          <v-icon :icon="open_card_pillar === 'subtitle' ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          {{ props.pillar_name }}

        </v-card-text>
      </div>
      <v-slide-y-transition>
        <v-card v-show="open_card_pillar === 'subtitle'">
          <v-card-text class="text-wrap line-height-custom">
            <slot name="pillar-description"/>
          </v-card-text>
        </v-card>
      </v-slide-y-transition>
    </v-card>
  </v-responsive>
</template>

<style scoped>

</style>