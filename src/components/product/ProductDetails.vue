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
      <div class="details">
        <router-link :to="{name:'zoom'}">
          <img src="../../assets/jacket.png" alt=""/>
        </router-link>
        <router-link :to="{name:'zoom'}">
          <img src="../../assets/jacket-2.png" alt=""/>
        </router-link>
        <router-link :to="{name:'zoom'}">
          <img src="../../assets/Jacket-3.png" alt=""/>
        </router-link>
      </div>

      <div class="product-information">
        <h1>{{ product.name }}</h1>
        <a href="#">{{product.sizes}}</a>
        <p>{{product.description}}</p>
      </div>


    </section>
  </primary-template>
</template>

<style scoped>
.main{
  padding: 2rem;
  display: flex;
  flex-direction: row;
}

.product-information {
  text-align: left;
  display: flex;
  flex-direction: column;
  //margin: 0 10rem;
  //max-width: 10px;

  h1 {
    padding: 0 3rem 0;
    font-size: 30px;
    font-weight: bold;
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

.details {
  display: flex;
  flex-direction: column;
  //border: 1px solid #ccc;
  gap: 1rem;
}

/* Tablet and up */
@media screen and (width > 600px) {
  /* Remember, this is for .products class */
  background-color: #bd60ad;
  .product-information {
    text-align: right;
    display: flex;
    flex-direction: column;

  }
}

</style>