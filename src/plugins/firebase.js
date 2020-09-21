import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
}

export default {
  install: (app, options) => {
    const firebaseApp = Firebase.initializeApp(firebaseConfig)
    // const db = firebaseApp.database()

    app.config.globalProperties.$firebase = firebaseApp
    app.provide('firebase', firebaseApp)
    // app.config.globalProperties.$db = db
  }
}
