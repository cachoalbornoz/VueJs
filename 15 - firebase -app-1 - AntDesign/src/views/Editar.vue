<template>
    <div>
        <h1>Editar id: {{ $route.params.id }}</h1>

        <hr />

        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese la URL" v-model="url" autofocus>
            <button type="submit" :disabled="useDataBase.loading">Editar</button>
        </form>

        <hr />

        <button @click="back">
            Volver
        </button>

    </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router"
import { useDatabaseStore } from '../store/database';

const route = useRoute()
const router = useRouter()

const useDataBase = useDatabaseStore()


const id = route.params.id;
const url = ref('')

// Cuando se carga la pantalla - formulario
onMounted(async () => {
    url.value = await useDataBase.editar(id)
})


// Cuando se presiona Editar
const handleSubmit = async () => {
    await useDataBase.update(id, url.value)
}


const back = () => {
    router.push("/home")
}

</script>