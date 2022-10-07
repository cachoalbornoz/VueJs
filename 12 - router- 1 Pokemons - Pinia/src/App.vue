<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Poke app
      </router-link>

      <div>
        <router-link to="/" class=" btn btn-outline-primary me-1">Home</router-link>
        <router-link to="/pokemons" class=" btn btn-outline-primary me-1">Pokemons</router-link>
        <router-link to="/favoritos" class=" btn btn-outline-primary me-1">Favoritos</router-link>
      </div>

    </div>
  </nav>
  
  <div class="container text-center">
    <RouterView />
  </div>
  

</template>
