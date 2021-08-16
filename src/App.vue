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

.hig-100-vh {
  height: 100vh;
}

.mg-left-1 {
  margin-left: 1rem;
}

.mg-right-1 {
  margin-right: 1rem;
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

.pad-right-8 {
  padding-right: 8rem;
}

.bg-color-white {
  background: #FFFFFF;
}

.grid-container-column {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  column-gap: 3.5rem;
}

.global-padding {
  padding: 4rem 8rem;
}

.grid-container {
  display: grid;
  grid-template-areas: "a a a";
  gap: 3rem;
}

.link-text {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;

  color: #000000;
}

.head-text {
  font-size: 36px;
  line-height: 140%;
  font-weight: bold;
}

.home-head-text::after {
  content: ' ';
  display:block;
  width: 50px;
  border: 5px solid #990000;
  border-radius:0px;
  margin-bottom: 10px;
}

.wid-100-vw {
  width: 100vw;
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
