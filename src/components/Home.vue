<script setup>
import PrimaryTemplate from "../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="main-homepage">
      <div class="shop-link">
        <router-link :to="{name:'category'}">Shop Here</router-link>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>

.main-homepage {
  min-height: 300vh;
  background-image: url("../assets/mainpic.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

 .shop-link {
   font-size: 40px;
   font-weight: lighter;
   display: flex;
   justify-content: center; /* Centers text horizontally */
   align-items: center; /* Optional: Centers vertically if used with height */
   color: white;
   text-decoration: underline 1px;
   text-underline-position: under;
   position: fixed;
   bottom: 160px;
   width: 100%;


   //text-align: center;

  }
}


</style>