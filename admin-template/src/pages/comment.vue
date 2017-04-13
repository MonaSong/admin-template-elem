<template>
  <div class="comment">
    <el-form ref="form" label-width="80px">
      <el-form-item label="审核意见">
        <el-select v-model="form.region" placeholder="请选择审核意见">
          <el-option label="同意" value="1"></el-option>
          <el-option label="拒绝" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审核意见">
        <el-input type="textarea" v-model="form.desc">

        </el-input>
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
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';

</style>
