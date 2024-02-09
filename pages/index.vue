<template>
  <div class="index__cover">
    <!--Cover image-->
    <div
      class="index__back"
      :style="{
        backgroundImage: `url(${accueil.data.cover_image.url})`,
      }"
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
      <!--Cover text-->
      <h2 class="cover__text">{{ accueil.data.cover_text[0].text }}</h2>
      <!-- Cover button-->
      <div class="cover__button">
        <Button
          color="#BA0000"
          colorText="#FFFFFF"
          text="Mon dossier de sponsoring"
          :lien="accueil.data.sponsoring_dossier_lien.url"
        />
      </div>
    </div>
    <!--Logo du site-->
    <div class="index__blocLogo">
      <IconsLogo width="230px" height="92px" color="#FFF" fontSize="40px" />
    </div>
    <!--Présentation-->
    <div
      style="
        height: fit-content;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        padding: 50px 0px;
      "
      :style="{
        backgroundImage: `url(${accueil.data.presentation_image.url})`,
      }"
      class="index__presentation"
    >
      <div class="presentation__content">
        <h2 class="presentation__title">
          {{ accueil.data.presentation_titre[0].text }}
        </h2>
        <p class="presentation__text">
          {{ accueil.data.presentation_text1[0].text }}
        </p>
        <p class="presentation__text">
          {{ accueil.data.presentation_text2[0].text }}
        </p>
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

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Noir semi-transparent */
  }

  &__blocLogo {
    background-color: $red;
    padding: rem(100) rem(80);
  }

  &__presentation {
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

.presentation {
  &__title {
    font-family: $secondary-font-family;
    color: #ffffff;
    font-size: $desktopsoustitle-font-size;
  }

  &__text {
    font-family: $primary-font-family;
    color: #ffffff;
    font-size: $mobilecontent-font-size;
    margin: 0px;
  }

  &__content {
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    border: none;
    border-left: solid 2px $red;
    padding-top: rem(20);
    padding-bottom: rem(20);
    margin-left: rem(20);
    z-index: 50;
  }

  &__content::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* Voile noir avec une opacité de 50% */

    z-index: -1; /* Assurez-vous que le voile est en arrière-plan */
  }
}
</style>
