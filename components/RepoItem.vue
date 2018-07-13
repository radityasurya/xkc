<template>
  <div @click="navigate(repo.author, repo.name)" class="repo-item">
    <header class="repo-item__header">
      <h1 class="title">
        {{repo.name}}
      </h1>
      <h2 class="author">
        by {{repo.author}}
      </h2>
    </header>
    <div class="repo-item__content">
      <p class="repo-item__description">
        {{repo.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["index", "repo"],
  methods: {
    navigate(author, name) {
      console.log("clicked");
      this.$router.push({
        name: "repos-id",
        params: { id: name, author: author }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.repo-item {
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

  &__header {
    h1.title,
    h2.author {
      margin: 0;
    }
  }
  &__content {
    margin-top: 15px;
  }
}
</style>
