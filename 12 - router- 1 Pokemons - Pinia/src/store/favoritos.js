import { defineStore } from "pinia";
import { ref } from "vue";



// Devuelvo una FUNCION DE FLECHA

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])
    const disabled = ref(false)

    const add = (pokemon) => {

        // Controlar que no este en la lista
        if (!favoritos.value.find(item => item.id === pokemon.id)) {

            // Agregarlo
            favoritos.value.push(pokemon)

            // Bloqueo el proximo ingreso
            disabled.value = true
        }
    }

    const pokemonFind = (id) => {
        favoritos.value.find(item => item.id === id)
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        disabled.value = false
    }


    return {
        disabled,
        favoritos,
        add,
        remove,
        pokemonFind
    }
})