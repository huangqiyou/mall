import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const $axios = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 50000,
        })
        //2.axios拦截器
        //拦截请求
    $axios.interceptors.request.use(config => {
        // console.log(config);
        return config;
    }, err => {
        // console.log(err)
    });
    //拦截响应
    $axios.interceptors.response.use(res => {
        // console.log(res);
        return res.data;
    }, err => {
        console.log(err)
    });

    //3.发送网络请求
    return $axios(config)
}