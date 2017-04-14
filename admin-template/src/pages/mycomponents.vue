<template>
  <div class="component">
    <h3>{{cs}}</h3>
    <el-row :span="24">
      <el-col :span="12">
        <v-comment :options="options" v-on:submitData="theOne">
          <p slot="messages">你好！这是父组件的插入的内容</p>
        </v-comment>
        <v-comment :options="options2" v-on:submitData="theTwo"></v-comment>
        <v-comment  v-on:submitData="theThree"></v-comment>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import vComment from './comment.vue'
  export default {
    data () {
      return {
        cs: '组件页面',
        options: [
          {name: '同意', value: '1'},
          {name: '拒绝', value: '0'},
          {name: '请选择', value: ''}
        ],
        options2: [
          {name: '同意融资', value: '1'},
          {name: '拒绝融资', value: '0'},
          {name: '请选择', value: ''}
        ]
      }
    },
    components: {
      vComment
    },
    methods: {
      theOne (args) {
        console.log('theOne')
        console.log(args)
      },
      theTwo (args) {
        console.log('thetwo')
        console.log(args)
      },
      theThree (args) {
        console.log('theThree')
        console.log(args)
      }
    }
  }
</script>

<style lang="less" scoped>
  
</style>
