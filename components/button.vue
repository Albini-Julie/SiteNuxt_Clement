<template>
  <NuxtLink class="button__lien" :to="route">
    <a class="button__lien" :href="lien" download>
      <div class="button">
        <p class="button__text">{{ text }}</p>
        <IconsFleche v-if="fleche" />
      </div>
    </a>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
  background-color: v-bind(color);
  padding: rem(10) rem(30);
  width: fit-content;
  display: flex;
  align-items: center;
  gap: rem(20);

  &:hover {
    animation: pulse 1s;
    box-shadow: 0 0 0 2em transparent;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 v-bind(color);
      }
    }
  }

  &__text {
    color: v-bind(colorText);
    font-family: $primary-font-family;
    font-size: rem(18);
    @include x-large-up {
      font-size: rem(20);
    }
  }

  &__lien {
    text-decoration: none;
    text-transform: none;
  }
}
</style>

<script setup>
// Création de props permettant de rendre le bouton paramétrable :
// color permet de modifier la couleur de fond du bouton
// coloText permet de modifier la couleur de texte du bouton
// text permet d'entrer le texte du bouton
// route permet d'entrer la route de redirection au clic sur le bouton
// fleche permet d'avoir ou non un icon fleche dans le bouton
// lien permet d'entrer la chemin de téléchargement du fichier au clic sur le bouton
defineProps({
  color: String,
  colorText: String,
  text: String,
  route: String,
  fleche: Boolean,
  lien: String,
});
</script>
