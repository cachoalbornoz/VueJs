<template>

    <div class="container">

        <div class="card p-3">
            <h3>Login with <span class=" text-primary">Google</span></h3>
            <button @click="loginGoogle" class="btn btn-primary mt-4">Submit with Google</button>

        </div>

        <div class="card p-3 mt-3">
            <h3>Login with <span class=" text-primary">Facebbok</span></h3>
            <button @click="loginFacebook" class="btn btn-primary mt-4">Submit with Facebbok</button>
        </div>


    </div>

</template>

<script setup>

import {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from '@firebase/auth';

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const auth = getAuth()

const loginGoogle = () => { 
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken;
        alert('Exito')

    })
    .catch((error)=>{
        alert('Login failed :' + error)
    })
}

const loginFacebook = ()=>{
    signInWithPopup(auth, facebookProvider)
    .then((result)=>{
        const credential = FacebookAuthProvider.credentialFromResult(result)
        alert('Exito')

    })
    .catch((error)=>{
        alert('Login failed :' + error)
    })
}


</script>