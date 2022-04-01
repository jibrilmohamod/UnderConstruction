<template>
 <div data-aos="fade-up" data-aos-duration="3000">
  <article>
   Solving Marketing Challenges for Entrepreneurs & Businesses Through Digital &
   Print Media
   <span class="footer"
    ><i> We are preparing something exciting and amazing for you....</i></span
   >
  </article>
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
  /* font-size: 2em; */
  text-decoration: line;
 }
 article {
  font-size: 3.8em;
  width: 70vw;
  height: 80vh;
 }
 .footer {
  font-family: "Arima Madurai", cursive;
  font-size: 0.6em;
  font-weight: 100;
  display: block;
  width: 60vw;
  margin-top: 2rem;
 }
 @media screen and (max-width: 1100px) and (min-width: 800px) {
  div {
   margin-top: unset;
   margin-top: 1rem;
  }
  article {
   font-size: 3.6em;
   height: unset;
  }
  div {
   height: unset;
  }
  .footer {
   /* border: 1px solid #000; */
   font-size: 2.2rem;
   margin-top: 3rem;
   margin-bottom: 2rem;
  }
 }
 @media screen and (min-width: 1200px) {
  div {
   position: relative;
   top: 2rem;
  }
  .footer {
   font-size: 3rem;
   margin-top: 3rem;
   margin-bottom: 2rem;
   width: 80vh;
   position: relative;
   top: 20px;
  }
 }

 @media screen and (max-width: 800px) {
  div {
   margin-top: unset;
   margin-top: 50px;
  }
  article {
   font-size: 3em;
  }
  .footer {
   font-size: 2rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
  }
 }
 @media screen and (max-height: 800px) {
  div {
   overflow: hidden;
  }
  article {
   font-size: 2em;
  }
 }
</style>
