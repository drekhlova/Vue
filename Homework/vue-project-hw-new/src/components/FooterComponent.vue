<template>
<footer class="footer center">
      <div class="brand">
        <div class="brand__content">
          <img class="brand__logo" src="../assets/images/Logo.jpg" alt="Logo" />
          <h1><a href="#">Interno</a></h1>
        </div>
        <p class="brand__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
      </div>
      <div class="pages">
        <h2 class="pages__title">Pages</h2>
        <router-link class="pages__menu" to="/">Home</router-link>
        <router-link class="pages__menu" to="/Project">Project</router-link>
        <router-link class="pages__menu" to="/Blog">Blog</router-link>
        <!-- <a class="pages__menu" href="#">Home </a>
        <a class="pages__menu" href="#">Project </a>
        <a class="pages__menu" href="#">Blog</a> -->
      </div>
      <div class="contact">
        <h2 class="contact__title">Contact</h2>
        <p class="contact__address">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="contact__email">contact@interno.com</p>
        <p class="contact__phone">(123) 456 - 7890</p>
      </div>
    </footer>
 </template>

<script>
export default {
  name: 'FooterComponent',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

 <style lang="scss" scoped>
@import "../scss/vars";

 .footer {
  display: flex;
  justify-content: center;
  .brand {
    display: flex;
    flex-direction: column;
    padding-right: 100px;
    padding-bottom: 18px;

    &__content {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 26px;
    }

    &__logo {
      width: 34px;
      height: 34px;
    }

    & a {
      font-family: $familyTitle;
      color: $blackTextColor;
      font-size: 40px;
    }

    &__text {
      font-family: $familyText;
      color: $grayTextColor;
      font-size: 22px;
      width: 392px;
    }
  }
  .pages {
    display: flex;
    flex-direction: column;
    padding-right: 380px;
    gap: 30px;

    &__title {
      font-family: $familyTitle;
      color: $blackTextColor;
      font-size: 25px;
    }

    &__menu {
      font-family: $familyText;
      color: $grayTextColor;
      font-size: 22px;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__title {
      font-family: $familyTitle;
      color: $blackTextColor;
      font-size: 25px;
    }

    &__address {
      font-family: $familyText;
      color: $grayTextColor;
      font-size: 22px;
      width: 258px;
    }

    &__email {
      font-family: $familyText;
      color: $grayTextColor;
      font-size: 22px;
    }

    &__phone {
      font-family: $familyText;
      color: $grayTextColor;
      font-size: 22px;
      padding-bottom: 134px;
    }
  }
}
 </style>
