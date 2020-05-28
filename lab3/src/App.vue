<template>
  <div id="app">
    <Navigation v-if="$route.name !== 'Order'"></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Main from "@/components/Main";
// import HairFactory from "@/components/HairFactory";
// import FaceFactory from "@/components/FaceFactory";
// import NailFactory from "@/components/NailFactory";
// import About from "@/components/About";
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation,
    // About
  },
  mounted() {
    let script = document.createElement('script');
    script.setAttribute('src', 'https://kit.fontawesome.com/a076d05399.js');
    document.head.appendChild(script);
  },
}
</script>

<style scoped>
  @import url('assets/index-style.css');
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  #app {
    height: 100%;
  }
</style>
