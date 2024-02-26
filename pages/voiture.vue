<template>
  <Header backColor="#000000" color="#FFFFFF" />
  <div class="voiture">
    <!--Caroussel-->
    <!--Items du caroussel-->
    <div class="voiture__caroussel">
      <input type="radio" name="slider" id="item-1" checked />
      <input type="radio" name="slider" id="item-2" />
      <input type="radio" name="slider" id="item-3" />
      <div class="cards">
        <label
          v-for="(i, index) in voiture.data.voiture_caroussel"
          class="card"
          :for="'item-' + (index + 1)"
          :id="'song-' + (index + 1)"
        >
          <img :src="i.caroussel_image.url" alt="song" />
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.voiture {
  &__caroussel {
    background-color: $black;
    height: 80vh;
    padding-top: rem(80);
    margin-top: -1px;
  }
}

input[type="radio"] {
  display: none;
}
.card {
  position: absolute;
  width: 60%;
  height: 80%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
}

.container {
  width: 100%;
  max-width: 800px;
  max-height: 600px;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cards {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

#item-1:checked ~ .cards #song-3,
#item-2:checked ~ .cards #song-1,
#item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-2,
#item-2:checked ~ .cards #song-3,
#item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-1,
#item-2:checked ~ .cards #song-2,
#item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;

  img {
    box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
  }
}
</style>

<script setup>
const { client } = usePrismic();
const { data: voiture, error } = await useAsyncData("voiture", () =>
  client.getSingle("voiture")
);
console.log(voiture);
</script>
