<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <div class="product-information">
      Workers Jacket
      <div class="sizes">
        <span>xs</span>
        <span>s</span>
        <span>m</span>
        <span>l</span>
        <span>xl</span>
      </div>
    </div>
    <div class="description">
      This jacket has an olive green body with black sleeves, collar,
      and hem. It features a straight, cropped silhouette and a front
      zipper closure. On the left chest, there is a small, light gray
      printed logo. The jacket has a pointed collar, one vertical chest
      pocket on the left, and two slanted side pockets near the waist.
      The sleeves have adjustable cuffs with a single button each. The
      overall look is minimal and utilitarian.
    </div>
    <div class="details">
      <img src="../../assets/jacket.png" alt=""/>
      <img src="../../assets/jacket-2.png" alt=""/>
      <img src="../../assets/Jacket-3.png" alt=""/>
    </div>
  </primary-template>
</template>

<style scoped>
.product-information {
  text-align: right;
  display: flex;
  flex-direction: column;
  //margin: 0 10rem;
  //max-width: 10px;

  .sizes {
    display: flex;
    flex-direction: row;
    //max-width: 20%;
    //text-align: right;
  }
}
.description {
  text-align: justify;
  display: flex;
  justify-content: right;
  max-width: 30%;
}

.details {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  border: 1px solid #ccc;
  row-gap: 1rem;

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