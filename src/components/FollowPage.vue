<template>
 <div id="main">
  <div class="socials">
   <p>Follow us</p>
   <ul>
    <li>
     <a
      href="https://www.facebook.com/parexellenceKe/"
      target="_blank"
      class="face"
     >
      <i class="fa-brands fa-facebook"></i>
     </a>
    </li>
    <li>
     <a
      href="https://www.instagram.com/parexellenceke/"
      target="_blank"
      class="ins"
     >
      <i class="fa-brands fa-instagram"></i
     ></a>
    </li>
   </ul>
  </div>
  <div class="timer">
   <p>Launching in</p>
   <vue-countdown
    :time="2 * 24 * 50 * 60 * 1000"
    v-slot="{ days, hours, minutes, seconds }"
   >
    <span class="num">
     {{ days }}
    </span>
    D
    <span class="num">{{ hours }}</span>
    hrs
    <span class="num">
     {{ minutes }}
    </span>
    min
    <span class="num">{{ seconds }}</span>
    sec
   </vue-countdown>
  </div>
 </div>
</template>

<script>
 import VueCountdown from "@chenfengyuan/vue-countdown"

 export default {
  components: {
   VueCountdown,
  },
 }
</script>

<style scoped>
 #main {
  display: flex;
  justify-content: space-around;
  height: 10%;
  /* margin-top: 50px; */
 }
 p {
  font-size: 1.5em;
  color: rgb(249, 250, 249);
 }
 .socials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
 ul {
  display: flex;
  margin: 0;
  padding: 0;
 }
 li {
  list-style: none;
 }
 a {
  margin-left: unset;
 }
 li a {
  margin-left: unset;
  margin: 10px;
  font-size: 2em;
  text-decoration: none;
 }
 .face {
  color: #c1c6cf;
  margin-right: 10px;
 }
 .ins {
  color: #f3f3f3;
  margin-left: 10px;
 }
 .timer {
  display: grid;
  place-items: center;
  width: 15em;
 }
 .num {
  font-family: "Leckerli One", cursive;
  font-size: 1.6em;
  color: aqua;
 }
 @media screen and (max-width: 400px) {
  #main {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 1em;
   margin-top: 7em;
  }
  .socials {
   order: 1000000;
  }
 }
</style>
