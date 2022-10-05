<script setup>

import { useRoute, useRouter } from "vue-router"
import { useGetData} from "@/composables/getData"
import LoadingSpinner from "../components/LoadingSpinner.vue";

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

    <div v-if="data" class="row">
        <div class="col-12">
            <img :src="data.sprites?.front_default" alt="" />
            <h2>Poke name : {{ $route.params.name }}</h2>
            <button @click="back" class="btn btn-outline-primary"> Volver </button>
        </div>
    </div>


</template>