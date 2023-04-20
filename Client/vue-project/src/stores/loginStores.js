import {defineStore} from 'pinia';


export const useLoginStore = defineStore("loginStores", {
    state: () => ({
        todos: null,
        uno: null,
        loadingData: false,
        todosActivos: false, // valua si se han cargado los pendientes o no, para no repetir llamadas a bbdd
        todosEsCliente: false, // valua si se han cargado en TODOS los datos de un CLIENTE o de TODOS los CLIENTES
        cancelarPeticion: new AbortController()
      }),
      getters: {


      },
      actions: {
        



      }



})
