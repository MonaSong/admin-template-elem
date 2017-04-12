<template>
  <div class="login">
    <div class="login-head">
      {{login}}
    </div>
    <div class="login-info">
      <el-form ref="login_form"  label-width="60px">
        <el-form-item label="用户名">
          <el-input type="text" placeholder="请输入用户名" v-model="user_name"></el-input>
        </el-form-item>
        <el-form-item label="密  码">
          <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginIn()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user_name: '',
        password: '',
        login: '后台登录'
      }
    },
    methods: {
      loginIn () {
        let self = this
        if (self.user_name === '' || self.password === '') {
          return ''
        }
        this.$router.push('/index')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
  .login{
    width: 400px;
    height: 300px;
    margin: 150px auto;
    background-color: @white;
    color: @dark;
    .login-head{
      margin-bottom: 15px;
      height: 40px;
      line-height: 2.4;
      padding-left: 15px;
      background-color: @them-color;
      color: @white;
    }
    .login-info{
      padding: 15px;
    }
  }
</style>
