import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/vee-validate'
import firebase from './plugins/firebase'

createApp(App)
  .use(store)
  .use(router)
  .use(firebase)
  .mount('#app')
