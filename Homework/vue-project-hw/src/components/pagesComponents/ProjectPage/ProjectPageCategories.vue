<template>
    <div class="categoreis">
      <div class="categoreis__buttons">
        <div :class="{ active: categories.activCategories }" class="categoreis__buttons-item"
          v-for="categories in categoriesList" :key="categories.id" @click="isActive(categories)">{{
            categories.nameCategories }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectPageCategories',

  data () {
    return {
      categoriesList: [
        {
          id: 1,
          nameCategories: 'Bathroom',
          activCategories: false
        },
        {
          id: 2,
          nameCategories: 'Bed Room',
          activCategories: true
        },
        {
          id: 3,
          nameCategories: 'Kitchan',
          activCategories: false
        },
        {
          id: 4,
          nameCategories: 'Living Area',
          activCategories: false
        }
      ]
    }
  },

  methods: {
    isActive (data) {
      this.categoriesList.forEach(element => {
        element.activCategories = false
      })
      this.categoriesList[data.id - 1].activCategories = true
      this.$emit('activCategories', data)
      return this.categoriesList[data.id - 1].activCategories
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../../../scss/vars";

.categoreis {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: rgb(205, 162, 116);
  margin-top: 200px;
  &__buttons {
    display: flex;
    justify-content: space-evenly;
    border-radius: 18px;
    border: 1px solid rgb(205, 162, 116);
    background: white;
  }
  &__buttons-item {
    cursor: pointer;
    background: white;
    padding: 26px 66px;
    border: none;
    border-radius: 18px;
    font-family: $familyText;
    font-size: 18px;
    font-weight: 600;
    color: $blackTextColor;
    letter-spacing: 2%;
    &:hover {
      background: rgb(205, 162, 116);
      color: white;
    }
  }
}
.active {
  color: #FFF;
  border-radius: 18px;
  background: #CDA274;
}
</style>
