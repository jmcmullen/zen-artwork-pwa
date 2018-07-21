<template>
  <header class="navbar">
    <img 
      class="navbar__logo"
      src="~/assets/images/logo.png" 
      alt="">
      <!-- <nav class="navbar__nav">
      <a 
        v-for="(category, i) in categories" 
        :key="i" 
        class="navbar__link"
        href="#">{{ category }}</a>
      </nav> -->
  </header>
</template>

<script>
import { Component, Vue } from 'vueclass';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['categories']),
  },
})
export default class DefaultLayout extends Vue {}
</script>


<style lang="scss" scoped>
.navbar {
  padding: 1rem 0;
  text-align: center;

  &__logo {
    width: 100px;
    margin-bottom: 10px;
  }

  &__nav {
    // word-wrap: break-word;
    // word-break: break-word;
    max-width: 100%;
  }

  &__link {
    text-transform: uppercase;
    padding: 8px 15px;
    color: $color-primary;
    text-decoration: none;
    font-weight: 100;
    display: inline-flex;

    // &:after {
    //   padding-left: 10px;
    //   content: '//';
    //   color: $color-jet;
    // }
  }
}
</style>
