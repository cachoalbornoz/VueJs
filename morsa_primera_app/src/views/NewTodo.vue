<template>
    <div class="container">
        <h3>Nueva tarea</h3>
        <input type="text" v-model="todoText" placeholder="Ingrese nueva tarea">
        <button @click="agregar(todoText)">Agregar</button>
    </div>
</template>

<script setup>

import { todosFactory } from '../todosSetup'

const { todoText, agregar } = todosFactory()

</script>