<template>
    <div class="login">
        <h1 class="title">Login in the page</h1>
        <form action class="form">
            <label class="form-label" for="#email">Email:</label>
            <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
            <label class="form-label" for="#password">Password:</label>
            <input v-model="password" class="form-input" type="password" id="password" placeholder="Password">
            <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
            <button class="form-submit" @click.prevent="login">Login</button>
        </form>
        <p class="msg">
            ¿No tienes cuenta?
            <router-link to="/register">Regístrate</router-link>
        </p>
    </div>
</template>
  
<script setup>

import { ref } from 'vue';
import auth from '../logic/auth';
import router from '../router';

const email = ref('')
const password = ref('')
const error = ref(false)

const login = async () => {
    try {
        const response = await auth.login(email.value, password.value);
        error.value = false;
        auth.setUserLogged(email.value);
        router.push("/");
    } catch (err) {
        error.value = true;
    }
}

</script>
  
<style lang="scss" scoped>
.login {
    padding: 2rem;
}

.title {
    text-align: center;
}

.form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background: rgba(19, 35, 47, 0.9);
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;

    &:first-of-type {
        margin-top: 0rem;
    }
}

.form-input {
    padding: 10px 15px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;

    &:focus {
        outline: 0;
        border-color: #1ab188;
    }
}

.form-submit {
    background: #1ab188;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #0b9185;
    }
}

.error {
    margin: 1rem 0 0;
    color: #ff4a96;
}

.msg {
    margin-top: 3rem;
    text-align: center;
}
</style>