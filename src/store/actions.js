const actions ={
  add(ontext) {
    ontext.state.count+=66
  },
  addDispatch(ontext){
    ontext.dispatch('addAction')
  },
  addAction(ontext){
    ontext.commit('add',100)
  },
  reduceAction({commit}){
      commit('reduce',100)
  },
  changeAction(ontext,playload){
    ontext.commit('change',playload)
  },
  changeCountAction(ontext){
    commit('changeCount',5)
  }
}
export default actions