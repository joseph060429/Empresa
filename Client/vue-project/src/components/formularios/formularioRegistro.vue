<template>
  <h1> Hola </h1>
  <!-- <v-form @submit.prevent="registroApi">
    <v-text-field v-model="data.correo" label="Correo"> </v-text-field>
    <v-text-field v-model="data.clave" label="Contraseña"></v-text-field>
    <v-tex-fielda v-model="data.apellido" label="Apellido"></v-tex-fielda>
    <v-tex-fielda v-model="data.nombre" label="Nombre"></v-tex-fielda>
    <v-btn type="submit">Regístrate</v-btn>
  </v-form> -->
 
</template>

<script setup>
import { ref } from "vue";
import apiClient from "../../middlewares/axios";

const data = ref({
  correo: "",
  clave: "",
  apellido: "",
  nombre: "",
});

function registroApi() {
  //   console.log(data.value.correo, data.value.clave);
  apiClient
    .post("login", {
      email: data.value.correo,
      password: data.value.clave,
      surnames: data.value.apellido,
      name: data.value.nombre,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
}
</script>
