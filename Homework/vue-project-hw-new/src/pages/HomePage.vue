<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <HomePageBanner></HomePageBanner>
      <HomePageProject></HomePageProject>
      <HomePageCounter></HomePageCounter>
      <HomePageArticles></HomePageArticles>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import HomePageBanner from '../components/pagesComponents/HomePage/HomePageBanner.vue'
import HomePageProject from '../components/pagesComponents/HomePage/HomePageProject.vue'
import HomePageCounter from '../components/pagesComponents/HomePage/HomePageCounter.vue'
import HomePageArticles from '../components/pagesComponents/HomePage/HomePageArticles.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'HomePage',

  components: {
    HeaderComponent,
    HomePageBanner,
    HomePageProject,
    HomePageCounter,
    HomePageArticles,
    FooterComponent
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
  </style>
