<template>
  <div>
    <div class="container" :class="{'container-margin-top': getContainerMarginTop(key) }" v-for="(item, key) in poetry" :key="key">
      <div class="fade-in-words" >
        <div :id="item.idName" :name = item.idName :ref="item.idName" v-if = "item.bgInd === 'Y'">
          <div class="row" v-lazy:background-image="item.imgSrc" style="background-repeat: no-repeat; background-size: 100% 100%">
            <div class="poetry-format-background-img" :style="{left: item.left}">
              <div v-for="(verse, contentKey) in item.contents" :key="contentKey">
                <div :class= getPoetryCss(contentKey) v-html="verse">
                </div>
              </div>
            </div>
          </div>    
          <p class="intro">简介：{{item.synopsis}}</p>  
        </div>
        <div :id="item.idName" :name = item.idName :ref="item.idName" v-else-if = "item.bgInd === 'N'">
          <div class="row">
            <div class="poetry-img">
              <img v-lazy = item.imgSrc  style="height: inherit">
            </div>
            <div class="poetry-format-normal-img">
              <div v-for="(verse, contentKey) in item.contents" :key="contentKey">
                <div :class= getPoetryCss(contentKey) v-html="verse">
                </div>
              </div>
            </div>   
          </div>
          <p class="intro">简介：{{item.synopsis}}</p>  
        </div>    
      </div>
    </div>
  </div>  
</template>  

<script>
import {getAllPoetryByClientId} from '@/api/clientPoetry'

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
  watch:{
  },
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

    getContainerMarginTop(key){
      if(key == 0){
        return false
      }else{
        return true
      }
    },

    getPoetryInfo(id) {
      getAllPoetryByClientId(id)
      .then(response => (this.poetry = response.data.map(item =>{
      var title = "《" + item.title + "》";
      var verse = item.content.split('\n');
      var array = new Array();
      array.push(title);
      var content = array.concat(verse);
      var imgSrc = require('../assets/img/' + item.imageSrc);
      var image = new Image();
      image.src = require('../assets/img/' + item.imageSrc);
      var height = image.height;
      var idName = item.imageSrc.split('.')[0];

      return {
        contents : content,
        synopsis : item.synopsis,
        imgSrc : imgSrc,
        bgInd : item.bgInd,
        height : height + 'px',
        left : item.relativePositionLeftPercentage +'%',
        idName : idName,
      } 
      })))
      .then(scorllByHash =>{
        var hash = window.location.hash;
        var index = hash.lastIndexOf("#");
        if (index != -1) {
          var id = hash.substring(index + 1, hash.length + 1);
          var element = document.getElementById(id);
          if (element) {
            setTimeout(() => {
              var y = element.getBoundingClientRect().top+document.documentElement.scrollTop -25;
              window.scrollTo(0, y);
            }, 200); 
       }}})
      .catch(function(error){
        console.error();
      })
    }
  },
  created(){},
  mounted(){
      this.getPoetryInfo(100000)
  },
}
</script>
<style lang="scss">
@import '../styles/poetry.scss';


</style>