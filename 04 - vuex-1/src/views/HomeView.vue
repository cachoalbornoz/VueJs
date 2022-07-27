<template>
  <div class="home">
    <h1
      :style="colorContador"
      >Mi contador {{ contador }}</h1>
  </div>
  <BtnAccion :estado="false" :numero="10"/>   
  <BtnAccion :estado="true" :numero="10"/>
</template>

<script>


import BtnAccion from '@/components/BtnAccion'

import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {   
    BtnAccion, 
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador>100?'color:green':'color:red']
    }
  },
  
}
</script>
