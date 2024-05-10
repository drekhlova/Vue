<template>
  <div id="app">
    <router-view />
  </div>
</template>

<!-- <template>
  <div id="app">
    <HomePage></HomePage>

    <BlogPage></BlogPage>

    <BlogDetailsPage></BlogDetailsPage>

    <ProjectPage></ProjectPage>

    <ProjectDetailsPage></ProjectDetailsPage>
  </div>
</template>

<script>

import HomePage from './pages/HomePage.vue'

import BlogPage from './pages/BlogPage.vue'

import BlogDetailsPage from './pages/BlogDetailsPage.vue'

import ProjectPage from './pages/ProjectPage.vue'

import ProjectDetailsPage from './pages/ProjectDetailsPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,

    BlogPage,

    BlogDetailsPage,

    ProjectPage,

    ProjectDetailsPage

  }
}
</script> -->

<style lang="scss">
@import "scss/vars";

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
</style>
