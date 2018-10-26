<template>
  <div>
    <h1>{{ aa }}</h1>
    <p>{{ cc }}</p>
    <el-button type="primary" @click="$store.dispatch('changeAction','改变用户账号')">改变用户账号</el-button>
    <br>
    <br>
    <el-button type="primary" @click="fChange">改变父组件的用户账号</el-button>
    <el-button type="primary" @click="fShow">显示父组件的回到首页</el-button>
  </div>
</template>
<script>
  import store from '../../store/index'
  import { mapMutations,mapActions } from 'vuex';
  export default {
    props: ['cc','show'],
    data () {
      return {
        aa: '来自aa',
      }
    },
    methods: {
      ...mapMutations([
        'change'
      ]),
      ...mapActions([
        'changeAction'
      ]),
      fChange(){
        this.$emit('zhanghao','来自子组件的改变')
      },
      fShow() {
        this.$emit('ffShow',!this.show)
      }
    }
  }
</script>

<style lang="scss">

</style>
