import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

const pinia = createPinia()

loadFonts()

createApp(App)
.use(pinia)
  .use(router)
  .use(vuetify)
  .use(VueAxios,axios)
  
  .mount('#app')



