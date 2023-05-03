<template>
    <v-btn @click="desloguear"><h4>
      Cerrar Sesión </h4><v-icon icon="mdi-vuetify"> </v-icon
    ></v-btn>
  </template>
  
  <script setup>
  import {router} from "@/router"
  
  function desloguear() {
    localStorage.removeItem("token");
    router.push("/");
  }
  </script>