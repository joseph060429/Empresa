<template>
  <nav>
    <div>
      <v-toolbar
        dark
        prominent
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
      <v-toolbar-title> Mi pagina Web</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-btn to="/" color="white">Inicio</v-btn>
        <v-btn to="/registro" color="white" class="ma-2"> Registro </v-btn>
        <v-btn to="/login" color="white">Login</v-btn>
      </v-toolbar>
    </div>

    <!-- <div></div> -->
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
//Me da error
// import {useAuthStore} from '@/stores'




</script>
