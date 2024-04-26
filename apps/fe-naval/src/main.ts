import { createApp } from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { createPinia } from "pinia"
import router from "./router"
import { loadFonts } from "./plugins/webfontloader.js"

loadFonts()

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())
app.mount("#app")
