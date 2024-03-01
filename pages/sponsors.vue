<template>
  <Header backColor="#FFF" color="#000" />
  <!-- Logos sponsors en grille -->
  <div class="sponsors__grid">
    <div
      class="sponsors__content"
      v-for="sponsor in sponsors.data.sponsors_logos"
      :key="sponsor.id"
    >
      <img :src="sponsor.sponsors_logo.url" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsors__grid {
  margin-top: rem(80);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  @include medium-up {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @include large-up {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @include x-large-up {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.sponsors__content img {
  max-width: 100%;
  height: auto;
}
</style>

<script setup>
const { client } = usePrismic();
const { data: sponsors, error } = await useAsyncData("sponsors", () =>
  client.getSingle("sponsors")
);
console.log(sponsors);
</script>
