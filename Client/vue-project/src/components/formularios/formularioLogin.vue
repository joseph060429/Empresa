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

  <v-form @submit.prevent="IniciarSesion">
    <v-text-field v-model="data.correo" label="Correo"> </v-text-field>
    <v-text-field v-model="data.clave" label="Contraseña"></v-text-field>
    <v-btn type="submit" > Iniciar Sesión <v-icon icon="mdi-vuetify"> </v-icon
    ></v-btn>
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { router } from "@/router";
import apiClient from "../../middlewares/axios";

const data = ref({
  correo: "",
  clave: "",
});

function IniciarSesion() {

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
        router.push({name: '', id: '2', pokemon: "bulbasur", bloqueado: true})
        console.log(res);
      } else {
        
      }
      
    })
    .catch((err) => {
      console.log("Error ", err);
    });

}
</script>
