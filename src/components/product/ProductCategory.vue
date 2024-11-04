<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
import productData from '../../MOCK_DATA.js'
</script>

<template>
  <primary-template>
    <h1>This is where I'll show all the products I sell!</h1>

    <div class="products">

      <div class="product" v-for="(product, index) in productData.data" :key="index">
        {{ product.first_name }} {{ product.last_name }}
      </div>

    </div>

  </primary-template>
</template>
<div class="logo">


</div>

<style scoped>
.products {
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .product {
    border: 1px solid #ddd;
    font-weight: bold;
    min-width: 300px;
  }
}
</style>