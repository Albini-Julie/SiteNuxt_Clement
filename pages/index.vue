<template>
  <h1 class="test">Bonjour</h1>
  <h1>{{ accueil.data.accueil_titre[0].text }}</h1>
</template>

<script setup>
const { client } = usePrismic();
const { data: accueil, error } = await useAsyncData("accueil", () =>
  client.getSingle("pageaccueil")
);
console.log(accueil);
</script>

<style lang="scss" scoped>
.test {
  color: $primary-color;
}
</style>
