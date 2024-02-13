<template>
  <div class="footer">
    <div>
      <div class="footer__logo --desktop">
        <NuxtLink class="footer__lien --lien" to="/">
          <IconsLogo
            width="230px"
            height="92px"
            :color="colorText"
            fontSize="40px"
          />
        </NuxtLink>
      </div>
      <div class="footer__logo --mobile">
        <NuxtLink class="footer__lien --lien" to="/">
          <IconsLogo
            width="120px"
            height="50px"
            :color="colorText"
            fontSize="25px"
          />
        </NuxtLink>
      </div>
    </div>
    <p class="footer__text">
      <a class="footer__lien" href="/mentionslegales">Mentions légales</a>-
      Réalisation privée - Copyright © Clément Albini
    </p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  padding: rem(30) rem(30);
  flex-direction: column;
  background-color: v-bind(color);
  @include large-up {
    padding: rem(30) rem(0);
  }

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

  &__lien {
    color: v-bind(colorText);
    &.--lien {
      text-decoration: none;
      text-transform: none;
    }
  }

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
defineProps({
  color: String,
  colorText: String,
});
</script>
