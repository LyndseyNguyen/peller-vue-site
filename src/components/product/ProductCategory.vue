<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
import productData from '../../MOCK_DATA .js'


</script>

<template>
  <primary-template>

    <div class="products">
      <div class="product" v-for="(product, index) in productData.data" :key="index">
        <div class="product-photo"> <img alt :src="'../../src/assets/' + product.photo"></div>
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
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .product-name {
      font-size: 25px;
      font-weight: normal;
      display: flex;
      flex-direction: column;
    .product-price {
      font-size: 13px;
      font-weight: lighter;
      display: flex;
      justify-content: center;

      .product-photo {
        height: fit-content;
        object-fit: scale-down;

        }
      }
    }
  }
}
</style>