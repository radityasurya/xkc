<template>
    <el-container>
      <el-header>
        Header
      </el-header>
      <el-container>
        <el-aside>
          sidebar
        </el-aside>
        <el-main>
          <nuxt/>     
        </el-main>
      </el-container>
      <el-footer><p>Designed and Coded by <a href="https://radityasurya.com/">Raditya Surya Pratama</a></p></el-footer>
    </el-container>
</template>


<style>
body {
  margin: 0;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  width: 200px;
}

.el-main {
  background-color: #e9eef3;

  color: #333;

  text-align: center;

  line-height: 160px;
}

.el-aside,
.el-header {
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>