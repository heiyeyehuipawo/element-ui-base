<template>
  <div>
    <div class="button" @click="handleClick">
      <span>主要按钮</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('click',e)
      }
    }
      
  }
</script>

<style lang="scss">
  .button{
    width: 6rem;
    height: 2rem;
    border-radius: 0.2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.30rem;
    cursor: pointer;
    background: #409eff;
    color: #fff;
    &:hover {
      background: #66b1ff;
    }
  }
</style>
