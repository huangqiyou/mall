<template>
 <div id="home">
  <!-- title -->
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <tab-control 
    :titles="['流行','新款','精选']" 
    @tabClick="tabClick" 
    ref="tabControl1" 
    class="tab-control" 
    v-show="isTabFixed"
    ></tab-control>

  <!-- better-scroll -->
  <scroll class="content" 
  ref="scroll" 
  :probe-type="3" 
  @scroll="contentScroll" 
  :pull-up-load="true"
  @pullingUp="loadMore">
    <!-- HomeSwiper -->
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>

    <!-- Recommend  -->
    <recommend :recommends="recommends"></recommend>

    <!-- FeatureView -->
    <feature-view></feature-view>

    <!-- TabContro -->
    <tab-control 
    :titles="['流行','新款','精选']" 
    @tabClick="tabClick" 
    ref="tabControl2" 
    ></tab-control>

    <!-- GoodsList -->
    <goods-list :goods="showGoods"></goods-list>
  </scroll>

  <!-- BackTop -->
  <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCompons/HomeSwiper'
import Recommend from './childCompons/Recommend'
import FeatureView from './childCompons/FeatureView'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { debounce } from 'assets/commons/utils'
import { itemListenerMixin, backTopMixin } from 'assets/commons/mixin'

 export default {
  name:'Home',
  components:{
   NavBar, HomeSwiper, Recommend, FeatureView, TabControl, GoodsList, Scroll,
  },
  mixins: [itemListenerMixin, backTopMixin],//混入
  data() {
   return {
    banners: [],//保存轮播图数据
    recommends:[],//保存推荐数据
    goods:{//保存商品数据
     'pop':{page:0,list:[]},
     'new':{page:0,list:[]},
     'sell':{page:0,list:[]},
    },
    currentType:'pop',//默认为pop
    tabOffsetTop:0,//保存tabControl吸顶距离
    isTabFixed:false,//tab-control 显示影藏
    saveY:0,//保存离开页面时的距离
   }
  },
  computed:{
    //数据切换
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods:{
   //1.请求多个数据
   getHomeMultidata(){
     getHomeMultidata().then(res => {
     // console.log(res)
     this.banners = res.data.banner.list;
     this.recommends = res.data.recommend.list;
    })
   },

   //2.请求商品数据
   getHomeGoods(type){
    const page = this.goods[type].page + 1;
    getHomeGoods(type,page).then(res => {
    //  console.log(res)
    //添加到数组中
     this.goods[type].list.push(...res.data.list);
     //页码 +1
     this.goods[type].page += 1;
     //调用继续上拉加载更多数据方法
     this.$refs.scroll.finishPullUp();
    })
   },

   //3.事件监听相关的方法
   //tab栏点击切换
   tabClick(index){
    //  console.log(index)
    switch (index) {
      case 0:
        this.currentType = 'pop';
        break;
      case 1:
        this.currentType = 'new';
        break;
      case 2:
        this.currentType = 'sell';
        break;
    }
    this.$refs.tabControl1.currentIndex = index;
    this.$refs.tabControl2.currentIndex = index;
   },

   //监听滚动
   contentScroll(position){
    //  console.log(position)
    //1.判断backTop是否显示
    this.listenShowBackTop(position);

    //2.决定tabControl是否吸顶（position：fiexd）固定定位
    this.isTabFixed = (-position.y) > this.tabOffsetTop;
   },
   
   //加载更多
   loadMore(){
    //  console.log('上拉加载更多')
     //调用数据请求函数，用于加载更多，传入类型参数
     this.getHomeGoods(this.currentType);
   },

   //获取tabControl的OffsetTop
   swiperImageLoad(){
    //  console.log(this.$refs.tabControl.$el.offsetTop);
     this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
   },
  },
  created() {
   //1.请求轮播数据，推荐数据
   this.getHomeMultidata();

   //2.请求商品数据
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  },
  mounted(){
    //*** 被注释的方法改为使用混入的方式来解决 ***

  //   //1.图片加载完成的事件监听
  //   const refresh = debounce(this.$refs.scroll.refresh, 200);
  //   //对监听的事件进行保存
  //   this.itemImgListener = () => {
  //   // console.log('图片加载完')
  //   //通过调用上面的防抖函数来进行频繁请求的处理
  //   refresh();
  //  }
  //   this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  destroyed(){
    console.log('home销毁')
  },
  //
  activated(){
    // console.log('activated')
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    // console.log('deactivated')
    //1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY();

    //2.取消全局事件的监听
    this.$bus.$off('itemImageLoad', this.itemImgListener);
  },
 }
</script>

<style scoped>
#home{
 /* padding-top: 43px; */
 height: 100vh;
 position: relative;
}
.home-nav{
 /* position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1; */
 background-color: var(--color-tint);
 color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control{
  position: relative;
  z-index: 1;
}
</style>