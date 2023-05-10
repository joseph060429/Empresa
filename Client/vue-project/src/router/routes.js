//createWebHistory sirve para crear historial en el navegador//
import { createWebHistory, createRouter } from "vue-router";
import Registro from "../views/registro.vue";
import Login from "../views/loging.vue";
import vistaLogueadoRegistrado from "../views/vistalogueado.vue";
import vistaInicio from "../views/vistaInicio.vue";
import {authStores} from '@/stores'
import { toast } from "vue3-toastify";
import {evaluate} from '@/helpers'

// import registrado from "../components/registrado.vue"

// import App from "../App.vue"

//Hacer un array de rutas//
const routes = [
  {
    path: "/",
    name: "Inicio",
    component: vistaInicio,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro,
  },
  {
    path: "/logueadoRegistrado",
    name: "Logueado",
    component: vistaLogueadoRegistrado,
    meta:{
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const test = authStores();
  evaluate()

  const token = localStorage.getItem('token')
  if(to.meta.requiresAuth){
      if(token){
          next();
      }else{
          toast('Primero debes loguearte', {type: 'error'})
          next('login')
      }
  }else{
    next()
  }

  if (to.name === "Logueado" && test.isLogged) {
    next('/')
  }
});

export default router;
