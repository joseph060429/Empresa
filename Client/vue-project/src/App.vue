<template>
  <v-app>
    <div>
      <cabecera></cabecera>
    </div>
    <div>
      <!-- <inicio></inicio> -->


    </div>


    <div class="container">
      <router-view></router-view>
    </div>
    

    <footerComponent></footerComponent>
  </v-app>
</template>

<script setup>
import { footerComponent } from "@/components";
import { cabecera } from "@/components";
// import { inicio } from "@/components"

</script>
