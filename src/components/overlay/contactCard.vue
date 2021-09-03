<template>
  <div class='link-text contact-card' style="">
	<div></div>
	<div style="padding: 24px">
		<div class="f-s pos-r">
			<div class="pos-r">
				<img style="width:85px;height:85px" src="@/assets/marlon.png" alt="">
			</div>
			<div class="pos-r" style="padding-left:20px">
				<span style="font-size:24px;line-height:30px">Let's talk!</span>
				<p style="font-size:14px; line-height:18px">Have a unique requirement? Want to get a better understanding of how we can contribute to your project? <br/> <br/>Get in touch to discuss more.</p>
			</div>
		</div>
		<div style="">
			<button v-on:click="$router.push({path: './contact'})" class="airvata-button link-text bg-crim-colo" style="height:60px; width:100%;border: .5px solid #a0a0a0;;border-radius:5px">Contact us</button>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	name: 'contactCard',
}
</script>

<style scoped>
.contact-card {
	width: 387px; 
	height: 270px;
	background: #FFFFFF;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
	z-index:20;
	bottom:0;
  	left: 67vw;
	position: inherit;
}
</style>