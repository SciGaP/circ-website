<template>
  <div class="link-text" style="width:552px">
    <div class="f-s pos-r">
      <div>
        <img width="185px" height="185px" :src="require(`@/assets/${people.imageLink}`)" :alt="people.firstName[0].toUpperCase()+''+people.lastName[0].toUpperCase()">
      </div>
      <div style="padding-left:35px;margin-top:15px">
        <span class="crim-colo" style="font-size:32px;line-height:140%;font-weight:600;">{{ people.firstName }} <span style="color:#000000">{{ people.lastName }}</span></span><br/>
        <span style="padding-top:9px;font-size:20px;line-height:140%;font-weight:600;padding-top:9px">{{ people.position }}</span><br/>
        <a href="" style="padding-top:9px">View Google scholar Profile ></a><br/>
        <span style="padding-top:5px;font-size:20px;line-height:160%;color:#333333;padding-top:5px">ORCID: <u>{{ people.orc_id }}</u></span>
      </div>
    </div>
    <p style="margin-top:19px;margin-bottom:5px;font-size:20px;line-height:30px;color:#000000">{{ people.description }}</p>
    <div class="f-s pos-r">
      <div>
        <span style="font-size:20px;line-height:24px">Talk to Marcus about :</span>
      </div>
      <div class="grid-container--2" style="padding-left:14px;font-size:20px;line-height:24px">
        <div v-for="x in people.talkAbout" :key="x">
          <li>{{ x }}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleCard',
  props: {
    people: Object
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