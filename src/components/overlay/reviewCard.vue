<template>
  <div class="review-card bg-color-white link-text">
    <div style="padding:30px">
      <span style="line-height: 180%;font-size:20px;color: #333333;">"{{ review }}"</span>
    </div>
    <div class="f-s block" style="padding-left:30px">
      <div class="pos-r" style="padding-right:10px">
        <img :src="require(`@/assets/${imageLink}`)" :alt="firstName[0].toUpperCase()">
      </div>
      <div class="pos-r" style="lin-height:30px">
        <span style="font-size:20px"><b>{{ firstName }}, {{ position }}</b></span> <br/>
        <span style="font-size:18px;font-weight:600;color:#949494;">{{ company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviewCard',
  props: ['review', 'imageLink', 'position', 'company', 'firstName'],
}
</script>

<style scoped>

.review-card {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  width: 387px;
  height: 365px;
}
.review-card::after {
  content: ' ';
  height: 5px;
  width: 387px;
  background: #990000;
  display: block;
  bottom: 0;
  position: absolute;
}

img {
  border-radius: 50%;
  width: 59px;
  height: 59px;
  border: 1px solid #990000;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 20px rgba(153, 0, 0, 0.1));

}

</style>