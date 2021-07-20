import App from './App.vue'
import router from "./router.js";
import Vue from 'vue';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


