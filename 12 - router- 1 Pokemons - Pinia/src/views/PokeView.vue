<script setup>

import { useRoute, useRouter } from "vue-router"
import { useGetData} from "@/composables/getData"
import { storeToRefs} from "pinia"

import LoadingSpinner from "../components/LoadingSpinner.vue";


import { useFavoritosStore } from '@/store/favoritos'
const useFavoritos = useFavoritosStore()

const {add} = useFavoritos
const {disabled} = storeToRefs(useFavoritos)

const {data, getData, errores} = useGetData()

const route = useRoute()
const router = useRouter()

const back = () => {
    router.push("/pokemons")
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>

    <div class=" alert alert-danger mt-2" v-if="errores">{{ errores }}</div>

    <div v-if="data">
        <div>
            <img :src="data.sprites?.front_default" alt="" />
            <h2>Poke name : {{ $route.params.name }}</h2>
            <button :disabled="disabled" @click="add(data)" class="btn btn-outline-primary mt-2" > 
                Agregar favorito 
            </button>
        </div>
    </div>

    <button @click="back" class="btn btn-outline-primary mt-2"> 
        Volver 
    </button>

</template>