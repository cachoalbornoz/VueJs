<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  
  <nav class="navbar bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Poke app
      </router-link>

      <div>
        <router-link to="/" class=" btn btn-outline-primary me-1">Home</router-link>
        <router-link to="/pokemons" class=" btn btn-outline-primary me-1">Pokemons</router-link>
      </div>

    </div>
  </nav>
  
  <div class="container">
    <RouterView />
  </div>
  

</template>
