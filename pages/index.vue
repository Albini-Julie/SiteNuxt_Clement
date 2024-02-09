<template>
  <div class="index">
    <!--Cover image-->
    <div
      class="index__cover"
      :style="{ backgroundImage: `url(${accueil.data.cover_image.url})` }"
      style="
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      "
    ></div>
    <div class="index__content">
      <!--Cover titre-->
      <h1 class="cover__titre">{{ accueil.data.cover_titre[0].text }}</h1>
      <h2 class="cover__text">{{ accueil.data.cover_text[0].text }}</h2>
      <div class="cover__button">
        <Button
          color="#BA0000"
          colorText="#FFFFFF"
          text="Mon dossier de sponsoring"
          :lien="accueil.data.sponsoring_dossier_lien.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: accueil, error } = await useAsyncData("accueil", () =>
  client.getSingle("pageaccueil")
);
console.log(accueil);
</script>

<style lang="scss" scoped>
.index {
  position: relative;

  &__cover {
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Noir semi-transparent */
  }
}

.cover {
  &__titre {
    margin-top: rem(150);
    font-family: $secondary-font-family;
    color: $white;
    font-size: $mobiletitle-font-size;
    padding: rem(0) rem(30);
    @include medium-up {
      font-size: rem(70);
      margin-top: rem(180);
    }
    @include large-up {
      font-size: rem(100);
      margin-top: rem(200);
      width: 80%;
    }
    @include x-large-up {
      font-size: $desktoptitle-font-size;
      margin-top: rem(200);
      width: 60%;
    }
  }

  &__text {
    font-family: $primary-font-family;
    color: $white;
    font-size: $mobilesoustitle-font-size;
    font-weight: 300;
    display: flex;
    justify-content: center;
    margin-top: rem(200);
    @include medium-up {
      font-size: rem(25);
    }
    @include large-up {
      font-size: rem(30);
    }
    @include large-up {
      margin-top: rem(100);
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    margin-top: rem(30);
  }

  &__lien {
    text-decoration: none;
  }
}
</style>
