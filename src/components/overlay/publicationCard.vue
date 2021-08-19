<template>
	<div class="publication-card link-text">
		<div style="padding:0px 15px">
			<span style="font-size:24px;line-height:120%;color:#333333"><b>{{ name }}</b></span><br/><br/>
			<span style="padding-top:15px;font-size:20px;font-style:italic;ine-height:140%;color:#990000;align:center">{{ authors }}</span>
			<p style="font-size:20px;line-height:160%;color:#45382B">{{ description }}</p>
			<a href="" style="font-size:20px line-height:140%">View Publication ></a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'publicationCard',
	props: ['name', 'authors', 'description', 'publicationLink']
}
</script>

<style scoped>

.publication-card {
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
    padding: 10px 60px;
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