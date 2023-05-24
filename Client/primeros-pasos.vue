<!-- Primero va Template -->

<template>
  <h1>Regístrate: {{ name.toUpperCase() }}</h1>
  <h2 :class="classCounter">{{ counter }}</h2>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Disminuír</button>
  <button @click="reset">Resetear</button>
  <button @click="add" :disabled="bloquearBtnAdd">Add</button>
  {{ arrayFavoritos }}
</template>

<!-- Segundo va Script -->

<script setup>
import { ref, computed } from "vue";

const name = "Joseph";
const counter = ref(0);
const arrayFavoritos = ref([]);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};

const add = () => {
  arrayFavoritos.value.push(counter.value);
};

const bloquearBtnAdd = computed(() => {
  const buscarNumero = arrayFavoritos.value.find(
    (num) => num === counter.value
  );
  return buscarNumero || buscarNumero === 0
});

//Siempre tiene que existir un return en clases computadas
const classCounter = computed(() => {
  if (counter.value === 0) {
    return "zero";
  }
  if (counter.value > 0) {
    return "positivo";
  }
  if (counter.value < 0) {
    return "negativo";
  }
});
</script>

<!-- Tercero va Style -->
<style>
.positivo {
  color: red;
}

.negativo {
  color: green;
}

.zero {
  color: peru;
}
</style>
  


<!-- ESTO ES LO QUE EXPLICÓ SAMUEL -->
<template>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="IniciarSesión" :model="formulario">
        <div class="row">
          <div class="col m3">
            <label> Correo Electrónico: </label>
            <input type="email" v-model="email" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label> Contraseña: </label>
            <input type="password" v-model="password" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button type="submit" >
              INICIAR SESIÓN
              <i class="material-icons right"> </i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  
</template>

<script setup>
import {reactive, ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
    genero: null,
    nombre: String,
    datos: null,
    modo: null,
})

console.log("DIMER PROPS", props);

const email = ref();
const formulario = reactive({
    email: props.modo === 'editar' ? props.datos.email : 'No es editar',
    password: ""
});

 const data = () =>  {
  return{
    email: "",
    password: "",
  }
 }


 function  iniciarSesion (req, res)  {
    
    var payload = {
      email: this.email,
      password: this.password,
    };
    console.log(payload);
  }

 watch(email, (x) => {
  console.log("Muestrame x", x);
 })
</script>


<!-- ref = data.value.+nombre -->
<!-- reactive = data.+nombre -->

<!-- Asi lo tenia -->
<!-- 
async register(body) {
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
        router.push('login')
      }
    });
}, -->


<!-- ICONOS

<v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
        href="https://www.google.es"
        target="_blank"
      ></v-btn> -->



      <!-- // probando 3
      //  const { authenticated } = storeToRefs(userStore);
      
      // function verificarLogin() {
      //   if (getToken()) {
      //     authStores().isLogged = true;
      //   } else {
      //     authStores().isLogged = false;
      //   }
      // }
      
      // router.beforeEach((to, from, next) => {
      //   verificarLogin();
      //   if(to.matched.some(record => record.meta.requiresGuest) && authStores().isLogged){
      //     next({name:"inicio"});
      //   }else {
      //     next();
      //   }
      
      
      // }) -->





      <!-- TESTEO DEL formularioRegistro -->


<!-- // import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
// import { ref } from "vue";
import { formularioRegistro } from "../formularioRegistro.vue";
// import { mount as vueMount } from "@vue/test-utils"
import {authStores} from '@/stores'


import { mount } from '@vue/test-utils';


describe('My componenente', () => {
  it('should register user when form is submitted', async () => {
    // Montar el componente
    const wrapper = mount(formularioRegistro);

    // Establecer los valores de los campos del formulario
    await wrapper.find('[label="Nombre"]').setValue('John');
    await wrapper.find('[label="Apellidos"]').setValue('Doe');
    await wrapper.find('[label="Correo"]').setValue('johndoe@example.com');
    await wrapper.find('[label="Contraseña"]').setValue('password');

    // Simular el envío del formulario
    await wrapper.find('form').trigger('submit.prevent');

    // Esperar a que se complete la llamada a `authStores().register`
    await wrapper.vm.$nextTick();

    // Comprobar que se ha llamado a `authStores().register` con los datos correctos
    expect(authStores().register).toHaveBeenCalledOnce({
      name: 'John',
      surnames: 'Doe',
      email: 'john.doe@example.com',
      password: 'password',
    });
  });
});





ESTE ES OTRO












// function mounthTheForm() {
//   const wrapper = mount(formularioLogin, { props: {} });
//   return wrapper;
// }

// describe("El formulario", () => {
//   it("Se monta correctamente", () => {
//     expect(mounthTheForm()).toBeTruthy();
//     //Comprobar el montaje del boton submit
//     expect(mounthTheForm().text()).toContain("Submit");
//   });

//   it("Haga click en el boton ", async () => {
//     const form = mounthTheForm().find("form");
//     // La función spyOn informará si el elemento
//     // ha recibido un clic.
//     const spyOnForm = vi.spyOnForm(form, "trigger");
//     await form.trigger("click");
//     expect(spyOnForm).toHaveBeenCalledOnce();
//   });

//   it("Representa el valor de entrada", async () => {
//     const input = mounthTheForm().find('input')
//     // el input se renderiza con un valor vacío
//     expect(input.text()).toContain('')
//      // agrega un valor al input
//      await input.setValue('juanitoPereza@gmail.com')
//      //Comprobar que el inputu tiene un valor
//      expect(input.element.value).toEqual('juanitoPereza@gmail.com')


//   })

// }); -->


