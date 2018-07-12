<template>
  <el-row>
    <el-col>
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
      selected: "topics/getSelectedTopic"
    })
  },
  created() {
    this.$store.dispatch("repos/loadRepos", this.selected);
  }
};
</script>
