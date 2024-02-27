<template>
  <div class="bloc" :class="{ bordure: bord }">
    <IconsRubis class="bloc__icons" v-if="titre === 'Marque'" />
    <IconsRoue class="bloc__icons" v-if="titre === 'Roues'" />
    <IconsMoteur class="bloc__icons" v-if="titre === 'Moteur'" />
    <IconsCalendrier class="bloc__icons" v-if="titre === 'Année'" />
    <IconsParametres class="bloc__icons" v-if="titre === 'Boîte de vitesses'" />
    <IconsCompteur class="bloc__icons" v-if="titre === 'Puissance'" />
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
  &__icons {
    @include x-large-up {
    }
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
