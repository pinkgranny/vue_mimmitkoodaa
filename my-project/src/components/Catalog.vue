<template>
  <div class="catalog">
    <h1>{{ msg }}</h1>
    <div>
      <div v-for="product in products" class="product-wrapper">
        <div class="product-image"><img v-bind:src="'https://magento2.demo.ambientia.fi/media/catalog/product/' + product.custom_attributes[2].value"></div>
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}€</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  data () {
    return {
      msg: 'Welcome to my awesome web shop!',
      products: []
  }
},
  created: function() {
    this.$http.get('https://magento2.demo.ambientia.fi/json').then(function (response) {
      console.log(response.data)
      this.products = response.data.items
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
.product-wrapper {
  display: inline-block;
  width: 300px;
  height: 450px;
  border: 1 px indigo solid;
  margin: 20px;
  padding: 10px;
}
.product-image img {
  width: 100%;
}
.product-name {
  font-size: large;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>
