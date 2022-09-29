
<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
</script>


<template>
  <div class="container">
    <h3>App Contador</h3>

    <ButtonCounter />
    <button-counter></button-counter>

    <BlogPost 
      title="Post 1"
      id = "Sub 1"
      body = "Descripcion 1"
      colorText="primary"
      > 
    </BlogPost>

    <BlogPost 
      title="Post 2"
      id = "Sub 2"
      body = "Descripcion 2"
      colorText="info"
      > 
    </BlogPost>

    <BlogPost 
      title="Post 3"
      id = "Sub 3"
      body = "Descripcion 3"
      colorText="success"
      > 
    </BlogPost>
  </div>
</template>

