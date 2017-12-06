<template>
  <div>
    <h1>{{ aa }}</h1>
    <p>{{ cc }}</p>
    <el-button type="primary" @click="$store.dispatch('changeAction')">改变用户账号</el-button>
    <br>
    <br>
    <el-button type="primary" @click="fShow">显示回到首页</el-button>
  </div>
</template>
<script>
  import store from '../../store/index'
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
  export default {
    props: ['cc','show'],
    data () {
      return {
        aa: '发放',
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
        this.$emit('zhanghao',this.value)
      },
      fShow() {
        this.$emit('ffShow',!this.show)
      }
    }
  }
</script>

<style lang="scss">

</style>
