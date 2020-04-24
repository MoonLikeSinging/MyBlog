<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">  
            <div v-bind:class="{active :getActive(key)}" class="carousel-item" v-for="(imgPath, key) in imgPaths" :key="key">
                <router-link to="/about">
                    <img class="d-block w-100" :src="imgPath.src" alt="First slide">
                </router-link>
                <router-view></router-view> 
            </div>     
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
import {getClientBannerByClientId} from '@/api/clientBanner'

export default {    
  name: 'Banner',
  components:{},
  props:{},
  data(){
    return {
        imgPaths : null,
        isActive : false,
    }
  },
  watch:{},
  computed:{
  },
  methods:{
      getActive(key){
          if(key==0){
              return true
          }else{
              return false
          } 
      }
  },
  created(){},
  mounted(){
      getClientBannerByClientId(100000)
      .then(response =>(this.imgPaths =response.data.map(imgPath =>{
          var imgSrc = require('../assets/img/' + imgPath.bannerSrc);
          return {
              src: imgSrc
          }
      })))
      .catch(function (error){
          console.error();      
      });
  }
}
</script>
<style >
</style>