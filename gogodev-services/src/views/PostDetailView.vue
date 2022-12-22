<template>
    <div class="container">

        <ul class="list-group mt-5">
            <li class="list-group-item">
                <h3>{{ post.id }} - {{ post.title }}</h3>
                {{ post.title }}
                <p> {{ post.body }}</p>
            </li>
        </ul>

        <router-link :to="{ name: 'post'}" class=" btn btn-outline-primary">
            Volver
        </router-link>

    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import PostService from '@/services/PostService';
const service = new PostService()
const post = service.getPost()

onMounted(async () => {
    const route = useRoute()
    await service.fecthById(route.params.id)
    console.log(process.env)
})
</script>