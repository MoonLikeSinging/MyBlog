<template>
  <div>
    <div class="container">
        <div class="row personal-example">
            <div>
                <img  src="../assets/img/gerenshici.png">
            </div>
            <hr />
            <div>
                <router-link to="/poetry">
                    <button type="button">查看更多</button>
                </router-link>
            </div>
        </div>   
    </div>     
    <div class="container" :class="{'container-margin-top': getContainerMarginTop(key) }" v-for="(item, key) in poetry" :key="key">
      <div class="fade-in-words" >
        <div v-if = "item.bgInd === 'Y'">
          <router-link :to="{path: item.toPath}">
            <div class="row" v-lazy:background-image="item.imgSrc" style="background-repeat: no-repeat; background-size: 100% 100%">
              <div class="poetry-format-background-img" :style="{left: item.left}">
                <div v-for="(verse, contentKey) in item.contents" :key="contentKey">
                  <div :class= getPoetryCss(contentKey) v-html="verse">
                  </div>
                </div>
              </div>
            </div> 
          </router-link>             
          <p class="intro">{{item.title}}：创作于 {{item.createDate}}</p>  
        </div>
        <div v-else-if = "item.bgInd === 'N'">
          <router-link :to="{path: item.toPath}">
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
          </router-link>  
          
          <p class="intro">{{item.title}}：创作于 {{item.createDate}}</p>  
        </div>    
      </div>
    </div>
  </div>  
</template>  

<script>
import {getTwoPoetryRandomByClientId} from '@/api/clientPoetry'

export default {
  name: 'PoetryExampleInHome',
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

    getContainerMarginTop(key){
      if(key == 0){
        return false
      }else{
        return true
      }
    }
  },
  created(){},
  mounted(){
    getTwoPoetryRandomByClientId(100000)
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
      var name = item.imageSrc.split('.')[0];
      var toPath = 'poetry?#' + name;

      return {
        title : title,
        contents : content,
        synopsis : item.synopsis,
        imgSrc : imgSrc,
        bgInd : item.bgInd,
        height : height + 'px',
        left : item.relativePositionLeftPercentage +'%',
        createDate : item.createDate,
        toPath : toPath,
      } 
    })))
    .catch(function(error){
      console.error();
    });
  }
}
</script>
<style lang="scss">
@import '../styles/poetry.scss';
@import '../styles/common.scss';
.container-margin-top{
  margin-top: 100px
}
</style>