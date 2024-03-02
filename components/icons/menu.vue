<template>
  <svg
    viewBox="0 0 28 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 30px; height: 18.54px"
    preserveAspectRatio="none"
  >
    <path d="M1.35919 1.00809H26.3577H1.35919Z" :fill="color"></path>
    <path
      d="M1.35919 1.00809H26.3577"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path d="M1.35919 7.77701H18.4534H1.35919Z" :fill="color"></path>
    <path
      d="M1.35919 7.77701H18.4534"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path d="M1.35919 14.5459H10.5776H1.35919Z" :fill="color"></path>
    <path
      d="M1.35919 14.5459H10.5776"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script setup>
// Création d'un props color permettant de rendre paramétrable la couleur de l'icon
defineProps({
  color: String,
});
</script>
