<template>
  <div class="">
    <p>{{vuexText1}}</p>
    <span>用户名称是{{xx}}</span>
    <input type="text" v-model="xx" @input="lucy">
    <span @click="alertUserInfo">点击查看用户名称</span>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        vuexText1: '第一个测试页面',
        xx: '张三'
      }
    },
    mounted () {
      this.xx = this.$store.state.user_name
    },
    computed: {
    },
    methods: {
      ...mapMutations(['submit']),
      lucy () {
        this.submit(this.xx)
      },
      alertUserInfo () {
        alert(this.$store.state.user_name)
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
