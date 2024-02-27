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
        <!--Items-->
        <label
          v-for="(i, index) in voiture.data.voiture_caroussel"
          class="card"
          :for="'item-' + (index + 1)"
          :id="'song-' + (index + 1)"
        >
          <img :src="i.caroussel_image.url" alt="song" />
        </label>
      </div>
      <!--Infos voiture-->
      <div class="voiture__descri">
        <div class="grid-container">
          <div
            class="voiture__grille"
            v-for="(i, index) in voiture.data.voiture_caracteristiques"
          >
            <cardVoiture
              v-if="index % 2 == 0"
              backColor="#BA0000"
              color="#FFFFFF"
              :titre="i.caracteristique_titre[0].text"
              :text="i.caracteristique_texte[0].text"
              icon="rubis"
            />
            <cardVoiture
              v-if="index % 2 == 1"
              backColor="#FFFFFF"
              color="#BA0000"
              :titre="i.caracteristique_titre[0].text"
              :text="i.caracteristique_texte[0].text"
              icon="rubis"
              bord=""
            />
          </div>
        </div>
      </div>
      <!--Choix voiture-->
      <div class="voiture__choix">
        <div class="choix__textes">
          <h2 class="choix__title">{{ voiture.data.choix_titre[0].text }}</h2>
          <div class="choix__content">
            <p>{{ voiture.data.choix_texte1[0].text }}</p>
            <p>{{ voiture.data.choix_texte2[0].text }}</p>
          </div>
        </div>
        <div
          class="choix__image"
          :style="{
            backgroundImage: `url(${voiture.data.sponsoring_image.url})`,
          }"
        >
          <Button
            class="choix__bouton"
            color="#BA0000"
            colorText="#FFFFFF"
            :text="voiture.data.sponsoring_bouton[0].text"
            :lien="voiture.data.sponsoring_lien_dossier.url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 10px;
  @include medium-up {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 80%;
  }
  @include large-up {
    width: 65%;
  }
  @include x-large-up {
    width: 45%;
  }
}
.voiture {
  &__caroussel {
    background-color: $black;
    height: 80vh;
    padding-top: rem(80);
    padding-bottom: rem(50);
    margin-top: -1px;
  }
  &__grille {
    margin-top: rem(50);
    display: flex;
    justify-content: center;
  }
  &__descri {
    margin-top: rem(100);
    margin-bottom: rem(100);
    @include medium-up {
      display: flex;
      justify-content: center;
      @include large-up {
        margin-top: rem(150);
        margin-bottom: rem(150);
      }
    }
  }
  &__choix {
    @include large-up {
      display: flex;
    }
  }
}

.choix {
  &__title {
    color: $white;
    width: 80%;
    padding-left: rem(30);
  }
  &__content {
    border-left: solid 2px $red;
    color: $white;
    font-family: $primary-font-family;
    font-size: $mobilecontent-font-size;
    margin-left: rem(20);
    padding-left: rem(10);
    padding-right: rem(20);
    @include medium-up {
      width: 80%;
    }
    @include large-up {
      width: fit-content;
    }
  }
  &__image {
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    @include large-up {
      width: 50%;
    }
    @include x-large-up {
      width: 60%;
    }
  }

  &__textes {
    padding-top: rem(100);
    padding-bottom: rem(100);
    background-color: $black;
    font-size: rem(30);
    font-family: $secondary-font-family;
    padding-top: rem(60);
    padding-bottom: rem(60);
    @include large-up {
      width: 50%;
    }
    @include x-large-up {
      width: 40%;
    }
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
