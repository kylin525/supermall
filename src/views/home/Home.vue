<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
       <home-swiper :banners="banners" />
      <recommend-view :recommonds="recommonds" />
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from 'views/home/childComps/HomeSwiper'

  import {getHomeMutiData} from 'network/home'
  import RecommendView from './childComps/RecommendView'

  export default {
    name: 'Home',
    components: {RecommendView,HomeSwiper,NavBar},
    data(){
      return {
        banners:[],
        recommonds:[]
      }
    },
    beforeCreate () {
      getHomeMutiData().then(res => {
        this.recommonds = res.recommond;
        this.banners = res.banner;
      })

    }
  }
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color: white;
}
</style>
