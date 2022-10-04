<script setup>

import { ref } from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const poke = ref({})


const back = () => {

    router.push("/pokemons")
}


const getData = async ()=>{

    try {
        const {data} = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
        )
        console.log(data.sprites);
        poke.value = data.sprites        
    } catch (error) {
        console.log(error);
    }

}


getData()
</script>

<template>
    
    <img :src="poke.front_default" alt="" />
    
    <h2>Poke name : {{ $route.params.name }}</h2>  

    <button @click="back" > Volver </button>


</template>