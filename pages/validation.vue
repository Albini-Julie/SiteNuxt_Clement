<template>
  <div class="contact">
    <!--Header-->
    <Header backColor="#BA0000" color="#FFFFFF" />
    <!--Textes-->
    <div class="contact__texts">
      <h2 class="contact__title">{{ contact.data.contact_titre[0].text }}</h2>
      <p class="contact__text">{{ contact.data.contact_texte[0].text }}</p>
      <!--Validation-->
      <div class="contact__validation">
        <IconsCheck />
        <p>Votre message m'a bien été envoyé</p>
      </div>
    </div>
    <!--Formulaire de contact-->
    <div class="contact__blocFormulaire">
      <form
        action="https://api.web3forms.com/submit"
        method="post"
        class="contact__formulaire"
      >
        <!--Clé pour l'envoie du message-->
        <input
          type="hidden"
          name="access_key"
          value="1e8caabc-07df-458a-8ee8-8c9459f7aa9f"
        />
        <!--Nom-->
        <p class="contact__input-text">Nom</p>
        <input
          class="contact__input"
          type="text"
          id="name"
          name="nom"
          placeholder="Votre nom"
          required
        />
        <!--Prénom-->
        <p class="contact__input-text">Prénom</p>
        <input
          class="contact__input"
          type="text"
          id="firstname"
          placeholder="Votre prénom"
          required
          name="prénom"
        />
        <!--Adresse mail-->
        <p class="contact__input-text">Adresse mail</p>
        <input
          class="contact__input"
          type="text"
          id="email"
          placeholder="Votre adresse mail"
          required
          name="adresse_mail"
        />
        <!--Message-->
        <p class="contact__input-text">Message</p>
        <textarea
          class="contact__input --textarea"
          id="message"
          placeholder="Votre message"
          name="message"
        />
        <!--Redirection-->
        <input
          type="hidden"
          name="redirect"
          value="https://juliealbini.albini.fr/validation"
        />
        <!--Bouton d'envoie-->
        <div class="contact__blocButton">
          <button class="contact__button" type="submit" @click="email">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
  <!--Footer-->
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
      margin-bottom: rem(20);
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
    font-size: rem(14);
    font-family: $primary-font-family;
    @include medium-up {
      font-size: rem(15);
    }
    @include medium-up {
      font-size: rem(17);
    }
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
    justify-content: flex-end;
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
    justify-content: flex-end;
    width: 100%;
    margin-bottom: rem(50);
  }
  &__footer {
    margin-top: rem(-1);
  }
  &__validation {
    background-color: #00993d;
    color: $white;
    padding: rem(10) rem(15);
    border-radius: 10px;
    font-family: $primary-font-family;
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: rem(14);
    margin-top: rem(20);
    @include medium-up {
      font-size: rem(16);
    }
    @include large-up {
      font-size: rem(18);
      padding: rem(15) rem(20);
    }
    @include x-large-up {
      font-size: rem(18);
      padding: rem(15) rem(50);
    }
  }
}
</style>

<script setup>
// Appel du client usePrismic pour avoir accès aux données de la single page contact
const { client } = usePrismic();
const { data: contact, error } = await useAsyncData("contact", () =>
  client.getSingle("contact")
);
console.log(contact);

// Mise en place du SEO
useSeoMeta({
  title: "calb-motorsport validation",
  ogTitle: "calb-motorsport validation",
  description:
    "Prendre contact avec Clément Albini sur le site dédié au rallye calb-motorsport. Validation de l'envoie du message.",
  ogDescription:
    "Prendre contact avec Clément Albini sur le site dédié au rallye calb-motorsport. Validation de l'envoie du message.",
  ogImage: "/logo_calb-motorsport.jpg",
  twitterCard: "summary_large_image",
  keywords:
    "rallye, voiture, contact, albini, franche-comté, rallye-automobile, automobile, sponsors, WRC, validation, message",
});
</script>
