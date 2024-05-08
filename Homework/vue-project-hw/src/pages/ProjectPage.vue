<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <ProjectPageBaner></ProjectPageBaner>
      <ProjectPageContent></ProjectPageContent>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectPageBaner from '../components/pagesComponents/ProjectPage/ProjectPageBaner.vue'
import ProjectPageContent from '../components/pagesComponents/ProjectPage/ProjectPageContent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'ProjectPage',

  components: {
    HeaderComponent,
    ProjectPageBaner,
    ProjectPageContent,
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
