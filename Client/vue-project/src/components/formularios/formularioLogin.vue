<template>
   <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>

  <v-form @submit.prevent="loginApi">
    <v-text-field v-model="data.correo" label="Correo"> </v-text-field>
    <v-text-field v-model="data.clave" label="Contraseña"></v-text-field>
    <v-btn type="submit">Loguear</v-btn>
    <v-btn type="submit" post="./formularioRegistro.vue">Registrarse</v-btn>
  </v-form>

  
</template>

<script setup>
import { ref } from "vue";
import apiClient from "../../middlewares/axios";

const data = ref({
  correo: "",
  clave: "",
});

function loginApi() {
  
  apiClient
    .post("login", {
      email: data.value.correo,
      password: data.value.clave,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
}
</script>
