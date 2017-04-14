<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="container">
      <div class="container-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import vHead from './head.vue'
  import vSidebar from './sidebar.vue'
  export default {
    data () {
      return {
        home: 'home'
      }
    },
    components: {
      vHead, vSidebar
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
  .container{
    padding: 30px 30px 30px 250px;
    .container-box{
      padding: 15px;
      background-color: @white;
      border-bottom: 1px solid @light-dark;
    }
  }
</style>
