<template>
 <div class="goods-item" @click="itemClick">
  <img :src="showImage" alt="" @load="imageLoad">
  <div class="goods-info">
   <p>{{goodsItem.title}}</p>
   <span class="price">{{goodsItem.price}}</span>
   <span class="collect">{{goodsItem.cfav}}</span>
  </div>
 </div>
</template>

<script>
 export default {
  name:'GoodsListItem',
  props:{
   goodsItem:{
    type:Object,
    default(){
     return {}
    }
   }
  },
  computed:{
   showImage(){
    //根据不同地方来源的图片进行图片显示处理
    return this.goodsItem.image || this.goodsItem.show.img
   }
  },
  methods:{
   //监听图片加载完成
   imageLoad(){
    // console.log('imageLoad');
    //发射事件
    this.$bus.$emit('itemImageLoad',)

    // if(this.$route.path.indexOf('/home')){
    //  this.$bus.$emit('homeItemImageLoad',)
    //  // console.log(this.$bus);
    // }else if(this.$route.path.indexOf('/detail')){
    //  this.$bus.$emit('detailItemImageLoad',)
    // }
   },
   //点击跳转
   itemClick(){
    // console.log('123')
    this.$router.push('/detail/' + this.goodsItem.iid)
   },
  },
 }
</script>

<style scoped>
.goods-item{
 padding-bottom: 40px;
 margin-bottom: 10px;
 position: relative;
 width: 48%;
}

.goods-item img{
 width: 100%;
 border-radius: 5px;
}

.goods-info{
 font-size: 12px;
 position: absolute;
 bottom: 5px;
 left: 0;
 right: 0;
 overflow: hidden;
 /* text-align: center; */
}

.goods-info p{
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 margin-bottom: 3px;
}

.goods-info .price{
 color: var(--color-high-text);
 margin: 0 70px 0 10px;
 /* margin-right: 80px; */
}

.goods-info .collect{
 position: relative;
}

.goods-info .collect::before{
 content: '';
 position: absolute;
 left: -15px;
 top: 2px;
 width: 14px;
 height: 14px;
 background: url("~assets/img/home/collect.png") 0 0/14px 14px;
}
</style>