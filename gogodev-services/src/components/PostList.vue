<template>

    <div class="container">

        <h1>Post List</h1>

        <ul class="list-group">
            <li class="list-group-item" v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
        
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

import PostService from '@/services/PostService';

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})

</script>

<style>

</style>