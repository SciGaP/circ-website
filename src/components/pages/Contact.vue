<template>
  <div style="">
    <span class="bg-phone bg-phone--1">
    </span>
    <span class="bg-phone bg-phone--2">
    </span>
    <div class="contact-us f-s pos-r">
      <div class="contact-form-section pos-r">
        <form action="">
          <div class="pos-r f-s">
            <div class="pos-r" style="margin-right:10%;width:45%">
              <fieldset class="bor-rad hig-3r mar-dn">
                <legend>Name</legend>
                <input class="bor-minus wid-100" type="text" placeholder="John Doe">
              </fieldset>
            </div>
            <div class="pos-r" style="width:45%">
              <fieldset class="bor-rad hig-3r mar-dn">
                <legend>Email</legend>
                <input class="bor-minus wid-100" type="email" placeholder="johndoe@company.com">
              </fieldset>
            </div>
          </div>
          <fieldset class="bor-rad hig-3r mar-dn">
            <legend>Organization</legend>
            <input class="bor-minus wid-100" type="text" placeholder="Star Systems">
          </fieldset>
          <fieldset class="bor-rad hig-3r mar-dn">
            <legend>Subject</legend>
            <input class="bor-minus wid-100" type="text" placeholder="Collaboration with CIRC">
          </fieldset>
          <fieldset class="bor-rad hig-3r--message mar-dn">
            <legend>Message</legend>
            <input class="bor-minus wid-100" type="text" placeholder="Type your message here">
          </fieldset>
          <input class="bor-minus hig-3r wid-100 submit-button bg-crim-colo" type="submit" value="Submit">
        </form>
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
  top: calc(-257px - 357px - 10vh);
  margin-bottom: calc(-257px - 357px + 10vh);
}

.input:focus {
    outline: none !important;
}

.submit-button {
  color: white;
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

.mar-dn {
  margin-bottom: 1.5rem;
}
.hig-3r {
  height: 3rem;
}

.hig-3r--message {
  height:  5rem;
}
.bor-rad {
  border-radius: 10px;
}

.bor-minus {
  border: 0;
}

.contact-head-text::after {
  content: ' ';
  display:block;
  width: 50px;
  border: 5px solid #990000;
  border-radius:0px;
  margin-bottom: 10px;
}

.contact-form-section {
  z-index: 1;
  width: 40%;
  margin-right: 8vw;
  padding: 3rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);;
}

.contact-b-form {
  padding: 1.5rem;
}

