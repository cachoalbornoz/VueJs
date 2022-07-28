<template>    
  <table class="table table-hover text-center">
    <thead>
        <tr>
            <th>#Id</th>
            <th>Nombre</th>
            <th>Categorias</th>
            <th>Estado</th>
            <th>Nro</th>
            <th>Accion</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
            <td>{{ tarea.id }}</td>
            <td>{{ tarea.nombre }}</td>
            <td>{{ tarea.categorias.join(', ') }}</td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.numero }}</td>
            <td>
                <button class=" btn btn-danger btn-sm" @click="deleteTarea(tarea.id)">
                    Eliminar
                </button>
                <router-link :to="{name: 'editar', params:{ id: tarea.id}}" class="btn btn-info btn-sm ml-2">
                    Editar
                </router-link>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
       ...mapActions(['deleteTarea']) 
    }
}
</script>
