<template>
    <section class="blog center">
       <h2 class="blog__title-left">Articles & News</h2>
       <ArticlesComponent :quantity="6" :visible="true"></ArticlesComponent>
       <!-- <div class="pagination">
          <div class="pagination__wrap">
            <router-link to="/blog" class="pagination__number">
              <p class="pagination__number-text">01</p>
            </router-link>
            <router-link to="/blog" class="pagination__number">
              <p class="pagination__number-text">02</p>
            </router-link>
            <router-link to="/blog" class="pagination__number">
              <p class="pagination__number-text">03</p>
            </router-link>
            <router-link to="/blog">
                <svg class="pagination__svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52"
                   viewBox="0 0 53 52" fill="none">
                   <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                   <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </router-link>
          </div>
       </div> -->
    </section>
 </template>

<script>
import ArticlesComponent from '../../ArticlesComponent.vue'

export default {
  name: 'BlogPageBlogs',

  components: {
    ArticlesComponent
  },

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
        }
      ]
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

 .blog__title-left {
   text-align: left;
   margin-top: 150px;
   margin-bottom: 30px;
   color: $blackTextColor;
   font-family: $familyTitle;
   font-size: 50px;
 }
//  .pagination {
//     margin-top: 50px;
//     margin-bottom: 200px;
//     display: flex;
//     justify-content: center;
//     &__wrap {
//        display: flex;
//        gap: 20px;
//     }
//     &__number {
//        display: flex;
//        justify-content: center;
//        align-items: center;
//        flex-wrap: nowrap;
//        border: 1px #cda274 solid;
//        width: 52px;
//        height: 52px;
//        border-radius: 52px;
//        &-text {
//           color: $grayTextColor;
//           font-family: $familyText;
//           font-size: 16px;
//           font-weight: $font-500;
//        }
//        &:hover {
//           background: #f4f0ec;
//           border: none;
//           width: 54px;
//           height: 54px;
//        }
//     }
//     &__svg:hover {
//        fill: #f4f0ec;
//        & circle {
//           stroke: none;
//        }
//     }
//  }
 </style>
