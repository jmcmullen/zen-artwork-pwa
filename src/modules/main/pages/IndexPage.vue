<template>
  <div class="page">
    <featured-artwork/>
    <about-us/>
    <our-history/>
  </div>
</template>

<script>
import { Component, Vue } from 'vueclass';
import FeaturedArtwork from '~/components/home/FeaturedArtwork';
import AboutUs from '~/components/home/AboutUs';
import OurHistory from '~/components/home/OurHistory';

@Component({
  components: {
    FeaturedArtwork,
    AboutUs,
    OurHistory,
  },
  head: {
    title: 'Home',
  },
})
export default class IndexPage extends Vue {}
</script>
