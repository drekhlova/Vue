<template>
    <section class="project center">
       <h2 class="project__title">Follow Our Projects</h2>
       <p class="project__text">It is a long established fact that a reader will be distracted by the of readable content
          of page lookings at its layouts points.</p>
       <div class="project__item-wrap">
          <div class="project__item" v-for="project in projectList" :key="project.id">
             <img :src="require('../../../assets/images/' + project.img)" :alt="project.img" :class="project.class">
             <div class="project__item-content">
                <div class="project__text-wrap">
                   <h2 class="project__item-title">{{ project.title }}</h2>
                   <p class="project__item-text">{{ project.text }}</p>
                </div>
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
  name: 'HomePageProject',

  data () {
    return {
      projectList: [
        {
          id: 0,
          img: 'image_1.jpg',
          class: 'project__item-img-1',
          title: 'Modern Kitchan',
          text: 'Decor / Artchitecture'
        },
        {
          id: 1,
          img: 'image_2.jpg',
          class: 'project__item-img-2',
          title: 'Modern Kitchan',
          text: 'Decor / Artchitecture'
        },
        {
          id: 2,
          img: 'image_3.jpg',
          class: 'project__item-img-3',
          title: 'Modern Kitchan',
          text: 'Decor / Artchitecture'
        },
        {
          id: 3,
          img: 'image_4.jpg',
          class: 'project__item-img-4',
          title: 'Modern Kitchan',
          text: 'Decor / Artchitecture'
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

 .project {
    margin-top: 96px;
    margin-bottom: 96px;
    &__title {
       margin-bottom: 8px;
       color: $blackTextColor;
       text-align: center;
       font-family: $familyTitle;
       font-size: 50px;
    }
    &__text {
       padding-left: calc(($widthSite - 737px) / 2);
       padding-right: calc(($widthSite - 737px) / 2);
       color: $grayTextColor;
       text-align: center;
       font-family: $familyText;
       font-size: 22px;
    }
    &__item-wrap {
       margin-top: 92px;
       display: grid;
       column-gap: 100px;
       row-gap: 54px;
       grid-template-columns: repeat(2, 548px);
    }
    &__item-img-1 {
       border-top-right-radius: 80px;
    }
    &__item-img-2 {
       border-top-left-radius: 80px;
    }
    &__item-img-3 {
       border-bottom-right-radius: 80px;
    }
    &__item-img-4 {
       border-bottom-left-radius: 80px;
    }
    &__item-content {
       margin-top: 24px;
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
    &__item-title {
       color: $blackTextColor;
       font-family: $familyTitle;
       font-size: 25px;
    }
    &__item-text {
       color: $grayTextColor;
       font-family: $familyText;
       font-size: 22px;
    }
 }
 </style>
