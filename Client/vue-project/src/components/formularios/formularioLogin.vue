<template>
  <v-alert v-model="data.showAlert" type="error" class="mb-3" closable
    >{{ data.errorText }}
  </v-alert>
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
import { router } from "@/router";
import apiClient from "../../middlewares/axios";
import { toast } from "vue3-toastify";
import { authStores } from "@/stores";
import useAuthStore from "../../stores/authStores";

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
    password: data.clave
  }
  authStore.login(payload)
  // if (!data.correo || !data.clave) {
  //   data.showAlert = true;
  //   data.errorText = "Todos los campos son obligatorios";
  //   return;
  // }
  // apiClient
  //   .post("login", {
  //     email: data.correo,
  //     password: data.clave,
  //     loading: true,
  //   })
  //   .then((res) => {
  //     if (res.status === 200) {
  //       if (res.data.token) {
  //         localStorage.setItem("token", res.data.token);
  //       }
  //       console.log(res);
  //       authStore.isLogged = true;
  //       router.push("/logueadoRegistrado");
  //     }
  //   })

  //   .catch((err) => {
  //     console.log("Error ", err);
  //     const res = err.response;
  //     if (res.data.errorCode === 106) console.log();
  //     data.showAlert = true;
  //     data.errorText = "Usuario o contraseña inválidas";
  //     router.push("login");
  //   });
}

// -------------------------------------------------------

// const iniciarSesion = async () => {
//   try {
//     await test.login(data.correo, data.clave);
//   } catch (error) {
//     console.log(error);
//   }

// }



// function iniciarSesion(){
//   console.log(data);
//   useAuthStore()
// }
</script>
