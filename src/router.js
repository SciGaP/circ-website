// import Router from "vue-router";

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("./components/pages/Home")
    }
]

export default new createRouter({
    history: createWebHistory('/'),
    routes
})