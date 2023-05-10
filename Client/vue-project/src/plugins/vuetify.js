// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import { createVuetify, ThemeDefinition } from 'vuetify'
import { createVuetify } from "vuetify"
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// import 'vuetify/dist/vuetify.min.css'
// import '@fortawesome/fontawesone'
// import "vuetify/dist/vuetify.min.css";

// import "@fortawesome/fontawesome-free/css/all.css";

// import { aliases, fa} from "vuetify/iconsets/fa"

// Vuetify


// const myCustomLightTheme = {
//   dark: false,
//   colors: {
//     background: '#FFFFFF',
//     surface: '#FFFFFF',
//     primary: '#6200EE',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// }


export default createVuetify({
  ssr: true,
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
     defaultTheme: 'dark',
   
     
    },

    // themes: {
    //   myCustomLightTheme
    // }
  
  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 0,
      sm: 40,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  }
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
