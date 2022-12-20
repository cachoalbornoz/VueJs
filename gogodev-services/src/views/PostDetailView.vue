<template>
    <h1>Post Vue {{ postId }}</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
let postId = ref('')

onMounted(() => {
    const route = useRoute()
    postId.value = route.params.id
})
</script>