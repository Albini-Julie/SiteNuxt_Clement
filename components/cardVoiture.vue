<template>
  <!--Card caractéristique de la voiture-->
  <!--Si la props bord est à true la classe CSS bordure s'active-->
  <div class="bloc" :class="{ bordure: bord }">
    <!--Icon rubis qui s'affiche si titre est égal à Marque-->
    <IconsRubis class="bloc__icons" v-if="titre === 'Marque'" />
    <!--Icon roue qui s'affiche si titre est égal à Roues-->
    <IconsRoue class="bloc__icons" v-if="titre === 'Roues'" />
    <!--Icon moteur qui s'affiche si titre est égal à Moteur-->
    <IconsMoteur class="bloc__icons" v-if="titre === 'Moteur'" />
    <!--Icon calendrier qui s'affiche si titre est égal à Année-->
    <IconsCalendrier class="bloc__icons" v-if="titre === 'Année'" />
    <!--Icon paramètres qui s'affiche si titre est égal à Boîte de vitesses-->
    <IconsParametres class="bloc__icons" v-if="titre === 'Boîte de vitesses'" />
    <!--Icon Compteur qui s'affiche si titre est égal à Puissance-->
    <IconsCompteur class="bloc__icons" v-if="titre === 'Puissance'" />
    <!--Titre de la card-->
    <h3 class="bloc__title">{{ titre }}</h3>
    <!--Texte de la card-->
    <h3 class="bloc__text">{{ text }}</h3>
  </div>
</template>

<style scoped lang="scss">
// Classe CSS ajoutant une bordure seulement si la props bord est à true
.bordure {
  border: solid 1px #ba0000;
}
// Classe CSS de la card qui change selon les props
.bloc {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: v-bind(backColor);
  width: 100px;
  height: 100px;
  padding-left: rem(30);
  padding-right: rem(30);
  padding-top: rem(20);
  padding-bottom: rem(20);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include medium-up {
    width: 150px;
    height: 150px;
  }
  @include x-large-up {
    width: 200px;
    height: 200px;
  }

  // Classe CSS du texte
  &__text {
    color: v-bind(color);
    font-weight: 200;
    font-size: rem(20);
    font-family: $primary-font-family;
    margin: 0px;
    text-align: center;
    @include x-large-up {
      font-size: rem(25);
    }
  }
  // Classe CSS du titre
  &__title {
    color: v-bind(color);
    font-weight: 200;
    font-size: rem(18);
    font-family: $primary-font-family;
    margin: 0px;
    margin-top: rem(20);
    margin-bottom: rem(10);
    text-align: center;
    @include x-large-up {
      font-size: rem(22);
    }
  }
  // Classe CSS des icons
  &__icons {
    @include x-large-up {
    }
  }
}
</style>

<script setup>
// Création de props pour rendre paramétrable la card
// backColor permet de modifier la couleur du background
// color permet de modifier la couleur des textes
// titre permet d'entrer le texte de titre à afficher
// text permet d'entrer le texte à afficher
// bord permet de dire s'il faut une bordure autour de la card ou non
defineProps({
  backColor: String,
  color: String,
  icon: String,
  titre: String,
  text: String,
  bord: Boolean,
});
</script>
