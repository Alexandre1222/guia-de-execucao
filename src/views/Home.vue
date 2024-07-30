<script setup>
import guiaExecucao from '@/assets/home/guiaDeExecucao.jpeg'
import emDesenvolvimento from '@/assets/home/emDesenvolvimento.jpg'
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card variant="flat" rounded="lg" class="mx-auto" height="200">
          <v-img
              height="100%"
              :src="guiaExecucao"
              gradient="to-bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
              cover
          >
            <v-card-text class="position-absolute right-0 bottom-0 pa-4 text-white text-h6">
              Guia de Execução
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card flat link rounded="lg" class="mx-auto" height="200">
          <v-img
              :src="emDesenvolvimento"
              cover
              gradient="to-bottom, rgba(0,0,0,.1), rgba(0,0,0,1)"
          ></v-img>
          <v-card-text class="position-absolute right-0 bottom-0 pa-4 text-white text-h6">
            Em Construção
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>