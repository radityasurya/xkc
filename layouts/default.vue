<template>
    <div class="app">
      <app-header></app-header>
      <el-container>
        <el-aside>
          <ul>
            <h3>Topics</h3>
            <li v-for="(topic, index) in topics" :key="index">
              <a href="#">{{topic}}</a>
            </li>
          </ul>
        </el-aside>
        <main class="main">
          <nuxt/>
        </main>
      </el-container>
    </div>
</template>


<script>
import header from "~/components/Header";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-header": header
  },
  computed: {
    ...mapGetters({
      topics: "topics/get"
    })
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

.el-container {
  max-width: 1100px;
  padding-left: 15px;
  padding-right: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  margin-top: 30px !important;
}

.el-aside {
  width: 100px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 200px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 0 10px 0;
    }
  }
}

.main {
  background-color: #e9eef3;
  color: #333;
  width: 900px;
  height: 100px;
}
</style>
