<template>
    <h1>Post List</h1>
    <hr />

    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            {{ post.body }}
        </li>
    </ul>

</template>

<script setup>
import { ref, onMounted } from 'vue';

import PostService from '@/services/PostService';

let posts = ref([])

onMounted(async () => {
    const service = new PostService()
    await service.fetchAll()
    posts = service.getPosts()
})


</script>

<style>
.post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;
}

.post-list li {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;

}
</style>