<template>
  <div>
    <div class="icon-selector" :class="{'selector-active': isChecked}">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		   isChecked: {
		    type: Boolean,
        default: false
      }
    },
	}
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.icon-selector img{
  width: 22px;
  height: 22px;
  margin: -4px 0 0 -4px;
}
.selector-active {
  background: url('../../../assets/img/cart/active.png') no-repeat -7px -9px
}
</style>