<template>
  <div class='home_page link-text'>
    <div class='landing_sc'>
      <div class='lsc_content'>
        <div class='heading'>
          <p style="color:#333333">We'll handle <span class='crim-colo'>Tech,</span>
          <br>
          you handle <span class='crim-colo'>Research</span></p> 
        </div>
        <div class='desc'>
          <p>We take care of all your high performance computing <br>
          requriments and the computational Infrastructure ou need <br>
          to perform Groundbreaking Research.</p>
        </div>
        <div class='scroll_down'>
          <div class=square>
            <div class="arrow">
              <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.35 0.316578L10 7.94991L17.65 0.316578L20 2.66658L10 12.6666L0 2.66658L2.35 0.316578Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class='lsc_image'>
        <div class="rectangle">
          <img class='image' src="@/assets/lsc_image.png" alt="Landing page image">
        </div>
      </div>
    </div>
    <div class='who_are_we'>
      <span class="pd-2 atom-structure z-idx--1 op-10"></span>
      <span class="home-circle z-idx--1 op-10">
        <svg width="478" height="537" viewBox="0 0 478 537" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="268.5" cy="268.5" r="253.5" stroke="black" stroke-opacity="0.5" stroke-width="30"/>
        </svg>
      </span>
      <div class="block f-s wid-100-vw hig-100-vh global-padding" style="padding-top:0rem">
        <div class="pos-r who-content">
          <div>
          <span class="home-head-text head-text">Who are we?</span>
          <p>
            We're a <b>diverse group</b> of induviduals ranging from <b>Computer scientists to Domain experts</b> who possess <b>Full-stack Scientific Cyberinfrastructure capabilities</b>. 
            At our core, we care bout the impact and research work you do and we strive to support you in every way possible. We have <b>deployed numerous successfull Gateways</b> in various 
            domains which has attracted funding from <b>NASA</b> and the <b>National Science Foundation (NSF).</b>
          </p>
          <button class="bor-rad hig-3r airvata-button link-text bg-crim-colo">Know more About us</button>
          </div>
        </div>
        <div class="single-stat-card pos-r pad-right-8 hig-100-vh ">
          <statCard title='Science Gateway' value="70+"/>
        </div>
        <div class="pos-r two-cards">
          <div style="margin-top:-2rem"><statCard title='Science Gateway' value="70+"/></div>
          <div style="margin-top:16rem"><statCard title='Science Gateway' value="70+"/></div>
        </div>
      </div>
    </div>
    <div class="supported_by f-s pos-r">
      <div class="pos-r"><span class="chem-bond z-idx--1 op-10"></span></div>
      <div class="pos-r" style="margin-left:-4rem; padding-bottom:4rem;">
        <span class="home-head-text head-text link-text">We're supported by</span>
        <p style="line-height:160%; font-size:20px;">Most of the work we do is <b>backed</b> by the most <b>reputed scientific communities</b> in the country. <b>They trust us, so can you.</b></p>
        <div class="grid-container-column support--1 link-text">
          <div>
            <div>
              <img src="~@/assets/NSF.png" alt="NSF">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>National Sceience Foundation</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/NASA.png" alt="NASA">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>NASA</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/DOE.png" alt="DOE">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>Department of Energy</b></span></div>
          </div>
        </div>
        <div class="grid-container-column support--2 link-text">
          <div>
            <div>
              <img src="~@/assets/USDA.png" alt="USDA">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>U.S. Department of Agriculture</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/NIH.png" alt="USDA">
            </div>
            <div style="padding-top:40px;bottom:0;"><span style="font-size:32px; line-height:120%;"><b>National Institute of Health</b></span></div>
          </div>
        </div>
        <div>
          <span class="home-head-text head-text lin-text">We're proud collaborators of</span>
          <p style="line-height:160%; font-size:20px">Our collaboration with <b>XSEDE</b> and <b>SciGaP</b> lets us complement each other's strengths to produce <b>first-grade</b> Science Gateways.</p>
          <div class="grid-container-column collbortors--1 link-text">
          <div class="item-coll--1">
            <span style="font-size:32px; line-height: 120%; font-weight:bold; text-align:center;"><br/>SGCI</span>
          </div>
          <div class="item-coll--2">
            <span style="font-size:32px; line-height: 120%; font-weight:bold; text-align:center;"><br/>XSEDE</span>
          </div>
        </div>
        </div>
      </div>
      <div style="padding-botton:2rem"></div>
    </div>
    <div class="domains f-s pos-r">
      <div class="flask--1 pos-r"></div>
      <div class="pos-r domain--content">
        <span class="home-head-text head-text link-text">What domains do we operate in?</span>
        <p style="line-height:160%; font-size:20px;">We can help you with your computational resources in any domain. We've got domian experts who can help develop a deeper understanding of the problem.</p>
        <div class="grid-container domains--list">
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_BS.png" alt="Biological Sciences">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Biological Sciences</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_CISE.png" alt="Computer & Information Science & Engineering">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Computer & Information Science & Engineering</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_EHR.png" alt="Education & Human Resources">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Education & Human Resources</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_Eng.png" alt="Engineering">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Engineering</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_ERE.png" alt="Environmental Research & Education">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Environmental Research & Education</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_GS.png" alt="Geosciences">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Geosciences</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_SBES.png" alt="Social Behavioral and Economic Sciences">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Social Behavioral and Economic Sciences</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_MPS.png" alt="Mathematical and physical Sciences">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">Mathematical and physical Sciences</span>
            </div>
          </div>
          <div>
            <div class="domain-image">
              <img src="@/assets/Domain_ISE.png" alt="International Science and Engineering">
            </div>
            <div class="domain-heading-text pos-r f-s">
              <span style="padding-left:10px;">International Science and Engineering</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flask--2 pos-r"></div>
    </div>
    <div class="team">
      <div class="team-content">
        <div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Our High-Calibre team</span></div>
        <div class="grid-container-column team-cards" style="text-align:center">
          <div>
            <teamCard 
              firstName="Marlon" 
              lastName="Pierce" 
              imageLink="marlon.png"
              position="director" 
              talkAbout="CIRC, collaborating on a grant or using CIRC's services."
              profileLink="https://scholar.google.com/citations?user=jAIppVwAAAAJ&hl=en"/>
          </div>
          <div>
            <teamCard 
              firstName="Marlon" 
              lastName="Pierce" 
              imageLink="marlon.png"
              position="director" 
              talkAbout="CIRC, collaborating on a grant or using CIRC's services."
              profileLink="https://scholar.google.com/citations?user=jAIppVwAAAAJ&hl=en"/>
          </div>
          <div>
            <teamCard 
              firstName="Marlon" 
              lastName="Pierce" 
              imageLink="marlon.png"
              position="director" 
              talkAbout="CIRC, collaborating on a grant or using CIRC's services."
              profileLink="https://scholar.google.com/citations?user=jAIppVwAAAAJ&hl=en"/>
          </div>
        </div>
        <div style="padding-bottom:3rem"><span class="home-head-text head-text link-text">We take pride in our highly impactful work</span></div>
        <div class="grid-container-column" style="text-align:center">
          <div>
            <div>
              <img src="~@/assets/DREG.png" alt="DREG">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>dREG</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/SEAGRID.png" alt="SEAGRID">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>SEAGRID</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/SSRA.png" alt="DREG">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>Searching SRA</b></span></div>
          </div>
        </div>
        <div style="text-align:center;padding-top:82px"><button class="bor-rad hig-3r airvata-button link-text bg-crim-colo">View a list of all our Gateways</button></div>
        <div style="padding-top:6rem;padding-bottom:3rem;"><span class="home-head-text head-text link-text">Organizations we've worked with</span></div>
        <div class="grid-container-column" style="text-align:center">
          <div>
            <div>
              <img src="~@/assets/USD.png" alt="USD">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>University of South Dakota</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/UAB.png" alt="UAB">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>University of Alabama at Birmingham</b></span></div>
          </div>
          <div>
            <div>
              <img src="~@/assets/Georgia_Tech.png" alt="GT">
            </div>
            <div style="padding-top:40px;"><span style="font-size:32px; line-height:120%;"><b>Georiga Tech</b></span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews pos-r f-s">
      <div class="pos-r">
        <svg width="137" height="257" viewBox="0 0 137 257" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M84.2566 116.498C76.6954 114.321 69.1341 113.217 61.779 113.217C50.421 113.217 40.9437 115.812 33.595 118.991C40.6796 93.0543 57.6989 48.3014 91.6021 43.2616C94.7419 42.7946 97.3149 40.5243 98.1715 37.4682L105.581 10.9649C106.206 8.7236 105.836 6.32445 104.557 4.37938C103.279 2.4343 101.224 1.13651 98.9218 0.820916C96.4197 0.479561 93.8692 0.305664 91.3413 0.305664C50.6464 0.305664 10.3445 42.7817 -6.66186 103.601C-16.6448 139.282 -19.572 192.926 5.01813 226.691C18.7784 245.585 38.8537 255.674 64.6869 256.682C64.7932 256.685 64.8962 256.689 65.0025 256.689C96.8769 256.689 125.141 235.222 133.74 204.49C138.876 186.118 136.554 166.851 127.196 150.225C117.938 133.785 102.69 121.802 84.2566 116.498Z" fill="#EBEBEB"/>
        </svg>
        <svg width="151" height="257" viewBox="0 0 151 257" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M141.783 150.228C132.525 133.785 117.276 121.802 98.8436 116.498C91.2823 114.321 83.7211 113.217 76.3691 113.217C65.0112 113.217 55.5306 115.812 48.1819 118.991C55.2666 93.0542 72.2858 48.3014 106.192 43.2616C109.332 42.7946 111.902 40.5243 112.762 37.4682L120.172 10.9649C120.796 8.72359 120.426 6.32445 119.147 4.37938C117.872 2.4343 115.818 1.13651 113.512 0.820916C111.013 0.479561 108.463 0.305664 105.931 0.305664C65.2366 0.305664 24.9347 42.7817 7.92508 103.601C-2.0546 139.282 -4.98184 192.926 19.6115 226.698C33.3686 245.588 53.4471 255.681 79.2771 256.685C79.3833 256.689 79.4864 256.692 79.5959 256.692C111.467 256.692 139.735 235.225 148.333 204.494C153.463 186.122 151.138 166.851 141.783 150.228Z" fill="#EBEBEB"/>
        </svg>
      </div>
      <div class="pos-r" style="margin-left:-10rem;">
        <div style="padding-bottom:2rem;padding-top:2rem;">
          <span class="home-head-text head-text link-text">Satisfied clients</span>
        </div>
        <div class="grid-container-column" style="z-index:3;column-gap: 1rem">
          <div>
            <reviewCard
              width="387px"
              height="365px"
              imageLink="marlon.png"
              firstName="Scott"
              position="Manager"
              company="Indiana University"
              review="Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
          </div>
          <div>
            <reviewCard
              width="387px"
              height="365px"
              imageLink="marlon.png"
              firstName="Scott"
              position="Manager"
              company="Indiana University"
              review="Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
          </div>
          <div>
            <reviewCard
              width="387px"
              height="365px"
              imageLink="marlon.png"
              firstName="Scott"
              position="Manager"
              company="Indiana University"
              review="Lorem ipsum dolor sit amet, consecttur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            />
          </div>
        </div>
      </div>
      <div class="pos-r" style="margin-top:-130px;right:0;position:absolute">
        <svg width="185" height="238" viewBox="0 0 185 238" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.3679 16.945C2.88195 49.9387 -16.4176 122.252 15.2089 178.657C46.8355 235.061 117.3 253.998 172.786 221.004C228.272 188.011 247.571 115.697 215.945 59.2927C184.318 2.88811 113.854 -16.0487 58.3679 16.945ZM167.304 211.228C117.243 240.995 53.3607 223.827 24.8265 172.938C-3.7077 122.048 13.7892 56.4894 63.8498 26.7218C113.91 -3.04588 177.793 14.1221 206.327 65.0116C234.861 115.901 217.364 181.46 167.304 211.228Z" fill="#333333" fill-opacity="0.03"/>
          <path transform="translate(43,48)" d="M66.6033 0.655699L19.7707 28.503L32.1343 50.5523L0.830424 69.1661L41.4337 141.578L150.874 76.5034L110.271 4.09134L78.9669 22.7051L66.6033 0.655699ZM34.7225 32.3083L62.5756 15.7465L68.6169 26.5206L40.7638 43.0824L34.7225 32.3083ZM45.5674 126.09L29.6913 97.7768L67.6504 75.2059L71.7247 82.4722L86.021 73.9714L81.9466 66.7051L119.906 44.1342L135.782 72.4476L45.5674 126.09ZM114.426 34.3623L24.212 88.005L15.7823 72.9713L106.243 19.1821L114.673 34.2157L114.426 34.3623Z" fill="#333333" fill-opacity="0.03"/>
        </svg>
      </div>
    </div>
    <div class="footer-pre f-s pos-r link-text" style="padding:5rem 8rem">
      <div class="pos-r" style="width:45%;margin-right:10%">
        <span style="font-size:44px;line-height:120%"><b>We're  part of the <span class="crim-colo">Pervasive </span> Technology <span class="crim-colo">Institue </span> at <span class="crim-colo">Indiana </span>University.</b></span>
      </div>
      <div class="pos-r" style="text-align:center;width:40%;margin-top:5%;margin-left:5%">
        <button class="bor-rad hig-3r airvata-button link-text bg-crim-colo">Visit Website</button>
      </div>
    </div>
  </div>
