<template>
  <div class="d-flex justify-center">
    <v-card width="500px">
      <v-form @submit.prevent="authStores().register(data)">
        <v-text-field v-model="data.name" label="Nombre" type="text" />
        <v-text-field v-model="data.surnames" label="Apellidos" type="text" />
        <v-text-field v-model="data.email" label="Correo" placeholder="ejemplo@gmail.com" type="e-mail" />
        <v-text-field v-model="data.password" label="Contraseña" type="password" />
        <v-btn type="submit"
          >Registrarse <v-icon icon="mdi mdi-account-plus"
        /></v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
// import { router } from "@/router";
// import apiClient from "../../middlewares/axios";
// import { toast } from "vue3-toastify";
import {authStores} from '@/stores'

const data = reactive({
  name: "",
  surnames: "",
  email: "",
  password: "",
  
});


</script>
