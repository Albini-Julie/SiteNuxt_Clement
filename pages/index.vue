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
  </div>
  <div class="index__presentation">
    <!--Logo du site-->
    <div class="index__blocLogo">
      <IconsLogo width="230px" height="92px" color="#FFF" fontSize="40px" />
    </div>
    <!--Présentation-->
    <!--Image-->
    <div
      :style="{
        backgroundImage: `url(${accueil.data.presentation_image.url})`,
      }"
      class="presentation__image"
    >
      <div class="presentation__content">
        <!--Titre-->
        <h2 class="presentation__title">
          {{ accueil.data.presentation_titre[0].text }}
        </h2>
        <!--Textes-->
        <p class="presentation__text">
          {{ accueil.data.presentation_text1[0].text }}
        </p>
        <p class="presentation__text">
          {{ accueil.data.presentation_text2[0].text }}
        </p>
      </div>
    </div>
  </div>
  <!--Routage-->
  <div class="index__routage">
    <!--Le Pilote-->
    <div
      class="routage__box"
      :style="{
        backgroundImage: `url(${accueil.data.pilote_image.url})`,
      }"
    >
      <Button
        :text="accueil.data.pilote_buttontext[0].text"
        color="#FFF"
        colorText="#000"
        route="/pilote"
        fleche
      ></Button>
    </div>
    <!--La voiture-->
    <div
      class="routage__box"
      :style="{
        backgroundImage: `url(${accueil.data.voiture_image.url})`,
      }"
    >
      <Button
        :text="accueil.data.voiture_buttontext[0].text"
        color="#FFF"
        colorText="#000"
        route="/voiture"
        fleche
      ></Button>
    </div>
    <!--Les sponsors-->
    <div
      class="routage__box"
      :style="{
        backgroundImage: `url(${accueil.data.sponsors_image.url})`,
      }"
    >
      <Button
        :text="accueil.data.sponsors_buttontext[0].text"
        color="#FFF"
        colorText="#000"
        route="/sponsors"
        fleche
      ></Button>
    </div>
  </div>
  <div class="index__cards">
    <!--Devenir sponsors-->
    <div class="index__sponsoring">
      <h2 class="sponsoring__title">
        {{ accueil.data.sponsoring_titre[0].text }}
      </h2>
      <div class="sponsoring__content">
        <p class="sponsoring__catchline">
          {{ accueil.data.sponsoring_catchline[0].text }}
        </p>
        <Button
          color="#444444"
          colorText="#FFFFFF"
          text="Mon dossier de sponsoring"
          :lien="accueil.data.sponsoring_dossier_lien.url"
        />
      </div>
    </div>
    <!--contact-->
    <div class="index__contact">
      <h2 class="sponsoring__title --contact">
        {{ accueil.data.contact_titre[0].text }}
      </h2>
      <div class="contact__content">
        <a
          class="contact__lien"
          :href="accueil.data.contact_instagram_lien.url"
        >
          <div class="contact__rs">
            <IconsInstagram />
            <p class="contact__text">
              {{ accueil.data.contact_instagram[0].text }}
            </p>
          </div>
        </a>
        <a class="contact__lien" :href="accueil.data.contact_tiktok_lien.url">
          <div class="contact__rs">
            <IconsTiktok />
            <p class="contact__text">
              {{ accueil.data.contact_tiktok[0].text }}
            </p>
          </div>
        </a>
        <p class="contact__text">
          {{ accueil.data.contact_telephone[0].text }}
        </p>
        <p class="contact__text">
          {{ accueil.data.contact_mail[0].text }}
        </p>
        <div class="contact__button">
          <Button
            color="#BA0000"
            colorText="#FFFFFF"
            text="Me contacter"
            route="/contact"
          />
        </div>
      </div>
    </div>
  </div>
  <!--Footer-->
  <Footer color="#FFFFFF" colorText="#000000" />
