const mutations = {
  add(state,n){
    state.count+=n
  },
  reduce(state,n){
    state.count-=n
  },
  change(state,n){
    state.userName = n
  }
}
export default mutations