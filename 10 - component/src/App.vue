
<script setup>
import { onMounted, ref } from "vue";

import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const posts = ref([]);
const favorito = ref("");
const isLoading = ref(true);

const cambiarFavorito = (title) => {
  favorito.value = title;
};

const registrosXpagina = 5;
const inicio = ref(0);
const fin = ref(registrosXpagina);

const prev = () => {
  inicio.value = inicio.value - registrosXpagina;
  fin.value = fin.value - registrosXpagina;
};

const next = () => {
  inicio.value = inicio.value + registrosXpagina;
  fin.value = fin.value + registrosXpagina;
};

onMounted(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {

    setTimeout(()=>{
      isLoading.value = false;
    }, 500)

  }
});

</script>


<template>
  <LoadingSpinner v-if="isLoading"></LoadingSpinner>
  <div class="container" v-else>
    <h3>App Contador</h3>

    <h4>Mi post favorito: {{ favorito }}</h4>

    <PaginatePost
      :inicio="inicio"
      :fin="fin"
      :maxRegistros="posts.length"
      @prev="prev"
      @next="next"
    ></PaginatePost>

    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      :key="post.id"
      @cambiarNombreFavorito="cambiarFavorito"
      class="mb-2"
    >
    </BlogPost>
  </div>
</template>

