<template>
 <div class="cart-list">
  <scroll class="content" ref="scroll">
   <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
  </scroll>
 </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

 export default {
  name:'CartList',
  components:{
   Scroll, CartListItem
  },
  computed:{
   ...mapGetters(['cartList'])
  },
  activated(){
   //重新刷新
   this.$refs.scroll.refresh();
  },
 }
</script>

<style scoped>
.cart-list{
 /* 滚动区域高度 */
 height: calc(100% - 44px - 49px - 40px);
}
/* 内容高度继承父元素高度 */
.content{
 height: 100%;
 overflow: hidden;
}
</style>