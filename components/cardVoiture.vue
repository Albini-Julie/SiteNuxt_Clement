<template>
  <div class="bloc" :class="{ bordure: bord }">
    <IconsRubis v-if="icon === 'rubis'" />
    <IconsRoue v-if="icon === 'roue'" />
    <IconsMoteur v-if="icon === 'moteur'" />
    <IconsCalendrier v-if="icon === 'calendrier'" />
    <IconsParametres v-if="icon === 'parametres'" />
    <IconsCompteur v-if="icon === 'compteur'" />
    <h3 class="bloc__title">{{ titre }}</h3>
    <h3 class="bloc__text">{{ text }}</h3>
  </div>
</template>

<style scoped lang="scss">
.bordure {
  border: solid 1px #ba0000;
}
.bloc {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: v-bind(backColor);
  width: 120px;
  height: 120px;
  padding-left: rem(30);
  padding-right: rem(30);
  padding-top: rem(20);
  padding-bottom: rem(20);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__text {
    color: v-bind(color);
    font-weight: 200;
    font-size: rem(20);
    font-family: $primary-font-family;
    margin: 0px;
    text-align: center;
  }
  &__title {
    color: v-bind(color);
    font-weight: 200;
    font-size: rem(18);
    font-family: $primary-font-family;
    margin: 0px;
    margin-top: rem(20);
    margin-bottom: rem(10);
    text-align: center;
  }
}
</style>

<script setup>
defineProps({
  backColor: String,
  color: String,
  icon: String,
  titre: String,
  text: String,
  bord: Boolean,
});
</script>
