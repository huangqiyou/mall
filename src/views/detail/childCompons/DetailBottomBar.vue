<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
    methods: {
      //点击添加到购物车
      addToCart() {
        // console.log('添加成功');
        this.$emit('addToCart');
      }
    }
	}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: relative;
  background-color: #fff;
  display: flex;
  text-align: center;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item>div {
  flex: 1;
}
.bar-left .text {
  font-size: 13px;
  padding-bottom: 2px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 0px;
}
.bar-left .service {
  background: url("~assets/img/detail/kefu.png") 0 0/100%;
}
.bar-left .shop {
  background: url("~assets/img/detail/dianpu.png") 0 0/100%;
}
.bar-left .select {
  background: url("~assets/img/detail/shoucang.png") 0 0/100%;
}
.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  background-color: #f69;
}
</style>