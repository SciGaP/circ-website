<template>
	<div class="publication-card link-text">
		<div class="f-s pos-r">
			<div class="number-publication">
				<span style="vertical-align: middle;">{{id}}</span>
			</div>
			<div style="padding:0px 21px;padding-bottom:34px" >
				<span class="publication-head" style="font-size:24px;line-height:120%;color:#333333"><b>{{ name }}</b></span>
				<span style="display:block;margin-top:15px;font-size:20px;font-style:italic;ine-height:140%;color:#990000;align:center">{{ authors }}</span>
				<p style="margin: 20px 0px;font-size:20px;line-height:160%;color:#45382B">{{ description }}</p>
				<a href="" style="font-size:20px line-height:140%">View Publication ></a>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'publicationCard',
	props: ['name', 'authors', 'description', 'publicationLink','id']
}
</script>

<style scoped>

.publication-card {
	background: #FFFFFF;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
	border-radius: 5px;
    padding: 20px 0px;
}

.number-publication {
	top: 0;
	left: 0;
	width: 61px;
	height: 66px;
    box-sizing: border-box;
    margin-left: 0px;
    border-radius: 5px;
    color: #FFFFFF;
    background: #990000;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
	margin-top: -20px;
}

.publication-head::after {
	content: "";
	display: block;
	height: 1px;
	background: #EDEBEB;
	border-radius: 5px;
	width: 100%;
	margin-top:20px;

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