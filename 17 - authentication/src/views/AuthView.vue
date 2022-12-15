<template>

    <div class="container">

        <form @submit.prevent="authUser">
            <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" placeholder="enter email" v-model="email">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" placeholder="enter password" v-model="password">
                </div>
            </div>
            <div class="mb-3 form-group">
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </div>

        </form>
    </div>

</template>

<script setup>

import { ref } from 'vue';
import AuthService from '@/services/AuthServices';


let email = ref("")
let password = ref("")


const authUser = async () => {
    const auth = new AuthService()
    const success = await auth.login(email.value, password.value);

    if (success) {
        alert('Exito !')
    } else {
        alert('Login incorrecto')
    }

}

</script>