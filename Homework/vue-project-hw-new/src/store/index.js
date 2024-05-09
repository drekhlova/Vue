import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides: []
  },
  getters: {
    slides (state) {
      return state.slides
    }
  },
  mutations: {
    SET_SLIDES (state, slides) {
      state.slides = slides
    }
  },
  actions: {
    fetchSlides ({ commit }) {
      commit('SET_SLIDES', [
        {
          alt: 'img 1',
          url: 'project_details_photo.jpg'
        },
        {
          alt: 'img 2',
          url: 'project5.jpg'
        },
        {
          alt: 'img 3',
          url: 'project1.jpg'
        }
      ])
    }
  },

  modules: {}
})
