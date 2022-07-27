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

    cargar(state, payload){
      state.tareas = payload
    },
    guardar(state, payload) {
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    delete(state, id) {
      state.tareas = state.tareas.filter(tarea => tarea.id !== id)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
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
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/')
    },
  },
  actions: {

    cargarLocalStorage({ commit }) {
      if (localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'));
        commit('cargar', tareas)
        return
      }

      localStorage.setItem('tareas', JSON.stringify([]));

    },

    guardarTareas({ commit }, tarea) {
      commit('guardar', tarea)
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
