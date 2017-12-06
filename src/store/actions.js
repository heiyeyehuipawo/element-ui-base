const actions ={
  addAction(ontext){
    ontext.commit('add',100)
  },
  reduceAction({commit}){
      commit('reduce',100)
  },
  changeAction({commit}){
    commit('change','未央区我')
  },
  changeCountAction(ontext){
    ontext.commit('changeCount',5)
  }
}
export default actions