<template>
  <nav>
    <div>
      <v-toolbar
        dark
        prominent
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-toolbar-title>My pagina Web</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn to="Main" color="white">Inicio</v-btn>
        <v-btn to="/registro" color="white">Registro</v-btn>
        <v-btn to="/login" color="white">Login</v-btn>
      </v-toolbar>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
// // import formulario from './components/formularios'
// import FormularioLogin from "./components/formularios/formularioLogin.vue";
// import FormularioRegistro from "./components/formularios/formularioRegistro.vue";
// import Logueado from "./views/vistalogueado.vue";
</script>
