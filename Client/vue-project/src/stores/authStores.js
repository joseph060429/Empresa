import { defineStore } from "pinia";
import { router } from "../router";
// import apiClient from "../middlewares/axios";

//   const useAuthStore = defineStore({
//   id: 'auth',
//   state: () => ({
//     //inicializar el estado desde el almacenamiento local para permitir que el usuario permanezca conectado
//       user: JSON.parse(localStorage.getItem('user')),
//       returnUrl: null,
//       email: null,
//       username: null,
//       // id: null,
//       isLogged: false,
//   }),


//     getters: {
//     getUsername(state) {
//       return state.username
//     },
//     getEmail(state) {
//       return state.email;
//     },
//     getIsAuthenticated(){
//       console.log('Valor de variable: '+ this.isLogged);
//       return this.isLogged;
//     }
//   },
//   actions: {
//       async login(email, password) {
//           try {
//             // const user = await fetchWrapper.post(`${baseUrl}/login`, { email, password });
//           const user = await apiClient.post('https://localhost:4000/login', { email, password });

//           // actualizar el estado de pinia
//           this.user = user;
//           //almacenar los detalles del usuario y jwt en el almacenamiento local para mantener al usuario conectado entre actualizaciones
//           //de página
//           localStorage.setItem('user', JSON.stringify(user.data.token));
//             this.isLogged = true;
//             router.push('/logueadoRegistrado');
//           //redirigir a la URL anterior o por defecto a la página de inicio
//           // router.push(this.returnUrl || '/');
//           } catch (error) {
//             this.isLogged = false;
//             console.log(error);
//           }
//       },
//       logout() {
//           this.user = null;
//           localStorage.removeItem('user');
//           router.push('/login');
//           this.isLogged = false;
//       }
//   }
// });
const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    //inicializar el estado desde el almacenamiento local para permitir que el usuario permanezca conectado
      user: JSON.parse(localStorage.getItem('user')),
      returnUrl: null,
      email: null,
      username: null,
      // id: null,
      isLogged: false,
  }),


    getters: {
    getUsername(state) {
      return state.username
    },
    getEmail(state) {
      return state.email;
    },
  },
  actions: {
      async login(email, password) {
          // const user = await fetchWrapper.post(`${baseUrl}/login`, { email, password });
          const user = await fetchWrapper.post(`${baseUrl}/login`, { email, password });

          // actualizar el estado de pinia
          this.user = user;

          //almacenar los detalles del usuario y jwt en el almacenamiento local para mantener al usuario conectado entre actualizaciones
          //de página
          localStorage.setItem('user', JSON.stringify(user));

          //redirigir a la URL anterior o por defecto a la página de inicio
          router.push(this.returnUrl || '/');
      },
      logout() {
          this.user = null;
          this.isLogged = false;
          localStorage.removeItem('token');
          router.push('/');
      }
  }
});





 export default useAuthStore;





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
