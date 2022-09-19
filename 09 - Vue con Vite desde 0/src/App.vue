<script setup>
const name = 'Vue dinamico'
const styleBlue = "color:blue"
const arrColores=["blue", "red", "green"]
const activo = false
const objetoFruta = {
  id:1,
  name: "Manzana",
  price: "1.00",
  description: "Una manzana",
}
</script>

<template>
  
  <h2>Hola {{ name }}</h2>
  
  <br/>

  <p>Objeto fruta :: {{ objetoFruta }}</p>

  <br/>

  <p>Este bucle FOR sólo se da cuando que quiere </p>
  <ul>
    <li v-for="(value, propiedad, index) in objetoFruta" :key="index" >
      {{ index++ }} - {{ propiedad }} : {{ value }}      
    </li>
  </ul>

</template>

<style>

</style>