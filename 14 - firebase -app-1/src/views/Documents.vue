<template>

    <p v-if="databaseStore.loadingDoc">loading</p>

    <ul v-else>
        <li v-for="item of databaseStore.documents" :key="item.id">
            {{ item.id }} - {{ item.name }}
            <br>
            {{ item.short }}
        </li>
    </ul>
    
</template>

<script setup>

import { useDatabaseStore } from '../store/database';
const databaseStore = useDatabaseStore();
databaseStore.getUrls()

</script>

