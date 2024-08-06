
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import pt from 'vuetify/lib/locale/pt'
import en from 'vuetify/lib/locale/en'
import {aliases, mdi} from 'vuetify/iconsets/mdi'
// Pinia
import {createPinia} from "pinia";
import {VNumberInput} from "vuetify/labs/components";
const pinia = createPinia()

const appTheme = {
    dark: false,
    colors: {
        header: '#FFD100',
        primary: '#7e49d2',
        secondary: '#ff6a00',
        accent: '#ffe91a',
        error: '#f04c25',
        warning: '#ff8b00',
        info: '#00adff',
        success: '#33a54d',
        background: '#EEF0F1',
        surface: '#FFFFFF',
    }
}

const vuetify = createVuetify({
    components: {
        ...components,
        VNumberInput
    },
    directives,
    theme: {
        defaultTheme: 'appTheme',
        themes: {
            appTheme,
        }
    },
    locale: {
        locale: 'pt',
        fallback: 'en',
        messages: {pt, en}
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})


const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vuetify)

app.mount('#app')
