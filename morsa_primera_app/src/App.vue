<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { todosFactory } from './todosSetup';
import todoService from './services/todosService';

const { actualizar } = todosFactory()

const isLoading = ref(true)

async function prefetch() {
  actualizar(await todoService.getTodos());
  isLoading.value = false
}


prefetch()

</script>

<template>

  <div class="container">

    <h2 v-if="isLoading">Cargando lista TODOS</h2>

    <template v-else>
      <ul>
        <RouterLink to="/">Todo List</RouterLink>
      </ul>
      <RouterView />
      
    </template>

  </div>
</template>

<style>
@import './assets/base.css'
</style>
