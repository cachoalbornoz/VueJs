<template>
    <div>
        <h1>Register</h1>

        <hr/>

        <form @submit.prevent="handleSubmit">

            <input type="email" placeholder="Ingrese email" v-model.trim="email" >

            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password" />

            <button type="submit"> Crear usuario </button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user'

import { useRouter} from 'vue-router'

const useStore = useUserStore()

const router = useRouter()

const email = ref('cachoalbornoz@test.com')
const password = ref(123456)

const handleSubmit = async () => {   

    if(!email.value || password.value.length < 6) {
        alert('Complete los campos')
        return
    }

    await useStore.registerUser(email.value, password.value)

    router.push('/')

}


</script>