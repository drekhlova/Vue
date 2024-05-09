<template>
    <section class="counter center">
      <div class="counter__info">
        <h2 class="counter__title">12</h2>
        <p class="counter__text">Years Of Experiance</p>
      </div>
      <div class="counter__vl"></div>
      <div class="counter__info">
        <h2 class="counter__title">85</h2>
        <p class="counter__text">Success Project</p>
      </div>
      <div class="counter__vl"></div>
      <div class="counter__info">
        <h2 class="counter__title">15</h2>
        <p class="counter__text">Active Project</p>
      </div>
      <div class="counter__vl"></div>
      <div class="counter__info">
        <h2 class="counter__title">95</h2>
        <p class="counter__text">Happy Customers</p>
      </div>
    </section>
 </template>

<script>
export default {
  name: 'HomePageCounter',

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
@import "../../../scss/vars";

 .counter {
  background-color: rgb(244, 240, 236);
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 150px;
  padding-bottom: 150px;
  &__title {
    color: rgb(205, 162, 116);
    font-size: 85px;
    margin-bottom: 16px;
  }
  &__text {
    color: $grayTextColor;
    font-family: "Jost";
    font-size: 22px;
    width: 192px;
  }
  &__vl {
  border: 1px solid rgb(205, 162, 116);
  height: 130px;
  margin-left: 74px;
  margin-right: 74px;
  }
}
 </style>
