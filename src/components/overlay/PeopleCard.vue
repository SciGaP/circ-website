<template>
  <div class="link-text" style="width:552px">
    <div class="f-s pos-r">
      <div>
        <img width="215px" height="197px" :src="require(`@/assets/${imageLink}`)" :alt="firstName[0].toUpperCase()+''+lastName[0].toUpperCase()">
      </div>
      <div>
        <span class="crim-colo" style="font-size:32px;line-height:140%;font-weight:600;">{{ firstName }} <span style="color:#000000"></span></span><br/>
        <span style="font-size:20px;line-height:140%;font-weight:600;padding-top:9px">{{ position }}</span>
        <a href="" style="padding-top:9px">View Google scholar Profile ></a><br/>
        <span style="font-size:20px;line-height:160%;color:#333333;padding-top:5px">ORCID: <u>{{ orc_id }}</u></span>
      </div>
    </div>
    <p style="font-size:20px;line-height:30px;color:#000000">{{ description }}</p>
    <div class="f-s pos-r">
      <div>
        <span style="font-size:20px;line-height:24px">Talk to Marcus about :</span>
      </div>
      <div class="grid-container--2">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleCard',
  peops: {
    firstName: String, 
    lastName: String, 
    profileLink: String, 
    imageLink: String,
    description: String, 
    position: String, 
    orc_id: String, 
    role: String,
    talkAbout: Array
  }
}
</script>

<style scoped>

img {
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: #006298;
}

</style>