<template>
  <!--Logo-->
  <svg
    viewBox="0 0 160 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="logo"
    preserveAspectRatio="none"
  >
    <path
      d="M30.8416 29.471C24.3173 29.471 19.0084 34.778 19.0084 41.3023C19.0084 47.8286 24.3154 53.1378 30.8416 53.1378C37.3637 53.1378 42.673 47.8309 42.673 41.3023C42.673 34.7799 37.3637 29.471 30.8416 29.471ZM30.8416 46.5626C27.9405 46.5626 25.5833 44.2035 25.5833 41.302C25.5833 38.405 27.9401 36.0459 30.8416 36.0459C33.7409 36.0459 36.0977 38.405 36.0977 41.302C36.0977 44.2012 33.7409 46.5626 30.8416 46.5626Z"
      :fill="color"
    ></path>
    <path
      d="M129.129 31.6065C123.194 31.6065 118.367 36.4356 118.367 42.3688C118.367 48.3019 123.196 53.1356 129.129 53.1356C135.063 53.1356 139.892 48.3023 139.892 42.3688C139.892 36.4352 135.065 31.6065 129.129 31.6065ZM129.129 46.5626C126.817 46.5626 124.94 44.6814 124.94 42.3688C124.94 40.0607 126.817 38.1795 129.129 38.1795C131.438 38.1795 133.319 40.0607 133.319 42.3688C133.319 44.6814 131.438 46.5626 129.129 46.5626Z"
      :fill="color"
    ></path>
    <path
      d="M113.31 44.8499H45.811V51.4251H113.31V44.8499Z"
      :fill="color"
    ></path>
    <path
      d="M157.853 25.4719L154.739 22.3623L148.793 19.5186L108.512 15.7011L87.8685 0.862183H70.5093L48.4601 4.61346L22.7483 16.4953L16.6137 14.5347H0V19.8858L5.11005 27.5522L0 31.0134V42.6809L4.59224 47.2709L9.23961 42.6254L6.57072 39.9565V34.5035L14.2014 29.338L8.71305 21.1077H15.5891L23.1821 23.5375L50.4253 10.9473L71.0647 7.43746H85.7505L106.122 22.0768L147.011 25.9498L150.889 27.8066L152.053 28.9661L153.319 33.0759L152.838 37.3804L149.014 43.1257L154.48 46.7751L159.197 39.6976L160 32.441L157.853 25.4719Z"
      :fill="color"
    ></path>
  </svg>
  <!--Texte-->
  <p class="text">CA</p>
</template>

<style lang="scss" scoped>
// Modifier le texte du logo
.text {
  width: v-bind(width);
  font-size: v-bind(fontSize);
  text-align: center;
  color: v-bind(color);
  font-family: Montserrat;
  font-weight: 600;
  margin: 0px;
  margin-top: 10px;
}

// Modifier la taille du logo
.logo {
  width: v-bind(width);
  height: v-bind(height);
}
</style>

<script setup>
// Mise en place de props pour paramétrer le logo :
// color permet de choisir la couleur du logo
// width permet de choisir la taille du logo
// height permet de choisir la hauteur du logo
// fontSize permet de choisir la taille de l'écriture du logo
defineProps({
  color: String,
  width: String,
  height: String,
  fontSize: String,
});
</script>
