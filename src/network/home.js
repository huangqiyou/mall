//home页面数据请求封装文件
import { request } from './requset'

//轮播图、推荐数据请求
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

//流行、新款、精选数据请求
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}