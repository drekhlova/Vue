<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <BlogPageBanner></BlogPageBanner>
      <BlogPageLastPost></BlogPageLastPost>
      <BlogPageBlogs></BlogPageBlogs>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BlogPageBanner from '../components/pagesComponents/BlogPage/BlogPageBanner.vue'
import BlogPageLastPost from '../components/pagesComponents/BlogPage/BlogPageLastPost.vue'
import BlogPageBlogs from '../components/pagesComponents/BlogPage/BlogPageBlogs.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'BlogPage',

  components: {
    HeaderComponent,
    BlogPageBanner,
    BlogPageLastPost,
    BlogPageBlogs,
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
