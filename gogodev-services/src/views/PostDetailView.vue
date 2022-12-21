<template>
    <div class="container">

        <h1>Post Detail</h1>

        <h3>{{ post.id }} - {{ post.title }}</h3>

        <ul class="list-group">
            <li class="list-group-item">
                {{ post.title }}                
                <p> {{ post.body }}</p>
            </li>
        </ul>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import PostService from '@/services/PostService';
const service = new PostService()
const post = service.getPost()

onMounted(async () => {
    const route = useRoute()
    await service.fecthPost(route.params.id)
})
</script>