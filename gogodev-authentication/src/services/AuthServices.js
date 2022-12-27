import { ref } from "vue"

class AuthService {

    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJWT() {
        return this.jwt
    }

    getError() {
        return this.error
    }

    async login(email, password) {
        try {

            const url = process.env.VUE_APP_url + '/api/auth/login';

            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const response = await res.json()

            // Hubo un error
            if ('error' in response) {
                this.error = "Login failed"
                return false
            }

            // Almaceno el token 
            this.jwt = response.access_token
            $cookies.set('auth', response.access_token)
            return true

        } catch (error) {
            console.log(error)
            this.error = "Login failed"
            return false
        }
    }

}

export default AuthService