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

      const res = await fetch(`https://udemy-api-9ae17-default-rtdb.firebaseio.com/tareas.json`);
      const dataDB = await res.json();

      const arrTareas = [];

      for (let id in dataDB) {
        arrTareas.push(dataDB[id]);
      }

      commit('cargar', arrTareas);

    },

    async guardarTarea({ commit }, tarea) {
      try {
        const res = await fetch(`https://udemy-api-9ae17-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()

      } catch (error) {
        console.log(error);
      }
      commit('guardar', tarea)
    },

    async updateTarea({ commit }, tarea) {

      try {

        const res = await fetch(`https://udemy-api-9ae17-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json();
        commit('update', tarea)
        
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTarea({ commit }, id) {

      try {
        await fetch(`https://udemy-api-9ae17-default-rtdb.firebaseio.com/tareas/${id}.json`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          
        })
        commit('delete', id)  
      } catch (error) {
        console.log(error);
      }      
    },

    buscarTarea({ commit }, id) {
      commit('buscar', id)
    },

  },
  modules: {
  }
})
