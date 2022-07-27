<template>
  <h3>Saldo: {{saldo}}</h3>
  <h4>Cuenta: {{cuenta}}</h4>
  <h4>Estado: {{estado ? 'Activa' : 'Cerrada'}}</h4>
  <h4 class="mb-0">Servicios disponibles: </h4>

  <div v-for="(item, index) in servicios" :key="index">
      {{ index + 1 }} - {{ item }}
  </div>  

  <hr/>

  <AccionSaldo texto="Disminuir saldo" @click="disminuir" :desactivar="desactivar" />
  <AccionSaldo texto="Aumentar saldo" @click="aumentar" />

</template>

<script>

import AccionSaldo from './AccionSaldo.vue';

export default {
    components: {
        AccionSaldo,
    },    
    data() {
        return {
            cuenta: "Visa",
            saldo: 30,
            estado: true,
            servicios: ["pagos", "giros", "transferencias"],
            desactivar:false,
        };
    },
    methods:{
        
        disminuir(){
            if(this.saldo ===0){
                this.desactivar = true
                return false;
            }
            this.saldo = this.saldo - 10;
        },
        aumentar(){
            this.desactivar = false
            this.saldo = this.saldo + 10;
        },

    }
}
</script>

<style>
    .mb-0 {
        margin-bottom: 0.5rem;
    }
</style>