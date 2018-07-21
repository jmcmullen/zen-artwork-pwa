<template>
  <section class="history">
    <div class="history__container">
      <h2 class="history__title">Our History</h2>
      <p class="history__copy">The Directors of Zen International have been steeped in the world of art for over 20 years, not only via the high quality art exhibited and sold in our galleries, but also through our art rental activities, which have enabled us to provide unique art works to corporate entities, designers, architects  and film and television concerns throughout Australia, Europe and the USA. We ourselves are all avid collectors and our enthusiasm for our artists, especially in identifying the inspirations behind each piece and thus sharing our knowledge of the creative processes, helps promote heightened understanding and enjoyment for our clients, many of whom delight in peeking ‘behind the artistic veil’ and entering for a time into the world of the artist. </p>
      <p class="history__copy">Our company has consciously experimented with a variety of different media, from the classical to the whimsical, and we have consistently endeavoured to make our art accessible, affordable and above all else, something to be enjoyed! In pursuit of these aims, we have harnessed the creativity and determination of our artists, whose unique gifts have provided the foundation of our success and our relationship with our clients.</p>
      <p class="history__copy">We have also actively sought collaboration with ancillary businesses in the wider art field, and in furtherance of our objective of making our art accessible to all, we have been able to promote many of our artists in print and posters. We like to think this helps to inspire a love of art and to foster a fairer access to art across all spectrums of the community, from novice to committed collector, irrespective of financial status.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.history {
  padding: 4rem 0 2rem;
  max-width: 800px;
  margin: auto;

  @include tablet {
    text-align: center;
  }

  &__container {
    @extend .container;
    padding: 0 15px;
  }

  &__title {
    margin-top: 0;
    font-size: 3rem;
    color: $color-black;
  }

  &__copy {
    font-size: 1.2rem;
    color: $color-jet;
  }
}
</style>
