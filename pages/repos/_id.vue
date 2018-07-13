<template>
  <div class="repo">
    <el-row>
      <el-col :md="16">
        {{name}}
      </el-col>
      <el-col :md="8">
        {{author}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: this.$route.params.id,
      author: this.$route.params.author
    };
  },
  head() {
    return {
      title: this.name + " - XKC"
    };
  },
  created() {
    console.log(this.$route.params);
  }
};
</script>
