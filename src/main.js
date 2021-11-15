import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let app = createApp(App).use(router)
app.use(Router)
app.use(ElementPlus)

app.mount('#app')
