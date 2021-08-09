import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

export default new Router({
    base: process.env.publicPath,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import("@/components/pages/Home")
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import("@/components/pages/Contact")
        }
    ]
})