<template>
  <h1 id="titleLogueado">
    Bienvenido {{ authStore.name }} {{ authStore.surnames }}
  </h1>
  <v-form >
    <div>
      <v-container>
        <v-title>Danos tu opinion: </v-title>
        <v-layout row wrap>
          <v-text-field v-model="data.opiniones"
            label="Máximo 150 caracteres"
            color="blue"
            maxlength="150"
          ></v-text-field>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-title>Sitios que deseas visitar: </v-title>
        <v-select v-model="data.LugaresAconocer"
          label="Escoge un lugar turístico"
          :items="['La Isla del Faraón', 'El Muelle', 'El Faro', 'El Áspero']"
          color="blue"
         
        ></v-select>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-title>Escoge tu sexo: </v-title>
        <v-radio-group v-model="data.genero">
          
          <v-radio label="Hombre" value="1" color="blue"></v-radio>
          <v-radio label="Mujer" value="2" color="blue"></v-radio>
        </v-radio-group>
      </v-container>
    </div>

    <div>
      <v-container>
        <v-title>¿Deseas subir un archivo? </v-title>
        <v-file-input 
          @change="onFileChange"
          chips
          multiple
          label="Subir archivo"
          color="white"
          v-model="archivo"
          center-affix
          @click:clear="clear"
          :hide-details="false"
          hint="Sube un archivo que no pese más de 1MB y con formato "
          
        ></v-file-input>
        <v-btn
          @click="
            subirArchivo();
            archivo = null;"
          id="subirArchivo"
          prepend-icon="mdi-upload"
          >Subir archivo</v-btn
        >
      </v-container>
    </div>

    <v-row class="ma-4 justify-space-around">
      <v-flex text-xs-left>
        <v-btn
          to="/"
          id="guardarCambios"
          @click="guardarCambios"
          prepend-icon="mdi mdi-content-save-check"
          > Guardar cambios
        </v-btn>
      </v-flex>
    </v-row>
  </v-form>
 
</template>

<script setup>
import { authStores } from "@/stores";
import { ref, reactive } from "vue";
import { apiClient } from "@/middlewares";
import { toast } from "vue3-toastify";
const authStore = authStores();



const data = reactive({
    genero: "",
    LugaresAconocer: "",
    opiniones: ""

})

//Subir archivo
var fileToUpload = null;
function onFileChange(event) {
  console.log(event);
  fileToUpload = event.target.files[0];
  console.log(fileToUpload);
}

const archivo = ref(null);

const clear = () => {
  archivo.value = null;
};
async function subirArchivo() {
  console.log("Valor archivo: ", archivo.value);
  if (archivo.value === null) {
    return toast("El campo subir archivo esta vacio");
  }

  const formData = new FormData();
  formData.append("archivo", fileToUpload);
  apiClient
    .post("/upload", formData)
    .then((res) => {
      toast("Arhivo subido correctamente");
    })
    .catch((err) => {
      console.log("Error al subir:", err);
    });
}




//Guardar cambios
async function guardarCambios() {

  toast("Cambios guardados correctamente");
}
</script>

<style>
#titleLogueado {
  color: red;
  margin-left: 2%;
  font-family: "Times New Roman";
}

v-title {
  color: white;
  font-family: "Times New Roman";
}

label {
  font-family: "Times New Roman";
}

#subirArchivo {
  font-family: "Times New Roman";
}

#guardarCambios {
  font-family: "Times New Roman";
  justify-content: right;
}

.hint{
  color: brown;
}
</style>
