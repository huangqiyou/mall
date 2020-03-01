<template>
 <div>
  <!-- 顶部导航栏 -->
  <nav-bar>
   <div slot="left" class="back" @click="backClick">
    <img src="~assets/img/detail/left.png" alt="">
   </div>
   <div slot="center" class="title">
    <div class="title-item" 
    v-for="(item, index) in titles" 
    :key="index" 
    :class="{active : index === currentIndex}" 
    @click="titleClick(index)">{{item}}</div>
   </div>
  </nav-bar>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

 export default {
  name:'DetailNavBar',
  components:{
   NavBar
  },
  data() {
   return {
    titles: ['商品','参数','评论','推荐'],//保存导航栏标题
    currentIndex:0,//保存导航栏点击时的下标
   }
  },
  methods:{
   //点击切换标题样式
   titleClick(index){
    this.currentIndex = index;
   },

   //点击< 返回
   backClick(){
    this.$router.back();
   }
  },
 }
</script>

<style scoped>
.title{
 display: flex;
 font-size: 14px;
}
.title-item{
 flex: 1;
}
.active{
 color: var(--color-high-text);
}
.back img{
 margin-top: 12px;
 width: 20px;
 height: 20px;
}
</style>