</template>

<script>
import statCard from '../overlay/statCard';
import teamCard from '../overlay/teamCard';
import reviewCard from '../overlay/reviewCard';
export default {
    name: 'Home',
    components: {statCard, teamCard, reviewCard}
}
</script>

<style scoped>

.two-cards {
  right: 8.334vh;
}

.reviews {
  padding-bottom: 3rem;
  padding-top: 3rem;
  background: #EDEBEB33;
}

.domain-image {
  border-radius: 5px;
  padding-bottom: 20px;
}

.domain--content {
  padding: 7.5rem;
}

.team-content {
  padding: 7.5rem;
}

.team-cards {
  padding-bottom: 5rem;
}

.flask--1 {
  background: url('~@/assets/flask_1.png');
  opacity: 0.03;
  transform: rotate(8.4deg);
  left: -71.82px;
}

.domain-heading-text {
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
}

.domain-heading-text::after {
  content: ' ';
  display: block;
  width: 4px;
  height: -webkit-fill-available;
  left: 0px;
  position: absolute;
  background: #990000;
}

.home_page .landing_sc {
  flex-direction: row;
  position: relative;
  display: flex;
  padding-left: 8.3334vw;
  padding-right: 8.3334vw;
  margin-top: 65px;
  height: 500px;
  padding-bottom: 180px;
}

