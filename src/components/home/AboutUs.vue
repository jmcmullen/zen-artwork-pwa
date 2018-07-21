<template>
  <section class="about">
    <div class="about__container">
      <h2 class="about__title">About Us</h2>
      <p class="about__copy">Zen International Marketing LLC was established to promote and market the unique talents of Australian and American artists in the areas of contemporary fine art, photography, sculptures as well as a wide range of other art media. As you will see from our website, our art encompasses the full gambit of artistic creativity, and we collaborate with an array of established and emerging artists - primarily from the contemporary art world. Our focus is on the ingenuity, skills, and unique qualities of our artists. We also strive continually to ensure that our clients make sound, educated, financial investments with each purchase, which, hopefully, adds to the enjoyment and intrinsic pleasure that comes from owning an object of great beauty.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
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
    color: $color-jet;
    font-size: 1.2rem;
  }
}
</style>
