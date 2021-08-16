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
            name: 'Case_Study',
            component: () => import("./components/pages/CaseStudy")
        },
        {
            path: '/services',
            name: 'Services',
            component: () => import("./components/pages/Services")
        }
    ]
})