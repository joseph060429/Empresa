//createWebHistory sirve para crear historial en el navegador//
import { createWebHistory, createRouter } from "vue-router";
import Registro from "../views/registro.vue";
import Login from "../views/loging.vue";
import vistalogueado from "../views/vistalogueado.vue"

// import App from "../App.vue"

//Hacer un array de rutas//
const routes = [
  {
    path: "/",
    name: "Main",
    component: Login,
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
    component: vistalogueado,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;