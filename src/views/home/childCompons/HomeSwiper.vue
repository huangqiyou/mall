<template>
 <swiper>
   <swiper-item v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
     <img :src="item.image" alt="" @load="imageLoad">
    </a>
   </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
// import Swiper from '../../../components/common/swiper/Swiper'
// import SwiperItem from '../../../components/common/swiper/SwiperItem'
 export default {
  name:'HomeSwiper',
  components:{
   Swiper, SwiperItem
  },
  props:{
   banners:{
    type:Array,
    default(){
     return []
    }
   }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods:{
    imageLoad(){
      // console.log('----------')
      //通过变量isLoad设置只发送一次事件
      if(!this.isLoad){
        this.$emit('swiperImageLoad');
        this.isLoad = true;
      }
      
    }
  },
 }
</script>

<style scoped>

</style>