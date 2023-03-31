<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title> Visítanos </v-app-bar-title>
      <v-btn prepend-icon="mdi-registered-trademark" color="white">
        Regístrate
      </v-btn>
      <v-btn prepend-icon="mdi-account-arrow-right-outline" color="white">
        Acceder
      </v-btn>
    </v-app-bar>

    <!-- MAIN -->
    <v-main app>
      <v-container>
        <Registro />
      </v-container>
    </v-main>

    <!-- <FOOTER> -->
    <v-footer class="d-flex flex-column" app>
      <div class="bg-teal d-flex w-100 align-center px-4">
        <strong>Conéctate con nosotros en las redes sociales</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>d
      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Joseph</strong>
      </div>
    </v-footer>
  </v-app>
</template>

-------------------------------------------------------------------------------
<script setup>
import Registro from "./components/registro.vue";

import { ref } from "vue";
const icons = ref([
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
]);
</script>
