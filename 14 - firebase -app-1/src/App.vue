<template>


  <div>

    <h1>App</h1>

    <nav v-if="!useStore.loadingSession">

      <router-link to="/" class=" btn btn-outline-primary me-1" v-if="useStore.userData">Home</router-link> |
      <router-link to="/login" class=" btn btn-outline-primary me-1" v-if="!useStore.userData">Login</router-link> |
      <router-link to="/register" class=" btn btn-outline-primary me-1" v-if="!useStore.userData">Registro</router-link> |
      <button @click="useStore.logoutUser" v-if="useStore.userData">Logout</button>
    
    </nav>

    <div v-else>
      loading ... 
    </div>

  </div>

  <RouterView />

</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useUserStore } from './store/user'

const useStore = useUserStore()

</script>