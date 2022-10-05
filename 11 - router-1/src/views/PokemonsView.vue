<script setup>

import { RouterLink } from "vue-router"
import { useGetData } from "@/composables/getData"

import LoadingSpinner from "../components/LoadingSpinner.vue"

const { data, getData, loading, errores } = useGetData()

getData("https://pokeapi.co/api/v2/pokemon")

</script>


<template>
    <h2>
        Pokemons - Ok !
    </h2>


    <div class=" alert alert-danger mt-2" v-if="errores">{{ errores }}</div>

    <loading-spinner v-if="loading"></loading-spinner>

    <div v-if="data">
        <ul class=" list-group">
            <li class=" list-group-item" v-for="pokemon in data.results" :key="pokemon.name">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    {{ pokemon.name }}
                </router-link>
            </li>
        </ul>
        <div class="mt-2">
            <button :disabled="!data.previous" class=" btn btn-warning me-2" @click="getData(data.previous)">Anterior</button>
            <button :disabled="!data.next" class=" btn btn-secondary" @click="getData(data.next)">Posterior</button>
        </div>
    </div>

</template>
