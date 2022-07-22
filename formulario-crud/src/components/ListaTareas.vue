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
            <td>
                <ul>
                    <li v-for ="(categoria, index) in tarea.categorias" :key="index">{{ categoria }}</li>
                </ul> 
            </td>
            <td>{{ tarea.estado }}</td>
            <td>{{ tarea.numero }}</td>
            <td>acccion</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState(['tareas'])
    }
}
</script>
