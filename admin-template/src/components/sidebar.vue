<template>
  <div class="sidebar">
    <el-row :span="24">
      <el-col :span="24">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="" @close="">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  
</script>

<style lang="less" scoped>
  .sidebar{
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    padding-top: 200px;
    &:before{
      position: fixed;
      content: ' ';
      left: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      display: block;
      width: 220px;
      background-color: #eef1f6;
    }
  }
</style>
