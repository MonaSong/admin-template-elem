<template>
  <div class="header">
    <el-row :span="24" type="flex" justify="space-between">
      <el-col>
        <span class="logo">后台管理系统</span>
      </el-col>
      <el-col :span="3" class="operator-options">
        <!--<span @click="loginOut()">退出</span>-->
        <el-menu theme="" :default-active="activeIndex" class="head-right-menu" mode="horizontal" @select="">
          <el-submenu index="1">
            <template slot="title">设置</template>
            <el-menu-item index="2-1" @click="loginOut()">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeIndex: '1'
      }
    },
    created () {
    },
    methods: {
      loginOut () {
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../assets/base.less';
  .header{
    height: 60px;
    line-height: 3.5;
    background-color: @them-color;
    color: @white;
    position: relative;
    z-index: 10;
    .logo{
      padding-left: 30px;
      letter-spacing: 10px;
    }
    .operator-options{
      text-align: center;
    }
    .head-right-menu {
      background-color: @them-color;
      .el-submenu__title{
        color: @white;
        background-color: @them-color;
        border-width: 0;
        &:hover{
          background-color: @them-color;
          border-width: 0;
        }
      }
      .el-submenu:hover .el-submenu__title{
        border-width: 0;
      }
    }
  }
</style>
