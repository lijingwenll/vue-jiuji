import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  shopname:"123"
}

const mutations={
  setshopname:function(state, shopname){
    state.shopname = shopname;
  }
}

const actions= {
  setshopname:function({commit},shopname){
    commit("setshopname",shopname)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})