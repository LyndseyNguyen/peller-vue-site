<script setup>
import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>

    <div class="zoom">
      <img src="../../assets/jacket.png" alt=""/>
      <img src="../../assets/jacket-2.png" alt=""/>
      <img src="../../assets/Jacket-3.png" alt=""/>

    </div>

  </primary-template>
</template>

<style scoped>
  .zoom {
    display: flex;
    flex-direction: column;
    //width: 50%;
    align-items: center;
    padding: 2rem;
    //margin: 13rem 0;
    //width: 300px; /* Set initial size */
  }
</style>