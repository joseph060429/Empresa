// import { defineStore } from "pinia";
// import { router } from "../router";
// import { evaluate } from "../helpers"
// // import apiClient from ""
// // import {apiClient} from "@/middleware"
// // import { apiClient } from '@/middleware'
// const useAuthStore = defineStore('user', {
//   // id: 'auth',
//   state: () => ({
//     //inicializar el estado desde el almacenamiento local para permitir que el usuario permanezca conectado
//       user: JSON.parse(localStorage.getItem('user')),
//       returnUrl: null,
//       email: null,
//       username: null,
//       isLogged: false,
//   }),

//     getters: {
//     getUsername(state) {
//       return state.username
//     },
//     getEmail(state) {
//       return state.email;
//     },
//   },
//   actions: {
//       // async login(email, password) {
//       //     // const user = await fetchWrapper.post(`${baseUrl}/login`, { email, password });
//       //     const user = await fetchWrapper.post(`${baseUrl}/login`, { email, password });

//       //     // actualizar el estado de pinia
//       //     this.user = user;

//       //     //almacenar los detalles del usuario y jwt en el almacenamiento local para mantener al usuario conectado entre actualizaciones
//       //     //de página
//       //     localStorage.setItem('user', JSON.stringify(user));

//       //     //redirigir a la URL anterior o por defecto a la página de inicio
//       //     router.push(this.returnUrl || '/');
//       async login(body) {
//         localStorage.removeItem('token')
//         this.isLogged = false;
//         // if(!body.)

//       },
//       logout() {
//           this.user = null;
//           this.isLogged = false;
//           localStorage.removeItem('token');
//           router.push('/');
//       }
//   }
// });

//  export default useAuthStore;

// export const useLoginStore = defineStore("loginStores", {
//     state: () => ({
//         todos: null,
//         uno: null,
//         loadingData: false,
//         todosActivos: false, // valua si se han cargado los pendientes o no, para no repetir llamadas a bbdd
//         todosEsCliente: false, // valua si se han cargado en TODOS los datos de un CLIENTE o de TODOS los CLIENTES
//         cancelarPeticion: new AbortController()
//       }),
//       getters: {

//       },
//       actions: {

//       }

// })

// ----------------Desde aqui-------

import { defineStore } from "pinia";
import { router } from "@/router";
import { apiClient, auth } from "@/middlewares";
import { evaluate } from "@/helpers";
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";

const userStore = defineStore("user", {
  state: () => {
    return {
      // user: JSON.parse(localStorage.getItem("user")),
      name: null,
      surnames: null,
      edad: 17,
      email: null,
      id: null,
      isLogged: false,
    };
  },
  getters: {
    getUsername() {
      return this.username;
    },
    getEmail(state) {
      return state.email;
    },
  },
  actions: {
    async getAll() {
      return await apiClient.get("/getAll");
    },
    async get(id) {
      if (!id) {
        id = this.id;
      }
      return JSON.parse(
        JSON.stringify((await api.get(`getUser/${id}`)).data[0])
      );
    },
    async delete(id) {
      if (!id) {
        return;
      }
      return await apiClient.delete(`deleteUser/${id}`);
    },
    async create(body) {
      return await apiClient.post("createUser", body);
    },
    async update(id, body) {
      if (!id) {
        id = this.id;
      }
      return await apiClient.put(`updateUser/${id}`, body);
    },

    async login(body) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      this.isLogged = false;
      if (!body.email || !body.password) {
        toast("Todos los campos son obligatorios", {
          type: "error",
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
        return;
      }

      apiClient
        .post("login", body)
        .then((res) => {
          console.log("resLogin", res);
          if (auth() === true) {
            toast("El usuario ya existe", {
              type: "error",
              pauseOnHover: false,
            });
            return;
          }
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            console.log(res.data.token);
            toast("Login correcto!", {
              type: "success",
              pauseOnHover: false,
              pauseOnFocusLoss: false,
            });
            evaluate();
            router.push("logueadoRegistrado");
            return res.data.token;
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 400) {
            toast(err.response.data, {
              type: "error",
              pauseOnHover: false,
              pauseOnFocusLoss: false,
            });
            router.push("login");
          }
        });
    },
    async register(body) {
      if (!body.name || !body.password || !body.surnames || !body.email) {
        toast("Todos los campos son obligatorios", {
          type: "error",
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
        return;
      }
      // console.log('cuerpo',body)
      apiClient
        .post("registro", body)
        .then((res) => {
          console.log("res", res);
          console.log(res.data.errorCode);
          if (res.data.token) {
            toast("Registro correcto", {
              type: "success",
              pauseOnHover: false,
              pauseOnFocusLoss: false,
            });
            this.login(body);
          }
        })

        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 400) {
            toast(err.response.data, {
              type: "error",
              pauseOnHover: false,
              pauseOnFocusLoss: false,
            });
            router.push("login");
          }
        });
    },
    logout() {
      console.log((this.isLogged = false));
      localStorage.removeItem("token");
      router.push("login");
    },
  },
});

export default userStore;
