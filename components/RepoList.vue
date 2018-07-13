<template>
  <div class="repos" >
     <div class="loading" v-show="isLoading">
        <img src="~/assets/loading.gif" alt="Loading">
      </div>
    <div v-if="!isEmpty" v-show="!isLoading" class="repos-list">
      <!-- <div @click="navigate(repo.author, repo.name)"  class="repos-list__item" v-for="(repo, index) in repos" :key="index">
        <header class="repos-list__header">
          <h1 class="title">
          {{++index}}.  {{repo.name}}
          </h1>
          <h2 class="author">
            by {{repo.author}}
          </h2>
        </header>
        <div class="repos-list__content">
          <p>
            {{repo.description}}
          </p>
        </div>
      </div> -->
      <repo-item :repo="repo"  v-for="(repo, index) in repos" :key="index"></repo-item>
    </div>
    <div v-if="isEmpty">
      <warning message="no results available right now"></warning>
    </div>
  </div>
</template>

<script>
import warning from "~/components/Warning";
import repoItem from "~/components/RepoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    warning,
    repoItem
  },

  computed: {
    isEmpty: function() {
      if (this.isLoading || (this.repos && this.repos.length > 0)) {
        return false;
      }
      return true;
    },
    ...mapGetters({
      repos: "repos/get",
      isLoading: "isLoading"
    })
  }
};
</script>

<style lang="scss" scoped>
.repos {
  margin-top: 22px;
}
.repos-list {
  &__item {
    background: #fff;
    border: 1px solid #e2e7f4;
    border-radius: 3px;
    position: relative;
    margin-bottom: 20px;
    width: 100%;
    padding: 20px;

    &:hover {
      border-color: #4e86ff;
      cursor: pointer;
    }
  }

  &__header {
  }
  &__content {
    margin-top: 20px;
  }
}

.loading {
  text-align: center;
  margin-top: 100px;
}
</style>
