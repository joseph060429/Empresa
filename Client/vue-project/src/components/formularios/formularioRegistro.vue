<template>
  <v-alert v-model="data.showAlert" type="error" class="mb-3" closable>{{ data.errorText }} </v-alert>
  <v-form @submit.prevent="registrarse">
    <v-text-field v-model="data.nombre" label="Nombre" type="text">
    </v-text-field>
    <v-text-field v-model="data.apellidos" label="Apellidos" type="text">
    </v-text-field>
    <v-text-field v-model="data.correo" label="Correo" type="e-mail">
    </v-text-field>
    <v-text-field v-model="data.clave" label="Contraseña" type="password"></v-text-field>
    <v-btn type="submit">
      Registrarse <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@/router";
import apiClient from "../../middlewares/axios";
const data = ref({
  nombre: "",
  apellidos: "",
  correo: "",
  clave: "",
  showAlert: false,
  errorText: "",
});

function registrarse() {
  if (!data.value.correo || !data.value.clave || !data.value.nombre || !data.value.apellidos) {
    data.value.showAlert = true;
    data.value.errorText = 'Todos los campos son obligatorios'
    return;
  }
  apiClient
    .post("registro", {
      name: data.value.nombre,
      surnames: data.value.apellidos,
      email: data.value.correo,
      password: data.value.clave,
      showAlert: false,
      errorText: "",
    })
    .then((res) => {
      if (res.status === 201) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        console.log(res);
        router.push("/logueadoRegistrado")
      } else {
        console.log(Error);
      }

    })
    .catch((err) => {
      console.log("Error ", err);
    });

}
</script>
