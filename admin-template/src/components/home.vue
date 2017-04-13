<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="container">
      <router-view></router-view>
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
  .container{
    padding: 30px 30px 30px 250px;
  }
</style>
