<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="product-information">
      Workers Jacket
    </div>
    <div class="details">
      <img src="../../assets/jacket.png" alt=""/>
      <img src="../../assets/jacket-2.png" alt=""/>
      <img src="../../assets/Jacket-3.png" alt=""/>
    </div>
  </primary-template>
</template>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0;
}
.product-information {
  display: flex;
  flex-direction: column;
  text-align: right;

}

</style>