<template>
  <!--Menu mobile-->
  <!--Fenetre qui s'ouvre pour afficher le menus mobiles-->
  <div class="header__window" v-if="open">
    <div class="window__header">
      <div class="header__logo --mobile">
        <!--Logo et rouage-->
        <NuxtLink class="window__lien" to="/" @click="Menu">
          <IconsLogo color="#FFF" width="80px" height="30px" fontSize="20px" />
        </NuxtLink>
      </div>
      <!--Icon croix-->
      <IconsCroix class="header__icon" @click="Menu" color="#FFF" />
    </div>
    <!--Le pilote-->
    <div class="window__content">
      <NuxtLink class="window__lien" to="/pilote">
        <p class="window__text" @click="Menu">Le pilote</p>
      </NuxtLink>
      <!--La voiture-->
      <NuxtLink class="window__lien" to="/voiture">
        <p class="window__text" @click="Menu">La voiture</p>
      </NuxtLink>
      <!--Les sponsors-->
      <NuxtLink class="window__lien" to="/sponsors">
        <p class="window__text" @click="Menu">Les sponsors</p>
      </NuxtLink>
      <!--contact-->
      <NuxtLink class="window__lien" to="/contact">
        <p class="window__text" @click="Menu">Contact</p>
      </NuxtLink>
      <!--Legal-->
      <NuxtLink class="window__lien" to="/mentionslegales">
        <p class="window__text" @click="Menu">Légal</p>
      </NuxtLink>
    </div>
  </div>

  <!--Menu desktop-->
  <div v-else class="header">
    <!--Logo-->
    <div class="header__logo">
      <NuxtLink class="window__lien" to="/">
        <IconsLogo
          :color="color"
          width="140px"
          height="52.28px"
          fontSize="30px"
        />
      </NuxtLink>
    </div>
    <div class="header__texts">
      <!--Le pilote-->
      <NuxtLink class="window__lien" to="/pilote">
        <p class="header__text">Le pilote</p>
      </NuxtLink>
      <!--La voiture-->
      <NuxtLink class="window__lien" to="/voiture">
        <p class="header__text">La voiture</p>
      </NuxtLink>
      <!--Les sponsors-->
      <NuxtLink class="window__lien" to="/sponsors">
        <p class="header__text">Les sponsors</p>
      </NuxtLink>
    </div>
    <!--Logo mobile-->
    <div class="header__logo --mobile">
      <NuxtLink class="window__lien" to="/">
        <IconsLogo :color="color" width="80px" height="30px" fontSize="20px" />
      </NuxtLink>
    </div>
    <!--Icon menu mobile-->
    <IconsMenu
      class="header__logo --mobile header__icon"
      :color="color"
      @click="Menu"
    />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: v-bind(backColor);
  padding: rem(20);
  @include large-up {
    padding: rem(20) rem(50);
  }
  @include x-large-up {
    padding: rem(20) rem(100);
  }

  &__icon:hover {
    cursor: pointer;
  }

  &__logo {
    display: none;
    @include large-up {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &.--mobile {
      display: flex;
      align-items: center;
      flex-direction: column;
      @include large-up {
        display: none;
      }
    }
  }

  &__text {
    font-family: $secondary-font-family;
    color: v-bind(color);
    text-transform: uppercase;
    font-size: rem(30);
    @include x-large-up {
      font-size: $desktopsoustitle-font-size;
    }
  }

  &__texts {
    display: none;
    @include large-up {
      display: flex;
      gap: rem(20);
    }
    @include x-large-up {
      display: flex;
      gap: rem(50);
    }
  }

  &__window {
    z-index: 50;
    background-image: url("/martini.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3); // Voile noir avec opacité
      z-index: -1; // Pour le placer derrière le contenu
    }
  }
}

.window {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rem(20);
  }

  &__text {
    font-family: $secondary-font-family;
    text-transform: uppercase;
    color: #fff;
    font-size: rem(50);
  }

  &__content {
    padding: rem(20);
  }

  &__lien {
    text-decoration: none;
  }
}
</style>

<script setup>
import { ref } from "vue";
// Création de props pour rendre paramétrable le header
// color permet de changer la couleur des textes
// backColor permet de changer la couleur du background
defineProps({
  color: String,
  backColor: String,
});

// Variable qui gère l'ouverture du menu mobile
let open = ref(false);

// Fonction qui gère l'ouverture du menu mobile
const Menu = function () {
  open.value = !open.value;
  var body = document.querySelector("body");
  if (open.value == true) {
    // Mémoriser la position de la page
    var scrollPosition = window.scrollY;
    // Ajouter une classe qui désactive le défilement
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
  } else {
    // Récupérer la position de la page mémorisée
    var scrollPosition = parseInt(body.style.top || 0, 10);
    // Retirer la classe qui désactive le défilement
    body.style.position = "";
    body.style.top = "";
    // Faire défiler la page à la position mémorisée
    window.scrollTo(0, scrollPosition);
  }
};
</script>
