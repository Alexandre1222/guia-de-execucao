<script setup>
import logoMarca from '@/assets/LogoMarcaRemake.svg'

</script>

<template>
<!--    <v-navigation-drawer v-model="drawer" color="primary">-->
<!--      <v-list nav>-->
<!--        <v-list-item-->
<!--            v-for="(item, i) in items"-->
<!--            :key="i"-->
<!--            :active="i === 0"-->
<!--            link-->
<!--            :title="item.text"-->
<!--        />-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

    <v-app-bar color="primary" class="px-md-4">
<!--      <template #prepend>-->
<!--        <v-app-bar-nav-icon-->
<!--            class="bg-amber"-->
<!--            v-if="$vuetify.display.smAndDown"-->
<!--            @click="drawer = !drawer"-->
<!--        />-->
<!--      </template>-->

      <v-img
          max-width="200"
          :src="logoMarca"
      />
      <v-spacer />

      <template #append>
        <v-btn
            class="ms-1"
            color="medium-emphasis"
            icon="mdi-bell-outline"
        />
      </template>
    </v-app-bar>
</template>

<style scoped>

</style>