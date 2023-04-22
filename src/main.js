import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'metro4/build/css/metro-all.css'
import 'metro4/build/js/metro.min.js'
import './assets/main.css'

const app = createApp(App)



app.use(router)


app.mixin({
    mounted() {
      Metro.init();
    }
  });

app.mount('#app')
