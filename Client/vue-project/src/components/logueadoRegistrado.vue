<template>
  <h1 id="titleLogueado">
    Bienvenido {{ authStore.name }} {{ authStore.surnames }}
  </h1>
  <v-form>
    <div>
      <v-container>
        <v-title>Danos tu opinion: </v-title>
        <v-layout row wrap>
          <v-text-field
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
        <v-select
          label="Escoge un lugar turístico"
          :items="['La Isla del Faraón', 'El Muelle', 'El Faro', 'El Áspero']"
          color="blue"
        ></v-select>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-title>Escoge tu sexo: </v-title>
        <v-radio-group>
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
          color="blue"
          v-model="archivo"
          @click:clear="clear"
        ></v-file-input>
        <v-btn
          @click="
            subirArchivo();
            archivo = null;
          "
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
          >Guardar cambios</v-btn
        >
      </v-flex>
    </v-row>
  </v-form>
</template>

<script setup>
import { authStores } from "@/stores";
import { ref } from "vue";
import { apiClient } from "@/middlewares";
import { toast } from "vue3-toastify";
const authStore = authStores();

console.log(authStore);

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
</style>
