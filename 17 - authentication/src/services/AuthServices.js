import { ref } from "vue"

class AuthService {

    constructor() {
        this.token = ref('')
        this.error = ref('')
    }

    getToken() {
        return this.token
    }

    getError() {
        return this.error
    }

    async login(email, password) {
        try {

            // http://127.0.0.1:8000/api/login

            const res = await fetch('http://127.0.0.1:8000/api/login', {
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
            if (response.status == 401) {
                this.error = "Login failed"
                return false
            }

            // Almaceno el token 
            this.token = response.data.access_token
            return true

        } catch (error) {
            console.log(error)
            this.error = "Login failed"
            return false
        }
    }

}

export default AuthService