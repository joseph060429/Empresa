<template>
  <v-footer class="d-flex flex-column" id="footer">
    <div class="bg-white d-flex w-100 align-center px-4">
      <strong>¡Conéctate con nosotros en las redes sociales!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
      
    </div>

    <div class="px-4 py-2 bg-blue text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Puerto Supe</strong>
    </div>
  </v-footer>
</template>

<script setup>
// import { routerKey } from 'vue-router';
const icons = ["mdi-facebook", "mdi-instagram"];

function instagram() {
  router.push("/www.instagram.com/supe_puerto/");
}
</script>

<style>
#footer {
  position: fixed;
  bottom: 0;
  width: 99.9vw;
}

.mdi-facebook {
  color: #3b5998;
}

.mdi-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  
}
</style>
