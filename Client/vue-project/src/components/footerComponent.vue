<template>
  <v-footer class="d-flex flex-column" id="footer">
    <div class="bg-white d-flex w-100 align-center px-4">
      <strong>¡Conéctate con nosotros en las redes sociales!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-icon
        icon="mdi-instagram"
        variant="plain"
        size="small"
        href="https://www.instagram.com/supe_puerto/"
        target="_blank"
      ></v-btn>
      <v-btn
        v-icon
        icon="mdi-facebook"
        class="mx-4"
        variant="plain"
        size="small"
        href="https://www.facebook.com/MunicipalidadSupePuerto/"
        target="_blank"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-blue text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Puerto Supe</strong>
    </div>
  </v-footer>
</template>

<script setup></script>

<style>
#footer {
  position: fixed;
  bottom: 0;
  width: 99vw;
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