.item-coll--1::before {
  content: url('~@/assets/SGCI.png');
  vertical-align: bottom;
}

.item-coll--2::before {
  content: url('~@/assets/XSEDE.png');
  vertical-align: bottom;
}

.item-coll--1 {
  margin-top: 4rem;
}

.support--1 {
  margin: 3rem;
  text-align: center;
}

.support--2 {
  margin: 6rem;
  text-align: center;
}

.collbortors--1 {
  margin: 3rem;
  text-align: center;
}

.single-stat-card {
  padding-top: 11rem;
}

.op-10 {
  opacity: 0.1;
}

.airvata-button {
  color: white;
  font-size: 20px;
  padding: 16px 36px;
  font-weight: 600;
}

.bor-rad {
  border-radius: 5px;
  border: 0.5px solid #A0A0A0;
}

.home_page .landing_sc .lsc_content {
  height: 100%;
  width: 50%;
  position: relative;
  padding-right: 4.514vw;
}

.home_page .landing_sc .lsc_content .heading {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 120%;
  color:#333333
}

.home_page .landing_sc .lsc_content .desc {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  color: #45382B;
}

.home_page .landing_sc .lsc_content .scroll_down .square {
  width: 40px;
  height: 40px;
  outline: 0px solid black;
  bottom: 0px;
  position: absolute
}

