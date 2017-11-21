import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex)
const state = {
  count: 0,
  max: 100000,
  min: 10000,
  acount: 'acount',
  userName:'等哈哈',
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});