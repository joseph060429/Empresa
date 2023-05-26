<template>
  <div class="d-flex justify-center">
    <v-card width="500px">
      <v-form @submit.prevent="iniciarSesion">
        <v-text-field v-model="data.correo" label="Correo" type="e-mail">
        </v-text-field>
        <v-text-field
          v-model="data.clave"
          label="Contraseña"
          type="password"
        ></v-text-field>
        <v-btn type="submit">
          Iniciar Sesión <v-icon icon="mdi mdi-account-lock"
        /></v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// import { router } from "@/router";
// import apiClient from "../../middlewares/axios";
// import { toast } from "vue3-toastify";
import { authStores } from "@/stores";


const authStore = authStores();

const data = reactive({
  correo: "",
  clave: "",
  showAlert: false,
  errorText: "",
  loading: false,
});

function iniciarSesion() {
  const payload = {
    email: data.correo,
    password: data.clave,
  };
  authStore.login(payload);
}
</script>
