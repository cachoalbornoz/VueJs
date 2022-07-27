<template>
    <button @click="accionIncrementar(20)">Incrementar</button>
</template>

<script>

import { mapActions } from 'vuex'

export default {

 methods:{
    ...mapActions(['accionIncrementar']),
  }
}
</script>
