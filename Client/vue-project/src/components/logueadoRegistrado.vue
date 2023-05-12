<template>
  <h1 id="titleLogueado">Bienvenido {{ authStore.name }}</h1>
  <v-form>
    <div>
      <v-container>
        <v-title>Danos tu opinion: </v-title>
        <v-layout row wrap>
          <v-text-field
            label=""
            placeholder="Máximo 100 caracteres"
            color="blue"
            maxlength="100"
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
  </v-form>
</template>

<script setup>
import { authStores } from "@/stores";
const authStore = authStores();
console.log(authStore);
</script>

<style>
#titleLogueado {
  color: red;
  margin-left: 2%;
}
</style>
