<template>
  <section class="featured">
    <div class="featured__container">
      <div class="featured__image-wrapper">
        <img 
          v-lazy="featuredImage" 
          class="featured__image"
          alt="">
      </div>
      <div class="featured__copy">
        <h1 class="featured__title">Zen International Marketing</h1>
        <h2 class="featured__subtitle">The beauty of art is truly in the eye of the beholder</h2>
      </div>
    </div>
    <!-- <nuxt-link 
      to="/gallary"
      class="featured__cta">
      View Our Gallary
    </nuxt-link> -->
  </section>
</template>

<script>
import { Component, Vue } from 'vueclass';
import abstract4 from '~/assets/images/artwork/abstract_4.jpg';
import metal15 from '~/assets/images/artwork/metal_15.jpg';
import popart21 from '~/assets/images/artwork/popart_21.jpg';
import popart24 from '~/assets/images/artwork/popart_24.jpg';
import popart25 from '~/assets/images/artwork/popart_25.jpg';

@Component({
  computed: {
    featuredImage() {
      const images = [abstract4, metal15, popart21, popart24, popart25];
      return images[Math.floor(Math.random() * images.length)];
    },
  },
})
export default class FeaturedArtwork extends Vue {}
</script>

<style lang="scss" scoped>
.featured {
  background-color: $color-white;
  padding: 4rem 0 2rem;
  text-align: center;

  @include tablet {
    padding: 6rem 0 6rem;
  }

  &__container {
    @extend .container;
    max-width: 850px;

    @include tablet {
      display: flex;
      flex-direction: row-reverse;
      text-align: left;
    }
  }

  &__image-wrapper {
    width: 80%;
    max-width: 400px;
    max-height: 256px;
    margin: auto;
    display: block;
    box-shadow: 1.25rem 1.375rem 4.75rem 0 rgba(0, 0, 0, 0.42);
    overflow: hidden;

    @include tablet {
      max-height: 285px;
      transform: translateX(-60px);
    }
  }

  &__image {
    width: 100%;
  }

  &__title {
    color: $color-black;
    font-family: $font-playfair;
    font-weight: 400;
    font-size: 3rem;

    @include tablet {
      font-size: 3.4rem;
      margin-top: 30px;
      transform: translateX(60px);
    }
  }

  &__subtitle {
    font-family: $font-playfair;
    font-size: 2rem;

    @include tablet {
      font-size: 2rem;
      margin-top: 10px;
      padding-right: 130px;
      transform: translateX(60px);
    }
  }

  &__cta {
    color: $color-primary;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 50px auto 0;
    display: block;
    border: 2px solid $color-primary;
    width: 300px;
    padding: 12px 10px 10px;
    transition: all 0.5s;

    &:hover {
      background-color: lighten($color-primary, 35%);
    }
  }
}
</style>
