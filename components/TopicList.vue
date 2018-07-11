<template>
  <div class="topics">
    <div v-if="isEmpty">
      <warning message="No topics available right now!"></warning>
    </div>
  </div>
</template>

<script>
import warning from "~/components/Warning";

export default {
  components: {
    warning
  },
  computed: {
    isEmpty: function() {
      return true;
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
