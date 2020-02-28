import { request } from './requset'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}