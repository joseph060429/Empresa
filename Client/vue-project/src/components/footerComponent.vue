<template>
  <v-footer class="d-flex flex-column" id="footer">
    <div class="bg-black d-flex w-100 align-center px-4">
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

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style>
#footer {
  position: fixed;
  bottom: 0;
  width: 99.9vw;
}
</style>
