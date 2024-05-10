<template>
  <div class="projects__wrap">
      <div class="projects__item" v-for="project in projects" :key="project.id">
        <img class="projects__img" :src="require('../../../assets/images/' + project.img)" :alt="project.img">
        <div class="projects__info">
          <div class="projects__wrap-text">
            <h2 class="projects__title">{{ project.title }}</h2>
            <p class="projects__text">{{ project.text }}</p>
          </div>
          <router-link to="/project-details">
            <img src="../../../assets/images/row_left_blog.svg" alt="row_left_blog">
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPageProjectsNew',
  props: ['projects'],

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

 <style lang="scss" scoped>
@import "../../../scss/vars";

.projects{
  &__wrap {
    margin-top: 60px;
    column-count: 2;
  }
  &__item {
    padding-bottom: 26px;
    display: inline-block;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }
  & img {
      height: 70px;
      width: 70px;
  }
  &__title {
    margin-bottom: 4px;
    color: $blackTextColor;
    font-family: $familyTitle;
    font-size: 25px;
  }
  &__text {
    color: $grayTextColor;
    font-family: $familyText;
    font-size: 22px;
  }
}
 </style>
