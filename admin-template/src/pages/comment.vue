<template>
  <div class="comment">
    <el-form ref="form" label-width="80px">
      <el-form-item label="审核意见">
        <el-select v-model="selectValue" placeholder="请选择审核意见" @change="changeSelect">
          <el-option
            v-for="item in options"
            :label="item.name"
            :value="item.value"> {{item.name}}
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核内容">
        <el-input type="textarea" v-model="textValue" @input="changeText">
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="submitData" :disabled="dis">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        textValue: '',
        selectValue: '',
        dis: true
      }
    },
    props: [
      'messages',
      'options'
    ],
    methods: {
      submitData () {
        let self = this
        let args = {}
        args['textValue'] = self.textValue
        args['selectValue'] = self.selectValue
        this.$emit('submitData', args)
      },
      changeSelect () {
        let self = this
        self.setStatus()
      },
      changeText () {
        let self = this
        self.setStatus()
      },
      setStatus () {
        let self = this
        if (self.selectValue !== '') {
          if (self.textValue !== '' || self.selectValue === '1') {
            self.dis = false
          } else {
            self.dis = true
          }
        } else {
          self.dis = true
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
</style>
