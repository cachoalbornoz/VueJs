<script setup>

import { ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const poke = ref({})


const back = () => {
    router.push("/pokemons")
}


const getData = async () => {

    try {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
        )
        poke.value = data
    } catch (error) {
        console.log(error);
        poke.value = null;
    }
}


getData()
</script>

<template>

    <div v-if="poke" class="row">
        <div class="col-12">
            <img :src="poke.sprites?.front_default" alt="" />
            <h2>Poke name : {{ $route.params.name }}</h2>
        </div>
    </div>

    <div v-else class="row">        
        <div class="col-12">
            <h2> No existe el pokemon </h2>
        </div>
    </div>
    <button @click="back" class="btn btn-outline-primary"> Volver </button>

</template>