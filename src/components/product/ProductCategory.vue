<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
import productData from '../../MOCK_DATA .js'
</script>

<template>
  <primary-template>

    <div class="products">

      <div class="product" v-for="(product, index) in productData.data" :key="index">
        product image here!!
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
      </div>

    </div>

  </primary-template>
</template>
<div class="logo">

</div>

<style scoped>
.products {
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 0 1rem;
  justify-content: space-between;

  .product {
    border: 1px solid black;
    font-weight: bolder;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>