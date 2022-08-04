import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: "",
      categorias: [],
      estado: "",
      numero: 0,
    },
  },
  getters: {
  },
  mutations: {

    cargar(state, payload) {
      state.tareas = payload
    },
    guardar(state, payload) {
      state.tareas.push(payload)
    },
    delete(state, id) {
      state.tareas = state.tareas.filter(tarea => tarea.id !== id)
    },
    buscar(state, id) {
      // Si no lo encuentra, que vuelva a la url home
      if (!state.tareas.find(tarea => tarea.id === id)) {
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(tarea => tarea.id === id)
    },
    update(state, payload) {
      state.tareas = state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
      router.push('/')
    },
  },
  actions: {

    async cargarLocalStorage({ commit }) {
      let dataDB;
      try {
        const respuesta = await fetch(`https://udemy-api-9ae17-default-rtdb.firebaseio.com/tareas.json`, {})
        dataDB = await respuesta.json()
        commit('cargar', dataDB)
      } catch (error) {
        console.log(error);
      }
    },

    async guardarTareas({ commit }, tarea) {
      try {
        const respuesta = await fetch(`https://udemy-api-9ae17-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        const dataDB = await respuesta.json()        
        commit('guardar', tarea)
      } catch (error) {
        console.log(error);
      }
    },

    deleteTarea({ commit }, id) {
      commit('delete', id)
    },

    buscarTarea({ commit }, id) {
      commit('buscar', id)
    },

    updateTarea({ commit }, tarea) {
      commit('update', tarea)
    },

  },
  modules: {
  }
})
