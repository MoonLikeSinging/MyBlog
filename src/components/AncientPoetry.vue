<template>
  <div class="container">
    <div class="fade-in-words" v-for="(item, key) in poetry" :key="key">
      <div v-if = getImgInd(item.bgInd)>
        <div class="row" v-lazy:background-image="item.bgImg" style="background-repeat: no-repeat; background-size: 100% 100%;" >
          <div class="format">
            <div v-for="(verse, contentKey) in item.contents" :key="contentKey">
              <div :class= getPoetryCss(contentKey) v-html="verse"></div>
            </div>
          </div>
        </div>    
        <p class="intro">{{item.synopsis}}</p>  
      </div>
        
    </div>
    <p class="intro">{{poetry}}</p>   
  </div>
</template>

<script>
import {getClientPoetryById} from '@/api/clientPoetry'

export default {
  name: 'AncientPoetry',
  components:{},
  props:{
  },
  data(){
    return {
      poetry: null,
    }
  },
  watch:{},
  computed:{
  },
  methods:{
    getPoetryCss(key){
      var poetryCss = null;
      switch(key){
        case 0: poetryCss = "title-words"; break;
        case 1: poetryCss = "first-words"; break;
        case 2: poetryCss = "second-words"; break;
        case 3: poetryCss = "third-words"; break;
        case 4: poetryCss = "four-words"; break;
        case 5: poetryCss = "five-words"; break;
        case 6: poetryCss = "six-words"; break;
        case 7: poetryCss = "seven-words"; break;
        case 8: poetryCss = "eight-words"; break;
      }

      return poetryCss;
    },

    getImgInd(ind) {
      if(ind == "Y"){
        return true
      }else if(ind == "N"){
        return false
      }
    }
  },
  created(){},
  mounted(){
    getClientPoetryById(100000)
    .then(response => (this.poetry = response.data.map(item =>{
      var title = "《" + item.title + "》";
      var verse = item.content.split('\n');
      var array = new Array();
      array.push(title);
      var content = array.concat(verse);
      var bgImg = require('../assets/img/' + item.imageSrc);
      var image = new Image();
      image.src = require('../assets/img/' + item.imageSrc);
      var height = image.height;

      return {
        contents : content,
        synopsis : item.synopsis,
        bgImg : bgImg,
        bgInd : item.bgInd,
        height : height + 'px'
      } 
    })))
    .catch(function(error){
      console.error();
    });
  }
}
</script>
<style lang="scss">
@import '../styles/poetry.css';
.format {
  writing-mode: vertical-rl;
  letter-spacing: 2px;
  text-align: center;
  font-family: STXingkai;
  position: relative;

  @media screen and (max-width: 576px){
      left: 40%;
      height: 170px;
      font-size: 8px;  
      line-height: 8px;
    }
  @media screen and (min-width: 576px){
      font-size: 12px;
      left: 60%;
      height: 272px; 
      line-height: 14px; 
    }
    @media screen and (min-width: 768px){
      font-size: 16px;
      left: 60%;
      height: 350px; 
      line-height: 16px;
    }

    @media screen and (min-width: 992px){
       font-size: 20px;
       left: 60%;
      height: 400px; 
      line-height: 20px;
    }

    @media screen and (min-width: 1200px){
      font-size: 24px;
      left: 76%;
      height: 479px;
      line-height: 26px;
    }    
      }

</style>