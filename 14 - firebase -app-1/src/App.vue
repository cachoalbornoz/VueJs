<template>

  <a-layout>

    <a-layout-header v-if="!useStore.loadingSession">

      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="home" v-if="useStore.userData">
          <router-link to="/" class=" btn btn-outline-primary me-1">Home</router-link>
        </a-menu-item>
        <a-menu-item key="login" v-if="!useStore.userData">
          <router-link to="/login" class=" btn btn-outline-primary me-1">Login</router-link>
        </a-menu-item>
        <a-menu-item key="register" v-if="!useStore.userData">
          <router-link to="/register" class=" btn btn-outline-primary me-1">Registro</router-link>
        </a-menu-item>
        <a-menu-item key="logout" @click="useStore.logoutUser" v-if="useStore.userData">
          Logout
        </a-menu-item>
      </a-menu>

    </a-layout-header>

    <a-layout-content style="padding: 0 50px">

      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">

        <div v-if="useStore.loadingSession">
          loading ...
        </div>

        <RouterView />

      </div>



    </a-layout-content>







  </a-layout>

</template>


<script setup>
import { ref, watch } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router'

import { useUserStore } from './store/user'

const useStore = useUserStore()

const route = useRoute();
const selectedKeys = ref([''])

watch(
  ()=> route.name, 
  ()=>{
    selectedKeys.value = [route.name];
  }
)

</script>