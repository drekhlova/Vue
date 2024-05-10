<template>
   <section class="offer center">
      <div class="baner">
         <h2 class="baner__title">Let Your Home Be Unique</h2>
         <p class="baner__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
         <router-link to="/project" class="baner__btn">
            <div class="baner__link">
               <p>Get Started</p>
               <img src="../../../assets/images/row_left.svg" alt="row_left">
            </div>
         </router-link>
      </div>
   </section>
</template>

<script>
export default {
  name: 'HomePageBanner',

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
@import "../../../scss/vars";

 .baner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 56px;
    height: 758px;
    background-image: url("../../../assets/images/Header_Photo.jpg");
    background-repeat: no-repeat;
    border-radius: 70px;
    &__title {
       color: $blackTextColor;
       font-family: $familyTitle;
       font-size: 65px;
       width: 434px;
       margin-left: 52px;
    }
    &__text {
       color: $grayTextColor;
       font-family: $familyText;
       font-size: 22px;
       margin-top: 18px;
       width: 434px;
       margin-left: 52px;
    }
    &__link {
       display: flex;
       justify-content: center;
       align-items: center;
       width: 220px;
       background-color: $blackTextColor;
       border-radius: 18px;
       gap: 10px;
       padding: 26px 0;
       margin-top: 20px;
       margin-left: 52px;
       & p {
          color: rgb(255, 255, 255);
          font-family: $familyText;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 2%;
       }
    }
 }
 </style>
