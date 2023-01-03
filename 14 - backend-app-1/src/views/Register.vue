<template>
    <h1>Register</h1>
    <form>
        <input type="text" v-model.trim="name" placeholder="Ingrese nombre" />
        <input type="email" v-model.trim="email" placeholder="Ingrese email" />
        <input type="password" v-model.trim="password" placeholder="Ingrese password" />
        <button @click.prevent="handleSubmit" :disabled="userStore.processing">Crear usuario</button>

        <p v-if="!userStore.errores">
            <span v-if="userStore.processing">
                Registrando usuario ...
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
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
const userStore = useUserStore()

const name = ref('Guillermo')
const email = ref('cachoalbornoz@gmail.com')
const password = ref('cervantes')

const handleSubmit = async () => {
    if (!name.value || !email.value || !password.value) {
        return alert('Complete todos sus datos')
    }
    await userStore.registerUser(name.value, email.value, password.value)
}
</script>
