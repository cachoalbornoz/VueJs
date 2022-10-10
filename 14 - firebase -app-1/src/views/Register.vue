<template>
    <div>
        <h1>Register</h1>
        <hr/>


        <form @submit.prevent="handleSubmit">
            <label>Email
                <input type="email" v-model.trim="email" >
            </label>
            <label>Password
                <input type="password" v-model.trim="password" >
            </label>

            <button type="submit">Crear usuario </button>

        </form>

    </div>
</template>

<script setup>

import { ref } from "vue";
import { useUserStore } from '../store/user'

const useUsers = useUserStore()
const { registerUser } = useUsers;

const email = ref('cachoalbornoz@gmail.com')
const password = ref('cervantes')

const handleSubmit = async () => {

    if(!email.value || password.value.length < 6){
        return alert('Complete los datos')
    }
    await registerUser(email.value, password.value)
}


</script>