import { createApp } from "vue"
import VueCountdown from "@chenfengyuan/vue-countdown"
import "aos/dist/aos.css"

import App from "./App.vue"

createApp(App).mount("#app")
App.component(VueCountdown.name, VueCountdown)
