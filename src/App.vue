<template>
  <div id="app">
    <Header/>
    <div class="router" id="nav">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/block/Header';
import Footer from './components/block/Footer';

export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style>
#app {
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* color: #2c3e50; */
}
</style>
