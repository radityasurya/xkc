<template>
  <aside class="sidebar">
    <div class="sidebar__container">
      <div class="sidebar__item" id="topics">
        <h3 class="sidebar-title">
          Topics
        </h3>
         <ul class="sidebar-list">
          <li class="sidebar-list__item" v-for="(topic, index) in topics" :key="index">
            <div class="sidebar-list__link">
              <a href="#" class="sidebar-list__link-title">{{topic}}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      topics: "topics/get"
    })
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  cursor: pointer;
  transition: color 300ms ease;

  &:active {
    border-radius: 0;
    background-color: #e2e7f4;
    color: #4e86ff;
  }
}

.sidebar {
  margin: 0;
  padding: 0;
  outline: 0;

  &__container {
    width: 100%;
    height: 100%;
  }

  &__item {
    margin: 0 0 20px;
  }

  &-title {
    font-weight: 600;
    color: #999;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  &-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: #fff;
    border: 1px solid #e2e7f4;
    &__item {
      display: block;
      position: relative;
    }

    &__link {
      color: #3e4d60;
      width: 100%;
      font-size: 16px;
      letter-spacing: 0.15px;
      line-height: 14px;
      color: #818b98;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;

      &-title {
        display: inline-block;
        max-width: 220px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        font-size: 14px;
        font-weight: 600;
        color: #818b98;
        letter-spacing: 0.15px;
        line-height: 20px;
        margin-bottom: 0;
        padding: 11px 20px;
      }

      &:hover {
        background: rgba(158, 178, 248, 0.17);
        box-shadow: 3px 0 0 0 #4e86ff inset;

        .sidebar-list__link-title {
          color: #3e4d60;
        }
      }
    }
  }

  .active {
    border-radius: 0;
    background-color: #e2e7f4;
    color: #4e86ff;
  }
}
</style>
