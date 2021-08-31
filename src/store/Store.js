import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    images: [],
  },
  getters: {
    images: ({images}) => images
  },
  mutations: {
    SET_IMAGES (state, image) {
      state.images.push(image);
    }
  },
  actions: {

    async actSetImages({commit}, img) {
      try {
        await commit('SET_IMAGES', img)
      } catch (error) {
        console.error(error);
      }
    },
  }
})

export default store;