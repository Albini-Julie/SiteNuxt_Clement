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
    @include large-up {
      display: flex;
      justify-content: space-evenly;
      gap: 20px;
      align-items: center;
    }
    @include x-large-up {
      gap: 0px;
    }
  }
}

.presentation {
  &__images {
    display: flex;
    flex-direction: column;
    gap: rem(20);
    align-items: center;
    @include medium-up {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
  &__image {
    width: 60%;
    @include medium-up {
      width: 230px;
      height: 300px;
    }
    @include large-up {
      width: 193px;
      height: 270px;
    }
    @include x-large-up {
      width: 303px;
      height: 400px;
    }
  }
  &__title {
    font-family: $secondary-font-family;
    font-size: rem(25);
    color: $white;
    text-transform: uppercase;
    margin: 0px;
    @include large-up {
      font-size: rem(25);
    }
    @include x-large-up {
      font-size: rem(35);
    }
  }
  &__content {
    margin-top: rem(40);
    padding-left: rem(30);
    padding-right: rem(30);
    @include medium-up {
      width: 80%;
      margin-top: rem(60);
    }
    @include large-up {
      margin: 0px;
      width: 40%;
    }
    @include x-large-up {
      width: 30%;
    }
  }
  &__text {
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    color: $white;
    @include large-up {
      font-size: rem(14);
    }
    @include x-large-up {
      font-size: rem(16);
    }
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
