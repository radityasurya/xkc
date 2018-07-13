<template>
  <el-row :gutter="20">
    <el-col :md="8" v-for="(category, index) in categories" :key="index">
      <div class="box">
        {{category.name}}
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categories: "topics/get",
      isLoading: "isLoading"
    })
  }
};
</script>

<style lang="scss" scoped>
.box {
  min-height: 200px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e2e7f4;
  cursor: pointer;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600px;
  font-size: 1.6rem;

  &:hover {
    background-color: #4e86ff;
    color: #fff;
  }
}

.loading {
  text-align: center;
  padding-top: 50px;
}
</style>
