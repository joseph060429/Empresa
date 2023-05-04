<template>
    <v-btn @click="desloguear"><v-icon icon="mdi mdi-logout"/><h4>
      Cerrar Sesión </h4>
    </v-btn>
  </template>
  
  <script setup>
  import {router} from "@/router"
  import {authStores} from "@/stores"
  const authStore = authStores();

  function desloguear() {
    localStorage.removeItem("token");
    authStore.logout()
    router.push("/");
  }
  </script>