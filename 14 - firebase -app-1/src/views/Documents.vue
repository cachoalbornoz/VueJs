<template>

    <p v-if="databaseStore.loadingDoc">Processing ... </p>

    <ul v-else>
        <li v-for="item of databaseStore.documents" :key="item.id">
            {{ item.id }} - {{ item.name }}
            <br>
            {{ item.short }}
            <br>
            <button @click="databaseStore.eliminar(item.id)">Eliminar</button>
            <br>
            <router-link :to="`/editar/${item.id}`">
                Editar
            </router-link>
        </li>
    </ul>
    
</template>

<script setup>

import { useDatabaseStore } from '../store/database';

const databaseStore = useDatabaseStore();
databaseStore.getUrls()

</script>

