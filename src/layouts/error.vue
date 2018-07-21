<template>
  <div class="page error-page">
    <h1 v-if="error.statusCode === 404">
      <span>Page not found</span>
    </h1>
    <h1 v-else>
      <span>Sorry, there is an error here!</span>
    </h1>

    <div
      v-if="error.statusCode !== 404 && error.message"
      class="error-content"
    >
      {{ error.message }}
    </div>

    <nuxt-link
      class="button"
      to="/"
    >
      Back to home
    </nuxt-link>
  </div>
</template>

<script>
import { Component, Vue, Prop } from '~/vueclass';

@Component({
  head: {
    title: 'Error!',
  },
})
export default class ErrorLayout extends Vue {
  @Prop() error;
}
</script>

<style lang="scss">
.error-page {
  padding: 10rem 0 20rem;
  text-align: center;
  text-transform: capitalize;

  a {
    color: $color-primary;
    font-size: 1.2rem;
  }
}
</style>
