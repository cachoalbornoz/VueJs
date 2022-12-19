<template>
    <div>
        <h3 v-custom-font.lg.red>Calculo de Iva</h3>
        <input type="number" v-model="subtotal" />

        <h3 v-font-size>Total Iva : {{ totalIva }} ({{ iva }} %)</h3>

        <h3 v-custom-size:xxl>Total a pagar: {{ total }}</h3>
    </div>

</template>

<script setup>

import { ref, computed } from 'vue'

const iva = 21
let subtotal = ref(0)
const totalIva = computed(() => (subtotal.value * iva) / 100)
const total = computed(() => subtotal.value + totalIva.value)

</script>

<style>

</style>