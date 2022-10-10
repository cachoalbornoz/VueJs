<script setup>

import { storeToRefs } from "pinia"

import { useFavoritosStore } from '@/store/favoritos'
const useFavoritos = useFavoritosStore()
const {remove} = useFavoritos
const { favoritos } = storeToRefs(useFavoritos)


</script>

<template>
    <h1>Pokemons favoritos :: {{ favoritos.length }}</h1>
    <hr />

    <p v-if="!favoritos">Sin favoritos</p>

    <ul v-else class=" list-group">
        <li class=" list-group-item" v-for="favorito in favoritos" :key="favorito.id">
            <div class="row">
                <div class="col-6">
                    {{ favorito.name }}
                </div>
                <div class="col-4">
                    <img :src="favorito.sprites?.front_default" alt="" />
                </div>
                <div class="col-2">
                    <router-link :to="`/pokemons/${favorito.name}`" class="btn btn-primary me-2">
                        Mas info
                    </router-link>
                    <button @click="remove(favorito.id)" class="btn btn-outline-danger btn-xs" > 
                        Quitar
                    </button>
                </div>
            </div>
        </li>
    </ul>

</template>
