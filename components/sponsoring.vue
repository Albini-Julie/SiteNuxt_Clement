<template>
  <!--Partie sponsoring-->
  <div class="sponsoring">
    <!--Titre-->
    <h2 class="sponsoring__title">{{ title }}</h2>
    <!--Textes-->
    <p class="sponsoring__text">{{ text }}</p>
    <!--Bouton-->
    <div class="sponsoring__button">
      <Button color="#FFFFFF" colorText="#000000" :text="button" :lien="lien" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsoring {
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
  &__title {
    color: $white;
    position: relative; /* Assurez-vous que la position est relative pour que les éléments absolus à l'intérieur soient positionnés correctement */
    z-index: 50;
    font-family: $primary-font-family;
    font-weight: 200;
    padding-left: rem(10);
    padding-right: rem(10);
    margin: 0px;
    @include large-up {
      font-size: rem(25);
      padding-left: rem(15);
      padding-right: rem(15);
    }
    @include x-large-up {
      font-size: rem(30);
      padding-left: rem(20);
      padding-right: rem(20);
    }
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
    @include large-up {
      font-size: rem(16);
      padding-left: rem(15);
      padding-right: rem(15);
    }
    @include x-large-up {
      font-size: $desktopcontent-font-size;
      padding-left: rem(20);
      padding-right: rem(20);
    }
  }
  &__button {
    position: relative;
    z-index: 50;
    display: flex;
    justify-content: center;
    margin-top: rem(40);
  }
}

.sponsoring::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>

<script setup>
// Création de props pour rendre paramétrable la card
// title permet de choisir le texte afficher en titre
// text permet de choisir le texte afficher en texte
// button permet de choisir le texte afficher en bouton
// lien permet de choisir le chemin vers lequel renvoie le bouton
defineProps({
  title: String,
  text: String,
  button: String,
  lien: String,
});
</script>
