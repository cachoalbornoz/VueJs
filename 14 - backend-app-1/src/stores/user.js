import { defineStore } from "pinia";
import axios from "axios";
import router from '../router'

const url = import.meta.env.VITE_API


export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: null,
        access_token: null,
        authenticated: false,
        errores: [],
        processing: false
    }),

    actions: {

        async registerUser(name, email, password) {

            this.processing = true
            this.errores = null

            await axios.post(url + '/api/register', {
                name: name,
                email: email,
                password: password,
            }).then(() => {
                router.push('/login');
            }).catch((error) => {
                if ('response' in error) {
                    this.errores = error.response.data;
                } else {
                    this.errores = { 'error': 'Sin conexion con el servidor' };
                }
            }).finally(() => {
                this.processing = false
            })
        },

        async loginUser(email, password) {

            this.processing = true
            this.errores = null

            await axios.post(url + '/api/login', {
                email: email,
                password: password,
            }).then((response) => {
                this.user = response.data.user
                this.access_token = response.data.access_token
                this.authenticated = true
                // redirect to home page
                router.push('/');

            }).catch((error) => {

                if ('response' in error) {
                    this.errores = error.response.data;
                } else {
                    this.errores = { 'error': 'Sin conexion con el servidor' };
                }
            }).finally(() => {
                this.processing = false
            })
        },

        async logoutUser() {

            this.processing = true

            await axios.get(url + '/api/logout', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.access_token,
                },
            }).then((response) => {
                this.user = null
                this.access_token = null
                this.authenticated = false
                router.push('/login')
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                this.processing = false
            })

        }

    }
});