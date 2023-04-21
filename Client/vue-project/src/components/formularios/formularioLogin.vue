<template>
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
// import toast from 'vue3-toastify'
const data = ref({
  correo: "",
  clave: "",
});

function iniciarSesion() {

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
        // router.push({name: '', id: '2', pokemon: "bulbasur", bloqueado: true})
       
        
        console.log(res);
        router.push("/logueado")
      } else {
        console.log(Error);
      }
      
    })
    .catch((err) => {
      console.log("Error ", err);
    });

}
</script>
