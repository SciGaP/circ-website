<template>
  <div class="review-card bg-color-white link-text" :style="style">
    <div style="padding:calc(var(--width)*0.1)">
      <span style="line-height: 180%;font-size:20px;color: #333333;">"{{ review }}"</span>
    </div>
    <div class="f-s" style="padding-left:calc(var(--width)*0.1);position: absolute;bottom: 0;padding-bottom: calc(var(--height)*0.05);">
      <div class="pos-r" style="padding-right:10px">
        <img :src="require(`@/assets/${imageLink}`)" :alt="firstName[0].toUpperCase()">
      </div>
      <div class="pos-r" style="line-height:30px">
        <span style="font-size:20px"><b>{{ firstName }}, {{ position }}</b></span> <br/>
        <span style="font-size:18px;font-weight:600;color:#949494;">{{ company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviewCard',
  props: ['review', 'imageLink', 'position', 'company', 'firstName', 'width', 'height'],
  computed: {
      style () {
        return '--width: ' + (this.width?this.width:'387px') + ';' + '--height:' + (this.height? this.height:'365px')+';';
      }
    },
}
</script>

<style scoped>

.review-card {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  width: var(--width);
  height: var(--height);
}
.review-card::after {
  content: ' ';
  height: 5px;
  width: var(--width);
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