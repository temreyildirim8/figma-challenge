import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    history: [],
  },
  actions: {
    getHistory({ }) {
      return axios.get('/static/match-history.json')
        .then(response => {
          this.state.history = response.data;
          return response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mutations: {

  },
  getters: {

  }
});
