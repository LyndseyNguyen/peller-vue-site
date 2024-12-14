<script setup>

import PrimaryTemplate from "../../Template/PrimaryTemplate.vue";

</script>
<template>

  <primary-template>
    <div class="contact-us">
      <div class="contact-img">
      <form action="/submit_form" method="post">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="subject">Subject:</label><br>
        <input type="text" id="subject" name="subject"><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="40" required></textarea><br><br>

        <button type="submit">Submit</button>
      </form>
<!--        <div class="contact-img">-->
<!--          <img src="../../assets/main-img.jpg" alt="">-->
<!--          <img src="../../assets/main-img.jpg" alt="">-->
<!--          <img src="../../assets/main-img.jpg" alt="">-->
<!--        </div>-->

      </div>

    </div>
<!--      <img src="../../assets/main-img.jpg" alt="">-->
<!--      <img src="../../assets/main-img3.jpg" alt="">-->
<!--      <img src="../../assets/main-img2.jpg" alt="">-->
  </primary-template>
</template>

<style scoped>
.contact-us {
  padding: 17rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: white;
  flex-wrap: wrap;

  background-image: url("../../assets/main-img.jpg"), url("../../assets/main-img3.jpg"), url("../../assets/main-img2.jpg");
  //background-repeat: no-repeat, no-repeat, no-repeat;
  //background-position: left center, center, right center;
  width: 71.7%;
  background-size: cover;
  //align-items: center;
  //justify-content: center;

  form {
    //display: flex;
    flex-direction: column;
    //justify-content: center;
    //flex-wrap: wrap;

  .contact-img {
  }
  }


}
</style>