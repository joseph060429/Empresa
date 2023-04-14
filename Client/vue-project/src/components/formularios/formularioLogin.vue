<template>
  <v-form @submit.prevent="loginApi">
    <v-text-field v-model="data.correo" label="Correo"> </v-text-field>
    <v-text-field v-model="data.clave" label="Contraseña"></v-text-field>
    <v-btn type="submit">Loguear</v-btn>
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
  console.log(data.value.correo, data.value.clave);
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
