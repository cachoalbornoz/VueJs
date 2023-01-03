<template>

  <nav>
    <router-link :to="{ name: 'home', params: {} }">Home</router-link> |
    <router-link :to="{ name: 'login', params: {} }">Login</router-link> |
    <router-link :to="{ name: 'register', params: {} }">Register</router-link> |
    <button @click="userStore.logoutUser" :disabled="userStore.processing">Logout</button>
  </nav>

  <p>{{ userStore.access_token }}</p>

  <router-view></router-view>
</template>

<script setup>

import { useUserStore } from './stores/user'
const userStore = useUserStore()

</script>

