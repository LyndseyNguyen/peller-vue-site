<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
import productData from '../../MOCK_DATA.js'


</script>

<template>
  <primary-template>

    <div class="products">
      <div class="product" v-for="(product, index) in productData.data" :key="index">
        <div class="product-photo">
          <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
            <img alt :src="'../../src/assets/' + product.photo">
          </router-link>
        </div>
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
      </div>
    </div>

  </primary-template>
</template>


<style scoped>
/* Mobile first */
.products {
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5rem;
  padding: 3rem;
  justify-content: space-between;

  .product {
    //border: 1px solid #ccc;
    //min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .product-name {
      font-size: 22px;
      font-weight: normal;
      //display: flex;
      //flex-direction: column;
    }

    .product-price {
      font-size: 13px;
      font-weight: lighter;
      //display: flex;
      //justify-content: center;
    }

    .product-photo {
      height: fit-content;
      object-fit: scale-down;

      img {
        width: 100%;
      }

    }
  }

  /* Tablet and up */
  @media screen and (width > 700px) {
    /* Remember, this is for .products class */
    flex-direction: row;

    .product {
      max-width: 25%;


      /* Tablet and up */
      @media screen and (width > 900px) {
        /* Remember, this is for .products class */
        flex-direction: column;
        max-width: 300px;
        .product {
          max-width: 25%;
        }
      }
    }
  }
}

</style>