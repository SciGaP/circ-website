<template>
  <div class="team-card bg-color-white link-text">
    <div style="padding: 70px 30px 20px 30px">
      <img :src="require(`@/assets/${imageLink}`)" :alt="firstName[0].toUpperCase()+''+lastName[0].toUpperCase()">
      <br/>
      <span style="font-size:36px;line-height:120%;"><b><span class="crim-colo">{{firstName}}</span> <span>{{lastName}}</span></b></span>
      <br/>
      <span style="font-size:24px;line-height:140%;font-weight:600;">{{position}}</span>
      <br/>
      <p><b>Talk to {{firstName}} about</b> <br/> {{talkAbout}}</p>
      <a :href="`${profileLink}`">View Google scholar Profile ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamCard',
  props: ['firstName', 'lastName', 'position', 'talkAbout', 'profileLink', 'imageLink'],
  computed: {
    // altName: () => .firstName[0].toUpperCase()+''+this.lastName[0].toUpperCase()
  }
}
</script>

<style scoped>

.team-card {
  box-shadow: 0px 4px 20px rgba(51, 51, 51, 0.15);
  border-radius: 5px;
  text-align: center;
  width: 345px;
  height: 506px;
}

img {
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: #006298;
}

</style>