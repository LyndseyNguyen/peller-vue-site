<script setup>
import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
  <div class="product-photo">
    <div class="image">
      <img src="../../assets/jacket.jpg" alt=""/>
      <img src="../../assets/jacket-2.png" alt=""/>
      <img src="../../assets/Jacket-3.png" alt=""/>
    </div>
    </div>
  </primary-template>
</template>

<style scoped>
/* Mobile first */
.product-photo {
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
  .image {
    max-width: 30%;

  }
  /* Tablet and up */
  @media screen and (width > 600px) {
    /* Remember, this is for .products class */
    .image {
      max-width: 100%;
    }

  }
}



</style>