<template>
 <div class="recommed">
  <div class="recommed-item" v-for="(item,index) in recommends" :key="index">
   <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
   </a>
  </div>
 </div>
</template>

<script>
 export default {
  name:'Recommend',
  props:{
   recommends:{
    type:Array,
    default(){
     return []
    }
   }
  },
 }
</script>

<style scoped>
.recommed{
 display: flex;
 width: 100%;
 text-align: center;
 font-size: 12px;
 padding: 10px 0 20px;
 border-bottom: 10px solid #eee;
}
.recommed-item{
 flex: 1;
}
.recommed-item img{
 width: 60px;
 height: 60px;
 margin-bottom: 10px;
}
</style>