.home_page .landing_sc .lsc_content .scroll_down .square .arrow {
  position: absolute;
  left: 25%;
  right: 25%;
  top: 35.79%;
  bottom: 33.33%;
  cursor: pointer;
}

.who-content {
  width: 40vw;
  height: 100vh;
  padding-top: 7rem;
  margin-right: 12rem;
}

.z-idx--1 {
  z-index: -1;
}

.home_page .lsc_image {
  width: 50%;
  height: inherit;
  position: relative;
}

.home_page .lsc_image .rectangle {
  /* background: #C4C4C4; */
  height: inherit;
}

.home_page .lsc_image .rectangle .image {
  position: absolute;
  height: fit-content;
  width: fit-content;
  max-height: 100%;
  max-width: 100%;
}

.who_are_we {
  padding-top: 3rem;
  padding-bottom: 4rem;
  flex-direction: row;
  position: relative;
  display: flex;
  background: #EDEBEB80;
  margin-bottom: 6rem;
}

.domains {
  background: #EDEBEB80;
  padding-top: 3rem;
  padding-bottom: 4rem;
}

.atom-structure::after {
  content: url('data:image/svg+xml; charset=UTF-8, <svg width="426" height="544" viewBox="0 0 426 544" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M381.068 253.275C383.989 254.043 386.994 254.437 390.014 254.447C397.028 254.443 403.884 252.36 409.715 248.462C415.547 244.563 420.092 239.024 422.776 232.544C425.461 226.063 426.165 218.933 424.799 212.053C423.433 205.172 420.059 198.851 415.102 193.888C414.521 193.311 413.903 192.789 413.271 192.254C419.222 170.672 417.849 151.875 408.908 136.373C389.68 103.044 339.188 92.1255 269.907 105.919C247.14 39.0238 212.419 0.746094 174 0.746094C135.58 0.746094 100.864 39.0192 78.0742 105.924C8.77967 92.1209 -41.6987 103.044 -60.9223 136.368C-69.5887 151.339 -71.1086 170.15 -65.5828 191.031C-72.1052 196.138 -76.6353 203.365 -78.388 211.461C-80.1407 219.557 -79.0055 228.011 -75.1791 235.358C-71.3527 242.705 -65.0763 248.481 -57.4378 251.686C-49.7994 254.891 -41.2804 255.322 -33.3574 252.905C-28.6053 259.227 -23.4 265.623 -17.7918 272.027C-64.3467 325.152 -80.1367 374.335 -60.9269 407.627C-47.1238 431.557 -17.247 443.968 24.1484 443.968C42.2697 443.746 60.3266 441.765 78.065 438.053C100.85 504.967 135.575 543.254 174 543.254C191.36 543.254 208.482 535.114 223.869 519.796C231.44 523.113 239.931 523.681 247.877 521.403C255.822 519.124 262.721 514.142 267.384 507.317C272.046 500.492 274.177 492.253 273.41 484.023C272.643 475.793 269.025 468.09 263.182 462.244C262.605 461.663 261.987 461.136 261.378 460.605C264.376 453.513 267.247 445.955 269.957 438.053C287.687 441.767 305.737 443.748 323.851 443.968C365.242 443.968 395.123 431.552 408.926 407.627C428.154 374.335 412.346 325.152 365.8 272.032C371.202 265.865 376.302 259.593 381.068 253.275ZM403.767 232.738C400.115 236.379 395.168 238.424 390.012 238.424C384.855 238.424 379.908 236.379 376.257 232.738C373.538 230.018 371.688 226.552 370.939 222.78C370.189 219.008 370.575 215.099 372.048 211.546C373.52 207.993 376.013 204.957 379.211 202.82C382.409 200.684 386.168 199.544 390.014 199.544C393.86 199.544 397.619 200.684 400.817 202.82C404.015 204.957 406.507 207.993 407.98 211.546C409.452 215.099 409.838 219.008 409.089 222.78C408.34 226.552 406.489 230.018 403.771 232.738H403.767ZM395.045 144.38C401.313 155.262 402.521 168.791 398.749 184.668C391.225 182.754 383.282 183.363 376.138 186.4C368.994 189.437 363.043 194.735 359.201 201.481C355.358 208.226 353.836 216.046 354.866 223.74C355.897 231.434 359.425 238.578 364.907 244.073C365.484 244.655 366.102 245.177 366.711 245.712C362.994 250.553 359.069 255.357 354.936 260.124C335.299 239.733 313.91 221.103 291.017 204.45C288.026 176.307 282.604 148.476 274.81 121.27C335.186 109.596 379.837 118.015 395.045 144.376V144.38ZM259.102 419.333C236.813 413.895 214.963 406.792 193.736 398.086C207.402 391.48 221.012 384.301 234.367 376.592C247.826 368.809 260.851 360.605 273.281 352.113C270.242 374.842 265.502 397.312 259.102 419.333ZM88.8969 419.333C82.4922 397.313 77.7481 374.843 74.7047 352.113C87.1663 360.605 100.187 368.818 113.642 376.592C126.982 384.301 140.579 391.489 154.268 398.086C133.039 406.792 111.188 413.895 88.8969 419.333ZM88.8969 124.667C111.186 130.105 133.036 137.207 154.263 145.914C140.593 152.52 126.987 159.699 113.632 167.431C100.173 175.214 87.148 183.418 74.6955 191.91C77.7404 169.172 82.4875 146.694 88.8969 124.667ZM54.9684 317.937C36.7945 303.943 19.7115 288.586 3.86733 272C19.7129 255.416 36.7958 240.059 54.9684 226.063C53.8376 241.171 53.2378 256.567 53.2378 272C53.2378 287.433 53.8284 302.811 54.9684 317.937ZM121.658 362.711C104.316 352.699 87.7203 341.949 72.1821 330.769C70.2684 311.582 69.2613 291.855 69.2613 272C69.2613 252.145 70.2684 232.422 72.1821 213.231C87.7065 202.06 104.307 191.306 121.658 181.289C138.826 171.368 156.424 162.349 174.004 154.379C191.598 162.354 209.192 171.373 226.36 181.289C243.702 191.301 260.297 202.051 275.835 213.231C277.749 232.418 278.756 252.145 278.756 272C278.756 291.855 277.749 311.578 275.835 330.769C260.311 341.94 243.711 352.694 226.36 362.711C209.192 372.632 191.593 381.651 174.013 389.621C156.41 381.646 138.817 372.627 121.649 362.711H121.658ZM259.112 124.648C265.516 146.669 270.26 169.139 273.304 191.869C260.842 183.377 247.822 175.164 234.39 167.39C221.017 159.699 207.42 152.511 193.731 145.914C214.96 137.208 236.812 130.105 259.102 124.667L259.112 124.648ZM293.031 226.063C311.205 240.057 328.288 255.414 344.132 272C328.286 288.584 311.203 303.941 293.031 317.937C294.162 302.829 294.761 287.433 294.761 272C294.761 256.567 294.171 241.189 293.031 226.063ZM174 16.7695C204.389 16.7695 234.033 51.2382 254.185 109.362C226.714 116.191 199.884 125.382 173.995 136.831C148.11 125.381 121.283 116.19 93.8138 109.362C113.971 51.2337 143.61 16.7695 174 16.7695ZM-57.5207 232.738C-60.7138 229.555 -62.704 225.362 -63.1521 220.876C-63.6001 216.389 -62.4783 211.886 -59.9778 208.134C-57.4773 204.382 -53.7529 201.613 -49.4395 200.3C-45.1262 198.987 -40.4908 199.21 -36.3236 200.932C-32.1564 202.653 -28.7153 205.767 -26.5869 209.742C-24.4585 213.717 -23.7746 218.307 -24.6517 222.73C-25.5288 227.153 -27.9126 231.134 -31.3969 233.996C-34.8811 236.858 -39.25 238.423 -43.7589 238.424C-46.3157 238.435 -48.8491 237.937 -51.2122 236.961C-53.5754 235.985 -55.7212 234.55 -57.5253 232.738H-57.5207ZM-18.6754 193.888C-22.8211 189.75 -27.927 186.702 -33.5373 185.017C-39.1476 183.332 -45.0877 183.063 -50.8275 184.233C-54.5266 168.548 -53.2906 155.162 -47.0506 144.403C-31.8375 118.029 12.813 109.609 73.1893 121.288C65.3951 148.497 59.9711 176.329 56.9782 204.473C34.084 221.109 12.6939 239.721 -6.94619 260.097C-11.4053 254.951 -15.5714 249.836 -19.4445 244.751C-19.1927 244.513 -18.9226 244.293 -18.6754 244.051C-12.0295 237.393 -8.29697 228.37 -8.29697 218.962C-8.29697 209.555 -12.0295 200.532 -18.6754 193.874V193.888ZM-47.0597 399.615C-62.2316 373.282 -47.2062 330.389 -6.9233 283.903C12.7108 304.285 34.0947 322.905 56.9827 339.55C59.9729 367.693 65.3953 395.524 73.1893 422.73C12.8084 434.395 -31.842 425.981 -47.0506 399.615H-47.0597ZM251.851 501.089C248.667 504.284 244.473 506.275 239.986 506.723C235.498 507.172 230.993 506.05 227.24 503.549C223.487 501.048 220.718 497.323 219.404 493.008C218.09 488.694 218.313 484.057 220.035 479.889C221.758 475.72 224.872 472.278 228.848 470.149C232.824 468.021 237.416 467.337 241.84 468.214C246.264 469.092 250.246 471.476 253.109 474.962C255.971 478.447 257.536 482.817 257.537 487.328C257.538 492.487 255.493 497.436 251.851 501.089ZM238.116 451.861C231.364 451.86 224.752 453.787 219.057 457.415C213.363 461.043 208.822 466.221 205.969 472.341C203.116 478.461 202.069 485.268 202.951 491.962C203.833 498.656 206.608 504.96 210.95 510.131C199.047 521.471 186.649 527.23 174.022 527.23C143.633 527.23 113.99 492.762 93.8367 434.638C121.308 427.809 148.138 418.618 174.027 407.169C199.918 418.62 226.752 427.811 254.227 434.638C251.983 441.07 249.649 447.228 247.204 453.065C244.232 452.271 241.169 451.867 238.093 451.861H238.116ZM395.073 399.615C379.86 425.985 335.209 434.409 274.833 422.73C282.627 395.522 288.051 367.69 291.044 339.546C313.923 322.902 335.298 304.283 354.923 283.903C395.205 330.389 410.231 373.282 395.05 399.615H395.073Z" fill="black"/></svg>');
  display: block;
  width: fit-content;
}

