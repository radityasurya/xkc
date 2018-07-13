<template>
  <div class="repos">
    <div v-if="!isEmpty" v-show="!isLoading" class="repos-list">
      <div class="repos-list__item" v-for="(repo, index) in repos" :key="index">
        <header class="repos-list__header">
          <h4 class="title">
            {{repo.name}}
          </h4>
          <p>
            {{repo.description}}
          </p>
        </header>
      </div>
    </div>
    <div v-if="isEmpty">
      <warning message="no results available right now"></warning>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import warning from "~/components/Warning";
import { mapGetters } from "vuex";

export default {
  components: {
    warning
  },
  methods: {},
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
.repos-list {
  &__item {
    background: #fff;
    border: 1px solid #e2e7f4;
    border-radius: 3px;
    position: relative;
    margin-bottom: 20px;
    width: 100%;
  }

  &__header {
    padding: 20px;
  }
}
</style>
