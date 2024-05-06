<template>
    <header class="header center">
       <div class="header__logo">
          <img src="../assets/images/Logo.jpg" alt="logo">
          <h1 class="logo__text">Interno</h1>
       </div>
       <div class="header__menu">
          <a class="header__link" href="#">Home</a>
          <a class="header__link" href="#">Project</a>
          <a class="header__link" href="#">Blog</a>
       </div>
    </header>
 </template>

<script>
export default {
  name: 'HeaderComponent',

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

 .header {
    margin-top: 52px;
    margin-bottom: 56px;
    font-family: $familyTitle;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__logo {
       display: flex;
       align-items: center;
       gap: 10px;
    }
    &__logo img {
       width: 34px;
       height: 34px;
    }
    &__logo h1 {
       font-size: 40px;
       color: $blackTextColor;
    }
    &__menu {
       text-align: center;
       font-family: $familyText;
       font-size: 20px;
       display: flex;
       gap: 40px;
    }
    &__menu a:hover {
       color: rgb(205, 162, 116);
       transition: 0.3s;
    }
    &__link {
       color: $blackTextColor;
    }
 }
 </style>
