import { defineStore } from "pinia";
import { computed, ref } from "vue";



// Devuelvo una FUNCION DE FLECHA

export const useCounterStore = defineStore('counter', () => {

    const count = ref(0)

    const increment = () => count.value++;
    const decrement = () => count.value++;

    const double = computed(() => count.value * 2)
    const triple = computed(() => count.value * 3)

    return {
        count,
        increment,
        decrement,
        double,
        triple
    }
})



// Devuelvo un OBJETO

// export const useCounterStore = defineStore('counter', {
//     state: () =>({
//         count: 0,
//         mensaje: 'Este es un mensaje de Pinia'
//     }),
//     actions: {
//         increment(){
//             this.count ++
//         },
//         decrement(){
//             this.count --
//         }
//     },
//     getters:{
//         double : ( state ) => state.count * 2 ,
//         triple : ( state ) => state.count * 3
//     }
// })