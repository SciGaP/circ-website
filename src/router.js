import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export default new Router({
    base: process.env.NODE_ENV === 'production'? '/circ-website': '',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("./components/pages/Home")
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import("./components/pages/Contact")
        },
        {
            path: '/airavata',
            name: 'Airavata',
            component: () => import("./components/pages/Airavata")
        },
        {
            path: '/case-study',
            name: 'Case-Study',
            component: () => import("./components/pages/CaseStudy")
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import("./components/pages/Projects")
		},
		{
            path: '/services',
            name: 'Services',
            component: () => import("./components/pages/Services")
        },
        {
            path: '/about-us',
            name: 'About-Us',
            component: () => import("./components/pages/AboutUs")
        },
        {
            path: '/teams',
            name: 'Teams',
            component: () => import("./components/pages/Teams")
        },

        {
            path: '/collaborations',
            name: 'Collaborations',
            component: () => import("./components/pages/Collaborations")
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if(to.hash) 
            return { selector: to.hash}
        else if (savedPosition)
            return savedPosition
        return { x: 0, y: 0 }
    }
})