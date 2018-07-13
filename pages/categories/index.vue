<template>
  <div class="categories">
    <category-list></category-list>
  </div>
</template>


<script>
import categoryList from "~/components/CategoryList";

export default {
  components: {
    categoryList
  },
  mounted() {
    this.$store.dispatch("topics/loadCategories");
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
