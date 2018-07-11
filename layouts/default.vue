<template>
    <div class="app">
      <app-header></app-header>
      <el-container class="container container--slim">
        <el-row :gutter="20">
          <el-col :md="6">
            <sidebar></sidebar>
          </el-col>
          <el-col :md="18">
            <main class="main">
              <nuxt/>
            </main>
          </el-col>
        </el-row>
      </el-container>
    </div>
</template>


<script>
import header from "~/components/Header";
import sidebar from "~/components/Sidebar";

export default {
  components: {
    "app-header": header,
    sidebar: sidebar
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

.container {
  padding-top: 40px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 66px;
  margin-left: auto;
  margin-right: auto;

  .el-row {
    width: 100%;
  }

  &--slim {
    max-width: 1100px;
  }
}

.main {
  background-color: #e9eef3;
  color: #333;
  height: 600px;
}
</style>
