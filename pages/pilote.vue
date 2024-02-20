<template>
  <Header backColor="#BA0000" color="#FFFFFF" />
  <div class="pilote">
    <div class="pilote__presentation">
      <div class="presentation__images">
        <img
          class="presentation__image"
          :src="pilote.data.presentation_image2.url"
          alt="image du pilote Clément Albini"
        />
        <img
          class="presentation__image"
          :src="pilote.data.presentation_image1.url"
          alt="image du pilote Clément Albini"
        />
      </div>
      <div class="presentation__content">
        <h2 class="presentation__title">
          {{ pilote.data.presentation_titre[0].text }}
        </h2>
        <p class="presentation__text">
          {{ pilote.data.presentation_texte[0].text }}
        </p>
      </div>
      0
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pilote {
  &__presentation {
    margin-top: -1px;
    background-color: #ba0000;
    width: fit-content;
    padding-top: rem(80);
    padding-bottom: rem(250);
  }
}

.presentation {
  &__images {
    display: flex;
    flex-direction: column;
    gap: rem(20);
    align-items: center;
  }
  &__image {
    width: 60%;
  }
  &__title {
    font-family: $secondary-font-family;
    font-size: rem(25);
    color: $white;
    text-transform: uppercase;
  }
  &__content {
    margin-top: rem(40);
    padding-left: rem(30);
    padding-right: rem(30);
  }
  &__text {
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    color: $white;
  }
}
</style>

<script setup>
const { client } = usePrismic();
const { data: pilote, error } = await useAsyncData("pilote", () =>
  client.getSingle("pilote")
);
console.log(pilote);
</script>
