<template>
  <div id="app">
    <Header/>
    <div class="router" id="nav">
      <router-view/>
    </div>
    <div v-if="isNotContactPage" :class="isFixed?'pos-f':'block'">
      <button  v-on:click="$router.push({path: './contact'})" id="btn-float" class="float-btn airvata-button link-text bg-crim-colo">Get in touch</button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/block/Header';
import Footer from './components/block/Footer';

export default {
  name: 'App',
  components: {Header, Footer},
  data() {
    return{
      isFixed: true,
      isNotContactPage: true,
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    '$route'(to, from) {
      if(to.name == "Contact"){
        this.isNotContactPage = false
      }else{
        this.isNotContactPage = true
      }
    }
  },
  methods: {
    handleScroll(e) {
      const footer = document.getElementById('circ-footer');
      if(e.target.documentElement.scrollHeight - e.target.documentElement.clientHeight - e.target.documentElement.scrollTop <= footer.clientHeight){
        this.isFixed = false;
      }else{
        this.isFixed = true;
      }
    },
  }
}
</script>

<style>
#app {
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
  padding: 4rem 7.5rem;
}

.grid-container {
  display: grid;
  grid-template-areas: "a a a";
  gap: 3rem;
}

.grid-container--2 {
  display: grid;
  grid-template-areas: "a a";
  gap: 5px;
}

.link-text {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;

  color: #000000;
}

.filter-button {
  border: 1px solid #EDEBEB;
  box-sizing: border-box;
  border-radius: 60px;
  background: #FFFFFF;

  color: #333333;

  padding: 14px 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
}

.filter-button-selected {
  background: #990000;
  color: #FFFFFF;
}

.head-text {
  font-size: 36px;
  line-height: 140%;
  font-weight: bold;
}

.head-text--2 {
  font-size: 40px;
  line-height: 140%;
  font-weight: bold;
  color: #FFFFFF;
}

.white-head-text::after {
  content: ' ';
  display: block;
  width: 50px;
  height: 10px;
  background: #FFFFFF;
}

.home-head-text::after {
  content: ' ';
  display:block;
  font-weight: bold;
  line-height: 140%;
  width: 50px;
  border: 5px solid #990000;
  border-radius:0px;
  margin-bottom: 10px;
  margin-top: 20px;
  background:#990000;
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

.airvata-button {
  color: white;
  font-size: 20px;
  padding: 16px 36px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
}

.airvata-button:hover {
  color: #f5f5f5;
}

.bor-rad {
  border-radius: 5px;
  border: 0.5px solid #A0A0A0;
}

.float-btn {
  padding: 17px 79px;
  border-radius: 5px 5px 0px 0px;
  border: .5px solid #a0a0a0;
  bottom:0;
  left: 70vw;
  position: inherit;
  width: max-content;
}

.pos-f {
  position: fixed;
}

b {
  font-weight: 700;
}

</style>
