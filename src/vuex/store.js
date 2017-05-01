/**
 * Created by cs on 2017/4/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    update_car: '',
  },
  mutations: {
    getUpdate (state, code) {
      state.update_car = code;
    },

  }

});

export default store
