<template>
  <div class="bg-color-white stat-card link-text">
    <div class="stat-card-content">
      <div>
        <span>
          <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4965 3.81114C49.8172 3.87462 58.2617 -2.41709 65.7511 1.47688C73.5305 5.52162 77.8286 14.9046 80.0736 23.8685C82.2447 32.5375 80.2179 41.4091 77.9132 50.0382C75.5237 58.9845 73.4528 68.7396 66.5761 74.4033C59.6291 80.1251 50.2444 79.6611 41.4965 80.032C32.3622 80.4192 21.5549 83.3639 14.9358 76.5925C8.29631 69.8003 12.9758 57.634 10.372 48.1914C7.87989 39.1537 -1.18124 32.2149 0.128734 22.8947C1.47419 13.3221 8.70774 4.92565 16.9902 1.10484C24.7247 -2.4632 33.0789 3.74691 41.4965 3.81114Z" fill="#F0EFEF" fill-opacity="0.6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" transform="translate(6.5,6)" d="M34.8366 3.24653C41.8218 3.30061 48.911 -2.05901 55.1984 1.25808C61.7293 4.7036 65.3376 12.6965 67.2222 20.3324C69.0449 27.7172 67.3435 35.2744 65.4086 42.6251C63.4026 50.2461 61.664 58.5559 55.8911 63.3806C50.059 68.2547 42.1805 67.8595 34.8366 68.1754C27.1683 68.5052 18.0955 71.0137 12.5387 65.2455C6.9648 59.4595 10.8933 49.0957 8.7074 41.052C6.61522 33.3531 -0.991661 27.4423 0.108073 19.5029C1.23759 11.3484 7.3102 4.19592 14.2634 0.941157C20.7565 -2.09829 27.7699 3.19182 34.8366 3.24653Z" fill="#EDEBEB"/>
            <path transform="translate(20.5,26.5)" d="M36.4787 25.064C33.8804 15.7916 31.2052 9.38028 28.3096 5.48098C25.8328 2.14583 23.1924 0.592468 20.0001 0.592468C16.8077 0.592468 14.1673 2.14583 11.6905 5.48098C8.79484 9.38028 6.11969 15.7917 3.52148 25.064H0V27.4077H40V25.064H36.4787ZM19.9674 2.93684C19.9784 2.93684 19.989 2.93614 20 2.93614C20.5298 2.93614 21.6466 3.40731 23.1738 6.56294C24.9576 10.2485 26.7273 16.4697 28.4387 25.0639H11.5611C15.6014 4.78505 18.9663 2.97411 19.9674 2.93684Z" fill="#990000"/>
          </svg>
        </span>
      </div>
      <div><span class="crim-colo" style="line-height: 140%; font-size:32px;"><b>{{ value }}</b></span></div>
      <div><span>{{ title }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'statCard',
  props: ['title', 'value']
}
</script>

<style scoped>
.stat-card {
  box-shadow: 0px 4px 20px rgba(51, 51, 51, 0.12);
  border-radius: 10px;
  width: min-content;
  width: -moz-min-content;
}

.stat-card-content {
  padding-top: 15px;
  padding-bottom: 25px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
  width: max-content;
  height: max-content;
  text-align: center;
}

</style>