.home-circle {
  display: block;
  width: fit-content;
  margin-right: 0px;
  float: right;
  margin-left: auto;
}

.chem-bond::after {
  content: url('data:image/svg+xml; charset=UTF-8, <svg width="186" height="371" viewBox="0 0 186 371" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125.5 221.887L68.1137 199.813C72.0164 181.355 68.3384 161.357 56.4482 144.983L116.42 85.0114C146.718 103.446 186 81.58 186 45.8294C186 20.5592 165.441 0 140.171 0C104.39 0 82.5725 39.3122 100.989 69.58L41.0168 129.552C15.2687 110.854 -20.0309 112.134 -44.4012 133.011L-74.9221 107.068C-59.6951 76.7614 -81.838 40.7373 -115.892 40.7373C-141.162 40.7373 -161.722 61.2965 -161.722 86.5667C-161.722 124.073 -119.047 145.418 -89.0638 123.688L-58.5479 149.628C-72.9827 173.301 -71.8406 203.443 -55.4475 226.017L-95.3635 265.932C-133.117 240.337 -185 267.322 -185 313.531C-185 345.22 -159.22 371 -127.531 371C-81.3601 371 -54.3098 319.156 -79.9328 281.364L-40.0168 241.449C-23.2891 253.597 -2.40253 257.398 17.0437 252.602L41.8519 311.242C18.3851 332.065 33.1487 371 64.5157 371C83.3683 371 98.7059 355.662 98.7059 336.81C98.7059 317.219 82.0545 301.224 61.9456 302.727L37.1322 244.074C46.6408 238.106 54.6012 229.891 60.2601 220.175L117.657 242.254C116.839 261.806 132.521 277.886 151.81 277.886C170.662 277.886 186 262.549 186 243.696C186 211.984 146 197.199 125.5 221.887Z" fill="black"/></svg>');
  display: block;
  width: fit-content;
  opacity: 0.1;
  z-index: -3;
}

</style>