<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <ProjectDetailsBaner></ProjectDetailsBaner>
      <ProjectDetailsContent></ProjectDetailsContent>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectDetailsBaner from '@/components/pagesComponents/ProjectDetailsPage/ProjectDetailsBaner.vue'
import ProjectDetailsContent from '../components/pagesComponents/ProjectDetailsPage/ProjectDetailsContent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: { HeaderComponent, FooterComponent, ProjectDetailsBaner, ProjectDetailsContent },
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
