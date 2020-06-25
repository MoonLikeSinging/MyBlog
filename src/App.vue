<template>
  <div id="app">
    <APlayer style='text-align:left' :audio=audio :lrcType=0 :fixed=true :listMaxHeight=90 :autoplay=true mini:true :listFolded=true></APlayer>
    <Header></Header>
    <div id="nav">
      <router-link class="col-md-4 col-4" to="/">首页</router-link>
      <router-link class="col-md-4 col-4" to="/poetry">诗词</router-link>
      <router-link class="col-md-4 col-4" to="/blog">博客</router-link>
    </div>
    <router-view/>   
  </div>
</template>

<script>
import Header from './components/Header.vue';
import {getAllClientMusicByClientId} from '@/api/clientMusic'

export default {
  components:{
    Header,
  },
  data() {
    return {
      audio: null
    }
  },

  mounted(){
    getAllClientMusicByClientId(100000)
    .then(response => (this.audio = response.data.map(item =>{

      var audioUrl = 'http://120.79.23.11:8080/audio/' + item.url;

      return {
        name: item.name,
        artist: item.artist,
        url: audioUrl,
        cover: item.cover,
        lrc: item.lrc,
      }
    })))
    .catch(function(error){
      console.error();
    });
  }
}
</script>
<style lang="scss">
@import './styles/app.scss';

</style>
