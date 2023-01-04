<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/register">Register</router-link>
    </li>
    <li>
      <button @click="logout">Logout</button>
    </li>
  </ul>
</template>

<script setup>

import auth from "../logic/auth"
import router from "../router";

const logout = () => {
  auth.deleteUserLogged()
  router.push('/login')
}

</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  padding: 1em 0.5em;
}
</style>