import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
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
