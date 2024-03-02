<template>
  <Header backColor="#FFF" color="#000" />
  <!-- Logos sponsors en grille -->
  <div class="sponsors__grid">
    <div
      class="sponsors__content"
      v-for="sponsor in sponsors.data.sponsors_logos"
      :key="sponsor.id"
    >
      <img :src="sponsor.sponsors_logo.url" :alt="sponsor.sponsors_logo.alt" />
    </div>
  </div>
  <!--Sponsors-->
  <div
    :style="{
      backgroundImage: `url(${sponsors.data.confiance_image.url})`,
    }"
    class="sponsors__image"
  >
    <div class="sponsors__sponsoring">
      <div class="sponsors__textes">
        <h2 class="sponsors__title">
          {{ sponsors.data.confiance_titre[0].text }}
        </h2>
        <p class="sponsors__text">
          {{ sponsors.data.confiance_texte[0].text }}
        </p>
      </div>
      <Sponsoring
        class="sponsoring__card"
        :title="sponsors.data.sponsoring_titre[0].text"
        :text="sponsors.data.sponsoring_texte[0].text"
        :button="sponsors.data.bouton_texte[0].text"
        :lien="sponsors.data.sponsoring_dossier_lien.url"
      />
    </div>
  </div>
  <Footer color="#FFF" colorText="#000" />
</template>

<style lang="scss" scoped>
.sponsors {
  &__image {
    margin-top: rem(100);
    position: relative;
    width: 100%;
    padding-top: rem(100);
    padding-bottom: rem(100);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  &__sponsoring {
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    z-index: 50;
    padding-left: rem(30);
    padding-right: rem(30);
    @include large-up {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: rem(30);
    }
    @include large-up {
      justify-content: space-evenly;
    }
  }
  &__grid {
    margin-top: rem(80);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
    @include medium-up {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    @include large-up {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    @include x-large-up {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  &__title {
    font-family: $primary-font-family;
    color: $white;
    font-size: rem(25);
    @include x-large-up {
      font-size: rem(40);
      font-weight: 200;
    }
  }
  &__text {
    font-family: $primary-font-family;
    color: $white;
    @include x-large-up {
      font-size: rem(20);
    }
  }
  &__textes {
    @include medium-up {
      width: 90%;
    }
    @include large-up {
      width: 40%;
    }
    @include x-large-up {
      width: 35%;
    }
  }
}
.sponsors__content img {
  max-width: 100%;
  height: auto;
}
</style>

<script setup>
const { client } = usePrismic();
const { data: sponsors, error } = await useAsyncData("sponsors", () =>
  client.getSingle("sponsors")
);
console.log(sponsors);

useSeoMeta({
  title: "calb-motorsport sponsors",
  ogTitle: "calb-motorsport sponsors",
  description:
    "Le site de Clément Albini dédié au rallye calb-motorsport. Découvrez le pilote, sa voiture, sa passion du rallye et de l'automobile. Les entreprises qui ont fait confiance à Clément Albini et qui ont choisi de le soutenir dans son rêve.",
  ogDescription:
    "Le site de Clément Albini dédié au rallye calb-motorsport. Découvrez le pilote, sa voiture, sa passion du rallye et de l'automobile. Les entreprises qui ont fait confiance à Clément Albini et qui ont choisi de le soutenir dans son rêve.",
  ogImage: "/logo_calb-motorsport.jpg",
  twitterCard: "summary_large_image",
  keywords:
    "rallye, voiture, albini, franche-comté, rallye-automobile, automobile, sponsors, WRC, mécanique, sponsors, entreprises, argent, soutien, rêve, dons, aide financière, sponsoring",
});
</script>
