<template>
    <div class="container">
        <PostDetail v-for="item in infoArray" :key="item.title" :title="item.title" :content="item.content" @saludo="sayHello" />
    </div>
</template>

<script setup>
import PostDetail from './PostDetail.vue';

let infoArray = [
    { title: "Este es el post 1", content: "Texto de ejemplo contenido 1" },
    { title: "Este es el post 2", content: "Texto de ejemplo contenido 2" },
    { title: "Este es el post 3", content: "Texto de ejemplo contenido 3" },
    { title: "Este es el post 4", content: "Texto de ejemplo contenido 4" },
    { title: "Este es el post 5", content: "Texto de ejemplo contenido 5" },
]

const sayHello = (msg) => {
    alert(msg)
}

</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>