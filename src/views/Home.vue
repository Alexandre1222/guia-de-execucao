<script setup>
import guiaExecucao from '@/assets/home/guiaDeExecucao.jpeg'
import emDesenvolvimento from '@/assets/home/emDesenvolvimento.jpg'
import router from "@/router/index.js";
</script>

<template>
  <v-responsive class="mx-auto" max-width="1200">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-card link @click.stop="router.push('/example-pillar')" variant="flat" rounded="lg" class="mx-auto" height="250">
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

        <v-col cols="12" sm="6" md="6">
          <v-card link rounded="lg" class="mx-auto" height="250">
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
  </v-responsive>
</template>

<style scoped>

</style>