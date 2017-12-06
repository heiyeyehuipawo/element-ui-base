const mutations = {
  add(state,n){
    state.count+=n
  },
  reduce(state,n){
    state.count-=n
  },
  change(state,n){
    state.userName = n
  },
  changeCount(state,n){
    state.count+=n
  }
}
export default mutations