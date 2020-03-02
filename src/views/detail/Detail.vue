<template>
 <div id="detail">
  <!-- DetailNavBar -->
  <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>

  <!-- Scroll滚动区域 -->
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">

   <!-- DetailSwiper -->
   <detail-swiper :top-images="topImages"></detail-swiper>

   <!-- DetailBaseInfo -->
   <detail-base-info :goods="goods"></detail-base-info>

   <!-- DetailShopInfo -->
   <detail-shop-info :shop="shop"></detail-shop-info>

   <!-- DetailGoodsInfo -->
   <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>

   <!-- DetailParamInfo -->
   <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>

   <!-- DetailCommentInfo -->
   <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>

   <!-- GoodsList -->
   <goods-list ref="recommend" :goods="recommends"></goods-list>
  
  </scroll>

  <!-- DetailBottomBar -->
  <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

  <!-- BackTop -->
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
 </div>
</template>

<script>
import DetailNavBar from './childCompons/DetailNavBar'
import DetailSwiper from './childCompons/DetailSwiper'
import DetailBaseInfo from './childCompons/DetailBaseInfo'
import DetailShopInfo from './childCompons/DetailShopInfo'
import DetailGoodsInfo from './childCompons/DetailGoodsInfo'
import DetailParamInfo from './childCompons/DetailParamInfo'
import DetailCommentInfo from './childCompons/DetailCommentInfo'
import DetailBottomBar from './childCompons/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
import { debounce } from 'assets/commons/utils'
import { itemListenerMixin, backTopMixin } from 'assets/commons/mixin'

 export default {
  name:'Detail',
  components:{
   DetailNavBar, 
   DetailSwiper, 
   DetailBaseInfo, 
   DetailShopInfo, 
   DetailGoodsInfo, 
   DetailParamInfo, 
   DetailCommentInfo,
   DetailBottomBar,
   Scroll,
   GoodsList,
  },
  mixins: [itemListenerMixin, backTopMixin],//混入
  data() {
   return {
    iid: null,//保存传入的商品iid
    topImages:[],//保存请求回来的顶部轮播图数据
    goods:{},//商品信息数据
    shop:{},//店铺信息数据
    detailInfo:{},//保存商品的详情数据
    paramInfo:{},//保存参数信息
    commentInfo:{},//保存评论信息
    recommends:[],//保存商品详情页推荐数据
    themeTopYs:[],//保存滚动的内容高度
    getThemeTopY:null,//保存防抖处理后的数据
    currentIndex:0, //保存滚动区域的下标
   }
  },
  created(){
   //1.保存传入的iid
   // this.iid = null;
   this.iid = this.$route.params.iid;

   //2.根据iid请求数据
   getDetail(this.iid).then(res => {
    // console.log(res);
    //2.1获取全部数据
    const data = res.result;
    //2.2获取顶部轮播图数据
    this.topImages = res.result.itemInfo.topImages;

    //2.3创建商品信息对象数据
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

    //2.4创建店铺信息对象
    this.shop = new Shop(data.shopInfo)

    //2.5保存商品的详情数据
    this.detailInfo = data.detailInfo;

    //2.6获取参数信息
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

    //2.7获取评论信息数据
    if(data.rate.cRate !==0){
     this.commentInfo = data.rate.list[0];
    }

   }),

   //3.请求详情页的推荐数据
   getRecommend().then(res => {
    // console.log(res);
    this.recommends = res.data.list;
   })

   //4.给themeTopYs赋值并进行防抖处理
   this.getThemeTopY = debounce(() => {
    this.themeTopYs = [];
    this.themeTopYs.push(0);
    this.themeTopYs.push(this.$refs.params.$el.offsetTop - 49);
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 49);
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 49);
    this.themeTopYs.push(Number.MAX_VALUE);
    // console.log(this.themeTopYs);
   },100)
  },

  methods:{
   //监听图片是否加载完成
   imageLoad(){
    this.refresh();

    //调用上面封装的函数
    this.getThemeTopY();
   },

   //点击标题滚动到相应位置
   titleClick(index){
    console.log(index);
    this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
   },

   //监听滚动事件函数
   contentScroll(position){
    // console.log(position);
    //1.获取Y值（高度）
    const positionY = -position.y;

    //2.positionY 和 themeTopYs 进行对比来决定显示哪一个标题
    let length = this.themeTopYs.length;
    for (let i = 0; i < length-1; i++){
     if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
      this.currentIndex = i;
      this.$refs.nav.currentIndex = this.currentIndex;
     }
     
     /* 采用下面被注释的方法，则length不需要-1 */
    //  // console.log(i)
    //  if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1] ) || ( i === length - 1 && positionY >= this.themeTopYs[i] ))) {
    //   // console.log(i)
    //   this.currentIndex = i;
    //   // console.log(this.currentIndex);
    //   this.$refs.nav.currentIndex = this.currentIndex;
    //  }
    }

    //3.是否显示回到顶部
    //1.判断backTop是否显示
    this.listenShowBackTop(position);
   },

   //点击添加购物车
   addToCart(){
    // console.log('---------------');
    //1.获取购物车需要展示的信息
    const product = {};
    product.image = this.topImages[0];
    product.title = this.goods.title;
    product.desc = this.goods.desc;
    product.price = this.goods.realPrice;
    product.iid = this.iid;

    //2.将商品添加到购物车里
    this.$store.dispatch('addCart',product);
   },
  },
  destroyed(){
   // console.log('destroyed');
   this.$bus.$off('itemImageLoad', this.itemImgListener);
  }
 }
</script>

<style scoped>
#detail{
 position: relative;
 z-index: 9;
 background-color: #fff;
 height: 100vh;
}
.detail-nav{
 position: relative;
 z-index: 9;
 background-color: #fff;
}
.content{
 height: calc(100% - 44px - 49px);
}
</style>