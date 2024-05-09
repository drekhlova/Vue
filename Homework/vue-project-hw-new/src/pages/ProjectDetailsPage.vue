<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <ProjectDetailsBanner></ProjectDetailsBanner>
      <ProjectDetailsContent></ProjectDetailsContent>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectDetailsBanner from '@/components/pagesComponents/ProjectDetailsPage/ProjectDetailsBanner.vue'
import ProjectDetailsContent from '../components/pagesComponents/ProjectDetailsPage/ProjectDetailsContent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: { HeaderComponent, FooterComponent, ProjectDetailsBanner, ProjectDetailsContent },
  name: 'ProjectDetailsPage',

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
