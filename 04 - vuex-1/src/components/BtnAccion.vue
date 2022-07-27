<template>
  <button @click="accionBoton(objeto)">{{ textoBoton }}</button>
</template>

<script>

import { mapActions } from 'vuex'

export default {

    props: {
        estado: Boolean,
        numero: Number
    },
    data() {
        return {
            objeto: {
                estado: this.estado,
                numero: this.numero
            }
        }
    },
    computed: {
        textoBoton() {
            return this.estado?'Aumentar':'Disminuir'
        }
    },
    methods: {
         ...mapActions(['accionBoton']),
    },
}
</script>
