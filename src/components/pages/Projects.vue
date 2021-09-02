<template>
    <div class="link-text">
        <div class="f-s pos-r global-padding">
            <div style="width:50%; padding-top: 40px;">
                <div>
                    <span style="font-size:56px;line-height:120%">
                    <b>
                    We're 
                    <span class="crim-colo">proud </span> of the <span class="crim-colo"> work</span> we have done!</b></span>
                    <p style="font-size:20px;line-height:160%;color:#45382B"> we have taken care of the computational requirements
                        of many Scientific communities and delivered excellent products to them.
                    </p>
                </div>
                <br/>
                <div class=square>
                    <div class="arrow" style="cursor: pointer;">
                    <svg v-on:click="$router.push({path: './projects#projects'})" width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35 0.316578L10 7.94991L17.65 0.316578L20 2.66658L10 12.6666L0 2.66658L2.35 0.316578Z" fill="black"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div style="width:60%">
				    <img src="@/assets/Macbook Pro Tilted Screen Mockup.png" alt="">
            </div>

        </div>


        
        <div id="projects" class="global-padding" style="background:#FAF9F9">
			<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Projects</span></div>
            

            <div style="display:flex;column-gap:24px;padding-bottom:6rem">
				<div v-for="filter in filterList" :key="filter">
					<button class="filter-button link-text" :class="isFilterSelected(filter)?'filter-button-selected':''" v-on:click="onClickFilter(filter)">{{filter}}</button>
				</div>
			</div>

            <div class="grid-container" style="column-gap:20px;row-gap:60px;">
				<div v-for="project in filteredProjects" :key="project.id">
					<projectCard :project="project" />
				</div>
			</div>
        </div>

        <div id="publications" class="global-padding" style="background:#FAF9F9">
			<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Key Publications</span></div>
            <div>
                <ol v-for="publication in publicationList" :key="publication.id">
                    <li>
						<publicationCard
							:id="publication.id"
							:name="publication.name"
							:authors="publication.authors"
							:description="publication.description"
                        />
                    </li>
                    <br/><br/>
                </ol>
				<button v-on:click="allpublications()" class="bor-rad hig-3r airvata-button link-text bg-crim-colo">View all publications</button>
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
        },
    data: function(){
        return {
            test:0,
            selected_filters: [],
			publicationList: [],
			allPublicationList: [
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 1,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 2,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 3,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 4,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 5,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 6,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 7,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 8,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 9,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 10,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 11,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 12,
				},
				{
					name:"Apache Airavata as a laboratory: architecture and case study for component-based gateway middleware.",
					authors:"Marru Suresh, Marlon Pierce, Sudhakar Pamidighantam, and Chathuri Wimalasena",
					description:"In Proceedings of the 1st Workshop on The Science of Cyberinfrastructure: Research, Experience, Applications and Models, pp. 19-26. ACM, 2015.",
					link: '',
					id: 13,
				},
			],
            projectsList:[
                {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"science",
                    id:1   
                },
                 {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"Social",
                    id:2   
                },
                 {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"Physics",
                    id:3     
                }, 
                {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"science",
                    id:4   
                },
                 {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"Social",
                    id:5  
                },
                 {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"Physics",
                    id:6   
                },
                {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"science",
                    id:7    
                },
                 {
                    name:"Electron microscopy Center",
                    company:"Indiana University",
                    description:"Providing user friendly access to state-of-the-art equipment, service and expertise in electron microscopy.",
                    domain:"Social",
                    id:8   
                }
            ]
        }
    },
	mounted(){
		this.publicationList = this.allPublicationList.slice(0,5);
	},
    computed: {
		filterList: function() {
			var filter_list = [];
			this.projectsList.forEach(x => filter_list.push(x.domain));
			return [... new Set(filter_list)];
		},
		filteredProjects: function() {
			if(this.selected_filters.length==0)
				return this.projectsList;
			return this.projectsList.filter(project => this.selected_filters.includes(project.domain));
		}
	},
	methods: {
		isFilterSelected(filter) {
			return this.selected_filters.includes(filter);
		},
		onClickFilter(filter) {
			if(this.selected_filters.includes(filter)){
				this.selected_filters = this.selected_filters.filter(item => item != filter);
			}else{
				this.selected_filters.push(filter);
			}			
		},
		allpublications() {
			this.publicationList = [...this.allPublicationList];
		}
	}
}
</script>
<style scoped>

img {
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));border-radius: 5px 50px 5px 50px;
}

ol {
	padding: 0px;
	margin: 0px;
}

ol > li {
    position:relative; /* Create a positioning context */
    margin:0 0 0 0rem; /* Give each list item a left margin to make room for the numbers */
    padding:0px 0px; /* Add some spacing around the content */
    list-style:none; /* Disable the normal item numbering */
    background:#f6f6f6;
}

</style>