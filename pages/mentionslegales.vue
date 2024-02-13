<template>
  <div class="legales">
    <Header color="#000000" />
    <div class="legales__content">
      <div class="legales__title">
        <h1>{{ legales.data.legales_page_titre[0].text }}</h1>
      </div>
      <div v-for="(i, index) in legales.data.legales_content">
        <h2 class="legales__soustitle">
          {{ i.legales_titre[0].text }}
        </h2>
        <p class="legales__text">
          {{ i.legales_texte[0].text }}
        </p>
      </div>
    </div>
  </div>
  <Footer class="legales__footer" color="#FFFFFF" colorText="#000000" />
</template>

<style lang="scss" scoped>
.legales {
  &__title {
    display: flex;
    justify-content: center;
    font-size: $mobilesoustitle-font-size;
    font-family: $secondary-font-family;
    @include large-up {
      font-size: rem(30);
    }
    @include x-large-up {
      font-size: $desktopsoustitle-font-size;
    }
  }
  &__soustitle {
    font-family: $primary-font-family;
    font-size: $mobilesoustitle-font-size;
    font-weight: 600;
    margin-top: rem(30);
    @include large-up {
      font-size: rem(25);
      font-weight: 300;
    }
    @include x-large-up {
      font-size: rem(30);
      font-weight: 300;
    }
  }
  &__text {
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    @include large-up {
      font-size: $desktopcontent-font-size;
    }
  }
  &__content {
    padding: rem(0) rem(20);
    @include medium-up {
      padding: rem(0) rem(50);
    }
    @include large-up {
      padding: rem(0) rem(100);
    }
    @include x-large-up {
      padding: rem(0) rem(150);
    }
  }
  &__footer {
    margin-top: rem(30);
    @include large-up {
      margin-top: rem(50);
    }
  }
}
</style>

<script setup>
const { client } = usePrismic();
const { data: legales, error } = await useAsyncData("legales", () =>
  client.getSingle("mentions_le")
);
console.log(legales);
</script>
