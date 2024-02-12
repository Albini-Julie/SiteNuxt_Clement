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
defineProps({
  color: String,
  colorText: String,
  text: String,
  route: String,
  fleche: Boolean,
  lien: String,
});
</script>
