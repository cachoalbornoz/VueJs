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

    guardar(state, payload){
      state.tareas.push(payload)
    },
    delete(state, id){
      state.tareas = state.tareas.filter(tarea => tarea.id !== id)
    },
    buscar(state, id){
      // Si no lo encuentra
      if(!state.tareas.find(tarea => tarea.id === id)){
        router.push('/')
        return   
      }
      state.tarea = state.tareas.find(tarea => tarea.id === id)
    },
    update(state, payload){
      state.tareas = state.tareas.map(tarea => tarea.id === payload.id ? payload : tarea)
      router.push('/')
    },
  },
  actions: {

    guardarTareas({commit}, tarea){
      commit('guardar', tarea)
    },

    deleteTarea({commit}, id){
      commit('delete', id)
    },

    buscarTarea({commit}, id){
      commit('buscar', id)
    },

    updateTarea({commit}, tarea){
      commit('update', tarea)
    },

  },
  modules: {
  }
})
