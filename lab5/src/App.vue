<template>
  <div id="app">
    <Navigation v-if="$route.name !== 'Order' && $route.name !== 'Login' && $route.name !== 'Register'"></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation,
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
