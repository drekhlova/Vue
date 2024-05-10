<template>
    <div>
      <HeaderComponent />
      <div class="page_not_found">
        <div class="page_not_found__content">
          <h1 class="page_not_found__title">404</h1>
          <p class="page_not_found__text">We are sorry, the page you requested cannot be found.</p>
          <router-link class="page_not_found__button" to="/">
            <div class="page_not_found__button-text">
              <p>Go to Homepage</p>
              <img src="@/assets/images/row_left.svg" alt="row_left">
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script>

import HeaderComponent from './../components/HeaderComponent.vue'

export default {
  components: { HeaderComponent },
  name: 'PageNotFound'
}
</script>

  <style lang="scss" scoped>
  @import "@/scss/vars";

  .page_not_found {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      color: #CDA274;
      font-family: $familyTitle;
      font-size: 250px;
    }

    &__text {
      color: $blackTextColor;
      font-family: $familyText;
      font-size: 35px;
      margin-bottom: 60px;
    }

    &__button-text {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 200px;
      padding: 26px 0;
      background-color: $blackTextColor;
      border-radius: 18px;

      & p {
        color: #fff;
        font-family: $familyText;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  </style>
