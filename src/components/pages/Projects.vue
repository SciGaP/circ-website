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
            
            <div class="grid-container domains--list">
                <div class="grid-container-column support--1 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
                <div class="grid-container-column support--2 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
                <div class="grid-container-column support--3 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
                <div class="grid-container-column support--1 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
                <div class="grid-container-column support--2 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
                <div class="grid-container-column support--3 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div><div class="grid-container-column support--1 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
                <div class="grid-container-column support--2 link-text">
                    <projectCard
                            name="Electron microscopy Center"
                            company="Indiana University"
                            description="Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy."
                    />
                </div>
            </div>
        </div>

        <div class="global-padding" style="background:#FAF9F9">
			<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Key Publications</span></div>
            <div>
                <ol>
                    <li>
                            <publicationCard 
                                name="Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware."
                                authors="Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena"
                                description="In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015."
                            />
                    </li>
                    <br/><br/>
                    <li>
                            <publicationCard 
                                name="Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware."
                                authors="Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena"
                                description="In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015."
                            />
                    </li>
                    <br/>
                    <br/>
                    <li>
                            <publicationCard 
                                name="Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware."
                                authors="Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena"
                                description="In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015."
                            />
                    </li>
                    <br/>
                    <br/>
                    <li>
                            <publicationCard 
                                name="Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware."
                                authors="Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena"
                                description="In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015."
                            />
                    </li><br/>
                    <br/>

                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import projectCard from '../overlay/projectCard';
import publicationCard from '../overlay/publicationCard';
export default {
	name: 'projects',
	components: {
        projectCard,
        publicationCard
        }
}
</script>
<style scoped>

img {
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));border-radius: 5px 50px 5px 50px;
}
ol{
    counter-reset: li;
}
ol > li {
    position:relative; /* Create a positioning context */
    margin:0 0 0 2em; /* Give each list item a left margin to make room for the numbers */
    padding:0px 0px; /* Add some spacing around the content */
    list-style:none; /* Disable the normal item numbering */
    background:#f6f6f6;
    counter-increment:li; 
}
ol > li:before {
    
    content:counter(li); 
    position:absolute;
    top:0px;
    left:0em;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    width:61px;
    height:66px;
    margin-right:8px;
    padding:4px;
    border-top:2px;
    color:#FFFFFF;
    background:#990000;
    font-weight:bold;
    font-family:Source Sans Pro;
    font-size:40px;
    line-height:50px;
    text-align:center;
}

</style>