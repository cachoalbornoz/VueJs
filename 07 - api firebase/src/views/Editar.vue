<template>
  Editar {{ $route.params.id }} - {{ tarea }}
  <form @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea"/>
  </form>
</template>

<script>

import { mapState, mapActions} from 'vuex'
import Input from '@/components/Input';

export default {
    components:{
        Input
    },
    computed:{
        ...mapState(['tarea'])
    },
    methods:{
        ...mapActions(['buscarTarea', 'updateTarea'])
    },
    created(){
        this.buscarTarea(this.$route.params.id)
    }
}
</script>
