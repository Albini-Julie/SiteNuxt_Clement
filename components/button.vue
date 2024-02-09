<template>
  <a class="cover__lien" :href="lien" download>
    <div class="button">
      <p class="button__text">{{ text }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.button {
  background-color: v-bind(color);
  padding: rem(10) rem(30);
  width: fit-content;

  &__text {
    color: v-bind(colorText);
    font-family: $primary-font-family;
    font-size: rem(18);
  }
}
</style>

<script setup>
defineProps({
  color: String,
  colorText: String,
  text: String,
  lien: String,
});
</script>
