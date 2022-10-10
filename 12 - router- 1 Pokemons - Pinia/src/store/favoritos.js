import { defineStore } from "pinia";
import { ref } from "vue";

// Devuelvo una FUNCION DE FLECHA
export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    if(localStorage.getItem('pokemons')){
        favoritos.value = JSON.parse(localStorage.getItem('pokemons'))
    }

    // Agregarlo
    const add = (pokemon) => {
        favoritos.value.push(pokemon)        
        localStorage.setItem('pokemons', JSON.stringify(favoritos.value))
    }
    
    // Buscarlo
    const findPokemon = (name) => favoritos.value.find(item => item.name === name)

    // Borrarlo
    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id)
        localStorage.setItem('pokemons', JSON.stringify(favoritos.value))
    }


    return {
        favoritos,
        add,
        findPokemon,
        remove,
    }
})