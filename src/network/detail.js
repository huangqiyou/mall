//通过  import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'在组件中引入才能调用下面的函数名

//detail页面数据请求封装文件

import { request } from './requset'

//请求全部数据
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//创建构造函数获取、管理相应的数据
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
        // this.product.realPrice = goods.lowNowPrice;
    }
}

//商品的详情数据
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

//参数相关数据
export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}

//推荐数据请求函数封装
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}