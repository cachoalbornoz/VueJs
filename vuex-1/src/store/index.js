import { createStore } from 'vuex'

export default createStore({
  // Se mapean en los computed
  state: {
    contador: 80,
  },
  getters: {
  },

  mutations: {
    incrementar(state, payload) {
      state.contador += payload
    },
    disminuir(state, payload) {
      if (state.contador == 0) return
      state.contador -= payload
    }
  },
  // Se mapean en los metodos
  actions: {
    accionIncrementar({ commit }, numero) {
      commit('incrementar', numero)
    },
    accionDisminuir({ commit }, numero) {
      commit('disminuir', numero)
    },
    accionBoton({ commit }, objeto) {
      if (objeto.estado) {
        commit('incrementar', objeto.numero)
      } else {
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
