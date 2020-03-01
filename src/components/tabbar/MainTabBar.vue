<template>
 <tab-bar>
   <tab-bar-item path="/home" activeColor="blue">
     <img slot="item-icon" src="~assets/img/tabbar/ic_find_normal.png" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/ic_find_selected.png" alt="">
     <div slot="item-text">首页</div>
   </tab-bar-item>
   <tab-bar-item path="/category" activeColor="blue">
     <img slot="item-icon" src="~assets/img/tabbar/ic_find_normal.png" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/ic_game.png" alt="">
     <div slot="item-text">分类</div>
   </tab-bar-item>
   <tab-bar-item path="/cart" activeColor="blue">
     <img slot="item-icon" src="~assets/img/tabbar/ic_weixin_normal.png" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/ic_weixin_selected.png" alt="">
     <div slot="item-text">购物车</div>
   </tab-bar-item>
   <tab-bar-item path="/my" activeColor="blue">
     <img slot="item-icon" src="~assets/img/tabbar/ic_contacts_normal.png" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/ic_contacts_selected.png" alt="">
     <div slot="item-text">我的</div>
   </tab-bar-item>
 </tab-bar>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
 export default {
  name:'MainTabBar',
  components: {
    TabBar,TabBarItem
  }
 }
</script>

<style scoped>

</style>