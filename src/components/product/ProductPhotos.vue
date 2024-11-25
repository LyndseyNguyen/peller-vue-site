<script setup>
import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
  <div class="product-photo">
    <div class="image">
      <img src="../../assets/jacket.jpg" alt=""/>
      <img src="../../assets/jacket-2.png" alt=""/>
      <img src="../../assets/jacket-3.png" alt=""/>
    </div>
    </primary-template>
</template>

<style scoped>
.product-photo {
  border: 1px solid black;

  .image {
    width: 40%;
  }
}


</style>