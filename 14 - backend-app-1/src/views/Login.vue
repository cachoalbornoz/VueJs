<template>
    <h1>Login</h1>
    <form>
        <input type="email" v-model.trim="email" placeholder="Ingrese email" />
        <input type="password" v-model.trim="password" placeholder="Ingrese password" />
        <button @click.prevent="handleSubmit" :disabled="userStore.processing">Acceder</button>

        <p v-if="!userStore.errores">
            <span v-if="userStore.processing">
                Dando acceso usuario ...
            </span>
        </p>
        <ul v-else>
            <li v-for="error in userStore.errores">
                {{ error }}
            </li>
        </ul>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const email = ref('cachoalbornoz@gmail.com')
const password = ref('cervantes')

const handleSubmit = async () => {
    if (!email.value || !password.value) {
        return alert('Complete todos sus datos')
    }
    await userStore.loginUser(email.value, password.value)
}
</script>