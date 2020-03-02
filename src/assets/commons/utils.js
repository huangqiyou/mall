//通过   import {debounce，formatDate} from "assets/commons/utils";在组件中引入才能调用下面的函数名

//防抖函数
export function debounce(func, delay) {
    let timer = null;
    return function(...args) {
        // console.log(arguments);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

//时间戳格式转换函数封装
export function formatDate(date, fmt) {
    //获取年份
    if (/(y+)/.test(fmt)) {
        //在替换中        先进行匹配     获取到年份            根据传入的参数截取长度
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    //获取月、天、时、分、秒
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    //00占位保证获取的月、天、时、分、秒长度为两位，在根据传入的str长度进行截取，
    return ('00' + str).substr(str.length);
};