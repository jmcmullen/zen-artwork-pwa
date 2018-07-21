<template>
  <div class="gallary-layout">
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import { Component, Vue } from 'vueclass';
import Navbar from '../components/gallary/Navbar';
import Copyright from '../components/partials/Copyright';

@Component({
  components: {
    Navbar,
    Copyright,
  },
})
export default class GallaryLayout extends Vue {}
</script>
