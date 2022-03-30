<template>
 <nav data-aos="fade-right" data-aos-duration="3000">
  <span id="logo">
   <a href=""
    ><img src="./assets/P.LOGO-01.svg" alt="" />
    <h1>Parexellence</h1></a
   >
  </span>
  <a href="" class="modal"> Notify Me </a>
 </nav>
 <under-consruction></under-consruction>
 <follow-page> </follow-page>
</template>

<script>
 import underConsruction from "./components/underConsruction.vue"
 import FollowPage from "./components/FollowPage.vue"
 import AOS from "aos"
 //  import {NButton} from

 export default {
  name: "App",
  components: {
   underConsruction,
   FollowPage,
  },
  mounted() {
   AOS.init()
  },
 }
</script>

<style>
 html {
  margin: 0px;
  height: 100vh;
  background-image: url(./assets/bg.jpeg);
  background-size: cover;
 }
 img {
  /* border: 1px red solid; */
  height: 100px;
  object-position: 50%;
 }
 #app {
  color: rgb(254, 254, 255);
 }
 nav {
  height: 20%;
  width: 100vw;
  display: flex;
  /* justify-content: space-around; */
  /* background-color: #fff; */
 }
 a {
  text-decoration: none;
 }
 #logo h1 {
  font-family: "Maven Pro", sans-serif;
  font-size: 2em;
  color: rgb(11, 94, 161);
  display: inline;
  position: relative;
  top: -1.2em;
  left: -1em;
 }

 .modal {
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  top: 1.2em;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  z-index: 0;
  font-family: "Maven Pro", sans-serif;
  font-size: 1.2em;
  display: grid;
  place-items: center;
  background: #fff;
  overflow: hidden;
  border: 2px solid #031e3a;
  color: #00468b;
 }
 .modal:hover {
  color: #fff;
 }
 .modal:hover:after {
  height: 100%;
 }
 .modal:after {
  content: "";
  position: absolute;
  z-index: -1;
  transition: all 0.3s ease;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  background: #0a325a;
 }
</style>
