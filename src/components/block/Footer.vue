<template>
  <div id="circ-footer" class="circ-footer global-padding" style="padding-top: 3.75rem;">
    <div class="main-footer grid-container-column" style="column-gap: 6.5rem;">
      <div class="circ-logo">
        <svg width="248" height="46" viewBox="0 0 248 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="248" height="46" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0" transform="translate(-0.00518723) scale(0.00046604 0.00251256)"/>
        </pattern>
        </defs>
        </svg>
      </div>
      <div class="sitemap">
        <span>Sitemap</span>
        <div class="contents">
          <nav>
            <ul>
              <li v-for="sitemapLink in sitemapLinks" :key="sitemapLink.name"><span v-on:click="$router.push({path: sitemapLink.link})" >{{ sitemapLink.name }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="airavata">
        <span>Apache Airavata</span>
        <div class="contents">
          <nav>
            <ul>
              <li v-for="airavataLink in airavataLinks" :key="airavataLink.name"><span v-on:click="$router.push({path: airavataLink.link})" >{{ airavataLink.name }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="contact-us">
        <span>Contact</span>
        <div class="contents">
          <nav>
            <ul>
              <li v-for="contactLink in contactLinks" :key="contactLink.name"><span>{{ contactLink.name }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="up-arrow">
        <span v-on:click="scrollTop" class="dot">
          <div class="square">
            <div class="angle-vector">
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M13 8L7.40964 1.1978C7.35845 1.13563 7.2955 1.08584 7.22497 1.05174C7.15443 1.01764 7.07793 1 7.00055 1C6.92316 1 6.84666 1.01764 6.77612 1.05174C6.70559 1.08584 6.64264 1.13563 6.59145 1.1978L0.999999 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="stright-vector">
              <svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L0.999998 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </span>
      </div>
    </div>
    <!-- bottom of the footer -->
    <div class="fireshot"></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      sitemapLinks: [
        {name:'About us', link: './about-us'},
        {name:'Services', link: './services'},
        {name:'Publications', link: './projects#publications'},
        {name:'Projects', link: './projects'},
        {name:'The Team', link: './teams'},
      ],
      airavataLinks: [
        {name:'Introduction', link: './airavata#introduction'},
        {name:'Capabilities', link: './airavata#capabilities'},
        {name:'Integration', link: './airavata#integration'},
        {name:'Learn more', link: './airavata#learn-more'}
      ],
      contactLinks: [
        {name:'2709 E 10th St,Bloomington, IN 47408', link: ''},
        {name:'circ@iu.edu', link: ''},
      ]
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo(0,0);
    }
  }

}


</script>

<style scoped>

.circ-footer {
  position: relative;
  width: 100vw;
  height: 417px;
  left: 0px;
  bottom: 0px;
  
  border: 1px solid #EDEBEB;
  box-sizing: border-box;
  background: #EDEBEB;
}

.circ-footer .main-footer {
  display: flex;
  align-items: flex-start;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;

  color: #0A142F;
}


.circ-footer .main-footer .circ-logo{
  width: 248px;
  height: 46px;
  padding-top: 4rem;
}

.circ-footer .fireshot {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 74.82%;
  bottom: 0%;
  width: 100vw;

  background: url('~@/assets/footer.png');
}

.contents {
  top: 21px;
}

.up-arrow {
  width: 52px;
  height: 52px;
  padding-top: 4rem;
  align-content: center;
}

.up-arrow .dot {
  background-color: #990000;
  color: white;
  height: 52px;
  width: 52px;
  border-radius: 50%;
  display: inline-block;
  align-content: center;
}

.up-arrow .dot .square {
  width: 24px;
  height: 24px;
  padding: 10px 14px 14px 14px;
  font-size: 30px;
}

.up-arrow .dot .square .angle-vector {
  margin-top: -8px;
  margin-left: 5px;
}

.up-arrow .dot .square .stright-vector {
  margin-top: -17px;
  margin-left: 11px;
}

ul {
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  list-style-type: none;
  padding-left: 0px;
  opacity: 0.75;
}

li {
  margin: 10px 0;
}

span {
  cursor: pointer;
}

</style>