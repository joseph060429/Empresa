<template>
  <v-alert v-model="data.showAlert" type="error" class="mb-3" closable>{{ data.errorText }} </v-alert>
  <v-form @submit.prevent="iniciarSesion">
    <v-text-field v-model="data.correo" label="Correo" type="e-mail"> </v-text-field>
    <v-text-field v-model="data.clave" label="Contraseña" type="password"></v-text-field>
    <v-btn type="submit"> Iniciar Sesión <v-icon icon="mdi-vuetify"> </v-icon></v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@/router";
import apiClient from "../../middlewares/axios";
import { toast } from 'vue3-toastify'

const data = ref({
  correo: "",
  clave: "",
  showAlert: false,
  errorText: "",
});

function iniciarSesion() {

  if (!data.value.correo || !data.value.clave) {
    data.value.showAlert = true;
    data.value.errorText = 'Todos los campos son obligatorios'
    return;
  }

  apiClient
    .post("login", {
      email: data.value.correo,
      password: data.value.clave,
      // loading: true,

    })
    .then((res) => {

      if (res.status === 200) {
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
      const res = err.response
      if (res.data.errorCode === 106)
        console.log();
      data.value.showAlert = true
      data.value.errorText = 'Usuario o contraseña inválidas'
      router.push('login')

    });

}
</script>
