<template>

    <div class="container">

        <h1>Post List</h1>

        <ul class="list-group">
            <li class="list-group-item" v-for="post in posts" :key="post.id">
                <router-link :to="{ name: 'detail', params: { id: post.id } }">
                    {{ post.id }} - {{ post.title }}
                </router-link>
            </li>
        </ul>

    </div>

</template>

<script setup>
import { onMounted } from 'vue';

import PostService from '@/services/PostService';

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})

</script>

<style>
.list-group-item a{
     text-decoration: none;
}
</style>