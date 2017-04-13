<template>
  <div class="grid">
    <!--表格-->
    <el-table
      :data="curData"
      stripe
      style="width: 100%">
      <!--名称-->
      <el-table-column
        prop="name"
        label="名称"
        width="180">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>邮箱: {{ scope.row.email }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <!--uid-->
      <el-table-column
        prop="uid"
        label="uid"
        width="180">
      </el-table-column>
      <!--邮箱-->
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataList: null,
        curData: null,
        currentPage1: 1,
        pageSize: 10,
        totalCount: null
      }
    },
    methods: {
      getList (callback) {
        let self = this
        let userList = null
        this.$http.get('/api/users').then(res => {
          if (typeof callback === 'function') {
            userList = res.data.result
            callback(userList)
            self.totalCount = userList.length
          }
        }).catch(err => {
          console.log(err)
        })
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        let self = this
        let myData = self.dataList
        this.currentPage1 = val
        this.getCurData(myData)
        console.log(`当前页: ${val}`)
      },
      getCurData (data) {
        let self = this
        let pageSize = self.pageSize
        let totalLen = data.length
        let curNo = (self.currentPage1 - 1) * pageSize
        let curDataArr = []
        if (totalLen < pageSize) { // 如果总页数小于每页显示条数
          for (let i = 0; i < totalLen; i++) {
            curDataArr.push(data[curNo + i])
          }
        } else { // 如果总记录数大于每页显示条数
          let myMo = data.length % pageSize
          if (myMo !== 0) {
            let pageCount = parseInt(data.length / pageSize) + 1
            if (pageCount === self.currentPage1) {
              for (var i = 0; i < myMo; i++) {
                curDataArr.push(data[curNo + i])
              }
            } else {
              for (let i = 0; i < pageSize; i++) {
                curDataArr.push(data[curNo + i])
              }
            }
          } else {
            for (let i = 0; i < pageSize; i++) {
              curDataArr.push(data[curNo + i])
            }
          }
        }
        self.curData = curDataArr
      },
      handleEdit (index, row) {
        // alert(`编辑菜单中的第${index}个，第JSON.stringify(${row})行数据！`)
        alert(JSON.stringify(row))
      },
      handleDelete (index, row) {
        alert(`删除菜单中的第${index}个，第JSON.stringify(${row})行数据！`)
      }
    },
    created () {
      let self = this
      self.getList(data => {
        self.dataList = data
        self.getCurData(data)
      })
    },
    mounted () {
      let self = this
      self.$nextTick(() => {
        console.log(self.dataList)
      })
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/base.less';
  .grid{
    color: #f30026;
  }
</style>
