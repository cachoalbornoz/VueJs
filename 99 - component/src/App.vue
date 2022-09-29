
<script setup>
  import ButtonCounter from "./components/ButtonCounter.vue";
  import BlogPost from "./components/BlogPost.vue";
  import { ref } from "vue";


  const posts = ref([
    {title: 'Post 1'}
  ])

</script>


<template>
  <div class="container">
    <h3>App Contador</h3>

    <ButtonCounter />
    <button-counter></button-counter>

    <BlogPost title="Post 1" :id ="1" body = "Descripcion 1"/>
    <BlogPost title="Post 2" :id ="2" body = "Descripcion 2"/>
    <BlogPost title="Post 3" :id ="3" />  

  </div>
</template>

