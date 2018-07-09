<template>
    <div class="app">
      <app-header></app-header>
      <!-- <el-container>
        <el-aside>
          sidebar
        </el-aside>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
      <el-footer><p>Designed and Coded by <a href="https://radityasurya.com/">Raditya Surya Pratama</a></p></el-footer> -->
    </div>
</template>


<script>
import header from "~/components/Header";
export default {
  components: {
    "app-header": header
  }
};
</script>



<style lang="scss">
body {
  margin: 0;
  position: relative;
  min-height: 100%;
  background: #f9f9f9;
}

.el-aside {
  background-color: #d3dce6;
  width: 200px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
