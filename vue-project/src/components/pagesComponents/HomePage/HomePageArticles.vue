<template>
    <section class="blog center">
      <div class="blog__info">
        <h2 class="blog__info-title">Articles & News</h2>
        <p class="blog__info-text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
       <ArticlesComponent :quantity="3"></ArticlesComponent>
    </section>
 </template>

<script>
import ArticlesComponent from '../../ArticlesComponent.vue'
export default {
  name: 'HomePageArticles',
  components: {
    ArticlesComponent
  },

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

 .blog {
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  margin-bottom: 96px;
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &-title {
      font-family: $familyTitle;
      color: $blackTextColor;
      margin-bottom: 24px;
      font-size: 50px;
    }
    &-text {
      font-family: $familyText;
      color: $grayTextColor;
      font-size: 22px;
      width: 810px;
      margin-bottom: 52px;
    }
  }
 }
 </style>
