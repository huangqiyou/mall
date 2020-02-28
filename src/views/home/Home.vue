<template>
 <div id="home">
  <!-- title -->
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <!-- 轮播图 -->
  <home-swiper :banners="banners"></home-swiper>
  <!-- 推荐 -->
  <recommend :recommends="recommends"></recommend>
  <!-- 本周流行 -->
  <feature-view></feature-view>

  <!-- 回来删除 -->
  <ul>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
   <li>fsdfsdfsdfsdfdsfsdff</li>
  </ul>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCompons/HomeSwiper'
import Recommend from './childCompons/Recommend'
import FeatureView from './childCompons/FeatureView'

import { getHomeMultidata } from 'network/home'
 export default {
  name:'Home',
  components:{
   NavBar, HomeSwiper, Recommend, FeatureView
  },
  data() {
   return {
    banners: [],
    recommends:[]
   }
  },
  created() {
   getHomeMultidata().then(res => {
    // console.log(res)
    this.banners = res.data.banner.list;
    this.recommends = res.data.recommend.list;
   })
  },
 }
</script>

<style scoped>
#home{
 padding-top: 43px;
}
.home-nav{
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1;
 background-color: var(--color-tint);
 color: #fff;
}
</style>