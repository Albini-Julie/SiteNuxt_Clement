<template>
  <div class="legales">
    <!--Header-->
    <Header color="#000000" />
    <div class="legales__content">
      <!--Titre-->
      <div class="legales__title">
        <h1>{{ legales.data.legales_page_titre[0].text }}</h1>
      </div>
      <!--Contenus textuels-->
      <div v-for="(i, index) in legales.data.legales_content">
        <!--Titre-->
        <h2 class="legales__soustitle">
          {{ i.legales_titre[0].text }}
        </h2>
        <!--Texte-->
        <p class="legales__text">
          {{ i.legales_texte[0].text }}
        </p>
      </div>
    </div>
  </div>
  <!--Footer-->
  <Footer class="legales__footer" color="#FFFFFF" colorText="#000000" />
</template>

<style lang="scss" scoped>
.legales {
  &__title {
    display: flex;
    justify-content: center;
    font-size: $mobilesoustitle-font-size;
    font-family: $secondary-font-family;
    @include large-up {
      font-size: rem(30);
    }
    @include x-large-up {
      font-size: $desktopsoustitle-font-size;
    }
  }
  &__soustitle {
    font-family: $primary-font-family;
    font-size: $mobilesoustitle-font-size;
    font-weight: 600;
    margin-top: rem(30);
    @include large-up {
      font-size: rem(25);
      font-weight: 300;
    }
    @include x-large-up {
      font-size: rem(30);
      font-weight: 300;
    }
  }
  &__text {
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    @include large-up {
      font-size: $desktopcontent-font-size;
    }
  }
  &__content {
    padding: rem(0) rem(20);
    @include medium-up {
      padding: rem(0) rem(50);
    }
    @include large-up {
      padding: rem(0) rem(100);
    }
    @include x-large-up {
      padding: rem(0) rem(150);
    }
  }
  &__footer {
    margin-top: rem(30);
    @include large-up {
      margin-top: rem(50);
    }
  }
}
</style>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page mentions_le
const { client } = usePrismic();
const { data: legales, error } = await useAsyncData("legales", () =>
  client.getSingle("mentions_le")
);
console.log(legales);

// Mise en place du SEO
useSeoMeta({
  title: "calb-motorsport mentions légales",
  ogTitle: "calb-motorsport mentions légales",
  description:
    "Le site de Clément Albini dédié au rallye calb-motorsport. Découvrez le pilote, sa voiture, sa passion du rallye et de l'automobile. Lisez l'aspect légal du site web avec les conditions générales.",
  ogDescription:
    "Le site de Clément Albini dédié au rallye calb-motorsport. Découvrez le pilote, sa voiture, sa passion du rallye et de l'automobile. Lisez l'aspect légal du site web avec les conditions générales.",
  ogImage: "/logo_calb-motorsport.jpg",
  twitterCard: "summary_large_image",
  keywords:
    "rallye, voiture, albini, franche-comté, rallye-automobile, automobile, sponsors, WRC, mécanique, mentions légales, conditions générales, légal",
});
</script>
