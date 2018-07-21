<template>
  <div class="default-layout">
    <nuxt/>
    <copyright/>
  </div>
</template>

<script>
import { Component, Vue } from 'vueclass';
import Copyright from '../components/partials/Copyright';

@Component({
  components: {
    Copyright,
  },
})
export default class DefaultLayout extends Vue {}
</script>
