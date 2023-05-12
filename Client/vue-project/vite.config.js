import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // template: { transformAssetUrls },
      //reactivityTransform: true // Si no queremos usar el .value en los REF
    }),
    vuetify({ autoImport: true }),
  ],

  //Para eliminar los log y los debuger cuando subamos nuestro proyecto

  esbuild: {
    drop: ['console', 'debugger'],
  },
  
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    https: {
      key: fs.readFileSync("src/Certificado_HTTPS/client-key.pem"),
      cert: fs.readFileSync("src/Certificado_HTTPS/client-cert.pem"),
    },
  },
});
