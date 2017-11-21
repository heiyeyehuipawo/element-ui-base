const actions ={
  addAction(ontext){
    ontext.commit('add',100)
  },
  reduceAction({commit}){
      commit('reduce',100)
  },
  changeAction({commit}){
    commit('change','该戒色了')
  }
}
export default actions