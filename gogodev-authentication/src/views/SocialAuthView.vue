<template>

    <div class="container">

        <div class="card p-3">
            <h3>Login with <span class=" text-primary">Google</span></h3>
            <button @click="loginGoogle" class="btn btn-primary mt-4">Submit with Google</button>

        </div>

        <div class="card p-3 mt-3">
            <h3>Login with <span class=" text-primary">Github</span></h3>
            <button class="btn btn-primary mt-4">Submit with Github</button>
        </div>


    </div>

</template>

<script setup>

import { GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth';
const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const loginGoogle = () => { 

    signInWithPopup(auth, googleProvider)
    .then((result)=>{
        alert('Exito')
    })
    .catch((error)=>{
        alert('Login failed :' + error)
    })
}


</script>