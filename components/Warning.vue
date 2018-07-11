<template>
  <div class="warning">
    <div class="warning__container">
      <img class="warning__icon" src="~/assets/icons/warning.svg" alt="">
      <span class="warning__message">{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message']
};
</script>

<style lang="scss" scoped>
.warning {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 200px;
  border: 1px solid #e2e7f4;
  padding: 11px 20px;

  &__icon {
    display: block;
    width: 70px;
    height: 70px;
    margin: 0 auto;
  }

  &__message {
    display: block;
    margin-top: 20px;
    cursor: default;
    font-weight: 600;
  }
}
</style>
