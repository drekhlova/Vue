<template>
    <div class="blog__items">
       <div v-for="article in filterListArticles" class="blog__item" :key="article.id">
          <div class="blog__item-image">
             <img :src="require('../assets/images/' + article.image)" :alt="article.image">
             <p class="blog__img-text">{{article.imgText}}</p>
          </div>
          <h2 class="blog__item-title">{{article.itemTitle}}</h2>
          <div class="blog__wrap-text">
             <p class="blog__item-text">{{article.itemData}}</p>
             <a href="#">
               <img src="../assets/images/row_left_blog.svg" alt="row_left_blog">
             </a>
          </div>
       </div>
    </div>
 </template>

<script>
export default {
  name: 'ArticlesComponent',

  props: ['quantity'],
  data () {
    return {
      articles: [
        {
          id: 0,
          image: 'blog_image_1.jpg',
          imgText: 'Kitchan Design',
          itemTitle: 'Let’s Get Solution For Building Construction Work',
          itemData: '26 December,2022'
        },
        {
          id: 1,
          image: 'blog_image_2.jpg',
          imgText: 'Living Design',
          itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          itemData: '22 December,2022'
        },
        {
          id: 2,
          image: 'blog_image_3.jpg',
          imgText: 'Interior Design',
          itemTitle: 'Best For Any Office & Business Interior Solution',
          itemData: '25 December,2022'
        },
        {
          id: 3,
          image: 'blog_image_1.jpg',
          imgText: 'Kitchan Design',
          itemTitle: 'Let’s Get Solution For Building Construction Work',
          itemData: '26 December,2022'
        },
        {
          id: 4,
          image: 'blog_image_2.jpg',
          imgText: 'Living Design',
          itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          itemData: '22 December,2022'
        },
        {
          id: 5,
          image: 'blog_image_3.jpg',
          imgText: 'Interior Design',
          itemTitle: 'Best For Any Office & Business Interior Solution',
          itemData: '25 December,2022'
        },
        {
          id: 6,
          image: 'blog_image_1.jpg',
          imgText: 'Kitchan Design',
          itemTitle: 'Let’s Get Solution For Building Construction Work',
          itemData: '26 December,2022'
        },
        {
          id: 7,
          image: 'blog_image_2.jpg',
          imgText: 'Living Design',
          itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
          itemData: '22 December,2022'
        },
        {
          id: 8,
          image: 'blog_image_3.jpg',
          imgText: 'Interior Design',
          itemTitle: 'Best For Any Office & Business Interior Solution',
          itemData: '25 December,2022'
        }
      ]
    }
  },
  mounted () {

  },
  methods: {

  },
  computed: {
    filterListArticles () {
      return this.articles.filter((item) => item.id < this.quantity)
    }
  }
}
</script>

 <style lang="scss" scoped>
@import "../scss/vars";

 .blog {
    margin-top: 96px;
    margin-bottom: 96px;
    &__items {
       display: grid;
       grid-template-columns: repeat(3, 382px);
       gap: 26px;
    }
    &__item {
       border: 1px solid #e7e7e7;
       border-radius: 62px;
       padding: 20px;
       &-select {
          background: #f4f0ec;
       }
    }
    &__item-image {
       position: relative;
       & img {
          border-top-left-radius: 62px;
          border-top-right-radius: 62px;
          margin-bottom: 20px;
       }
       & p {
          position: absolute;
          top: 228px;
          left: 20px;
          border-radius: 8px 8px 8px 0px;
          background: #fff;
          padding: 4px 10px 8px 10px;
          color: $grayTextColor;
          font-family: $familyText;
          font-size: 16px;
       }
    }
    &__item-title {
       margin-bottom: 30px;
       color: $blackTextColor;
       font-family: $familyTitle;
       font-size: 25px;
    }
    &__wrap-text {
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
    &__item-text {
       color: $grayTextColor;
       font-family: $familyText;
       font-size: 16px;
    }
 }
 </style>
