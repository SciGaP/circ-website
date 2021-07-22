<template>
  <div class="contact-us f-s pos-r">
    <div class="contact-form-section pos-r">
      
    </div> 
    <div class="contact-details-section link-text pos-r">
      <span class="contact-head-text no-after">Have a Gateway Requriment?</span>
      <div class='contact-info-section'>
        <span class='contact-head-text'>Let's <span class='crim-colo'> Collaborate</span>.</span>
        <p class='contact-content-text'>We would love to connect and discuss more about our potential collaboration. 
          You can fill the form and <b>Schedule a meeting</b> with us or wait for us to <b>get back via email</b></p>
      </div>
      <div class="contact-info-section">
        <span class='contact-head-text'>Other ways</span>
        <div class="contact-ways f-s pos-r">
          <div class='contact-way-section pos-r'>
            <span class="contact-head-text no-after">Visit</span>
            <p>Cyberinfrastructure Building, 2709 E 10th St, Bloomington, IN 47408</p>
          </div>
          <div class='contact-way-section pos-r'>
            <span class="contact-head-text no-after">Email</span>
            <p><a class="contact-link cl-in" href="mailto:circ@iu.edu">circ@iu.edu</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'  
}
</script>


<style scoped>

.contact-us {
  margin: 10vh;
}

.contact-head-text {
  font-weight: bold;
  font-size: 40px;
  line-height: 140%;
}

.contact-content-text {
  padding-bottom: 30px;
}

.contact-details-section {
  width: 40%;
}

.contact-head-text::after {
  content: ' ';
  display:block;
  width: 30px;
  border: 4px solid #990000;
  border-radius:0px;
  margin-bottom: 10px;
  
}

.contact-info-section {
  margin-bottom: 30px;
}

.contact-ways {
  margin-top: 20px;
}

.contact-way-section {
  width: 40%;
  padding-right: 10%;
  height: auto;
}

.contact-content-text {
  font-size: 20px;
  line-height: 140%;
  font-weight: normal;
}

.contact-link {
  text-decoration: none;
}

.no-after::after{
  content: none
}


</style>