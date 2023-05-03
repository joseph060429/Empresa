<template>
  <nav>
    <div>
      <v-toolbar
        color="primary"
        dark
        prominent
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title> <h2>Mi Página Web</h2></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/" color="white" v-if="!authStore.isLogged"> <h4>Inicio</h4></v-btn>
        <v-btn to="/registro" color="white" class="ma-2" v-if="!authStore.isLogged"><h4>Registro</h4></v-btn>
        <!-- <v-btn to="/login" color="white" v-if="!authStores.estaLogueado"><h4> Login </h4></v-btn> -->
        <v-btn to="/login" color="white" v-if="!authStore.isLogged"><h4>Login</h4></v-btn>
        <botonCerrarSesion v-if="authStore.isLogged"></botonCerrarSesion>
      </v-toolbar>
    </div>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>

</template>

<script setup>
import { authStores } from "@/stores";
import {botonCerrarSesion} from "@/components";

const authStore = authStores()


// import {useAuthStore} from "@/stores"

// import { logueadoRegistrado } from "./components";
</script>
