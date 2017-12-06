<template>
  <div>
    <el-row class="tac">
      <el-col :span="12" style="width:10%">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1"><router-link to="/">登陆</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/user">用户信息</router-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3"></el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-link to="/date">日历</router-link>
    <p>{{ $store.state.count }}</p>
    <p>{{ max }}</p>
    <p>{{ min }}</p>
    <My></My>
    <You></You>
    <el-button type="success" @click="$router.push('qqq')">成功按钮</el-button>
    <my-Button></my-Button>
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
      handleOpen(key, keyPath) {
        
      },
      handleClose(key, keyPath) {
        
      },
    }
  }
</script>

<style lang="scss">

</style>
