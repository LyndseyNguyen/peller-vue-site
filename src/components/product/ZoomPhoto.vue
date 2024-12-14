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
    align-items: center;
    justify-content: center;
    gap: 3rem;
    //padding: 2rem;
    width: 100%;
    margin: 0 0 1rem 1rem;
    height: 100%;
    object-fit: cover; /* Adjust image to fit container */
    //transition: transform 0.3s ease; /* Smooth zoom effect */
  }
  img :hover {
    transform: scale(1.2); /* Zoom in effect */
  }
</style>