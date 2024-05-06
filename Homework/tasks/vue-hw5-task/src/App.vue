<template>
  <div id="app">
    <product-details></product-details>
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    ProductDetails
  }
}
</script>

<style lang="scss">

.center {
   max-width: 1230px;
   padding: 0 15px;
   margin: 0 auto;
}

</style>
