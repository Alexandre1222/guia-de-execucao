<script setup>
import logoMarca from '@/assets/LogoMarcaRemake.svg'
import login from '@/assets/login.png'
import router from "@/router";
import {ref} from "vue";
import {useAuth} from "@/store/user.js";

const emailInput = ref('')
const passwordInput = ref('')

const storeUser = useAuth()

function handlerLogin() {
  localStorage.setItem('logged', true)
  router.push('/home')
}

</script>
<template>
  <v-main>
    <v-container fluid>
      <v-row no-gutters align="center">
        <v-col lg="5" cols="12" class="d-flex justify-center my-12">
          <v-responsive class="flex-1-1 pa-4" max-width="400px">
            <v-img
                class="mx-auto"
                :src="logoMarca"
            ></v-img>
            Te fuder Bryan
            <h1 class="text-h4 text-center font-weight-bold mb-2">Bem-vindo ao Guia de Execução Remake</h1>
            <div class="text-h6 font-weight-regular text-center mb-8">Acesse com seu login</div>
            <v-form>
              <v-text-field
                  label="Email"
                  placeholder="Email"
                  autocomplete="username"
                  variant="outlined"
                  dense
                  v-model="emailInput"
              ></v-text-field>
              <v-text-field
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  dense

                  type="password"
                  v-model="passwordInput"
                  autocomplete="current-password"
              ></v-text-field>
              <div class="text-end">
                <v-btn variant="text" class="text-primary me-n2">Esqueceu sua senha?</v-btn>
              </div>
              <v-btn block color="primary" class="rounded-lg" height="56px" @click="handlerLogin">
                Acessar
              </v-btn>
              <v-divider class="my-12"> Ou continue com</v-divider>
              <div class="d-flex align-center justify-center ga-4 mb-8">
                <v-btn icon style="color: #d93f21">
                  <v-icon>mdi-google</v-icon>
                </v-btn>
                <v-btn icon style="color: #1867c0">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi mdi-github</v-icon>
                </v-btn>
              </div>
              <div class="text-center">
                Não possui uma conta?
                <v-btn text class="text-primary">Cadastrar</v-btn>
              </div>
            </v-form>
          </v-responsive>
        </v-col>
        <v-col>
          <v-img
              class="flex-1-1"
              :src="login"
              cover
              height="900px"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>

</style>
