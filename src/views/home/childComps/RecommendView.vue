<template>
  <div class="recommond">
    <div class="recommond-item" v-for="item in recommonds" :key="item.acm">
      <a :href="item.url">
        <img :src="item.image"  />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props:{
      recommonds:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommond{
  display: flex;
  flex-flow: wrap;
  padding: 10px 0 20px 0;
  border-bottom: 8px solid #eee;

}
.recommond-item{
  flex: 1;
  text-align: center;
  font-family: 华文行楷;
  font-size: 14px;
  width: 1000px;
}
.recommond-item img{
  height: 65px;
  width: 65px;
}
</style>
