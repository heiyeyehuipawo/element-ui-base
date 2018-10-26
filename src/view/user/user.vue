<template>
  <div>
    globe用户账号：{{ userName }}
    用户账号：{{ name }}
    <br>
    <br>
    <el-button type="primary" size="small" v-if="show" @click="fIndex">回到首页</el-button>
    <br>
    <el-button type="primary" size="small" @click="fShow">显示</el-button>
    <Aa cc="来自父组件user" @zhanghao="fchange" @ffShow="ffShow" :show="show"></Aa>
  </div>
</template>
<script>
  import Aa from '../../components/aa/aa'
  import Bus from '../../bus/bus'
  import store from '../../store/index'
  import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState([
        'userName'
      ]),
    },
    data () {
      return {
        show: false,
        name: 'user'
      }
    },
    created () {
      
    },
    components:{
      Aa:Aa,
    },
    methods: {
      fIndex() {
        this.$router.push('/')
      },
      fchange(value) {
        this.name = value;
      },
      ffShow(value) {
        this.show = value
      },
      fShow(){
        this.show = !this.show;
      }
    }
  }
</script>

<style lang="scss">

</style>
