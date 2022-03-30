<template>
 <div id="main">
  <div class="socials">
   <p>follow us</p>
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
 }
 p {
  font-size: 2em;
  font-family: "Nanum Pen Script", cursive;
  color: rgb(117, 110, 110);
 }
 .socials {
  display: grid;
  place-items: center;
 }
 ul {
  display: flex;
  /* justify-content: center; */
 }
 li {
  list-style: none;
 }
 li a {
  padding: 5%;
  margin: 10px;
  font-size: 1.5em;
  text-decoration: none;
 }
 .face {
  color: #4267b2;
 }
 .ins {
  color: #c13584;
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
</style>
