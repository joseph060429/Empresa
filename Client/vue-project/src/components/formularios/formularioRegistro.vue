<template>
  <div class="d-flex justify-center">
    <v-card width="500px">
      <v-form @submit.prevent="authStores().register(data)">
        <v-text-field v-model="data.name" label="Nombre" type="text" />
        <v-text-field v-model="data.surnames" label="Apellidos" type="text" />
        <v-text-field v-model="data.email" label="Correo" type="e-mail" />
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
  errorText: "",
});

// function registrarse() {
//   if (!data.correo || !data.clave || !data.nombre || !data.apellidos) {
//     data.showAlert = true;
//     data.errorText = "Todos los campos son obligatorios";
//      return;
    
//   } 
//   apiClient
//     .post("registro", {
//       name: data.nombre,
//       surnames: data.apellidos,
//       email: data.correo,
//       password: data.clave,
//       // showAlert: false,
//       // errorText: "",
//     })
//     .then((res) => {
//       if (res.status === 201) {
//         if (res.data.token) {
//           localStorage.setItem("token", res.data.token);
//           router.push("/logueadoRegistrado");
//         }
//         console.log(res);
        
//       }
//     })
//     .catch((err) => {
//       console.log("Error ", err);
//       const res = err.response;
//       if (res.data.errorCode === 400) console.log();
//       data.showAlert = true;
//       data.errorText = "El usuario ya existe, por favor logueate";
//       router.push("registro");
//     });
// }
</script>
