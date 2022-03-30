<template>
 <div data-aos="fade-up" data-aos-duration="3000">
  <p>Nice to meet you.</p>
  <article>We are preparing something exciting & amazing for you.</article>
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 10%;
  font-family: "Bree Serif", serif;
  border: 1px solid rgb(173, 8, 8);
  padding-bottom: 0;
 }
 p {
  font-size: 2em;
  font-family: cursive;
 }
 article {
  font-size: 5em;
  width: 60%;
  height: 20vh;
  border: 1px solid #000;
 }
 @media screen and (max-width: 700px) {
  article {
   font-size: 4em;
   height: unset;
  }
  div {
   height: unset;
  }
 }
 @media screen and (max-height: 800px) {
  article {
   font-size: 3em;
  }
 }
</style>