</template>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page pageaccueil
const { client } = usePrismic();
const { data: accueil, error } = await useAsyncData("accueil", () =>
  client.getSingle("pageaccueil")
);
console.log(accueil);

// Mise en place du SEO
useSeoMeta({
  title: "calb-motorsport",
  ogTitle: "calb-motorsport",
  description:
    "Le site de Clément Albini dédié au rallye calb-motorsport. Découvrez le pilote, sa voiture, sa passion du rallye et de l'automobile.",
  ogDescription:
    "Le site de Clément Albini dédié au rallye calb-motorsport. Découvrez le pilote, sa voiture, sa passion du rallye et de l'automobile.",
  ogImage: "/logo_calb-motorsport.jpg",
  twitterCard: "summary_large_image",
  keywords:
    "rallye, voiture, albini, franche-comté, rallye-automobile, automobile, sponsors, WRC, mécanique",
});
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: rem(80) rem(100);
    @include large-up {
      width: 60%;
      padding: rem(0);
    }
    @include x-large-up {
      width: 40%;
      padding: rem(0);
    }
  }

  &__presentation {
    display: flex;
    flex-direction: column;
    @include large-up {
      flex-direction: row;
    }
  }

  &__routage {
    display: flex;
    flex-direction: column;
    @include large-up {
      flex-direction: row;
    }
  }

  &__sponsoring {
    background-color: $red;
    padding: rem(80) rem(40);
    @include large-up {
      width: 100%;
    }
  }

  &__contact {
    background-color: $gray;
    padding: rem(80) rem(40);
    @include large-up {
      width: 100%;
    }
  }
  &__cards {
    display: flex;
    flex-direction: column;
    @include large-up {
      flex-direction: row;
    }
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
    margin: 0px;
  }

  &__text {
    font-family: $primary-font-family;
    color: #ffffff;
    font-size: $mobilecontent-font-size;
    margin: 0px;
    margin-top: rem(10);
    @include x-large-up {
      font-size: $desktopcontent-font-size;
    }
  }

  &__content {
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    border: none;
    border-left: solid 2px $red;
    margin-left: rem(20);
    padding-left: rem(20);
    padding-right: rem(30);
    padding-top: rem(10);
    padding-bottom: rem(10);
    z-index: 50;
    @include large-up {
      width: 70%;
      margin-left: rem(40);
    }
    @include x-large-up {
      margin-left: rem(60);
    }
  }

  &__image {
    position: relative;
    width: 100%;
    height: fit-content;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    padding: 80px 0px;
    @include x-large-up {
      width: 60%;
    }
  }

  &__image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}

.routage {
  &__box {
    height: fit-content;
    padding: rem(100) rem(20);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    filter: grayscale(100%);
    @include medium-up {
      background-position: center;
      padding: rem(120) rem(5);
    }
    @include large-up {
      padding: rem(150) rem(15);
      width: 100%;
    }
    @include x-large-up {
      padding: rem(200) rem(80);
    }
  }

  &__box:hover {
    filter: none;
  }
}

.sponsoring {
  &__title {
    font-family: $secondary-font-family;
    color: $white;
    font-size: rem(50);
    margin: 0px;
    text-align: center;

    &.--contact {
      margin-bottom: rem(50);
    }
  }
  &__catchline {
    font-family: $primary-font-family;
    color: $white;
    font-size: $mobilesoustitle-font-size;
    margin-top: rem(50);
    margin-bottom: rem(30);
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: rem(20);
  }
}
.contact {
  &__text {
    font-family: $primary-font-family;
    color: $white;
    font-size: $mobilesoustitle-font-size;
    margin: rem(0);
  }
  &__button {
    display: flex;
    justify-content: center;
    margin-top: rem(30);
  }
  &__rs {
    display: flex;
    gap: rem(10);
    align-items: center;
    justify-content: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: rem(20);
  }
  &__lien {
    text-transform: none;
    text-decoration: none;
  }
}
</style>
