import { createApp } from 'vue'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkfX4-vXkO-Lf626dZ9GgMdhsVbt0_9mo",
    authDomain: "curso-vue-gogodev.firebaseapp.com",
    projectId: "curso-vue-gogodev",
    storageBucket: "curso-vue-gogodev.appspot.com",
    messagingSenderId: "952608712311",
    appId: "1:952608712311:web:1b6ade0d6e1a447b26c872",
    measurementId: "G-QEPGZTH417"
};


initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
    .use(VueCookies, {expires: '1d'})
    .mount('#app')

// $cookies.set('auth', {llave: valor, llave2: valor2}) // Guardar cookie
// $cookies.get('auth')                                 // Obtener cookie
// $cookies.remove('auth')                              // Eliminar cookie
// $cookies.isKey('auth')                               // Comprueba que existe esa cookie
// $cookies.keys()                                      // Obtengo todas las cookies

// $session.start()
// $session.set('auth', {llave: valor, llave2: valor2})
// $session.get('auth)
// $session.id('auth)
// $session.renew()
// $session.destroy()