<template>
    <section class="latest-post center">
       <h2 class="latest-post__title">Latest Post</h2>
       <div class="latest-post__wrap">
          <img src="../../../assets/images/latest-post-img.jpg" alt="latest-post-img" class="latest-post__img">
          <div class="latest-post__content">
             <h3 class="latest-post__content-title">Low Cost Latest Invented Interior Designing Ideas</h3>
             <p class="latest-post__content-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                dignissim maximus.posuere in.Contrary to popular belief.</p>
             <p class="latest-post__content-text">Lorem Ipsum is not simply random text. It has roots in a piece of
                classica.</p>
             <div class="latest-post__content-wrap">
                <p class="latest-post__content-data">26 December,2022</p>
                <a href="#">
                   <img src="../../../assets/images/row_left_blog.svg" alt="row_left_blog">
               </a>
             </div>
          </div>
       </div>
    </section>
 </template>

<script>
export default {
  name: 'BlogPageLastPost',

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

 .latest-post {
    &__title {
       margin-top: 200px;
       margin-bottom: 26px;
       color:$blackTextColor;
       font-family: $familyTitle;
       font-size: 50px;
    }
    &__wrap {
       border: 1px solid #e7e7e7;
       display: flex;
       gap: 62px;
       padding: 22px;
       border-radius: 62px;
       align-items: center;
    }
    &__img {
       border-radius: 50px;
    }
    &__content {
       width: 488px;
       &-title {
          margin-bottom: 22px;
          color: $blackTextColor;
          font-family: $familyTitle;
          font-size: 25px;
          width: 462px;
       }
       &-text {
          margin-bottom: 40px;
          color: $grayTextColor;
          font-family: $familyText;
          font-size: 22px;
          width: 468px;
       }
       &-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
       }
       &-data {
          color:  $grayTextColor;
          font-family: $familyText;
          font-size: 16px;
       }
    }
 }
 </style>
