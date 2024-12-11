<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted} from "vue";
import productData from '../../MOCK_DATA.js'

const products = productData.data
const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const product = products.filter(product => product.id === paramId)[0]

onMounted(() => {
  if (!product) {
    router.push({
      name: 'Home'
    })
  }
})
import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <section class="main">
      <!--      <pre>Workers Jacket</pre>-->
      <div class="images" v-if="product.extraPhotos">
        <img v-for="(extraPhoto,) in product.extraPhotos" :src="'../../src/assets/' + extraPhoto" alt="" />
      </div>

      <div class="product-information">
        <h1>{{ product.name }}</h1>
        <a href="#">{{ product.sizes }}</a>

        <p>
          <img :src="'../../src/assets/' + product.photo" :alt="product.name"/>
          {{ product.description }}
        </p>
      </div>


    </section>
  </primary-template>
</template>

<style scoped>
/* Mobile first layout */
.main {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  //position: relative;

  .images {
    display: flex;
    flex-direction: column;
    //border: 1px solid #ccc;
    gap: 1rem;
    //height: 100vh;
    overflow: scroll;
    flex-basis: 40%;

    img {
      width: 100%;
    }
  }

  .product-information {
    //position: sticky;
    //top: 0;
    text-align: left;
    display: flex;
    flex-basis: 60%;
    flex-direction: column;
    //margin: 0 10rem;
    //max-width: 10px;

    h1 {
      padding: 0 3rem 0;
      font-size: 30px;
      font-weight: bold;
    }

    img {
      width: 40%;
      float: right;
      margin: 0 0 1rem 1rem;
    }

    p {
      text-align: left;
      padding: 0 3rem 0;
    }

    a {
      text-align: left;
      padding: 0 3rem 0;
      text-decoration: none;
      font-weight: bold;
    }
  }

  /* Tablet and up */
  @media screen and (width > 600px) {
    /* Remember, this is for .products class */
    flex-direction: row;

    .product-information {
      p {
        text-align: right;
      }
    }
  }
}
</style>