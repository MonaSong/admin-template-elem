<template>
  <div class="sidebar">
    <el-row :span="24">
      <el-col :span="24">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"  theme="dark" unique-opened router>
          <el-menu-item index="1">
            <i class="el-icon-settings">首页</i>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="index">首页</el-menu-item>
            <el-menu-item index="components">组件页</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      onRoutes () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
  .sidebar{
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    padding-top: 100px;
    &:before{
      position: fixed;
      content: ' ';
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      display: block;
      width: 220px;
      background-color: @side-bar-color;
    }
  }
</style>
