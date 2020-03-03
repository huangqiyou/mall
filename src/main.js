import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import toast from 'components/common/toast' //弹窗提示插件
import Fastclick from 'fastclick' //移动端300ms插件
import VueLazyload from 'vue-lazyload' //图片懒加载插件

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//配置解决移动端300ms延迟
Fastclick.attach(document.body)

//配置图片懒加载插件
Vue.use(VueLazyload, {
    //配置图片加载占位图
    loading: require('./assets/img/common/loading.png')
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})