.contact-b-form::after, .contact-b-form::before {
  box-sizing: border-box;
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

.bg-phone {
  z-index: -1;
}

.bg-phone--1::after {
  content: url('data:image/svg+xml; charset=UTF-8, <svg width="155" height="257" viewBox="0 0 155 257" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M230.889 198.944C227.715 196.493 196.082 172.033 188.23 166.361C177.654 158.726 166.423 162.349 162.076 165.264C152.686 171.365 138.352 180.529 136.006 181.747C135.844 181.78 135.523 181.771 135.222 181.739C129.672 178.149 104.89 161.582 93.979 145.033C83.3422 128.951 78.1167 116.5 74.6589 108.26C73.8613 106.355 73.1447 104.658 72.4788 103.172C71.5831 101.169 72.5059 99.7699 73.4252 98.9913C76.2813 97.5055 87.3678 91.6277 93.5667 86.6562C103.007 79.0934 101.868 69.0138 101.702 67.8667C101.077 63.6173 95.5406 26.1097 93.5599 18.6778C91.0959 9.36772 79.3335 3.37102 58.6073 0.857046C44.1815 -0.893229 25.7537 14.1936 20.0753 19.2245C6.31873 29.8213 1.26225 43.4609 0.0522057 73.0165C-1.20515 103.82 20.4437 141.117 44.0294 176.832C69.0144 214.67 125.923 248.371 154.126 254.947C182.423 261.547 205.908 249.464 214.75 244.912L215.412 244.57C226.979 238.666 234.77 219.861 236.078 215.523C238.636 207.066 234.246 201.301 230.889 198.944ZM219.397 211.63C217.406 218.23 210.66 229.448 206.739 231.445L206.036 231.813C198.891 235.489 179.916 245.254 158.561 240.273C136.611 235.153 82.1254 204.284 58.9622 169.207C37.7494 137.075 16.2052 100.587 17.3139 73.5573C18.4563 45.5113 23.0396 37.0482 31.6451 30.4929C31.8107 30.3621 31.9797 30.2284 32.1352 30.0887C40.8353 22.3417 52.5571 15.4417 56.2515 15.8904C60.1655 16.3658 63.3799 16.9453 66.0163 17.5604C73.8207 19.382 76.4639 21.5067 76.7512 22.1248C78.2586 27.7887 82.9197 58.4705 84.5623 69.6378C84.5792 69.7804 84.8496 73.1116 81.9462 75.4384C77.2683 79.1885 67.4764 84.4839 64.0964 86.2075C63.7922 86.365 63.4982 86.5373 63.2143 86.7245C58.7797 89.6813 51.658 98.085 56.4238 108.732C57.0491 110.132 57.7184 111.725 58.4688 113.517C62.1293 122.247 67.6691 135.441 79.0496 152.655C93.1881 174.096 125.034 194.014 126.38 194.852C126.9 195.173 127.458 195.447 128.043 195.661C128.952 195.981 137.027 198.757 144.544 194.93C148.765 192.775 168.437 180.012 172.236 177.54C174.619 176.158 176.61 177.608 177.269 178.089C184.908 183.608 217.366 208.703 219.583 210.415C219.597 210.62 219.58 211.018 219.397 211.63Z" fill="black" fill-opacity="0.03"/></svg>');
  display: block;
  width: fit-content;
  margin-left: calc(100vw - 155px);
  margin-top: 10vh;
}

.bg-phone--2::before {
  content: url('data:image/svg+xml; charset=UTF-8, <svg class="svg-phone--2" width="219" height="374" viewBox="0 0 219 374" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M210.087 288.864C205.467 285.294 159.421 249.675 147.992 241.414C132.597 230.297 116.248 235.572 109.921 239.817C96.2533 248.701 75.3876 262.047 71.9731 263.821C71.737 263.869 71.2696 263.856 70.8317 263.808C62.7531 258.581 26.6796 234.455 10.7979 210.356C-4.68539 186.936 -12.2917 168.804 -17.3249 156.804C-18.486 154.03 -19.529 151.559 -20.4983 149.395C-21.8021 146.478 -20.4589 144.44 -19.1207 143.306C-14.9633 141.143 1.17434 132.583 10.1976 125.343C23.9392 114.33 22.2811 99.651 22.0401 97.9807C21.1299 91.7924 13.0709 37.1714 10.1878 26.3485C6.6011 12.7906 -10.5205 4.05781 -40.6899 0.396795C-61.6885 -2.15207 -88.5123 19.8184 -96.7779 27.1447C-116.802 42.5764 -124.163 62.4394 -125.924 105.48C-127.754 150.338 -96.2416 204.652 -61.9099 256.664C-25.5413 311.765 57.2968 360.843 98.3493 370.419C139.539 380.03 173.724 362.435 186.594 355.805L187.559 355.308C204.395 346.709 215.736 319.325 217.64 313.007C221.364 300.691 214.973 292.296 210.087 288.864ZM193.359 307.338C190.461 316.949 180.641 333.285 174.934 336.193L173.911 336.73C163.51 342.083 135.889 356.303 104.804 349.05C72.8538 341.594 -6.45657 296.641 -40.1733 245.559C-71.0512 198.767 -102.411 145.63 -100.798 106.268C-99.1346 65.4253 -92.4631 53.1007 -79.9368 43.5544C-79.6957 43.364 -79.4497 43.1693 -79.2234 42.9659C-66.5593 31.6842 -49.4967 21.6359 -44.1192 22.2893C-38.4218 22.9817 -33.7429 23.8256 -29.9053 24.7214C-18.545 27.3741 -14.6976 30.4682 -14.2794 31.3683C-12.0851 39.6164 -5.30038 84.2973 -2.90926 100.56C-2.88467 100.768 -2.49106 105.619 -6.71734 109.007C-13.5266 114.468 -27.7799 122.18 -32.6999 124.69C-33.1427 124.919 -33.5707 125.17 -33.984 125.443C-40.439 129.748 -50.8055 141.986 -43.8683 157.492C-42.9581 159.53 -41.9839 161.849 -40.8916 164.459C-35.5633 177.173 -27.4994 196.387 -10.9338 221.456C9.64658 252.678 56.0028 281.685 57.961 282.905C58.7187 283.373 59.5305 283.771 60.3816 284.082C61.7051 284.55 73.459 288.592 84.4011 283.018C90.5461 279.88 119.181 261.294 124.711 257.694C128.179 255.681 131.077 257.793 132.036 258.494C143.156 266.53 190.402 303.076 193.63 305.568C193.65 305.867 193.625 306.447 193.359 307.338Z" fill="black" fill-opacity="0.03"/></svg>');
  display: block;
  width: fit-content;
  margin-left: 0px;
  /* top: 274px; */
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