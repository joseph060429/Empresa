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

import { defineStore } from 'pinia'
import { router } from '@/router'
import { apiClient } from '@/middlewares'
import { auth } from '@/middlewares'
import { evaluate } from '@/helpers'
import 'vue3-toastify/dist/index.css'
import { toast } from 'vue3-toastify'

const userStore = defineStore('user', {
  state: () => {
    return {
      name: null,
      surnames: null,
      email: null,
      id: null,
      isLogged: false
    }
  },
  getters: {
    getUsername(state) {
      return state.username
    },
    getEmail(state) {
      return state.email
    }
  },
  actions: {
    async getAll() {
      return await apiClient.get('/getAll')
    },
    async get(id) {
      if (!id) {
        id = this.id
      }
      return JSON.parse(JSON.stringify((await api.get(`getUser/${id}`)).data[0]))
    },
    async delete(id) {
      if (!id) {
        return
      }
      return await apiClient.delete(`deleteUser/${id}`)
    },
    async create(body) {
      return await apiClient.post('createUser', body)
    },
    async update(id, body) {
      if (!id) {
        id = this.id
      }
      return await apiClient.put(`updateUser/${id}`, body)
    },
    
    async login(body) {
      localStorage.removeItem('token')
      this.isLogged = false
      if (!body.name || !body.password) {
        toast('Se requiere usuario y contrasenya', {
          type: 'error',
          pauseOnHover: false,
          pauseOnFocusLoss: false
        })
        return 
      }

      apiClient
        .post('login', body)
        .then((res) => {
          console.log('res', res)
          if (auth() === true) {
            toast('Ya estas logueado.', { type: 'error', pauseOnHover: false })
            return 
          }
          if (res.data.errorCode === 106 || res.data.errorCode === 109) {
            toast('Login incorrecto.', {
              type: 'error',
              pauseOnHover: false,
              pauseOnFocusLoss: false
            })

            router.push('login')
            return 
          }
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
            console.log(res.data.token)
            toast('Login correcto!', {
              type: 'success',
              pauseOnHover: false,
              pauseOnFocusLoss: false
            })
            evaluate()
            router.push('loggedin')
            return res.data.token
          }
        })
        .catch((err) => {
          console.log(err)

        })
    },



    async register(body) {
      if (!body.name || !body.password || !body.surnames || !body.email) {
        toast('Se requieren todos los campos', {
          type: 'error',
          pauseOnHover: false,
          pauseOnFocusLoss: false
        })
        return
      }
      console.log('cuerpo',body)
      apiClient
        .post('registro', body)
        .then((res) => {
          console.log('res', res)
          if (res.data.errorCode === 107) {
            toast('El usuario ya existe.', {
              type: 'error',
              pauseOnHover: false,
              pauseOnFocusLoss: false
            })
            
            this.login(body)
          }
          if (res.data.token) {
            toast('Registro correcto!', {
              type: 'success',
              pauseOnHover: false,
              pauseOnFocusLoss: false
            })
            this.login(body)
          }
        })
        .catch((err) => {
          console.log(err)
          const res = err.response
          if (res.data.errorCode === 107) {
            toast('El usuario ya existe.', {
              type: 'error',
              pauseOnHover: false,
              pauseOnFocusLoss: false
            })
            router.push('login')
          }
        })
    },
    logout() {
      console.log((this.isLogged = false))
      localStorage.removeItem('token')
      router.push('login')
    }
  },
})

export default userStore

