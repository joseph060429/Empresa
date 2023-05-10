<template>
  <h1> Bienvenido aquí podrás disfrutar de todo</h1>

  <div>
    Name: {{ authStore.name }}  <br/>
    Surnames: {{ authStore.surnames }} <br/>
    Email: {{ authStore.email }} <br/>
    Prueba tildes: á à ä â 
  </div>
</template>

<script setup>
import {authStores} from '@/stores'
const authStore = authStores()
console.log(authStore)


</script>
