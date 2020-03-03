<template>
 <div class="bottom-bar">
  <!-- 全选 -->
  <div class="check-content">
   <check-button class="check-button" 
   :class="{'selector-active': isSelectAll}" 
   :is-checked="isSelectAll"
   @click.native="checkClick"
   ></check-button>
   <span>全选</span>
  </div>
  <!-- 合计 -->
  <div class="price">合计：{{totalPrice}}</div>
  <!-- 去计算 -->
  <div class="calculate" @click="calcClick">去计算({{checkLebgth}})</div>
 </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex'
 export default {
  name:'CartBottomBar',
  components:{
   CheckButton,
  },
  computed:{
   ...mapGetters(['cartList']),
   totalPrice(){
    return '¥' + this.cartList.filter(item => {
     return item.checked;
    }).reduce((preValue, item) => {
     return preValue + item.count * item.price
    },0).toFixed(2)
   },

   // 去计算
   checkLebgth(){
    return this.cartList.filter(item => item.checked).length
   },

   //是否全选
   isSelectAll(){
    //写法一：使用filter
    // if(this.cartList.length === 0) return false;
    // return !this.cartList.filter(item => !item.checked).length;

    //写法二：使用find
    // if(this.cartList.length === 0) return false;
    // return !this.cartList.find(item => !item.checked); 

    //写法三：使用for of遍历
    if(this.cartList.length === 0) return false;
    for (let item of this.cartList){
     if(!item.checked){
      return false;
     }
    }
    return true;
   }
  },
  methods:{
   checkClick(){
    // console.log('123');
    //如果全部已经选中就取消选中
    if(this.isSelectAll){
     this.cartList.forEach(item => item.checked = false);
    }else {
     //如果不是全部选中，就进行全选
     this.cartList.forEach(item => item.checked = true);
    }
   },

   //
   calcClick(){
     if(!this.isSelectAll){
       //调用封装好的弹窗提示插件函数
       this.$toast.show('请选择要结算的商品',2000);
     }
   }
  }
 }
</script>

<style scoped>
.bottom-bar{
 /* position: relative; */
 display: flex;
 background-color: #eee;
 height: 40px;
 line-height: 40px;
}
.check-content{
 display: flex;
 align-items: center;
 margin-left: 6px;
 width: 60px;
}
.check-button{
 width: 20px;
 height: 20px;
 margin: 2px  5px 0 0;
}
.price{
 margin-left: 20px;
 flex: 1;
}
.calculate{
 width: 90px;
 text-align: center;
 color: #fff;
 background-color: var(--color-tint);
}
.selector-active {
  background: url('../../../assets/img/cart/active.png') no-repeat -6px -7px;
 
}

</style>