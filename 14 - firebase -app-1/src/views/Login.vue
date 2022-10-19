<template>
    <div>
        <h1>Login </h1>

        <hr/>

        <form @submit.prevent="handleSubmit">

            <input type="email" placeholder="Ingrese email" v-model.trim="email" >

            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password" />

            <button type="submit" :disabled="useStore.loadingUser"> Acceder </button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user'

const useStore = useUserStore()

const email = ref('cachoalbornoz@test.com')
const password = ref(123456)

const handleSubmit = async () => {   

    if(!email.value || password.value.length < 6) {
        alert('Complete los campos')
        return
    }

    await useStore.loginUser(email.value, password.value)
}


</script>