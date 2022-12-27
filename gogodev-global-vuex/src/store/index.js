import { createStore } from 'vuex'

export default createStore({
  state: {
    //Data
    counter: 1,
  },
  getters: {
    //Computed

    times2(state) {
      return state.counter * 2
    }
  },
  mutations: {
    //Set sync
    setCounter(state, value){
      state.counter = value
    }
  },
  actions: {
    //Set Async
  },
  modules: {
    //Subdivide the store
  }
})
