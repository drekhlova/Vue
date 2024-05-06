<template>
    <div class="market">
      Выберите валюту:
      <select size="1" name="" id="" v-model="currency">
        <option>₽</option>
        <option>$</option>
        <option>€</option>
      </select>
      <br><br><br>
      <div v-for="product in products" :key="product.id">
        <p>Название: {{ product.name }}</p>
        <p>Цена: {{ formattedPrice(product.price) }}</p>
        <p v-if="product.available">Статус: Available</p>
        <p v-else><span>Статус: Out of stock</span></p>
        <br>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      price: '',
      currency: '',
      products: [
        {
          id: 1,
          name: 'Свитшот',
          price: 3990,
          available: true
        },
        {
          id: 2,
          name: 'Футболка',
          price: 800,
          available: true
        },
        {
          id: 3,
          name: 'Шорты',
          price: 1990,
          available: false
        }
      ]
    }
  },
  computed: {
    formattedPrice () {
      if (this.currency === '₽') {
        return price => `${price} рублей`
      } else if (this.currency === '€') {
        return price => `€ ${(price / 98.47).toFixed(2)}`
      } else {
        return price => `$ ${(price / 91.31).toFixed(2)}`
      }
    }
  },
  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.market {
font-family:Verdana, Geneva, Tahoma, sans-serif;
text-align: center;
color: black;
background-color: gainsboro;
margin-top: 60px;
& p span {
    color: rgb(194, 0, 0);
}
}
</style>
