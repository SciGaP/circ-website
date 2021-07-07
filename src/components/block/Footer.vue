<template>
  <div class="circ-footer">
    <div class="main-footer">
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
              <li v-for="sitemapLink in sitemapLinks" :key="sitemapLink.name"><span>{{ sitemapLink.name }}</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="airavata">
        <span>Apache Airavata</span>
        <div class="contents">
          <nav>
            <ul>
              <li v-for="airavataLink in airavataLinks" :key="airavataLink.name"><span>{{ airavataLink.name }}</span></li>
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
        <span class="dot">
          <div class="square">
            &#8593;
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
        {name:'About us', link: ''},
        {name:'Services', link: ''},
        {name:'Publications', link: ''},
        {name:'Projects', link: ''},
        {name:'The Team', link: ''},
      ],
      airavataLinks: [
        {name:'Introduction', link: ''},
        {name:'Capabilities', link: ''},
        {name:'Integration', link: ''},
        {name:'Learn more', link: ''}
      ],
      contactLinks: [
        {name:'2709 E 10th St,Bloomington, IN 47408', link: ''},
        {name:'circ@iu.edu', link: ''},
      ]
    }
  },

}


</script>

<style scoped>

.circ-footer {
  position: absolute;
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
  flex-direction: row;
  align-items: flex-start;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;

  color: #0A142F;
}

.circ-footer .main-footer .sitemap {
  position: relative;
  top: 60px;
  padding-left: 9.72223vw;
}

.circ-footer .main-footer .airavata {
  position: relative;
  top: 60px;
  padding-left: 7.431vw;
}

.circ-footer .main-footer .contact-us {
  position: relative;
  top: 60px;
  padding-left: 4.931vw;
}

.circ-footer .main-footer .circ-logo{
  position: relative;
  width: 248px;
  height: 46px;
  left: 0px;
  padding-left: 7.7778vw;
  top: 134px;
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
  position: relative;
  width: 52px;
  height: 52px;
  padding-left: 5.62vw;
  top: 130px;
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
  padding: 12px 14px 14px 17px;
  font-size: 30px;
}

.up-arrow .dot .square .vl {
  position: relative;
  padding-left: 23px;
  top: 70%;
  bottom: 0px;
  border: 0.5px solid #FFFFFF;
  transform: rotate(90deg);
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