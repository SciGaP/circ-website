import App from './App.vue'
import router from "./router.js";
import Vue from 'vue';

new Vue({
    router,
    render: h => h(App),
    created () {
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect
            delete sessionStorage.redirect
            this.$router.push(redirect)
        }
    }
}).$mount('#app')


