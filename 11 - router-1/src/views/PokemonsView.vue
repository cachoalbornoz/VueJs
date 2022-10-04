<script setup>

import { ref } from "vue"
import axios from "axios"
import {RouterLink} from "vue-router"

const pokemons = ref([])

const getData = async () => {

    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
        pokemons.value = data.results
    } catch (error) {
        console.log(error);
    }
}

getData()

</script>


<template>
    <h2>
        Pokemons - Ok !
    </h2>

    <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.name" >
            <router-link :to="`/pokemons/${pokemon.name}`">
                {{ pokemon.name }}
            </router-link>
        </li>
    </ul>

</template>
