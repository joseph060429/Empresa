//createWebHistory sirve para crear historial en el navegador//
import { createWebHistory, createRouter } from "vue-router";
import Registro from "../views/registro.vue";
import Login from "../views/loging.vue";
import vistaLogueadoRegistrado from "../views/vistalogueado.vue";
import vistaInicio from "../views/vistaInicio.vue";
import {authStores} from '@/stores'

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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const test = authStores();

  if (to.name === "Logueado" && test.getIsAuthenticated) {
    return{ name: "Inicio" };
  }
});

export default router;
