//导入
import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'



//导出
export default {
    addCart(context, payload) {
        //需要返回一个Promise
        return new Promise((resolve, reject) => {
            //1.查找之前数组中是否有该商品
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

            //2.判断product
            if (oldProduct) {
                //存在相同商品就+1
                context.commit(ADD_COUNTER, oldProduct);
                resolve('当前的商品数量+1')
            } else {
                //不存在相同商品就添加一个
                payload.count = 1;
                context.commit(ADD_TO_CART, payload);
                resolve('添加了新的商品')
            }
        })
    }
}