<template>

  <NewTodo  />  

  <hr />

  <h3>Todo List</h3>

  <p v-if="uncompletedTodos.length === 0">Nada por hacer</p>

  <ul id="incomplete-tasks">
    <li v-for="todo in uncompletedTodos" :key="todo.id">
      <input type="checkbox" @click="toggle(todo.id)" />
      <label> {{ todo.name }} </label>
      <button class="delete" @click="borrar(todo.id)">Delete</button>
    </li>
  </ul>

  <h3>Complete List</h3>

  <ul id="complete-tasks">
    <li v-for="todo in completedTodos" :key="todo.id">
      <input type="checkbox" checked @click="toggle(todo.id)" />
      <label> {{ todo.name }} </label>
      <button class="delete" @click="borrar(todo.id)">Delete</button>
    </li>
  </ul>

</template>


<script setup>

import NewTodo from './NewTodo.vue'

import { todosFactory } from '../todosSetup'

const { uncompletedTodos, completedTodos, toggle, borrar } = todosFactory()

</script>