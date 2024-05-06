<template>
    <section class="banner center">
       <div class="banner__intro">
          <h1 class="banner__intro-title">Articles & News</h1>
          <p class="banner__intro-text">Home / Blog</p>
       </div>
    </section>
 </template>

<script>
export default {
  name: 'BlogPageBaner',

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

 .banner {
    background-image: url("../../../assets/images/banner_top.jpg");
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &__intro {
       text-align: center;
       background: #fff;
       padding: 40px 78px;
       border-top-left-radius: 36px;
       border-top-right-radius: 36px;
       &-title {
          color: $blackTextColor;
          font-family: $familyTitle;
          font-size: 50px;
       }
       &-text {
          color: $grayTextColor;
          font-family: $familyText;
          font-size: 22px;
       }
    }
 }
 </style>
