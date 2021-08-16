<template>
	<div class="project-card link-text">
		<div style="background: #C4C4C4; width:387px; height:191px;border-radius: 5px 5px 0px 0px;">
			<!-- <img :src="require(`@/assets/${imageLink}`)" :alt="firstName[0].toUpperCase()+''+lastName[0].toUpperCase()"> -->
		</div>
		<div style="padding:20px 15px">
			<span style="font-size:32px;line-height:120%;color:#333333"><b>{{ name }}</b></span><br/>
			<span style="padding-top:15px;font-size:24px;ine-height:140%;color:#868585">{{ company }}</span><br/>
			<p style="font-size:20px;line-height:160%;color:#45382B">{{ description }}</p>
			<a href="">View Project ></a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'projectCard',
	props: ['name', 'company', 'description', 'projectLink', 'imageLink']
}
</script>

<style scoped>

.project-card {
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
}

img {
	width: 387px;
	height: 191px;
}

a {
  text-decoration: none;
  color: #006298;
}
</style>