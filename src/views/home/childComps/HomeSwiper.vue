<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: 'HomeSwiper',
    components: {Swiper, SwiperItem},
    props:{
      banners:Array,
      default(){
        return []
      }
    },
    data(){
      return {
        slideCount:0
      }
    },
    mounted () {
      this.slideCount=this.banners.length;
    }
  }

</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }
.swiper{
  display: flex;
}
.slide img{
  width: 700px;
  height: 200px;
}
.indicator{
  display:flex;
  width: 100%;
  position: relative;
  bottom: 25px;
  justify-content: center;

}
.indi-item{
  width: 8px;
  height: 8px;
  background: white;
  justify-self: center;
  margin: 0 5px;
  border-radius: 4px;
}
.indi-item.active{
  background-color: rgba(212,62,46,1.0);
}
</style>
