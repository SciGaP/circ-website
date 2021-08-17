<template>
    <div class="link-text">
        <div class="f-s pos-r global-padding">
            <div style="width:50%">
                <div>
                    <span style="font-size:56px;line-height:120%">
                    <b>
                    We're 
                    <span class="crim-colo">proud </span> of the <span class="crim-colo"> work</span> we have done!</b></span>
                    <p style="font-size:20px;line-height:160%;color:#45382B"> we have taken care of the computational requirements
                        of many Scientific communities and delivered excellent products to them.
                    </p>
                </div>
            </div>
            <div style="width:60%">
				    <img src="@/assets/Macbook Pro Tilted Screen Mockup.png" alt="">
            </div>

        </div>
        <div class="global-padding" style="background:#FAF9F9">
			<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Projects</span></div>
        </div>

        <div class="global-padding" style="background:#FAF9F9">
			<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Key Publications</span></div>
        </div>
    </div>
</template>

<script>
import reviewCard from "../overlay/reviewCard";
export default {
	name: 'projects',
	components: {reviewCard}
}
</script>
<style scoped>

img {
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));border-radius: 5px 50px 5px 50px;
}

</style>