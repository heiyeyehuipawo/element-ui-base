<template>
  <div>
    {{ abc }}
    <el-button type="primary" size="small" @click="bus">改变input</el-button>
    <el-button type="primary" size="small" @click="ccc">改变count Bus</el-button>
    <el-button type="primary" size="small" @click="$store.commit('changeCount',5)">改变count vuex mutation</el-button>
    <el-button type="primary" size="small" @click="$store.dispatch('changeCountAction')">改变count vuex action</el-button>
  </div>
</template>
<script>
import Bus from '../../bus/bus'
  export default {
    data () {
      return {
        input: 'zzz',
        abc: 'you-component',
      }
    },
    created () {
      
    },
    methods: {
      bus() {
        Bus.$emit('change','123456789')
      },
      ccc() {
        Bus.$emit('count',5)
      },
    }
  }
</script>

<style lang="scss">

</style>
