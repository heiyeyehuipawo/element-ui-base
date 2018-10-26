<template>
  <div>
    <el-button type="primary" size="small" @click="$store.commit('add',5)">加5mutation</el-button>
    <el-button type="primary" size="small" @click="$store.commit('reduce',5)">减5mutation</el-button>
    <el-button type="primary" size="small" @click="$store.dispatch('add')">加100action</el-button>
    <el-button type="primary" size="small" @click="$store.dispatch('reduceAction')">减100action</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <p>getters:{{ get }}</p>
  </div>
</template>
<script>
import Bus from '../../bus/bus'
import store from '../../store/index'
import { mapMutations,mapGetters,mapActions } from 'vuex';
  export default {
    computed:{
      ...mapGetters([
        'get'
      ])
    },
    data () {
      return {
        input: 'my-component',
        userName: 'my-component-username'
      }
    },
    created() {
      Bus.$on("change",(message)=>{
        this.input = message      
      })
    },
    methods: {
      ...mapMutations([
        'add',
        'reduce'
      ]),
      ...mapActions([
        'addAction',
        'reduceAction'
      ])
    }
      
  }
</script>

<style lang="scss">

</style>
