import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/vee-validate'
import firebase from './plugins/firebase'

// import './assets/css/tailwind.css'
// import './assets/css/main.css'

createApp(App)
  .use(store)
  .use(router)
  .use(firebase)
  .mount('#app')
