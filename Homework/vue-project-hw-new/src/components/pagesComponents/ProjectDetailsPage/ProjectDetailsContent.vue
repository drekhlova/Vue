<template>
    <div class="project-details center">
      <div class="project-details__wrap">
        <h2 class="project-details__wrap-title">Minimal Look Bedrooms</h2>
        <p class="project-details__wrap-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
          dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim.
          Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
        </p>
        <p class="project-details__wrap-text">
          In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis
          nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in
          viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
      </div>
      <ProjectDetailsSlider />
    </div>
  </template>

<script>
import ProjectDetailsSlider from './ProjectDetailsSlider.vue'

export default {
  components: { ProjectDetailsSlider },
  name: 'ProjectDetailsContent'
}
</script>

  <style lang="scss" scoped>
  @import "../../../scss/vars";

  .project-details {
    &__wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: calc(($widthSite - 670px) / 2);
      padding-right: calc(($widthSite - 670px) / 2);
      margin-top: 200px;
      width: 658px;
      &-title {
        color: $blackTextColor;
        font-family: $familyTitle;
        font-size: 50px;
        letter-spacing: 2px;
        margin-bottom: 10px;
      }

      &-text {
        color: $grayTextColor;
        font-family: $familyText;
        font-size: 22px;
        margin-bottom: 30px;
      }
    }
  }
  </style>
