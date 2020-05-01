<template>
  <div class="container-fluid">
            <div v-if="responseBody" class="row">
                <div class="col-3 col-sm col-md-3">
                    <router-link to="/">
                        <img  class="logo" src="../assets/img/logo.png">
                    </router-link>
                </div>
                <div  class="col-5 col-sm col-md-3" style="margin-top: 5px">
                    <span class="header-fontsize">
                        <i class="iconfont  icon-zhuye"></i>
                        {{responseBody.blogDesc}}
                    </span>
                </div>
                <div class="col-3 col-sm col-md-3 col-4" style="margin-top: 5px">
                    <span class="header-fontsize">
                        <i class="iconfont icon-yonghu"></i>
                        {{responseBody.nickName}}
                    </span>
                </div>
            </div>
    </div>
</template>

<script>
// import axios from 'axios'
import {getClientProfileById} from '@/api/clientProfile'

export default {
  name: 'Header',
  components:{},
  props:{},
  data(){
    return {
        responseBody : null,
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
    getClientProfileById(100000)
      .then(response =>(this.responseBody =response.data))
      .catch(function (error){
          console.error();      
      });
  }
}
</script>
<style lang="scss">
.logo {
    height: 36px;
    float: left;
    margin-left: 66px;
    margin-top: -2px;

    @media screen and (max-width: 576px){
        height: 20px;
        margin-left: 4px;
        margin-top: 8px;
    }

    @media screen and (min-width: 576px){
        height: 20px;
        margin-left: 66px;
        margin-top: 5px;
    }
    @media screen and (min-width: 768px){
        height: 24px;
        margin-left: 66px;
        margin-top: 3px;
    }

    @media screen and (min-width: 992px){
        height: 28px;
        margin-left: 66px;
        margin-top: 2px;
    }

    @media screen and (min-width: 1200px){
        height: 36px;
        margin-left: 66px;
        margin-top: -2px;
    }
    
}

.header-fontsize{
    @media screen and (max-width: 576px){
        font-size: 8px;
    }

    @media screen and (min-width: 576px){
        font-size: 9px;
    }
    @media screen and (min-width: 768px){
       font-size: 10px;
    }

    @media screen and (min-width: 992px){
       font-size: 11px;
    }

    @media screen and (min-width: 1200px){
        font-size: 12px;
    }
}

.container-fluid .row{
    font-size: 12px ; 
    height: 37px;
    color: #666; 
    background-color: #eeeeee;

    
}
</style>