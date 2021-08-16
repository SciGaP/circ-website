<template>
	<div>
		<div class="airavata-landing link-text">
			<div style="text-align:center; padding-top:3rem">
				<span style="font-size:48px;line-height:140%;font-weight:600">APACHE <span class="crim-colo">AIRAVATA</span></span><br/>
				<span style="font-size:24px;line-height:30px">#1 in Sceience Gateways</span>
			</div>
			<div class="f-s pos-r">
				<div><statCard title='Science Gateway' value="70+"/></div>
				<div>
					<div><img src="@/assets/Airavata_logo.png" alt=""></div>
					<div><statCard title='Science Gateway' value="70+"/></div>
				</div>
				<div><statCard title='Science Gateway' value="70+"/></div>
			</div>
		</div>
		<div class="airavata-desc f-s pos-r" style="padding:4rem 7rem;">
			<div style="margin-right:10%;width:55%">
				<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Apache Airavata</span></div>
				<p style="font-size:20px;line-height:160%;color:#45382B">Apache Airavata is a flexible middleware layer that enables you to compose, manage, execute, and monitor large scale applications and workflows on distributed computing resources. CIRC is the core group responsible for Apache Airavata and we provide full-stack expertise to custom build or retrofit Airavata into existing your research workflows.</p>
			</div>
			<div style="margin-top:10%">
				<img src="@/assets/Airavata_logo_ext.png" alt="">
			</div>
			<div class="block" style="right:0"> 
				<svg width="323" height="301" viewBox="0 0 323 301" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1135 0H382.122C391.537 0 399.23 7.79169 399.23 17.3001V283.7C399.23 293.208 391.537 301 382.122 301H17.1135C7.69858 301 0 293.208 0 283.7V17.3001C0 7.79169 7.69858 0 17.1135 0ZM133.839 106.303C146.235 94.7102 163.668 113.771 151.272 125.358L106.69 167.04L151.272 208.722C163.668 220.309 146.235 239.37 133.839 227.783L79.0654 176.567C73.5781 171.455 73.5781 162.644 79.0654 157.513L133.839 106.303ZM247.964 125.358C235.568 113.771 252.994 94.7102 265.397 106.303L320.164 157.513C325.658 162.644 325.658 171.455 320.164 176.567L265.397 227.783C252.994 239.37 235.568 220.309 247.964 208.722L292.546 167.04L247.964 125.358ZM222.338 79.4309C228.896 63.6828 252.575 73.7677 246.016 89.5221L176.779 254.655C174.017 261.262 166.487 264.366 159.941 261.579C153.408 258.792 150.338 251.178 153.088 244.564L222.338 79.4309ZM49.9624 13.4549C58.1496 13.4549 64.777 20.1697 64.777 28.4365C64.777 36.7096 58.1496 43.4244 49.9624 43.4244C41.7815 43.4244 35.1541 36.7096 35.1541 28.4365C35.1541 20.1697 41.7815 13.4549 49.9624 13.4549ZM100.839 13.4549C109.02 13.4549 115.654 20.1697 115.654 28.4365C115.654 36.7096 109.02 43.4244 100.839 43.4244C92.6585 43.4244 86.0248 36.7096 86.0248 28.4365C86.0248 20.1697 92.6585 13.4549 100.839 13.4549ZM151.723 13.4549C159.897 13.4549 166.537 20.1697 166.537 28.4365C166.537 36.7096 159.897 43.4244 151.723 43.4244C143.535 43.4244 136.902 36.7096 136.902 28.4365C136.902 20.1697 143.535 13.4549 151.723 13.4549ZM24.5114 57.6775H374.724V273.248H24.5114V57.6775Z" fill="black" fill-opacity="0.03"/>
				</svg>
			</div>
		</div>
	</div>
	
</template>

<script>
import statCard from '../overlay/statCard';
export default {
	name: 'Airavata',
	components: {statCard}
}
</script>

<style scoped>

.airavata-landing {
	background: url("~@/assets/Airavata_bg.png");
	width: 1440px;
	height: 674px;
}

</style>