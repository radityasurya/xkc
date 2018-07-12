<template>
  <header class="header" :class="{'header--sticky': scrollPosition > 66}">
    <div class="header__container header__container--slim">
      <a href="/" class="logo">
        <span class="logo__img">Xebia Knowledge Center</span>
      </a>
      <div class="search search__container">
        <el-input placeholder="Search"></el-input>
      </div>
      <nav class="navigation">
        <ul>
          <li v-for="(menu, index) in menus" :key="index">
            <a href="#">{{menu}}</a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <svg width="20" height="4" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4A2 2 0 1 0 2.001.001 2 2 0 0 0 2 4zm8 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 10 4zm8 0a2 2 0 1 0 .001-3.999A2 2 0 0 0 18 4z" fill="#aaa" fill-rule="evenodd"></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    ...mapGetters({
      menus: "menus/get"
    })
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
  height: 66px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;

  &--sticky {
    -moz-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  &__container {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 13px;
    padding-top: 13px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    &--slim {
      max-width: 1100px;
    }
  }

  .logo {
    display: inline-flex;
    margin: 0 20px 0 0;

    &__img {
      width: 40px;
      height: 40px;
      background-image: url("~/safari.png");
      background-size: cover;
      display: inline-block;
      border-radius: 50%;
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .search {
    &__container {
      width: 350px;
    }
  }

  .navigation {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin: 0 0 0 20px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: 24px;
    }

    li {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      margin: 0 20px 0 0;
      padding: 0;
      line-height: 24px;

      a {
        color: #aaa;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;

        &:hover {
          color: #666;

          path {
            fill: #666;
          }
        }

        .icon {
          position: relative;
          top: -3px;
        }
      }
    }
  }
}
</style>
