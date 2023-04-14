<template>
    <formularioRegistro modo="nuevo" nombre="" :datos="datos" ></formularioRegistro>  
   
</template>

<script setup>
import {ref} from 'vue'
import {formularioRegistro} from '@/components'

//Esto sería lo mismo//
//  import { formularioRegistro } from '../components/formularios';


// const datos = ref( {
//     nombre: "Samuel",
//     apellido: "baron",
//     email: "poke@gmail.com"
//  })
</script>