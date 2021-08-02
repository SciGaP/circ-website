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
  overflow:hidden; 
}
.wid-100 {
  width: 100%;
  box-sizing:border-box;
}

.pos-r {
  position: relative;
}

.block {
  position: absolute;
}

.f-s {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.link-text {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;

  color: #333333;
}

.crim-colo {
  color:#990000
}

.bg-crim-colo {
  background-color: #990000;
}

.nav-button {
  appearance: none;
  border: none;
  box-shadow: none;
  outline-style: none;
  cursor: pointer;
}

.cl-in {
  color: inherit;
}

.bgcl-in {
  background-color: inherit;
}

</style>
