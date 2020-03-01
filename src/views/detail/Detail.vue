<template>
 <div id="detail">
  <!-- DetailNavBar -->
  <detail-nav-bar class="detail-nav"></detail-nav-bar>

  <!-- Scroll滚动区域 -->
  <scroll class="content" ref="scroll">
   <!-- DetailSwiper -->
   <detail-swiper :top-images="topImages"></detail-swiper>

   <!-- DetailBaseInfo -->
   <detail-base-info :goods="goods"></detail-base-info>

   <!-- DetailShopInfo -->
   <detail-shop-info :shop="shop"></detail-shop-info>

   <!-- DetailGoodsInfo -->
   <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>

   <!-- DetailParamInfo -->
   <detail-param-info :param-info="paramInfo"></detail-param-info>
  </scroll>

  
 </div>
</template>

<script>
import DetailNavBar from './childCompons/DetailNavBar'
import DetailSwiper from './childCompons/DetailSwiper'
import DetailBaseInfo from './childCompons/DetailBaseInfo'
import DetailShopInfo from './childCompons/DetailShopInfo'
import DetailGoodsInfo from './childCompons/DetailGoodsInfo'
import DetailParamInfo from './childCompons/DetailParamInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods, Shop, GoodsParam } from 'network/detail'

 export default {
  name:'Detail',
  components:{
   DetailNavBar, DetailSwiper, DetailBaseInfo, DetailShopInfo, DetailGoodsInfo, DetailParamInfo, Scroll,
  },
  data() {
   return {
    iid: null,//保存传入的商品iid
    topImages:[],//保存请求回来的顶部轮播图数据
    goods:{},//商品信息数据
    shop:{},//店铺信息数据
    detailInfo:{},//保存商品的详情数据
    paramInfo:{},//保存参数信息
   }
  },
  created(){
   //1.保存传入的iid
   // this.iid = null;
   this.iid = this.$route.params.iid;

   //2.根据iid请求数据
   getDetail(this.iid).then(res => {
    console.log(res);
    const data = res.result;
    //2.1获取顶部轮播图数据
    this.topImages = res.result.itemInfo.topImages;

    //2.2创建商品信息对象数据
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

    //2.3创建店铺信息对象
    this.shop = new Shop(data.shopInfo)

    //2.4保存商品的详情数据
    this.detailInfo = data.detailInfo;

    //2.5获取参数信息
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
   })
  },

  methods:{
   imageLoad(){
    this.$refs.scroll.refresh();
   }
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
 height: calc(100% - 44px);
}
</style>