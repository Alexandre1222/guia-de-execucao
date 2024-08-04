<script setup>
import {RouterView} from 'vue-router'
import {snackbarState} from "@/helpers/customSnackbar.js";
import {onErrorCaptured, ref} from "vue";

const snackbar = ref(snackbarState);
onErrorCaptured((err, vm, info) => {
  console.error('Erro:', err)
  console.error('Componente:', vm)
  console.error('Informações adicionais:', info)

  snackbar.value = {
    show: true,
    message: err.message,
    details: vm
  }
})
</script>

<template>
  <v-app color="primary" dark>
    <component :is="$route.meta.layout">
      <RouterView/>
    </component>

    <!--  Snackbar de Alerta global  -->
    <v-snackbar
        v-model="snackbar.show"
        location="top end"
        elevation="10"
        :color="snackbar.color"
    >
      <div class="d-flex align-start">
        <v-icon class="text-success" start>
          mdi-check-circle
        </v-icon>
        <div>
          <strong class="d-inline-block text-subtitle-2 mb-1">
            {{ snackbar.message }}
          </strong>
          <div>{{ snackbarState.details }}</div>
        </div>
      </div>
      <template v-slot:actions>
        <v-btn
            icon
            class="mt-n7"
            @click="snackbar.show = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>      
</template>

<style scoped>

</style>
