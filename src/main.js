import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { request } from './network/requset'

request({
    url: '/home/multidata',
}).then(res => {
    // console.log(res);
}).catch(err => {
    // console.log(err);
})


Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})