<template>
 <div data-aos="fade-up" data-aos-duration="3000">
  <p>Mission Statement</p>
  <article>
   Solving Marketing Challenges for Entrepreneurs & Businesses Through Digital &
   Print Media
  </article>
  <p class="footer">
   We are preparing something exciting and amazing for you....
  </p>
 </div>
</template>

<script>
 import AOS from "aos"
 export default {
  mounted() {
   AOS.init()
  },
 }
</script>

<style scoped>
 div {
  height: 60vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 10%;
  font-family: "Bree Serif", serif;
  padding-bottom: 0;
  margin-top: 4%;
 }
 p {
  font-size: 2em;
  text-decoration: line;
 }
 article {
  font-size: 3.8em;
  width: 70vw;
  height: 80vh;
 }
 .footer {
  font-size: 3em;
  margin-top: -10%;
  width: 60vw;
 }
 @media screen and (max-width: 1200px) and (min-width: 500px) {
  div {
   margin-top: unset;
  }
  article {
   font-size: 3.6em;
   height: unset;
  }
  div {
   height: unset;
  }
  .footer {
   margin-top: unset;
   margin-top: 10%;
   font-size: 2em;
   width: 80%;
  }
 }
 @media screen and (max-width: 700px) {
  div {
   margin-top: unset;
   margin-top: 50px;
  }
  article {
   font-size: 3em;
  }
  .footer {
   font-size: 1.5em;
   margin-top: unset;
   margin-top: 4%;
  }
 }
 @media screen and (max-height: 800px) {
  div {
   overflow: hidden;
  }
  article {
   font-size: 2em;
  }
  .footer {
   margin-top: unset;
   margin-top: 5%;
   font-size: 1.5em;
  }
 }
</style>
