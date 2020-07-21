import Vue from "vue";
import Vuex from "vuex";
import jsonProducts from "../json/db.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { 
    products: jsonProducts ,
    Mycartlist :[] 
  },
  getters:{
    products(state) {
      return state.products ;
    },
    countMycartlist(state) {
     return state.Mycartlist.length
    }, 
    Mycartlist(state) {
      return state.Mycartlist
    }
  },
  mutations: {
    ADD_TO_CARD(state , product) {
      state.Mycartlist.push(product)
    },
   DELETE_CARD(state , product) {
      state.Mycartlist.splice(product , 1)
    },
  },
  actions: {},
  modules: {}
});
