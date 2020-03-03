import Toast from './Toast'

const obj = {};

obj.install = function(Vue) {
    // console.log('执行了obj的install函数', Vue);
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast);

    //2.new 的方式，根据组件构造器可以创建出一个组件对象
    const toast = new toastConstructor();

    //3.将组件对象手动挂载到某一个元素上
    toast.$mount(document.createElement('div'));

    //4.toast.$el对应的就是div
    document.body.appendChild(toast.$el);

    //5.最后添加到原型对象上
    Vue.prototype.$toast = toast;
}

export default obj;