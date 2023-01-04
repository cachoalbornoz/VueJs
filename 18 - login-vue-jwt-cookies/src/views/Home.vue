<template>
    <div class="home">
        <navigation />
        <h1>Home</h1>
        <p v-if="userLogged">User loggued: {{ userLogged }}</p>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import Navigation from "../components/Navigation.vue"
import auth from "../logic/auth"

const userLogged = ref(false)

onMounted(
    ()=>{
        userLogged.value = auth.getUserLogged()
    }
)

</script>
  