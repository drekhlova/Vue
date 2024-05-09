<template>
    <div class="project-details">
      <carousel :perPage="1" class="carousel">
        <slide v-for="(slide, index) in slides" :key="index" class="slide">
          <img :src="require('../../../assets/images/' + slide.url)" :alt="slide.alt">
        </slide>
      </carousel>
    </div>
  </template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProjectDetailsSlider',

  data () {
    return {

    }
  },

  mounted () {
    this.fetchSlides()
  },

  methods: {
    ...mapActions(['fetchSlides'])
  },
  computed: {
    slides () {
      return this.$store.state.slides
    }
  }
}
</script>

  <style lang="scss" scoped>
  .project-details {
    text-align: center;
  }
  .carousel {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .slide img {
    border-radius: 70px;
  }
  </style>
