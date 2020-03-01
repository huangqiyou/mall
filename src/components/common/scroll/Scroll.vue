<template>
 <div class="wrapper" ref="wrapper">
  <div class="content">
   <slot></slot>
  </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
 export default {
  name:'Scroll',
  props:{
   probeType:{
    type:Number,
    default:0
   },
   pullUpLoad:{
    type:Boolean,
    default:false
   }
  },
  data() {
   return {
    scroll: null,
   }
  },
  mounted(){
   //滚动
   //1.创建BScroll对象
   this.scroll = new BScroll(this.$refs.wrapper,{
    click:true, //是否能被点击
    probeType:this.probeType, //是否监听滚动，需要通过ref传入参数
    pullUpLoad:this.pullUpLoad,
   })

   //2.监听滚动的位置
   if(this.probeType ===2 || this.probeType === 3){
    this.scroll.on('scroll',(position) => {
     // console.log(position)
     this.$emit('scroll',position);
    })
   }

   //3.监听上拉事件
   if(this.pullUpLoad){
    this.scroll.on('pullingUp', () => {
     // console.log('监听到滚动到底部')
     this.$emit('pullingUp')
    })
   }
  },

  methods:{
   //封装滚动距离，返回顶部时间
   scrollTo(x,y,time=300){
    this.scroll && this.scroll.scrollTo(x,y,time);
   },

   //封装上拉加载更多函数
   finishPullUp(){
    this.scroll && this.scroll.finishPullUp();
   },

   //重新计算高度
   refresh(){
    // console.log('-----------');
    this.scroll && this.scroll.refresh();
   },

   //封装获取离开页面时的高度saveY
   getScrollY(){
    return this.scroll ? this.scroll.y : 0;
   }
  }
 }
</script>

<style scoped>

</style>