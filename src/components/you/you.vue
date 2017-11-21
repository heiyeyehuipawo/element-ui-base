<template>
  <div>
    {{ abc }}
    <el-button type="primary" size="small" @click="bus">改变input</el-button>
    <el-button type="primary" size="small" @click="ccc">改变username</el-button>
  </div>
</template>
<script>
import Bus from '../../bus/bus'
  export default {
    data () {
      return {
        input: 'zzz',
        abc: '111111111',
      }
    },
    created () {
      Bus.$on("dfdf",(message)=>{
        this.abc = message
      })
    },
    methods: {
      bus() {
        Bus.$emit('change','123456789')
      },
      ccc() {
        Bus.$emit('username','666')
      }
    }
  }
</script>

<style lang="scss">

</style>
