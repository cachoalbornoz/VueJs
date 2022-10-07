<script setup>

import { storeToRefs} from "pinia"
import { useCounterStore } from '@/store/counter'
const useCounter = useCounterStore()

const {increment, decrement,} = useCounter
const {count, double, triple} = storeToRefs(useCounter)

</script>

<template>
  <h1>
    Home {{ count }}
  </h1>

  <hr />

  <h2> Doble : {{ double }} / Triple : {{ triple }} </h2>

  <button @click="decrement" class=" btn btn-outline-primary me-3">
    Decrementar
  </button>

  <button @click="increment" class=" btn btn-outline-primary ms-3">
    Incrementar
  </button>

</template>
