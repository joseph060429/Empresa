//createWebHistory sirve para crear historial en el navegador//
import { createWebHistory, createRouter } from "vue-router";
import Registro from "../views/registro.vue";
import Login from "../views/loging.vue";
import vistaLogueado from "../views/vistalogueado.vue"
import vistaInicio from "../views/vistaInicio.vue"
import vistaRegistrado from "../views/vistaRegistrado.vue"


// import App from "../App.vue"

//Hacer un array de rutas//
const routes = [
  {
    path: "/",
    name: "Inicio",
   component: vistaInicio
    
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
    path: "/logueado",
    name: "Logueado",
    component: vistaLogueado,
  },
  {
    path: "/registrado",
    name: "Registrado",
    component: vistaRegistrado,
  },

 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;