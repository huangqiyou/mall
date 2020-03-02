//导入
import { debounce } from './utils'
import BackTop from 'components/content/backtop/BackTop.vue'
import { BACKTOP_DISTANCE } from 'assets/commons/const'



//创建vue混入函数
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null, //首页图片监听变量
            refresh: null,
        }
    },
    mounted() {
        //防抖
        this.refresh = debounce(this.$refs.scroll.refresh, 200);
        //对监听的事件进行保存
        this.itemImgListener = () => {
            // console.log('图片加载完')
            //通过调用上面的防抖函数来进行频繁请求的处理
            this.refresh();
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener);
        // console.log('我是混入中的内容');
    },
}

//首页、详情页返回顶部公用代码
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false, //返回顶部显示隐藏
        }
    },
    methods: {
        //返回顶部
        backClick() {
            //  console.log('123')
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        //判断backTop是否显示
        listenShowBackTop(position) {
            this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE;
        }
    },
}