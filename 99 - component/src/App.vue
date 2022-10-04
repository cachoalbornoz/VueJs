
<script setup>
  import ButtonCounter from "./components/ButtonCounter.vue";
  import BlogPost from "./components/BlogPost.vue";
  import { ref } from "vue";


  const posts = ref([
    {id: 1, title: 'Post 1', body: 'Este es el 1'},
    {id: 2, title: 'Post 2', body: 'Este es el 2'},
    {id: 3, title: 'Post 3'},
  ])

</script>


<template>
  <div class="container">
    <h3>App Contador</h3>

    <h4></h4>

    <ButtonCounter />
    <button-counter></button-counter>

    
    <BlogPost v-for="post in posts" :id="post.id" :title="post.title" :body="post.body" :key="post.id">
    </BlogPost>
    

  </div>
</template>

