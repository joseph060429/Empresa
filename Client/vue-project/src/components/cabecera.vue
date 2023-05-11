<template>
  <nav>
    <div class="nav_bar">
      <v-toolbar
        color="primary"
        dark
        prominent
        image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"

        
      >
        <v-toolbar-title class="font-weight-black">
          <h2 id="title_cabecera">Supe Puerto</h2>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/" color="white"
          ><v-icon icon="mdi-home" />
          <h4>Inicio</h4></v-btn
        >
        <v-btn
          to="/registro"
          color="white"
          class="ma-2"
          v-if="!authStore.isLogged"
        >
          <v-icon icon="mmdi mdi-account" />
          <h4>Registro</h4></v-btn
        >
        <v-btn to="/login" color="white" v-if="!authStore.isLogged">
          <v-icon icon="mdi mdi-login" />
          <h4>Login</h4></v-btn
        >
        <botonCerrarSesion v-if="authStore.isLogged"></botonCerrarSesion>
      </v-toolbar>
    </div>
  </nav>
</template>

<script setup>
import { authStores } from "@/stores";
import { botonCerrarSesion } from "@/components";
// import SvgIcon from "@jamescoyle/vue-icon";
// import { mdiAccount } from "@mdi/js";
const authStore = authStores();

// import { onMounted } from "vue";
// import { storeToRefs } from "pinia";
// const isLogged = storeToRefs(authStore)
// const token = localStorage.getItem('token')

// onMounted(() => {
//   if(token){
//     isLogged.value = true;
//   }else{
//     isLogged.value = false;
//   }
// })
// import { logueadoRegistrado } from "./components";
// const isLogged = storeToRefs(authStore)
// const token = localStorage.getItem('token')
</script>
<style>
#title_cabecera {
  color: aliceblue;
  margin-left: 2%;
}
</style>
