<template>
  <div>
    <p>{{ $store.state.count }}</p>
    <p>{{ max }}</p>
    <p>{{ min }}</p>
    <My></My>
    <You></You>
    <el-button type="success" @click="$router.push('user')">成功按钮</el-button>
    <my-Button @buttonClick="myButton"></my-Button>
  </div>
</template>
<script>
import My from '../my/my'
import You from '../you/you'
import store from '../../store/index'
import Button from '../Button/Button'
import Bus from '../../bus/bus'
import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState([
        'count',
        'max',
        'min'
      ]),
    },
    created () {
      Bus.$on("count",(value)=>{
        this.$store.state.count += value
      })
    },
    data () {
      return {

      }
    },
    components: {
      My:My,
      You:You,
      myButton:Button
    },
    methods: {
      myButton(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss">

</style>
