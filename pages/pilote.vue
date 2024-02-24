<template>
  <Header backColor="#BA0000" color="#FFFFFF" />
  <div class="pilote">
    <!--Présentation-->
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
    <!--Qualités-->
    <div class="pilote__qualites">
      <div class="qualites__blocImage">
        <img class="qualites__image" :src="pilote.data.qualite_image.url" />
      </div>
      <div class="qualites__blocContent">
        <div
          class="qualites__content"
          v-for="(i, index) in pilote.data.qualite_contenu"
        >
          <h2 class="qualites__title">
            {{ pilote.data.qualite_contenu[index].qualite_titre[0].text }}
          </h2>
          <p class="qualites__text">
            {{ pilote.data.qualite_contenu[index].qualite_texte[0].text }}
          </p>
        </div>
      </div>
    </div>
    <!--Projets-->
    <div
      :style="{
        backgroundImage: `url(${pilote.data.projet_image.url})`,
      }"
      class="projets__image"
    >
      <div class="projets__content">
        <!--Liste des projets-->
        <div class="">
          <h2 class="projets__title">{{ pilote.data.projet_titre[0].text }}</h2>
          <div class="projets__projets" v-for="i in pilote.data.projet_contenu">
            <IconsTriangle />
            <p class="projets__text">{{ i.projet_texte[0].text }}</p>
          </div>
        </div>
        <!--Partie sponsoring-->
        <div class="projets__sponsoring">
          <h2 class="sponsoring__title">
            {{ pilote.data.sponsoring_titre[0].text }}
          </h2>
          <p class="sponsoring__text">
            {{ pilote.data.sponsoring_texte[0].text }}
          </p>
          <div class="sponsoring__button">
            <Button
              color="#FFFFFF"
              colorText="#000000"
              :text="pilote.data.sponsoring_bouton[0].text"
              :lien="pilote.data.sponsoring_lien_dossier.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer color="#FFFFFF" colorText="#000000" />
</template>

<style lang="scss" scoped>
.pilote {
  &__presentation {
    margin-top: -1px;
    background-color: #ba0000;
    width: fit-content;
    padding-top: rem(80);
    padding-bottom: rem(80);
    @include large-up {
      display: flex;
      padding-bottom: rem(250);
      justify-content: space-evenly;
      gap: 20px;
      align-items: center;
    }
    @include x-large-up {
      gap: 0px;
    }
  }
  &__qualites {
    @include large-up {
      display: flex;
      justify-content: space-between;
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

.qualites {
  &__blocImage {
    @include medium-up {
      display: flex;
      justify-content: center;
      position: relative; // Assurez-vous que le positionnement est relatif pour positionner l'image absolument à l'intérieur
      width: 100%; // Utilisez la largeur de 100% pour remplir son conteneur
      height: 500px; // Hauteur de votre choix ou utilisez une valeur relative comme 80vh
      overflow: hidden;
    }
    @include large-up {
      display: block;
      position: relative; // Assurez-vous que le positionnement est relatif pour positionner l'image absolument à l'intérieur
      width: 100%; // Utilisez la largeur de 100% pour remplir son conteneur
      height: 80vh; // Hauteur de votre choix ou utilisez une valeur relative comme 80vh
      overflow: hidden;
    }
  }
  &__image {
    width: 100%;
    height: 80%;
    @include medium-up {
      position: absolute; // Positionnement absolu pour placer l'image à l'intérieur du conteneur
      top: 0; // Alignement en haut du conteneur
      left: 0; // Alignement à gauche du conteneur
      width: 100%; // Largeur de 100% pour remplir le conteneur parent
      height: 100%; // Hauteur de 100% pour remplir le conteneur parent
      object-fit: cover; //
    }
    @include large-up {
      position: absolute; // Positionnement absolu pour placer l'image à l'intérieur du conteneur
      top: 0; // Alignement en haut du conteneur
      left: 0; // Alignement à gauche du conteneur
      width: 100%; // Largeur de 100% pour remplir le conteneur parent
      height: 100%; // Hauteur de 100% pour remplir le conteneur parent
      object-fit: cover; //
    }
  }
  &__title {
    text-transform: uppercase;
    color: $red;
    font-size: $mobilesoustitle-font-size;
    margin: 0px;
    @include large-up {
      font-size: rem(20);
    }
    @include x-large-up {
      font-size: rem(25);
    }
  }
  &__text {
    font-size: $mobilecontent-font-size;
    margin-bottom: 0px;
    @include large-up {
      font-size: $desktopcontent-font-size;
    }
  }
  &__blocContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: rem(40);
    margin-bottom: rem(40);
    @include large-up {
      margin: 0px;
      margin-left: rem(30);
    }
    @include x-large-up {
      margin-left: rem(50);
    }
  }
  &__content {
    font-family: $primary-font-family;
    border-left: solid 2px $black;
    margin: rem(20);

    padding-left: rem(20);
    @include medium-up {
      width: 80%;
    }
    @include x-large-up {
      width: 70%;
    }
  }
}

.projets {
  &__title {
    color: $white;
    font-family: $primary-font-family;
    font-weight: 200;
    font-size: rem(25);
    @include x-large-up {
      font-size: rem(30);
    }
  }
  &__image {
    position: relative;
    width: 100%;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    padding: 80px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include x-large-up {
      margin-bottom: rem(40);
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
  &__content {
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    z-index: 50;
    padding-left: rem(30);
    padding-right: rem(30);
    @include large-up {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    @include large-up {
      justify-content: space-evenly;
    }
  }
  &__text {
    color: $white;
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    @include x-large-up {
      font-size: $desktopcontent-font-size;
    }
  }
  &__projets {
    display: flex;
    gap: rem(20);
    align-items: center;
  }
  &__sponsoring {
    position: relative;
    height: fit-content;
    overflow: hidden;
    margin-top: rem(40);
    text-align: center;
    border: solid 2px $white;
    padding-top: rem(50);
    padding-bottom: rem(50);
    @include large-up {
      width: 50%;
    }
    @include x-large-up {
      width: 30%;
    }
  }
  &__sponsoring::after {
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

.sponsoring {
  &__title {
    color: $white;
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    z-index: 50;
    font-family: $primary-font-family;
    font-weight: 200;
    padding-left: rem(10);
    padding-right: rem(10);
    margin: 0px;
  }
  &__text {
    color: $white;
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    z-index: 50;
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    padding-left: rem(10);
    padding-right: rem(10);
    margin-top: rem(20);
  }
  &__button {
    position: relative;
    z-index: 50;
    display: flex;
    justify-content: center;
    margin-top: rem(40);
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
