<template>
  <div class="comment">
    <el-form ref="form" label-width="80px">
      <el-form-item label="审核意见">
        <el-select v-model="selectValue" placeholder="请选择审核意见" @change="changeSelect">
          <el-option
            v-for="(item, index) in options"
            :label="item.name"
            :value="item.value"
            :key = "index" > {{item.name}}
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
    <slot name="messages">hello! 如果父组件没有给内容，就显示这个信息</slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textValue: '',
        selectValue: '',
        dis: true
      }
    },
    props: {
      messages: String,
      options: {
        type: Array,
        default: () => {
          return [
            {name: '同意', value: '1'},
            {name: '拒绝', value: '0'},
            {name: '请选择', value: ''}
          ]
        }
      }
    },
    methods: {
      submitData () {
        let args = {}
        args['textValue'] = this.textValue
        args['selectValue'] = this.selectValue
        this.$emit('submitData', args)
      },
      changeSelect () {
        this.setStatus()
      },
      changeText () {
        this.setStatus()
      },
      setStatus () {
        if (this.selectValue !== '') {
          if (this.textValue !== '' || this.selectValue === '1') {
            this.dis = false
          } else {
            this.dis = true
          }
        } else {
          this.dis = true
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
</style>
