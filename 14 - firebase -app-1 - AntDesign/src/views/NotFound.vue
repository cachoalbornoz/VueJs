<template>
    <h1>404</h1>

    <button class="btn btn-outline-primary" @click="back">
        Regresar
    </button>

</template>

<script setup>


import { useRouter } from "vue-router"    
const router = useRouter()

const back = () => {
    router.push("/")
}

</script>