<template>
  <div class="footer">
    <div>
      <!--Logo et routage desktop-->
      <div class="footer__logo --desktop">
        <!--routage desktop-->
        <NuxtLink class="footer__lien --lien" to="/">
          <!--Logo desktop-->
          <IconsLogo
            width="170px"
            height="62px"
            :color="colorText"
            fontSize="30px"
          />
        </NuxtLink>
      </div>
      <!--Logo et routage mobile-->
      <div class="footer__logo --mobile">
        <!--routage mobile-->
        <NuxtLink class="footer__lien --lien" to="/">
          <!--Logo mobile-->
          <IconsLogo
            width="120px"
            height="50px"
            :color="colorText"
            fontSize="25px"
          />
        </NuxtLink>
      </div>
    </div>
    <!--Mentions légales et copyright-->
    <p class="footer__text">
      <a class="footer__lien" href="/mentionslegales">Mentions légales</a>-
      Réalisation privée - Copyright © Clément Albini
    </p>
  </div>
</template>

<style lang="scss" scoped>
// Classe CSS du footer
.footer {
  display: flex;
  align-items: center;
  padding: rem(30) rem(30);
  flex-direction: column;
  background-color: v-bind(color);
  @include large-up {
    padding: rem(30) rem(0);
  }

  // Classe CSS textes du footer
  &__text {
    color: v-bind(colorText);
    font-family: $primary-font-family;
    font-size: rem(15);
    margin: 0px;
    margin-top: rem(30);
    text-align: center;
    @include large-up {
      font-size: rem(20);
    }
  }

  // Classe CSS liens du footer
  &__lien {
    color: v-bind(colorText);
    &.--lien {
      text-decoration: none;
      text-transform: none;
    }
  }

  // Classe CSS logo du footer mobile et desktop
  &__logo {
    &.--mobile {
      display: block;
      @include x-large-up {
        display: none;
      }
    }

    &.--desktop {
      display: none;
      @include x-large-up {
        display: block;
      }
    }
  }
}
</style>

<script setup>
// Création de props permettant de rendre le footer paramétrable
// color permet de modifier la couleur du background du footer
// colorText permet de modifier la couleur des textes du footer
defineProps({
  color: String,
  colorText: String,
});
</script>
