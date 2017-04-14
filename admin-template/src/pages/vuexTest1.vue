<template>
  <div class="">
    <p>{{vuexText1}}</p>
    <span>用户名称是{{xx}}</span>
  </div>
</template>

<script>
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
    }
  }
</script>

<style lang="less" scoped>
</style>
