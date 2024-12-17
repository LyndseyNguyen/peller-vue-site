<script setup>
import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>

    <div class="zoom">
      <img src="../../assets/jacket.png" alt=""/>
    </div>
    <div class="middle">
      <img src="../../assets/jacket-2.png" alt=""/>
    </div>
    <div class="last">
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
    //width: 100%;
  }
  .middle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    //width: 100%;
  }
  .last {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    //width: 100%;
  }
</style>