<template>
  <div class="contact">
    <Header backColor="#BA0000" color="#FFFFFF" />
    <!--Textes-->
    <div class="contact__texts">
      <h2 class="contact__title">{{ contact.data.contact_titre[0].text }}</h2>
      <p class="contact__text">{{ contact.data.contact_texte[0].text }}</p>
    </div>
    <!--Formulaire de contact-->
    <div class="contact__blocFormulaire">
      <form class="contact__formulaire">
        <p class="contact__input-text">Nom</p>
        <input
          class="contact__input"
          type="text"
          id="name"
          placeholder="Votre nom"
          required
        />
        <p class="contact__input-text">Prénom</p>
        <input
          class="contact__input"
          type="text"
          id="firstname"
          placeholder="Votre prénom"
          required
        />
        <p class="contact__input-text">Adresse mail</p>
        <input
          class="contact__input"
          type="text"
          id="mail"
          placeholder="Votre adresse mail"
          required
        />
        <p class="contact__input-text">Message</p>
        <textarea
          class="contact__input --textarea"
          id="message"
          placeholder="Votre message"
        />
        <div class="contact__blocButton">
          <button class="contact__button" type="submit" @click="email">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer class="contact__footer" color="#BA0000" colorText="#FFFFFF" />
</template>

<style scoped lang="scss">
.contact {
  background-color: $red;
  &__texts {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__title {
    font-family: $secondary-font-family;
    color: $white;
    text-align: center;
    font-size: rem(35);
    margin: 0px;
    margin-top: rem(60);
    margin-bottom: rem(20);
    padding: rem(0) rem(20);
    @include medium-up {
      font-size: rem(38);
    }
    @include large-up {
      font-size: rem(45);
    }
    @include x-large-up {
      font-size: rem(60);
    }
  }
  &__text {
    font-family: $primary-font-family;
    color: $white;
    text-align: center;
    font-size: $mobilecontent-font-size;
    padding: rem(0) rem(20);
    @include medium-up {
      font-size: rem(16);
    }
    @include large-up {
      font-size: rem(18);
    }
    @include x-large-up {
      font-size: rem(22);
      margin-bottom: rem(50);
    }
  }
  &__formulaire {
    display: flex;
    flex-direction: column;
    width: 80%;
    @include large-up {
      width: 75%;
    }
    @include x-large-up {
      width: 60%;
    }
  }
  &__blocFormulaire {
    display: flex;
    justify-content: center;
  }
  &__input {
    border: solid 1px $white;
    background-color: $red;
    height: rem(25);
    color: $white;
    padding: rem(10);
    &::placeholder {
      color: #fff; // Couleur de votre choix
      opacity: 60%;
      font-family: $primary-font-family;
      @include medium-up {
        font-size: rem(14);
      }
      @include large-up {
        font-size: rem(16);
      }
      @include x-large-up {
        font-size: rem(18);
      }
    }
    &:focus {
      outline: none;
    }
    &.--textarea {
      height: rem(150);
    }
  }
  &__input-text {
    font-family: $secondary-font-family;
    color: $white;
    font-size: rem(20);
    margin: 0px;
    margin-top: rem(30);
    margin-bottom: rem(10);
    @include medium-up {
      font-size: rem(23);
    }
    @include large-up {
      font-size: rem(25);
    }
    @include x-large-up {
      font-size: rem(30);
    }
  }
  &__button {
    background-color: $red;
    border: solid 1px $white;
    width: fit-content;
    padding: rem(10) rem(60);
    display: flex;
    justify-content: end;
    color: $white;
    font-weight: 500;
    font-family: $primary-font-family;
    margin-top: rem(20);
    cursor: pointer;
    font-weight: 500;
    @include medium-up {
      font-size: rem(16);
    }
    @include large-up {
      font-size: rem(18);
      padding: rem(15) rem(65);
    }
    @include x-large-up {
      font-size: rem(20);
      padding: rem(20) rem(70);
    }
  }
  &__blocButton {
    display: flex;
    justify-content: end;
    width: 100%;
    margin-bottom: rem(50);
  }
  &__footer {
    margin-top: rem(-1);
  }
}
</style>

<script setup>
const { client } = usePrismic();
const { data: contact, error } = await useAsyncData("contact", () =>
  client.getSingle("contact")
);
console.log(contact);
</script>
