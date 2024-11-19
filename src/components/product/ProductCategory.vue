<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
import productData from '../../MOCK_DATA .js'
</script>

<template>
  <primary-template>

    <div class="products">

      <div class="product" v-for="(product, index) in productData.data" :key="index">
        <div class="image-size"><img alt src="../../assets/zip-up.jpg"/></div>
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
      </div>

    </div>

  </primary-template>
</template>


<style scoped>
.products {
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 0 1rem;
  justify-content: space-between;

  .product {
    border: black solid 1px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .product-name {
      font-size: 30px;
      font-weight: normal;
    .product-price {
      font-size: 13px;
      font-weight: lighter;
      .image-size {
        display: flex;
        padding: 0;
        justify-content: center;
      }
      }
    }
  }
}
</style>