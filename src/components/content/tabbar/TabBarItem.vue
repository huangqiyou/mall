<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
 export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed: {
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      set(val){}
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {};
    }
  },
  methods: {
    itemClick(){
      // console.log('itemClick')
      this.$router.push(this.path);
      this.isActive = true;
    }
  },
 }
</script>

<style scoped>
.tab-bar-item{
 flex: 1;
 text-align: center;
 height: 49px;
 font-size: 14px;
}
.tab-bar-item img{
 width: 25px;
 height: 25px;
 margin: 3px 0 2px 0;
 vertical-align: middle;
}

</style>