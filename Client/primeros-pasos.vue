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
  