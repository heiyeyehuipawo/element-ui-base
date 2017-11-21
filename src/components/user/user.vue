<template>
  <div>
    用户账号：{{ userName }}
    <br>
    <br>
    <el-button type="primary" size="small" v-if="show" @click="fIndex">回到首页</el-button>
    <br>
    <el-button type="primary" size="small" @click="fShow">显示</el-button>
    <Aa cc="呵呵" @zhanghao="fchange" @ffShow="ffShow" :show="show"></Aa>
  </div>
</template>
<script>
  import Aa from '../aa/aa.vue'
  import Bus from '../../bus/bus'
  import store from '../../store/index'
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
  export default {
    computed:{
      ...mapState([
        'userName'
      ]),
    },
    data () {
      return {
        show: false,
        username: '111'
      }
    },
    created () {
      Bus.$on('username',(username)=> {
        this.username = username
        console.log(this.username)
      })
    },
    components:{
      Aa:Aa,
    },
    methods: {
      fIndex() {
        this.$router.push('/')
      },
      fchange(value) {
        this.username = value;
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
