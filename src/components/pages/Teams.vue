<template>
	<div class=link-text>
		<div class="">
			<img src="@/assets/Teams_logo.png" alt="">
		</div>

		<div class="global-padding">
			<div style="padding-bottom:2rem"><span class="home-head-text head-text link-text">Our Team is our strength</span></div>
			<p style="font-size:20px;ine-height:34px">The Caliber of our team is defined by its multidisciplinary nature. We are a group of professionals ranging from Computer Scientists to Domain Experts. The breadth of expertise our team covers lets us customize our solution to your needs.</p>

			<div style="padding-bottom:2rem;padding-top:3rem"><span class="home-head-text head-text link-text">People</span></div>

			

			<div class="grid-container--2" style="column-gap:94px;row-gap:110px;">
				<div v-for="people in peoples" :key="people.orc_id">
					<PeopleCard :people="people" />
				</div>
			</div>

		</div>

		<div class="global-padding" style="background: rgba(234, 234, 234, 0.4);">
			<span style="font-size:44px;line-height:120%"><b>Have a <span class="crim-colo">project</span> in mind? <br/>
			Our <span class="crim-colo">team</span> can <span class="crim-colo">help</span> you.</b></span>
		</div>
	</div>
</template>

<script>
import PeopleCard from "../overlay/PeopleCard";
export default {
	name: 'Teams',
	components : {PeopleCard},
	data: function() {
		return {
			selected: ["All"],
			peoples: [
				{
					firstName: "Marlon", 
					lastName: "Pierce", 
					profileLink: "f", 
					imageLink: "marlon.png",
					description: "Marcus is a research software engineer with a particular interest in web development. He's been working on science gateway projects, off and on, for almost two decades. He loves the challenge of creating a user interface that is not only easy to use but that also allows researchers to be more effective with their research", 
					position: "Director", 
					orc_id: "0000-0052-6474-995X ", 
					role: "Computer Scintists",
					talkAbout: ["Web User Interfaces", "Python APIs", "Visualisation"]
				},
				{
					firstName: "Marlon", 
					lastName: "Pierce", 
					profileLink: "f", 
					imageLink: "marlon.png",
					description: "Marcus is a research software engineer with a particular interest in web development. He's been working on science gateway projects, off and on, for almost two decades. He loves the challenge of creating a user interface that is not only easy to use but that also allows researchers to be more effective with their research", 
					position: "Director", 
					orc_id: "0000-0052-6494-095X ", 
					role: "Computer Scintists",
					talkAbout: ["Web User Interfaces", "Python APIs", "Visualisation"]
				},
				{
					firstName: "Marlon", 
					lastName: "Pierce", 
					profileLink: "f", 
					imageLink: "marlon.png",
					description: "Marcus is a research software engineer with a particular interest in web development. He's been working on science gateway projects, off and on, for almost two decades. He loves the challenge of creating a user interface that is not only easy to use but that also allows researchers to be more effective with their research", 
					position: "Director", 
					orc_id: "0000-0052-6474-095X ", 
					role: "Student",
					talkAbout: ["Web User Interfaces", "Python APIs", "Visualisation"]
				},
				{
					firstName: "Marlon", 
					lastName: "Pierce", 
					profileLink: "f", 
					imageLink: "marlon.png",
					description: "Marcus is a research software engineer with a particular interest in web development. He's been working on science gateway projects, off and on, for almost two decades. He loves the challenge of creating a user interface that is not only easy to use but that also allows researchers to be more effective with their research", 
					position: "Director", 
					orc_id: "0000-0052-6874-095X ", 
					role: "Computer Scintists",
					talkAbout: ["Web User Interfaces", "Python APIs", "Visualisation"]
				},
				{
					firstName: "Marlon", 
					lastName: "Pierce", 
					profileLink: "f", 
					imageLink: "marlon.png",
					description: "Marcus is a research software engineer with a particular interest in web development. He's been working on science gateway projects, off and on, for almost two decades. He loves the challenge of creating a user interface that is not only easy to use but that also allows researchers to be more effective with their research", 
					position: "Director", 
					orc_id: "0000-9052-6474-095X ", 
					role: "Physics",
					talkAbout: ["Web User Interfaces", "Python APIs", "Visualisation"]
				}
			]
		}
	},
	computed: {
		filterList: function() {
			var filter_list = ["All"];
			this.peoples.forEach(x => filter_list.push(x.role));
			return [... new Set(filter_list)];
		},
		filteredPeoples: function() {
			return this.peoples;
		}
	}
}
</script>

<style scoped>

</style>