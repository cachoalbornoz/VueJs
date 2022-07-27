<template>
  <Titulo texto="Titulo de mi blog" />
  <!-- <button @click="consumirApi">Consumir API - Json PlaceHolder</button> -->

  <div v-for="blog in arrayBlog" :key="blog.id">    
    <router-link :to="`/blog/${blog.id}`">
      <p>{{ blog.title }}</p>   
    </router-link>
  </div>
  
</template>

<script>

import Titulo from '@/components/Titulo.vue'

export default {
    components:{
        Titulo,
    },
    data(){
      return {
        arrayBlog:[],
      }
    },
    methods:{
      async consumirApi(){
        try {
          
          const data = await fetch('https://jsonplaceholder.typicode.com/posts')
          this.arrayBlog = await data.json();
          console.log(this.arrayBlog);

        } catch (error) {
          console.log(error);
        }
      }
    },
    created() {
      this.consumirApi()
    }
}
</script>

<style>

</style>