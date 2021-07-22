<template>
  <div class='home_page'>
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
      
    </div>
    <div class="supported_by">

    </div>
    <div class="collaborators_of">

    </div>
    <div class="domains">

    </div>
    <div class="team">

    </div>
    <div class="impact_work">

    </div>
    <div class="worked_with">

    </div>
    <div class="reviews"></div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>


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
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25));
  border-radius: 0px 50px 0px 50px;
}

</style>