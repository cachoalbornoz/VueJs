<template>
    <div>
        <h1>Home</h1>
        <hr />
        <p>Usuario : {{ email }} </p>


        <form @submit.prevent = "handleSubmit">
            <input type="text" placeholder="Ingrese la URL" v-model="url" autofocus>
            <button type="submit" :disabled="useDataBase.loading">Agregar</button>
        </form>

        <Documents />
    </div>
</template>

<script setup>

import { ref } from 'vue';
import { useDatabaseStore } from '../store/database';

import { useUserStore } from '../store/user'
import Documents from './Documents.vue';

const useStore = useUserStore()
const { email } = useStore.userData

const useDataBase = useDatabaseStore();

const url = ref('')

const handleSubmit = ()=>{
    
    if(url.value == null || url.value == '') return 
    useDataBase.addUrl(url.value)
}

</script>

