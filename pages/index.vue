<template>
  <el-row>
    <el-col>
      <div class="loading" v-show="isLoading">
        <img src="~/assets/loading.gif" alt="Loading">
      </div>
      <repo-list></repo-list>
    </el-col>
  </el-row>
</template>


<script>
import RepoList from "~/components/RepoList.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    RepoList
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
.loading {
  text-align: center;
  padding-top: 50px;
}
</style>
