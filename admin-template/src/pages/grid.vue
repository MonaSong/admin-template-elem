<template>
  <div class="grid">
    <span>你好，表格</span>
    <span>{{x}}</span>
    <p v-for="item in dataList">
      <span style="color:">{{dataList.name}}</span>
      <span>{{dataList.email}}</span>
      <span>{{dataList.uid}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: null,
        x: ''
      }
    },
    methods: {
      getList (callback) {
        let userList = null
        this.$http.get('/api/users').then(res => {
          if (typeof callback === 'function') {
            userList = res.data.result
            callback(userList)
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created () {
      let self = this
      self.getList(data => {
        self.dataList = data
      })
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
  .grid{
    color: #f30026;
  }
</style>
