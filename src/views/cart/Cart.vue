<template>
 <div class="cart">
  <!-- NavBar -->
  <nav-bar class="nav-bar">
   <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>

  <!-- CartList -->
  <cart-list></cart-list>

  <!-- CartBottomBar -->
  <cart-bottom-bar></cart-bottom-bar>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childCompons/CartList'
import CartBottomBar from './childCompons/CartBottomBar'

import { mapGetters } from 'vuex'
 export default {
  name:'Cart',
   components:{
   NavBar, CartList, CartBottomBar
  },
  computed:{
   ...mapGetters(['cartLength']),

   //下面被注释的也是mapGetters的另一种写法，可以自己定义名称
   // ...mapGetters({
   //  length:'carLength',
   //  list:'carList'
   // })
  }
 }
</script>

<style scoped>
.cart{
 height: 100vh;
}
.nav-bar{
 background-color: var(--color-tint);
 color: #fff;
 /* font-weight: bold; */
}
</style>