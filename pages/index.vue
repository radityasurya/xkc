<template>
  <el-row :gutter="20">
    <el-col :span="6" :md="6">
      <sidebar></sidebar>
    </el-col>
    <el-col :md="18">
      <repo-list></repo-list>
    </el-col>
  </el-row>
</template>


<script>
import RepoList from "~/components/RepoList.vue";
import sidebar from "~/components/Sidebar";

import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    RepoList,
    sidebar: sidebar
  },
  computed: {
    ...mapGetters({
      selected: "topics/getSelectedTopic",
      isLoading: "isLoading"
    })
  },
  created() {
    this.$store.dispatch("repos/loadRepos", this.selected);
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  min-width: 1100px;
}
.loading {
  text-align: center;
  padding-top: 50px;
}
</style>
