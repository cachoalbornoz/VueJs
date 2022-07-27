<template>
  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea"/>
  </form>

  <div class="mt-4">
    <ListaTareas/>
  </div>
</template>

<script>

import { nanoid } from 'nanoid'
import {mapActions} from 'vuex'

import Input from '@/components/Input';
import ListaTareas from '@/components/ListaTareas';


export default {
  name: "Home",
  components: {
    Input,
    ListaTareas,
},
  data() {
    return {
      tarea: {
        id: '',
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(['guardarTareas']),

    procesarFormulario() {      

      // Generar Id
      this.tarea.id = nanoid();
      // Enviar tarea a Vuex
      this.guardarTareas(this.tarea)
      // Una vez enviados los datos, los puedo limpiar
      this.tarea = {
        id: '',
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      };      
    },
  },
  
};
</script>
