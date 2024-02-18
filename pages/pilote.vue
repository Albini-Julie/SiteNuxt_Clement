<template>
  <Header backColor="#BA0000" color="#FFFFFF" />
  <div class="pilote">
    <div class="pilote__presentation">
      <img
        :src="pilote.data.presentation_image2.url"
        alt="image du pilote Clément Albini"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pilote {
  &__presentation {
    background-color: #ba0000;
    width: fit-content;
    padding: rem(0) rem(100);
    padding-top: rem(100);
    padding-bottom: rem(250);
  }
}
</style>

<script setup>
const { client } = usePrismic();
const { data: pilote, error } = await useAsyncData("pilote", () =>
  client.getSingle("pilote")
);
console.log(pilote);
</script>
