<template>
  <div class="header">
    <el-row :span="24">
      <el-col :span="5" :offset="3" justify="start">
        <span>logo</span>
      </el-col>
      <el-col :span="3" :offset="12" justify="end">
        <span @click="loginOut()">退出</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
<style lang="less" scoped>
  @import '../assets/base.less';
  .header{
    height: 60px;
    line-height: 3.5;
    background-color: @them-color;
    color: @white;
    position: relative;
    z-index: 10;
  }
</style>
